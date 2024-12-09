<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import AttendeesDialogue from './AttendeesDialogue.vue';
import AttendeesEditRecord from './AttendeesEditRecord.vue';
import { FilterMatchMode, FilterOperator } from '@primevue/core/api';
import axios from 'axios'
import { AxiosInstance } from '../../../src/axios_instance.js'

var activeService = ref('all');
var hideUpdate = ref(false);


const headerStyle = {
    fontSize: '13px',
    // backgroundColor:'#fafafa',
    color: '#696969'
}
function changeService(service) {
    activeService.value = service;

}

const service = ref([
    { label: 'All', code: 0 },
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

// const data = ref([
//     {
//         'id': 1,
//         'lname': 'Rolloque',
//         'fname': 'Ken',
//         'mname': 'L',
//         'facebook': 'Ken Rolloque',
//         'birthday': '01/14/2002 ',
//         'mobileNumber': '09481818278',
//         'lifeStage': 'Single',
//         'sectorOfSociety': 'Student',
//         'school': 'Batangas State University',
//         'schoolLevel': 'College',
//         'serviceCommitment': '9am Service'
//     },
//     {
//         'id': 2,
//         'lname': 'Quinto',
//         'fname': 'Mark Gabriel',
//         'mname': 'L',
//         'facebook': 'Mark Gabriel Quinto',
//         'birthday': '01/14/2002 ',
//         'mobileNumber': '09481818278',
//         'lifeStage': 'Single',
//         'sectorOfSociety': 'Student',
//         'school': 'Batangas State University',
//         'schoolLevel': 'College',
//         'serviceCommitment': '9am Service'
//     },
//     {
//         'lname': 'Dimayuga',
//         'fname': 'KC',
//         'mname': 'L',
//         'facebook': 'KC Dimayuga',
//         'birthday': '01/14/2002 ',
//         'mobileNumber': '09481818278',
//         'lifeStage': 'Single',
//         'sectorOfSociety': 'Student',
//         'school': 'Batangas State University',
//         'schoolLevel': 'College',
//         'serviceCommitment': '9am Service'
//     },
//     {
//         'lname': 'Serdena',
//         'fname': 'Jan Marc',
//         'mname': 'L',
//         'facebook': 'Jan Marc Serdena',
//         'birthday': '01/14/2002 ',
//         'mobileNumber': '09481818278',
//         'lifeStage': 'Single',
//         'sectorOfSociety': 'Student',
//         'school': 'Batangas State University',
//         'schoolLevel': 'College',
//         'serviceCommitment': '9am Service'
//     },
//     {
//         'lname': 'Monreal',
//         'fname': 'Jeriko',
//         'mname': 'L',
//         'facebook': 'Jeriko Monreal',
//         'birthday': '01/14/2002 ',
//         'mobileNumber': '09481818278',
//         'lifeStage': 'Single',
//         'sectorOfSociety': 'Student',
//         'school': 'Batangas State University',
//         'schoolLevel': 'College',
//         'serviceCommitment': '9am Service'
//     },
//     {
//         'lname': '5',
//         'fname': 'Ken',
//         'mname': 'L',
//         'facebook': 'Ken Rolloque',
//         'birthday': '01/14/2002 ',
//         'mobileNumber': '09481818278',
//         'lifeStage': 'Single',
//         'sectorOfSociety': 'Student',
//         'school': 'Batangas State University',
//         'schoolLevel': 'College',
//         'serviceCommitment': '9am Service'
//     },
//     {
//         'lname': 'Rolloque',
//         'fname': 'Ken',
//         'mname': 'L',
//         'facebook': 'Ken Rolloque',
//         'birthday': '01/14/2002 ',
//         'mobileNumber': '09481818278',
//         'lifeStage': 'Single',
//         'sectorOfSociety': 'Student',
//         'school': 'Batangas State University',
//         'schoolLevel': 'College',
//         'serviceCommitment': '9am Service'
//     },
//     {
//         'lname': 'Rolloque',
//         'fname': 'Ken',
//         'mname': 'L',
//         'facebook': 'Ken Rolloque',
//         'birthday': '01/14/2002 ',
//         'mobileNumber': '09481818278',
//         'lifeStage': 'Single',
//         'sectorOfSociety': 'Student',
//         'school': 'Batangas State University',
//         'schoolLevel': 'College',
//         'serviceCommitment': '9am Service'
//     },
// ])


//Column Header

const data = ref([]);

const columns = ref([
    { header: 'Name', value: 'fullname' },
    { header: 'Facebook', value: 'attendees_facebook' },
    { header: 'Birthday', value: 'attendees_birthday' },
    { header: 'Mobile No.', value: 'attendees_mobile_number' },
    { header: 'Life Stage', value: 'attendees_life_stage' },
    { header: 'Sectory of Society', value: 'attendees_sector_of_society' },
    { header: 'School', value: 'attendees_school' },
    { header: 'School Level', value: 'attendees_school_level' },
    // { header: 'Service Commitment', value: 'attendees_service_commitment' },

])

var updateData = ref()


function getData() {
    hideUpdate.value = true
    console.log(hideUpdate)
}

function changeData() {
    console.log(JSON.stringify(updateData.value));
}

// Search
const filters = ref();

const initFilters = () => {
    filters.value = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        attendees_fname: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        attendees_mname: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        attendees_mname: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        attendees_facebook: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        attendees_birthday: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }] },
        attendees_mobile_number: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        attendees_life_stage: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        attendees_sector_of_society: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        attendees_school: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        attendees_school_level: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        attendees_service_commitment: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
    }
}

