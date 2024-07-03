<script setup>
import { ref, computed } from 'vue'
import dialogue from './dialogue.vue'
import { FilterMatchMode, FilterOperator } from '@primevue/core/api';

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

const data = ref([
    {
        'id': 1,
        'lname': 'Rolloque',
        'fname': 'Ken',
        'mname': 'L',
        'facebook': 'Ken Rolloque',
        'birthday': '01/14/2002 ',
        'mobileNumber': '09481818278',
        'lifeStage': 'Single',
        'sectorOfSociety': 'Student',
        'school': 'Batangas State University',
        'schoolLevel': 'College',
        'serviceCommitment': '9am Service'
    },
    {
        'id': 2,
        'lname': 'Quinto',
        'fname': 'Mark Gabriel',
        'mname': 'L',
        'facebook': 'Mark Gabriel Quinto',
        'birthday': '01/14/2002 ',
        'mobileNumber': '09481818278',
        'lifeStage': 'Single',
        'sectorOfSociety': 'Student',
        'school': 'Batangas State University',
        'schoolLevel': 'College',
        'serviceCommitment': '9am Service'
    },
    {
        'lname': 'Dimayuga',
        'fname': 'KC',
        'mname': 'L',
        'facebook': 'KC Dimayuga',
        'birthday': '01/14/2002 ',
        'mobileNumber': '09481818278',
        'lifeStage': 'Single',
        'sectorOfSociety': 'Student',
        'school': 'Batangas State University',
        'schoolLevel': 'College',
        'serviceCommitment': '9am Service'
    },
    {
        'lname': 'Serdena',
        'fname': 'Jan Marc',
        'mname': 'L',
        'facebook': 'Jan Marc Serdena',
        'birthday': '01/14/2002 ',
        'mobileNumber': '09481818278',
        'lifeStage': 'Single',
        'sectorOfSociety': 'Student',
        'school': 'Batangas State University',
        'schoolLevel': 'College',
        'serviceCommitment': '9am Service'
    },
    {
        'lname': 'Monreal',
        'fname': 'Jeriko',
        'mname': 'L',
        'facebook': 'Jeriko Monreal',
        'birthday': '01/14/2002 ',
        'mobileNumber': '09481818278',
        'lifeStage': 'Single',
        'sectorOfSociety': 'Student',
        'school': 'Batangas State University',
        'schoolLevel': 'College',
        'serviceCommitment': '9am Service'
    },
    {
        'lname': '5',
        'fname': 'Ken',
        'mname': 'L',
        'facebook': 'Ken Rolloque',
        'birthday': '01/14/2002 ',
        'mobileNumber': '09481818278',
        'lifeStage': 'Single',
        'sectorOfSociety': 'Student',
        'school': 'Batangas State University',
        'schoolLevel': 'College',
        'serviceCommitment': '9am Service'
    },
    {
        'lname': 'Rolloque',
        'fname': 'Ken',
        'mname': 'L',
        'facebook': 'Ken Rolloque',
        'birthday': '01/14/2002 ',
        'mobileNumber': '09481818278',
        'lifeStage': 'Single',
        'sectorOfSociety': 'Student',
        'school': 'Batangas State University',
        'schoolLevel': 'College',
        'serviceCommitment': '9am Service'
    },
    {
        'lname': 'Rolloque',
        'fname': 'Ken',
        'mname': 'L',
        'facebook': 'Ken Rolloque',
        'birthday': '01/14/2002 ',
        'mobileNumber': '09481818278',
        'lifeStage': 'Single',
        'sectorOfSociety': 'Student',
        'school': 'Batangas State University',
        'schoolLevel': 'College',
        'serviceCommitment': '9am Service'
    },
])


//Column Header

const columns = ref([
    { header: 'Lastname', value: 'fname' },
    { header: 'Firstname', value: 'lname' },
    { header: 'Middle Initial', value: 'mname' },
    { header: 'Facebook', value: 'facebook' },
    { header: 'Birthday', value: 'birthday' },
    { header: 'Mobile No.', value: 'mobileNumber' },
    { header: 'Life Stage', value: 'lifeStage' },
    { header: 'Sectory of Society', value: 'sectorOfSociety' },
    { header: 'School', value: 'school' },
    { header: 'School Level', value: 'schoolLevel' },
    { header: 'Service Commitment', value: 'serviceCommitment' },

])

var updateData = ref()


function getData() {
    hideUpdate.value = true
}

