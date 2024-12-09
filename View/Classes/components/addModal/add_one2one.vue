<template>
    <div class="card flex justify-center">
        <Button @click="visible = true" id="addBttn" severity="secondary" icon="pi pi-plus-circle" label="Add" text
            aria-label="Filter" />
        <Dialog v-model:visible="visible" maximizable modal header="One 2 One" :style="{ width: '30rem' }"
            :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
            <div id="mainContainer">

                <span class="inputContainer">
                    <h6>Attendees Fullname</h6>

                    <AutoComplete id="search" v-model="selectedAttendees" optionLabel="fullname"
                        :suggestions="filteredAttendees" @complete="searchAttendees" />
                </span>

                <span class="inputContainer">
                    <h6> Leader's Name</h6>

                    <AutoComplete id="search" v-model="selected_leader" optionLabel="fullname"
                        :suggestions="filter_leader" @complete="search_leader" />
                </span>

                <span class="inputContainer">
                    <h6> Date Start</h6>
                    <DatePicker v-model="data.date_start" showIcon fluid :manualInput="false">
                    </DatePicker>
                </span>

                <span class="inputContainer">
                    <h6> Date End</h6>
                    <DatePicker v-model="data.date_end" showIcon fluid :manualInput="false">
                    </DatePicker>
                </span>

                <span class="inputContainer">
                    <h6> Status</h6>
                    <Select v-model="selectedStatus" :options="status" optionLabel="name"
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

const visible = ref(false);

const data = ref({
    attendes_id: null,
    leader_id: null,
    date_start: null,
    date_end: null,
    status: null
})


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

var leader_list = ref()
var selected_leader = ref()
var filter_leader = ref()
var search_leader = (event) => {
    setTimeout(() => {

        if (!event.query.trim().length) {
            filter_leader.value = [...leader_list.value]

        } else {
            filter_leader.value = leader_list.value.filter((leader) => {
                return leader.fullname.toLowerCase().startsWith(event.query.toLowerCase());
            })
        }
    }, 250)
}

const selectedStatus = ref()
const status = ref([
    { name: 'Done', value: 'done' },
    { name: 'On going', value: 'ongoing' }
]
)

// Submit
async function submitData() {
    data.value.attendes_id = selectedAttendees.value.attendes_id
    data.value.leader_id = selected_leader.value.leader_id;
    data.value.status = selectedStatus.value.name
    data.value.date_start = formatDate(data.value.date_start)
    data.value.date_end = formatDate(data.value.date_end)
    try {
        AxiosInstance();
        const response = await axios.post('/api/one2one/add', data.value)

    } catch (error) {

    }
}

async function getLeader() {
    AxiosInstance();
    try {
        const response = await axios.get('/api/leader/get')
        leader_list.value = response.data
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
    getLeader();
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