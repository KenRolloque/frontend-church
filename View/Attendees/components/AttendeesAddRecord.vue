<script setup>

import { ref, toRef, watch, computed } from 'vue'
import axios from 'axios'
import { AxiosInstance } from '../../../src/axios_instance.js'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { success, errorAlert, alreadyExist } from '../../../src/components/shared/sweetalert.js'
import { formatDate } from '../../../src/dateFilter.js'

var isCardActive = ref(1);


const service = ref([
    { name: '9am Service' },
    { name: '11am Service' },
    { name: '3pm Service' },
    { name: '5pm Service' },
    { name: 'Youth Service' }
]);

const lifeStage = ref([
    { name: 'Youth' },
    { name: 'Single' },
    { name: 'Married / Parent' },
    { name: 'Single Parent' },
    { name: ' Widow / Widower' },
])

const governmentSector = ref([
    { name: 'Government' },
    { name: 'Education' },
    { name: 'Health Care' },
    { name: 'Private Sector' },
    { name: 'Business' },
    { name: 'Student' },
    { name: 'At Home' }
])
const schoolLevel = ref([
    { name: 'None' },
    { name: 'Primary' },
    { name: 'Secondary' },
    { name: 'Tertiary' },

])

var addData = ref(
    {
        admin_id: '',
        attendees_fname: '',
        attendees_lname: '',
        attendees_mname: '',
        attendees_facebook: '',
        attendees_birthday: '',
        attendees_mobile_number: '',
        attendees_life_stage: '',
        attendees_sector_of_society: '',
        attendees_school: '',
        attendees_school_level: '',
        attendees_service_commitment: '',
    }
)


var admin_id = ref($cookies.get('admin_id'))
var attendance_service = ref()
var attendance_date = ref()
var attendance_kids = ref(0)
var attendance_adults = ref(0)
var attendance_foreigner = ref(0)
var attendance_toddlers = ref(0)
var attendance_total = ref(0)

watch([attendance_kids, attendance_adults, attendance_foreigner, attendance_toddlers], () => {
    attendance_total.value = parseInt(attendance_kids.value) +
        parseInt(attendance_adults.value) +
        parseInt(attendance_foreigner.value) +
        parseInt(attendance_toddlers.value);
})



// watch(addAttendance.value.attendance_total, (newValue, oldValue) => {

// })
async function submitAttendance() {

    attendance_date.value = formatDate(attendance_date.value)

    AxiosInstance();
    try {
        const response = await axios.post('/api/attendance/create', {
            'admin_id': admin_id.value,
            'attendance_service': attendance_service.value.name,
            'attendance_date': attendance_date.value,
            'attendance_kids': attendance_kids.value,
            'attendance_adults': attendance_adults.value,
            'attendance_foreigner': attendance_foreigner.value,
            'attendance_toddlers': attendance_toddlers.value,
            'attendance_total': attendance_total.value,
        })

        if (response.status === 200) {
            success();
            clearAttendance();
        }
        else if (response.status === 204) {
            alreadyExist();
            clearAttendance();
        }
    } catch (error) {
        errorAlert();
    }

}

async function submitData() {
    addData.value.attendees_life_stage = addData.value.attendees_life_stage.name;
    addData.value.attendees_sector_of_society = addData.value.attendees_sector_of_society.name;
    addData.value.attendees_service_commitment = addData.value.attendees_service_commitment.name;
    addData.value.attendees_school_level = addData.value.attendees_school_level.name
    addData.value.admin_id = $cookies.get('admin_id')

    const formatDate = () => {
        const date = new Date(addData.value.attendees_birthday);
        const year = date.getFullYear();
        const month = ('0' + (date.getMonth() + 1)).slice(-2); // Months are zero based
        const day = ('0' + date.getDate()).slice(-2);

        return `${year}/${month}/${day}`;
    }
    addData.value.attendees_birthday = formatDate();

    if (addData.value.admin_id != null) {
        try {
            AxiosInstance();
            await axios.post('/api/attendees/add', addData.value)
                .then(response => {
                    if (response.status === 200) {
                        success();
                    } else {
                        errorAlert();
                    }
                }

                )
                .then(data => response.data)

        } catch (error) {

        }
    }
}

function clearAttendance() {
    attendance_service.value = ''
    // attendance_date.value = ''
    attendance_kids.value = 0
    attendance_adults.value = 0
    attendance_foreigner.value = 0
    attendance_toddlers.value = 0
    attendance_total.value = 0

}

</script>