function changeData() {
    console.log(JSON.stringify(updateData.value));
}

// Search
const filters = ref();

const initFilters = () => {
    filters.value = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        lname: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        fname: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        mname: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        facebook: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        birthday: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }] },
        mobileNumber: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        lifeStage: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        sectorOfSociety: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        school: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        schoolLevel: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        serviceCommitment: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
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


</script>



<template>

    <div class="tableContainer" v-if="hideUpdate === false">

        <DataTable v-model:filters="filters" v-model:selection="selectedProduct" :value="data" :key="data" showGridlines
            stripedRows paginator :rows="5" :rowsPerPageOptions="[5, 10, 20, 50]" tableStyle="min-width: 50rem">

            <template #header>
                <div id="filterContainer" v-if="hideUpdate === false">

                    <IconField class="searchContainer">
                        <InputIcon class="pi pi-search" />
                        <InputText class="searchInput" v-model="filters['global'].value" placeholder="Search" />
                    </IconField>

                    <span id="actionContainer">
                        <Button @click="getData()" :disabled="myFilter == 'yes'" id="editBttn" severity="secondary"
                            icon="pi pi-pencil" label="Edit" text aria-label="Filter" />
                        <!-- <Button :disabled="selectedProduct == undefined" id="delBttn" severity="secondary"
                            icon="pi pi-trash" label="Delete" text aria-label="Filter" /> -->
                        <dialogue :myMessage=myFilter />
                        <SplitButton size="small" id="filterBttn" severity="secondary" label="Service" :model="items" />
                    </span>
                </div>

            </template>
            <Column :style="headerStyle" selectionMode="single"> </Column>
            <Column :style="headerStyle" v-for="column in columns" :key="column.value" :header="column.header"
                :field="column.value">

            </Column>
        </DataTable>
    </div>


    <div class="editContainer" v-if="hideUpdate === true">
        <form action="">
            <span id="headerTitle">

                <h6>
                    <Button @click="hideUpdate = false" icon="pi pi-arrow-left" text rounded />
                    Back

                </h6>

                <h6>Update Data</h6>
            </span>

            <span class='inputContainer'>
                <h6>Last Name</h6>
                <InputText id="lastname" v-model="selectedProduct.lname" type="text" placeholder="Last Name" />
            </span>

            <span class='inputContainer'>
                <h6>First Name</h6>
                <InputText v-model="selectedProduct.fname" type="text" placeholder="First Name" />
            </span>

            <span class='inputContainer'>
                <h6>Middle Initial</h6>
                <InputText v-model="selectedProduct.mname" type="text" placeholder="Middle Initial" />
            </span>

            <span class='inputContainer'>
                <h6>Facebook</h6>
                <InputText v-model="selectedProduct.facebook" type="text" placeholder="Facebook Account" />
            </span>

            <span class='inputContainer'>
                <h6>Birthday</h6>
                <DatePicker v-model="selectedProduct.birthday" showIcon iconDisplay="input"
                    placeholder='Select Birthday' />
            </span>

            <span class='inputContainer'>
                <h6>Mobile Number</h6>
                <InputText v-model="selectedProduct.mobileNumber" type="text" placeholder="Mobile Number" />
            </span>


            <span class='inputContainer'>
                <h6>Life Stage</h6>
                <Select v-model="selectedProduct.lifeStage" :options="lifeStage" optionValue="label" optionLabel="label"
                    placeholder="Life Stage" />
            </span>

            <span class='inputContainer'>
                <h6>Sector of Society</h6>
                <Select v-model="selectedProduct.sectorOfSociety" :options="society" optionValue="label"
                    optionLabel="label" placeholder="Sector of Society" />
            </span>

            <span class='inputContainer'>
                <h6>School</h6>
                <InputText v-model="selectedProduct.school" type="text" placeholder="School" />
            </span>

            <span class='inputContainer'>
                <h6>School Level</h6>
                <InputText v-model="selectedProduct.schoolLevel" type="text" placeholder="School Level" />
            </span>

            <span class='inputContainer'>
                <h6>Service Commitment</h6>
                <Select v-model="selectedProduct.serviceCommitment" :options="service" optionValue="label"
                    optionLabel="label" placeholder="Select service" />
            </span>

            <Button label="Submit" severity="info" @click='changeData()' />
        </form>
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

.editContainer>form {
    display: flex;
    flex-direction: column;
    gap: 1.3em;
    width: 90%;
    margin-top: 1em;
}

#headerTitle {
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
