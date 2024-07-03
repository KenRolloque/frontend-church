<script setup>
import { FilterMatchMode, FilterOperator } from '@primevue/core/api';
import { ref } from 'vue'

const headerStyle = {
    fontSize: '13px',
    color: '#696969'
}

const data = ref([
    {
        'lname': 'Rolloque',
        'fname': 'Ken Mark',
        'mname': 'L',
        'serviceCommitment': '9am Service',
        'kidsChurch': 'Not Member',
        'prayerTeam': 'Not Member',
        'ushering': 'Member',
        'communication': 'Not Member',
        'technical': 'Not Member',
        'admin': 'Not Member',
        'music': 'Member',
        'creativeDesign': 'Not Member',
    },
    {
        'lname': 'De Guzman',
        'fname': 'Jayson',
        'mname': 'L',
        'serviceCommitment': '3pm Service',
        'kidsChurch': 'Not Member',
        'prayerTeam': 'Member',
        'ushering': 'Not Member',
        'communication': 'Not Member',
        'technical': 'Not Member',
        'admin': 'Not Member',
        'music': 'Not Member',
        'creativeDesign': 'Not Member',
    },
])

const editMinistry = ref()

const statuses = ref([
    {
        name: "Member", key: "0"
    }, {
        name: "Not Member", key: "1"
    }
])


const isShow = ref(false)
const editData = ref();
function showEditMinistry(status, data) {
    isShow.value = status
    editMinistry.value = data

}

const columns = [
    {
        field: 'lname',
        header: 'Last Name'
    },
    {
        field: 'fname',
        header: 'First Name'
    },
    {
        field: 'serviceCommitment',
        header: 'Service Commitment'
    },
    {
        field: 'kidsChurch',
        header: "Kids"
    },
    {
        field: 'prayerTeam',
        header: "Prayer Team"
    },
    {
        field: 'ushering',
        header: "Ushering & Security"
    },
    {
        field: 'communication',
        header: "Communication"
    },
    {
        field: 'technical',
        header: "Technical & Stage Management"
    },
    {
        field: 'admin',
        header: "Admin"
    },
    {
        field: 'music',
        header: "Music Team"
    },
    {
        field: 'creativeDesign',
        header: "Creative Design"
    },
]


// search

const filters = ref();
const initFilters = () => {
    filters.value = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        lname: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        fname: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        mname: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        serviceCommitment: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        kidsChurch: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        prayerTeam: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        ushering: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        communication: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        technical: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        admin: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        creativeDesign: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
    }
}

initFilters();


// Filters
var selectedMinistry = ref('All')
const selectMinistry = ([
    { name: 'All', code: 'all' },
    { name: 'Kids', code: 'kids' },
    { name: 'Prayer Team', code: 'prayer' },
    { name: 'Ushering & Security', code: 'ushering' },
    { name: 'Communication', code: 'comms' },
    { name: 'Technical & Stage Management', code: 'tech' },
    { name: 'Admin', code: 'admin' },
    { name: 'Music Team', code: 'music' },
    { name: 'Creative Design', code: 'design' },
])

</script>