<template>

    <div id="addFilter">
        <span>
            <Button label="Add Service Record" class="button1" severity="secondary"
                :class="{ addCardActive: isCardActive == 1 }" @click="isCardActive = 1" />

            <Button class="button1" label=" Add Attendees Record" severity="secondary"
                :class="{ addCardActive: isCardActive == 2 }" @click="isCardActive = 2" />
        </span>

        <span id="serviceRecordContainer" v-if="isCardActive === 1">

            <form>
                <span>
                    <h6>Date</h6>
                    <DatePicker v-model="attendance_date" showIcon iconDisplay="input" placeholder='Select date' />
                    <!-- :manualInput="false" -->
                </span>

                <span>
                    <h6>Service</h6>
                    <Select v-model="attendance_service" :options="service" optionLabel="name"
                        placeholder="Select service" />
                </span>
                <span>
                    <h6>Total Number of Adults</h6>
                    <InputText v-model="attendance_adults" type="number" placeholder="Total Number of Adults" />
                </span>
                <span>
                    <h6>Total Number of Foreigner</h6>
                    <InputText v-model="attendance_foreigner" type="number" placeholder="Total Number of Foreigner" />
                </span>
                <span>
                    <h6>Total Number of Kids</h6>
                    <InputText v-model="attendance_kids" type="number" placeholder="Total Number of Kids" />
                </span>
                <span>
                    <h6>Total Number of Toddlers</h6>
                    <InputText v-model="attendance_toddlers" type="number" placeholder="Total Number of Toddlers" />
                </span>
                <span>
                    <h6>Total Attendance</h6>
                    <InputText disabled v-model="attendance_total" type="number" placeholder="Total Attendees" />
                </span>

                <Button label="Submit" severity="info" @click="submitAttendance()" />
            </form>
        </span>

        <span id="attendeesRecordContainer" v-if="isCardActive === 2">

            <form action="">


                <InputText v-model="addData.attendees_lname" :invalid="addData.attendees_lname == null" type="text"
                    placeholder="Last Name" />

                <InputText v-model="addData.attendees_fname" :invalid="addData.attendees_fname == null" type="text"
                    placeholder="First Name" />

                <InputText v-model="addData.attendees_mname" :invalid="addData.attendees_mname == null" type="text"
                    placeholder="Middle Initial" />

                <InputText v-model="addData.attendees_facebook" :invalid="addData.attendees_facebook == null"
                    type="text" placeholder="Facebook Account" />

                <DatePicker v-model="addData.attendees_birthday" :invalid="addData.attendees_birthday == null" showIcon
                    iconDisplay="input" placeholder='Select Birthday' />

                <InputText v-model="addData.attendees_mobile_number" :invalid="addData.attendees_mobile_number == null"
                    type="text" placeholder="Mobile Number" />

                <Select v-model="addData.attendees_life_stage" :invalid="addData.attendees_life_stage == null"
                    :options="lifeStage" optionLabel="name" placeholder="Life Stage" />

                <Select v-model="addData.attendees_sector_of_society"
                    :invalid="addData.attendees_sector_of_society == null" :options="governmentSector"
                    optionLabel="name" placeholder="Sector of Society" />

                <InputText v-model="addData.attendees_school" :invalid="addData.attendees_school == null" type="text"
                    placeholder="School" />
                <!-- 
                <InputText v-model="addData.attendees_school_level" :invalid="addData.attendees_school_level == null"
                    type="text" placeholder="School Level" /> -->

                <Select placeholder="Select schoo level" v-model="addData.attendees_school_level" :options="schoolLevel"
                    optionLabel="name"></Select>

                <Select v-model="addData.attendees_service_commitment"
                    :invalid="addData.attendees_service_commitment == null" :options="service" optionLabel="name"
                    placeholder="Select service" />


                <Button label="Submit" severity="info" @click="submitData()" />
            </form>
        </span>
    </div>

</template>


<style scoped>
#statisticsTitle {
    font-family: Inter-SemiBold;
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    background-color: white;

}

#statisticsTitle>h6 {
    width: 100%;
    display: flex;
    align-items: center;
    font-size: 16px;
    gap: 1em;
    padding: .5em 1em;
    background-color: var(--gray1);
    color: var(--gray3);
}

#statisticsTitle>svg {
    width: 1.2em;
}

.addCardActive {
    background-color: var(--blue2);
    color: white;
}

.button1 {
    font-size: 14px;


}

#serviceRecordContainer {
    width: 100%;
    display: flex;
}

#serviceRecordContainer>form {
    display: flex;
    flex-direction: column;
    gap: 1em;
    width: 100%;

}

#serviceRecordContainer>form>span {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 5px;

}

#serviceRecordContainer>form>span>h6 {
    font-family: Inter-SemiBold;
    font-size: 13px;
    color: var(--gray2);
}

#submitServiceRecordBttn {
    background-color: var(--blue1);
    color: white;
    height: 3em;
}

#addFilter {
    display: flex;
    margin-top: 1em;
    gap: 1em;
    padding: 1em 2em;
}

#addFilter> :first-child {
    display: flex;
    flex-direction: column;
    gap: 1em;
    width: 30%;
}

/* Attendees Service Record */

#attendeesRecordContainer {
    width: 100%;
    display: flex;
    margin-bottom: 1em;
}

#attendeesRecordContainer>form {
    display: flex;
    flex-direction: column;
    gap: 1em;
    width: 100%;
}
</style>