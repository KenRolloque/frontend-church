<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import MinistriesAdd from './MinistiriesAdd.vue'
import axios from 'axios'
import { AxiosInstance } from '../../../src/axios_instance'
import { changeBackground } from '../../../src/state/ministryRouting'


var bg = changeBackground()
var ministry = computed({
    get() { return bg.selectedMinistry },
    set(newVal) { bg.selectedMinistry = newVal }
})

watch(ministry, () => {
    getMinistryData()
})

const headerStyle = {
    fontSize: '13px',
    color: '#696969'
}

const columns = [
    { field: 'attendees_fullname', header: 'Fullname' },
    { field: 'date_joined', header: 'Date Joined' },
    { field: 'service_commitment', header: 'Service' },
]


const data = ref()
const selectedUser = ref()
const filters = ref()

// 
async function getMinistryData() {

    try {
        AxiosInstance();
        const response = await axios.get('/api/ministry/' + bg.selectedMinistry + '/get');
        data.value = response.data
    } catch (error) {
        console.log(error)
    }

}

onMounted(() => {
    getMinistryData();
})
</script>

<template>

    <DataTable v-model:selection="selectedUser" :value="data" stripedRows paginator :rows="5"
        :rowPerPageOptions="[5, 10, 20, 30, 40, 50]" showGridlines tableStyle="min-width: 50rem">

        <template #header>
            <div id="header">

                <IconField class="searchContainer">
                    <InputIcon class="pi pi-search" />
                    <InputText class="searchInput" placeholder="Search" />
                </IconField>
                <span class="actionContainer">
                    <Button @click="showEditMinistry(true, data)" id="editBttn" severity="secondary" icon="pi pi-pencil"
                        label="Edit" text aria-label="Filter" />

                    <MinistriesAdd />
                    <Button icon="pi pi-refresh" id="refreshBttn" severity="secondary" label="Refresh" size="small"
                        @click="getMinistryData()"></Button>

                    <!-- <Button @click="showEditMinistry(true, data)" id="addBttn" severity="secondary"
                        icon="pi pi-plus-circle" label="Add" text aria-label="Filter" /> -->
                    <!-- <SplitButton size="small" severity="secondary" label="Ministry" :model="items" /> -->
                </span>

            </div>
        </template>
        <Column v-for="column in columns" :key="column.field" :header="column.header" :field="column.field"
            :style="headerStyle"></Column>

        <Column :style="headerStyle" field='status' header="Status">
            <template #body=slotProps>
                <div class="statusContainer">
                    <Tag class="w-full " style="font-size: 10px;" severity="success" :value=slotProps.data.status></Tag>
                </div>
            </template>
        </Column>

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
    /* background-color: var(--gray4); */

}

#refreshBttn {

    font-size: 11px;
}

.statusContainer {
    width: 100%;
    display: flex;
    justify-content: center;
}
</style>