<template>

    <span id="statisticsTitle" v-if="isShow == false">
        <h6>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
            </svg>
            All Service Record
        </h6>
    </span>
    <DataTable v-model:filters="filters" :value="data" stripedRows paginator :rows="5"
        :rowPerPageOptions="[5, 10, 20, 30, 40, 50]" showGridlines tableStyle="min-width: 50rem" v-if="isShow == false">

        <template #header>
            <div class="header">
                <span class="selectMinistryContainer">
                    <h6 id='filterContainer'>
                        <i class="pi pi-filter"></i>
                        Filter
                    </h6>
                    <Select id="selectMinistry" v-model="selectedMinistry" optionValue='name' :options="selectMinistry"
                        optionLabel='name' checkmark :highlightOnSelect="false" placeholder="Filter Ministry" />
                </span>
                <IconField class="searchContainer">
                    <InputIcon class="pi pi-search" />
                    <InputText v-model="filters['global'].value" class="searchInput" placeholder="Search" />
                </IconField>
            </div>
        </template>
        <Column v-for="column in columns" :key="column.field" :header="column.header" :style="headerStyle"
            :field="column.field">

            <template #body="slotProps">
                <span v-if="slotProps.data[column.field] == 'Not Member'" class="tablecontent">
                    <i class="pi pi-times-circle" style="color: red;"></i>
                </span>
                <span v-else-if="slotProps.data[column.field] == 'Member'" class="tablecontent">
                    <i class="pi pi-check-circle text-center" style="color: green;"></i>
                </span>
                <span v-else>
                    {{ slotProps.data[column.field] }}
                </span>
            </template>
        </Column>

        <Column :style="headerStyle" header="Action">
            <template #body>
                <div class="labelContainer">
                    <Button @click="showEditMinistry(true, data)" class="editBttn" size="small" label="Edit"
                        icon="pi pi-pencil" severity="info" text />
                </div>
            </template>
        </Column>

    </DataTable>



    <div class="editContainer" v-if="isShow == true">
        <h6>
            <Button @click="showEditMinistry(false)" icon=" pi pi-arrow-left" text rounded />
            Back
        </h6>

        <h6 id="itemName">Ken Mark Rolloque - 9am Service</h6>


        <!-- Kids Church -->
        <div>
            <h1 class='ministryTitle'>Kids Church</h1>
            <div>
                <span class="statusContainer" v-for="status in statuses">
                    <RadioButton v-model="editMinistry[0].kidsChurch" :inputId="status.key" name="dynamic"
                        :value="status.name" />
                    <label :for="status.key" class="ml-2">{{ status.name }}</label>
                </span>
            </div>
        </div>

        <!-- Prayer Team -->
        <div>
            <h1 class='ministryTitle'>Prayer Team</h1>
            <div>
                <span class="statusContainer" v-for="status in statuses">
                    <RadioButton v-model="editMinistry[0].prayerTeam" :inputId="status.key" name="dynamic"
                        :value="status.name" />
                    <label :for="status.key" class="ml-2">{{ status.name }}</label>
                </span>
            </div>
        </div>

        <!-- Ushering & Security-->
        <div>
            <h1 class='ministryTitle'>Ushering & Security</h1>
            <div>
                <span class="statusContainer" v-for="status in statuses">
                    <RadioButton v-model="editMinistry[0].ushering" :inputId="status.key" name="dynamic"
                        :value="status.name" />
                    <label :for="status.key" class="ml-2">{{ status.name }}</label>
                </span>
            </div>
        </div>

        <!-- Communications-->
        <div>
            <h1 class='ministryTitle'>Communications</h1>
            <div>
                <span class="statusContainer" v-for="status in statuses">
                    <RadioButton v-model="editMinistry[0].communication" :inputId="status.key" name="dynamic"
                        :value="status.name" />
                    <label :for="status.key" class="ml-2">{{ status.name }}</label>
                </span>
            </div>
        </div>

        <!-- Technical & Stage Management-->
        <div>
            <h1 class='ministryTitle'>Technical & Stage Management</h1>
            <div>
                <span class="statusContainer" v-for="status in statuses">
                    <RadioButton v-model="editMinistry[0].technical" :inputId="status.key" name="dynamic"
                        :value="status.name" />
                    <label :for="status.key" class="ml-2">{{ status.name }}</label>
                </span>
            </div>
        </div>

        <!-- Admin-->
        <div>
            <h1 class='ministryTitle'>Admin</h1>
            <div>
                <span class="statusContainer" v-for="status in statuses">
                    <RadioButton v-model="editMinistry[0].admin" :inputId="status.key" name="dynamic"
                        :value="status.name" />
                    <label :for="status.key" class="ml-2">{{ status.name }}</label>
                </span>
            </div>
        </div>

        <!-- Music-->
        <div>
            <h1 class='ministryTitle'>Music</h1>
            <div>
                <span class="statusContainer" v-for="status in statuses">
                    <RadioButton v-model="editMinistry[0].music" :inputId="status.key" name="dynamic"
                        :value="status.name" />
                    <label :for="status.key" class="ml-2">{{ status.name }}</label>
                </span>
            </div>
        </div>

        <!-- Creative Design-->
        <div>
            <h1 class='ministryTitle'>Creative Design</h1>
            <div>
                <span class="statusContainer" v-for="status in statuses">
                    <RadioButton v-model="editMinistry[0].creativeDesign" :inputId="status.key" name="dynamic"
                        :value="status.name" />
                    <label :for="status.key" class="ml-2">{{ status.name }}</label>
                </span>
            </div>
        </div>

        <span id="editBttnContainer">
            <Button type="button" size='small' label="Update" icon='pi pi-send' />
        </span>

    </div>



</template>

<style scoped>
.header {
    display: flex;
    align-items: center;
    justify-content: space-between
}

.selectMinistryContainer {
    display: flex;
    align-items: center;
    gap: 1em;
}

#selectMinistry {
    width: 10em;
}

#filterContainer {
    display: flex;
    align-items: center;
    gap: 10px;
}

.searchContainer {
    width: 20em;

}

.searchInput {
    width: 100%;

}

#statisticsTitle {
    font-family: Inter-SemiBold;
    display: flex;
    gap: 1em;
    width: 100%;
    background-color: white;
    margin: 1em 0 1em 0;
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



.labelContainer {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;


}

.tablecontent {
    display: flex;
    width: 100%;
    justify-content: center;

}

.editBttn {
    font-size: 12px;
    font-family: Inter-SemiBold;
    color: var(--blue1);
    background-color: #E3F0FF;

}

.statusContainer {
    display: flex;
    align-items: center;
    gap: 10px;

}

.editContainer {
    display: flex;
    flex-direction: column;
    align-items: center;


}

.editContainer> :nth-child(1) {
    display: flex;
    align-items: center;
    width: 100%;

}

.editContainer>div {
    display: flex;
    justify-content: space-between;
    width: 95%;
    padding: .8em 0;
    border-bottom: 2px solid var(--gray5);
    font-size: 13px;

}

.editContainer>div>div {
    display: flex;
    align-items: center;
    gap: 3em;
    font-size: 13px;

}

#itemName {
    display: flex;
    width: 97%;
    margin: 1em 0 1em 0;
    background-color: var(--purple);
    color: white;
    font-family: Inter-SemiBold;
    font-size: 14px;
    padding: .6em 1em;
}


.statusContainer> :nth-child(2) {
    margin-right: 1em;
    font-size: 12px;
}


.ministryTitle {
    width: 30%;
    font-family: Inter-SemiBold;
    font-size: 13px;
    color: var(--green1);
}

.card1 {
    padding: 0 0 2em 0;
}



#editBttnContainer {
    margin-top: 2em;
    display: flex;
    width: 95%;
    justify-content: flex-end;

}

#editBttnContainer> :nth-child(1) {
    background-color: var(--blue1);
    color: white;
}
</style>