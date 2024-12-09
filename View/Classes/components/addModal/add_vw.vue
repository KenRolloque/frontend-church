<template>
    <div class="card flex justify-center">
        <Button @click="visible = true" id="addBttn" severity="secondary" icon="pi pi-plus-circle" label="Add" text
            aria-label="Filter" />
        <Dialog v-model:visible="visible" maximizable modal header="Victory Weekend" :style="{ width: '30rem' }"
            :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
            <div id="mainContainer">

                <span class="inputContainer">
                    <h6>Attendees Fullname</h6>

                    <AutoComplete id="search" v-model="selectedAttendees" optionLabel="fullname"
                        :suggestions="filteredAttendees" @complete="searchAttendees" />
                </span>


                <span class="inputContainer">
                    <h6> Date</h6>
                    <DatePicker v-model="data.vw_date" showIcon fluid :manualInput="false">
                    </DatePicker>
                </span>

                <span class="inputContainer">
                    <h6> Day 1</h6>
                    <Select v-model="data.vw_day1" :options="dayStatus" optionLabel="status"
                        placeholder="Select Status"></Select>
                </span>

                <span class="inputContainer">
                    <h6> Day 2</h6>
                    <Select v-model="data.vw_day2" :options="dayStatus" optionLabel="status"
                        placeholder="Select Status"></Select>
                </span>

                <span class="inputContainer">
                    <h6>Water Baptism</h6>
                    <Select v-model="data.vw_water_baptism" :options="baptismStatus" optionLabel="status"
                        placeholder="Select Status"></Select>
                </span>

                <span class="inputContainer">
                    <h6> Status</h6>
                    <Select v-model="data.status" :options="status" optionLabel="name"
                        placeholder="Select Status"></Select>
                </span>

                <span class="bttnContainer">
                    <Button class="addBttn" @click="submitData">Add</Button>
                </span>
            </div>
        </Dialog>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from 'axios'
import { AxiosInstance } from '../../../../src/axios_instance';
import { formatDate } from '../../../../src/dateFilter'
import { success } from '../../../../src/components/shared/sweetalert'

const visible = ref(false);

const data = ref({
    admin_id: $cookies.get('admin_id'),
    attendes_id: null,
    leader_id: null,
    vw_batch_no: null,
    vw_date: null,
    vw_day1: null,
    vw_day2: null,
    vw_water_baptism: null,
    status: null,
})

const dayStatus = ref([
    { status: "Attended" },
    { status: "Not Attended" },
])
const baptismStatus = ref([
    { status: "Already Baptized" },
    { status: "Baptized" },
    { status: "Not Baptized" },
])
const status = ref([
    { name: 'Done', value: 'done' },
    { name: 'Not Done', value: 'notdone' }
])


var attendee_list = ref()
var selectedAttendees = ref()
var filteredAttendees = ref()
var searchAttendees = (event) => {
    setTimeout(() => {

        if (!event.query.trim().length) {
            filteredAttendees.value = [...attendee_list.value]

        } else {
            filteredAttendees.value = attendee_list.value.filter((attendee) => {
                return attendee.fullname.toLowerCase().startsWith(event.query.toLowerCase());
            })
        }
    }, 250)
}



const selectedStatus = ref()


// Submit
async function submitData() {
    data.value.attendes_id = selectedAttendees.value.attendes_id
    data.value.vw_day1 = data.value.vw_day1.status
    data.value.vw_day2 = data.value.vw_day2.status
    data.value.vw_water_baptism = data.value.vw_water_baptism.status
    data.value.status = data.value.status.name
    data.value.vw_date = formatDate(data.value.vw_date)


    try {
        AxiosInstance();
        const response = await axios.post('/api/vw/add', data.value)
        if (response.status === 200) {
            visible.value = false;
            success();
        }


    } catch (error) {

    }
}



async function getAttendees() {
    AxiosInstance();
    try {
        const response = await axios.get('/api/attendees/get/all')
        attendee_list.value = response.data
    } catch (error) {
    }
}

onMounted(() => {
    // getLeader();
    getAttendees();
})
</script>

<style scoped>
#mainContainer {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 1em;
}

.inputContainer {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 5px;
}

.inputContainer>h6 {
    font-size: 13px;
    color: var(--gray2);
    font-family: Inter-SemiBold;
}

.inputContainer :deep(.p-inputtext) {
    width: 100%;
}

#search {
    width: 100%;
}


.bttnContainer {
    display: flex;
    width: 100%;
    justify-content: flex-end;
}

.addBttn {
    width: 5em;

}

#addBttn {
    font-size: 11px;
    /* background-color: var(--gray4); */

}
</style>