initFilters();

// Action

var isSelected = ref(false);
var selectedProduct = ref();
const myFilter = computed(() => {
    return selectedProduct.value == undefined ? 'yes' : 'no';
})

console.log(myFilter.value)


function attendeeFilter() { }

const items = [
    {
        label: 'All',
        command: attendeeFilter(),
    },
    {
        label: '9am Service',
        command: attendeeFilter(),
    },
    {
        label: '11am Service',
        command: attendeeFilter(),
    },
    {
        label: '3pm Service',
        command: attendeeFilter(),
    },
    {
        label: '5pm Service',
        command: attendeeFilter(),
    },

];
function deleteData() {
    console.log(selectedProduct.value)
}


// Changing the service
function isChange(newActiveService) {
    // console.log(newActiveService.label)
    if (newActiveService.label == 'All') {
        activeService.value = 'all';
    } else if (newActiveService.label == '9am Service') {
        activeService.value = 'nine';
    } else if (newActiveService.label == '11am Service') {
        activeService.value = 'eleven';
    } else if (newActiveService.label == '3pm Service') {
        activeService.value = 'three';
    } else if (newActiveService.label == '5pm Service') {
        activeService.value = 'five';
    } else if (newActiveService.label == 'Youth Service') {
        activeService.value = 'youth';
    }
}

// Watch Changes in Service
watch(activeService, (newActiveService, oldActiveService) => {
    isChange(newActiveService);
    getAttendees();
})

async function getAttendees() {
    AxiosInstance();
    await axios.post('/api/attendees/get/' + activeService.value)
        .then(response => data.value = response.data)
}

onMounted(() => {
    getAttendees();

})

</script>



