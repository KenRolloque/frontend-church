<script setup>
import One2One_Table from '../addModal/add_one2one.vue'
import { ref, onMounted } from 'vue'
import { AxiosInstance } from '../../../../src/axios_instance'
import axios from 'axios'

const headerStyle = {
    fontSize: '13px',
    color: '#696969'
}

const columns = [
    { field: 'attendee_fullname', header: 'Attendees Name' },
    { field: 'leader_fullname', header: 'Leader' },
    { field: 'date_start', header: 'Date Started' },
    { field: 'date_end', header: 'Date End' },
    { field: 'status', header: 'Status' },
]
const data = ref()
const selectedUser = ref()
const filters = ref()
const model = ref()

async function getOne2One_data() {
    try {
        AxiosInstance();
        const responsed = await axios.get('/api/one2one/get');
        data.value = await responsed.data
    } catch (error) {

    }
}

onMounted(() => {
    getOne2One_data()
})
</script>
<template>
    <DataTable v-model:filters="filters" v-model:selection="selectedUser" :value="data" stripedRows paginator :rows="5"
        :rowPerPageOptions="[5, 10, 20, 30, 40, 50]" showGridlines tableStyle="min-width: 50rem">

        <template #header>
            <div id="header">

                <IconField class="searchContainer">
                    <InputIcon class="pi pi-search" />
                    <InputText class="searchInput" placeholder="Search" />
                </IconField>
                <span class="actionContainer">
                    <Button id="editBttn" severity="secondary" icon="pi pi-pencil" label="Edit" text
                        aria-label="Filter" />

                    <One2One_Table />

                    <!-- <Button @click="showEditMinistry(true, data)" id="addBttn" severity="secondary"
                        icon="pi pi-plus-circle" label="Add" text aria-label="Filter" /> -->
                    <!-- <SplitButton size="small" severity="secondary" label="Ministry" :model="items" /> -->
                </span>

            </div>
        </template>
        <Column v-for="column in columns" :key="column.field" :header="column.header" :field="column.field"
            :style="headerStyle"></Column>

    </DataTable>
</template>

<style scoped>
.searchContainer {
    width: 30em;
}

.searchInput {
    width: 100%;

}

#header {

    display: flex;
    align-items: center;
    justify-content: space-between
}

.actionContainer {
    display: flex;
    gap: .3em
}

#editBttn,
#addBttn {
    font-size: 11px;


}
</style>