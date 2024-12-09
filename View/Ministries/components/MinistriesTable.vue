<script setup>
import MinistriesEditRecord from './MinistriesEditRecord.vue';
import { FilterMatchMode, FilterOperator } from '@primevue/core/api';
import { ref, computed } from 'vue'

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


const isShow = ref(false)
const editData = ref();
function showEditMinistry(status, data) {
    isShow.value = status

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

const items = [
    {
        label: 'All',
        command: attendeeFilter(),
    },
    {
        label: 'Kids',
        command: attendeeFilter(),
    },
    {
        label: 'Prayer Team',
        command: attendeeFilter(),
    },
    {
        label: 'Ushering & Security ',
        command: attendeeFilter(),
    },
    {
        label: 'Communication',
        command: attendeeFilter(),
    },
    {
        label: 'Technical & Stage Management',
        command: attendeeFilter(),
    },
    {
        label: 'Admin',
        command: attendeeFilter(),
    },
    {
        label: 'Music Team',
        command: attendeeFilter(),
    },
    {
        label: 'Creative Design',
        command: attendeeFilter(),
    },

];
var selectedUser = ref();
function attendeeFilter() { }

const isDisabled = computed(() => {
    return selectedUser.value == undefined ? true : false;
})

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
    <DataTable v-model:selection="selectedUser" v-model:filters="filters" :value="data" stripedRows paginator :rows="5"
        :rowPerPageOptions="[5, 10, 20, 30, 40, 50]" showGridlines tableStyle="min-width: 50rem" v-if="isShow == false">

        <template #header>
            <div class="header">

                <IconField class="searchContainer">
                    <InputIcon class="pi pi-search" />
                    <InputText v-model="filters['global'].value" class="searchInput" placeholder="Search" />
                </IconField>
                <span class="actionContainer">
                    <Button :disabled="isDisabled" @click="showEditMinistry(true, data)" id="editBttn"
                        severity="secondary" icon="pi pi-pencil" label="Edit" text aria-label="Filter" />
                    <SplitButton size="small" severity="secondary" label="Ministry" :model="items" />
                </span>
            </div>
        </template>
        <Column selectionMode="single" headerStyle="width: 3rem"></Column>
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

    </DataTable>



    <div class="editContainer" v-if="isShow == true">
        <h6>
            <Button @click="showEditMinistry(false)" icon=" pi pi-arrow-left" text rounded />
            Back
        </h6>

        <MinistriesEditRecord :data=selectedUser />


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
    width: 30em;

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





.tablecontent {
    display: flex;
    width: 100%;
    justify-content: center;

}

.actionContainer {
    display: flex;
    gap: .5em
}

#editBttn {
    font-size: 11px;
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
</style>