<script setup>
import { toRef, ref, defineProps, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import axios from 'axios'
import { AxiosInstance } from '../../../src/axios_instance.js'
import { edit, errorAlert } from '../../../src/components/shared/sweetalert.js'
import { watch } from 'vue'
// Props

const router = useRouter();
const route = useRoute();
const model = defineModel('hide');
const props = defineProps({
    data: {
        type: Object,
        default: () => { }
    },
    // hide: {
    //     type: Boolean,
    //     default: false
    // }
})

const data = toRef(props, 'data');
// var hide = toRef(props.hide)
const service = ref([
    { label: '9am Service', code: 1 },
    { label: '11am Service', code: 2 },
    { label: '3pm Service', code: 3 },
    { label: '5pm Service', code: 4 },
    { label: 'Youth Service', code: 5 }
]);

const society = ref([
    { label: 'Government', code: 1 },
    { label: 'Education', code: 2 },
    { label: 'Health Care', code: 3 },
    { label: 'Private Sector', code: 4 },
    { label: 'Business', code: 5 },
    { label: 'Student', code: 6 },
    { label: 'At Home', code: 7 },
])

const lifeStage = ref([
    { label: 'Youth', code: 1 },
    { label: 'Single', code: 2 },
    { label: 'Married/Parent', code: 3 },
    { label: 'Single Parent', code: 4 },
    { label: 'Widow/widower', code: 5 },
])

async function updateRecord() {
    const formatDate = () => {
        const date = new Date(data.value.attendees_birthday);
        const year = date.getFullYear();
        const month = ('0' + (date.getMonth() + 1)).slice(-2); // Months are zero based
        const day = ('0' + date.getDate()).slice(-2);

        return `${year}/${month}/${day}`;
    }
    data.value.attendees_birthday = formatDate();

    try {
        AxiosInstance();
        await axios.post('/api/attendees/update', data.value)
            .then(response => {
                if (response.status === 200) {
                    model.value = false;
                    edit();


                } else {
                    errorAlert();
                }
            });
    } catch (error) {
        console.log(error)
        errorAlert();
    }


}



// watch(() => props.hide, (newValue) => {
//     hideValue.value = newValue;
// });




</script>

<template>
    <form action="">
        <span class='inputContainer'>
            <h6>Last Name</h6>
            <InputText id="lastname" v-model="data.attendees_lname" type="text" placeholder="Last Name" />
        </span>

        <span class='inputContainer'>
            <h6>First Name</h6>
            <InputText v-model="data.attendees_fname" type="text" placeholder="First Name" />
        </span>

        <span class='inputContainer'>
            <h6>Middle Initial</h6>
            <InputText v-model="data.attendees_mname" type="text" placeholder="Middle Initial" />
        </span>

        <span class='inputContainer'>
            <h6>Facebook</h6>
            <InputText v-model="data.attendees_facebook" type="text" placeholder="Facebook Account" />
        </span>

        <span class='inputContainer'>
            <h6>Birthday</h6>
            <DatePicker v-model="data.attendees_birthday" showIcon iconDisplay="input" placeholder='Select Birthday' />
        </span>

        <span class='inputContainer'>
            <h6>Mobile Number</h6>
            <InputText v-model="data.attendees_mobile_number" type="text" placeholder="Mobile Number" />
        </span>


        <span class='inputContainer'>
            <h6>Life Stage</h6>
            <Select v-model="data.attendees_life_stage" :options="lifeStage" optionValue="label" optionLabel="label"
                placeholder="Life Stage" />
        </span>

        <span class='inputContainer'>
            <h6>Sector of Society</h6>
            <Select v-model="data.attendees_sector_of_society" :options="society" optionValue="label"
                optionLabel="label" placeholder="Sector of Society" />
        </span>

        <span class='inputContainer'>
            <h6>School</h6>
            <InputText v-model="data.attendees_school" type="text" placeholder="School" />
        </span>

        <span class='inputContainer'>
            <h6>School Level</h6>
            <InputText v-model="data.attendees_school_level" type="text" placeholder="School Level" />
        </span>

        <span class='inputContainer'>
            <h6>Service Commitment</h6>
            <Select v-model="data.attendees_service_commitment" :options="service" optionValue="label"
                optionLabel="label" placeholder="Select service" />
        </span>

        <Button label="Submit" severity="info" @click='updateRecord()' />
    </form>
</template>

<style scoped>
form {
    display: flex;
    flex-direction: column;
    gap: 1.3em;
    width: 85%;
    margin-top: 1em;
}

.inputContainer {
    display: 'flex';
    width: '100%';
    flex-direction: 'column';

}

.inputContainer>h6 {
    font-size: 12px;
    font-family: Inter-SemiBold;
    color: var(--gray2)
}

.inputContainer> :nth-child(2) {
    width: 100%;
    margin-top: .2em
}
</style>