<template>

    <!-- Table Container -->
    <div class="tableContainer" v-if="hideUpdate === false">
        <DataTable v-model:filters="filters" v-model:selection="selectedProduct" :value="data" :key="data" showGridlines
            stripedRows paginator :rows="10" :rowsPerPageOptions="[10, 20, 30, 40]" tableStyle="min-width: 50em">

            <!-- Table Header -->
            <template #header>
                <div id="filterContainer" v-if="hideUpdate == false">

                    <IconField class="searchContainer">
                        <InputIcon class="pi pi-search" />
                        <InputText class="searchInput" v-model="filters['global'].value" placeholder="Search" />
                    </IconField>

                    <!-- Action Container -->
                    <span id="actionContainer">
                        <Button @click="getData()" :disabled="myFilter == 'yes'" id="editBttn" severity="secondary"
                            icon="pi pi-pencil" label="Edit" text aria-label="Filter" />
                        <!-- <Button :disabled="selectedProduct == undefined" id="delBttn" severity="secondary"
                            icon="pi pi-trash" label="Delete" text aria-label="Filter" /> -->
                        <AttendeesDialogue :myMessage=myFilter />
                        <Select v-model="activeService" :options="service" optionsValue="label" optionLabel="label"
                            size="small" placeholder="Select Service"></Select>
                        <!-- <SplitButton size="small" id="filterBttn" severity="secondary" label="Service" :model="items" /> -->
                    </span>
                </div>

            </template>

            <!-- Table Columns -->
            <Column :style="headerStyle" selectionMode="single"> </Column>
            <Column :style="headerStyle" v-for="column in columns" :key="column.value" :header="column.header"
                :field="column.value">

            </Column>

            <Column :style="headerStyle" field="attendees_service_commitment" header="Service Commitment">
                <template #body="slotProps">

                    <div class="serviceContainer">
                        <Tag style="font-size: 10px;" severity="success"
                            :value="slotProps.data.attendees_service_commitment"
                            v-if="slotProps.data.attendees_service_commitment == '9am Service'"></Tag>

                        <Tag style="font-size: 10px;" severity="info"
                            :value="slotProps.data.attendees_service_commitment"
                            v-else-if="slotProps.data.attendees_service_commitment == '11am Service'">
                        </Tag>

                        <Tag style="font-size: 10px;" severity="warn"
                            :value="slotProps.data.attendees_service_commitment"
                            v-else-if="slotProps.data.attendees_service_commitment == '3pm Service'">
                        </Tag>

                        <Tag style="font-size: 10px;" severity="danger"
                            :value="slotProps.data.attendees_service_commitment"
                            v-else-if="slotProps.data.attendees_service_commitment == '5pm Service'">
                        </Tag>

                        <Tag style="font-size: 10px;" severity="secondary"
                            :value="slotProps.data.attendees_service_commitment"
                            v-else-if="slotProps.data.attendees_service_commitment == 'Youth Service'">
                        </Tag>
                    </div>

                </template>
            </Column>
        </DataTable>
    </div>


    <!-- Edit Container -->
    <div class="editContainer" v-if="hideUpdate === true">
        <span id="headerTitle">
            <h6>
                <Button @click="hideUpdate = false" icon="pi pi-arrow-left" text rounded />
                Back
            </h6>

            <h6>Update Data</h6>
        </span>
        <AttendeesEditRecord :data=selectedProduct v-model:hide="hideUpdate" />
    </div>




</template>


<style scoped>
#statisticsTitle {
    font-family: Inter-SemiBold;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1em;
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

/* Table Container */
#filterContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    /* padding: 0 2em;
    margin-top: 1em; */
}

#filterContainer>ul {
    list-style-type: none;
    display: flex;
    gap: 1.2em;
    font-family: Inter-Regular;
    font-size: 13px;

    width: 100%;

}

#filterContainer>ul>li {
    padding: .2em 1em;
    border-radius: 3px;
}

/* Search Field */

.searchContainer {
    width: 30em;

}

.searchInput {
    width: 100%;

}

.activeService {
    background-color: var(--purple);
    color: white;

}

#actionContainer {
    display: flex;
    gap: .5em
}

#editBttn {
    font-size: 11px;
}

#delBttn {
    font-size: 11px;
}




/* Table Container */
#contentContainer {
    margin-top: 1em;

}

.tableContainer {
    width: 100%;
    overflow-x: scroll;
    margin-top: 1em;
    padding: 0 2em
}

.tableHeader {
    background-color: var(--purple);
    color: white;
}

.actionContainer {
    display: flex;


}

.editContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.5em 0;
}



#headerTitle {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1em;

    font-size: 14px;
    font-family: Inter-SemiBold;
    background-color: var(--gray4);
}

#headerTitle> :first-child {
    display: flex;
    align-items: center;
    font-size: 14px;

}

#headerTitle> :nth-child(2) {
    padding: 0 1em;
}

.serviceContainer {
    font-size: 12px;
    width: 100%;
    display: flex;
    justify-content: center;
}
</style>
