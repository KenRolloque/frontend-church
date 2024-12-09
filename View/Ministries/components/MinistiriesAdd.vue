<script setup>
import { ref, watch, onMounted } from "vue";
import axios from 'axios';
import { AxiosInstance } from './../../../src/axios_instance'
import { success, errorAlert, alreadyExist } from '../../../src/components/shared/sweetalert'
import { changeBackground } from '../../../src/state/ministryRouting'
const service = ref([
    { name: '9am Service' },
    { name: '11am Service' },
    { name: '3pm Service' },
    { name: '5pm Service' },
    { name: 'Youth Service' }
]);

var bg = changeBackground()

var selectedService = ref();
var visible = ref(false);

var attendee = ref();
var attendeeList = ref();

// watch(attendee, () => {
//     searchUser();
// })

// Search attendees
const attendees = ref();
const selectedAttendees = ref();
const filteredAttendees = ref();
const allFullname = ref()
const search = (event) => {
    setTimeout(() => {
        if (!event.query.trim().length) {

            filteredAttendees.value = [...attendees.value];


        } else {
            filteredAttendees.value = attendees.value.filter((attendee) => {
                return attendee.fullname.toLowerCase().startsWith(event.query.toLowerCase());
            })
        }
    }, 250);
}

// Submit Data
async function submitData() {
    // console.log(selectedAttendees.value)
    // console.log(selectedService.value)d
    try {
        AxiosInstance();
        const response = await axios.post('/api/ministry/' + bg.selectedMinistry + '/create', {
            admin_id: $cookies.get('admin_id'),
            attendes_id: selectedAttendees.value.attendes_id,
            service: selectedService.value.name,
            status: 'Active'
        })



        if (response.status === 200) {
            visible.value = false;
            success();
            selectedAttendees.value = ''
            selectedService.value.name = ''

        } else {
            selectedAttendees.value = ''
            selectedService.value.name = ''
            visible.value = false;
            alreadyExist();

        }
    } catch (error) {
        visible.value = false;
        errorAlert();
        console.log(error)
    }
}
async function searchUser() {
    try {
        AxiosInstance();
        const response = await axios('/api/attendees/get/all')
        attendees.value = response.data
    } catch (error) {
        console.log(error)
    }
}


onMounted(() => {
    searchUser();
})
</script>

<template>

    <div class="card flex justify-center">
        <!-- <Button label="Show" @click="visible = true" /> -->
        <Button @click="visible = true" id="addBttn" severity="secondary" icon="pi pi-plus-circle" label="Add" text
            aria-label="Filter" />
        <Dialog class="dialog" v-model:visible="visible" maximizable modal header="Add in Kids Ministry"
            :style="{ width: '50rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">

            <div id="mainContainer">
                <span class="inputContainer">
                    <h6> Fullname</h6>

                    <AutoComplete id="search" v-model="selectedAttendees" optionLabel="fullname"
                        :suggestions="filteredAttendees" @complete="search" />
                    <!-- <InputText type="text" placeholder="Enter Fullname" v-model="attendee" /> -->
                </span>

                <span class="inputContainer">
                    <h6> Service</h6>
                    <Select v-model="selectedService" :options="service" optionLabel="name" type="text"
                        placeholder="Select Service" />
                </span>

                <span class="bttnContainer">
                    <Button class="addBttn" @click="submitData">Add</Button>
                </span>
            </div>

        </Dialog>
    </div>
</template>

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