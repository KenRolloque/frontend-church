<script setup>
import One2One_Table from '../addModal/add_one2one.vue'
import { ref, onMounted, watch, computed } from 'vue'
import { AxiosInstance } from '../../../../src/axios_instance'
import add_church_community from '../addModal/add_church_community.vue'
import axios from 'axios'
import { changeBackground } from '../../../../src/state/ministryRouting'
import { storeToRefs } from 'pinia'


const bg = changeBackground()

const activeClasses = computed({
    get() { return bg.selectedClasses },
    set(val) {
        bg.selectedClasses = val
    }
})

watch(activeClasses, () => {
    console.log(1)
    getClasses();
})


const headerStyle = {
    fontSize: '13px',
    color: '#696969'
}

const columns = [
    { field: 'attendees_fullname', header: 'Attendees Name' },
    { field: 'date', header: 'Date ' },
    { field: 'status', header: 'Status' },

]
const data = ref()
const selectedUser = ref()
const filters = ref()
const model = ref()



async function getClasses() {

    if (activeClasses.value != 'one2one' || activeClasses.value != 'vicweek') {
        console.log("others")
        try {
            AxiosInstance();
            const response = await axios.get('/api/classes/get/' + bg.selectedClasses)
            data.value = await response.data

        } catch (error) {

        }
    }
}



onMounted(() => {
    getClasses()
})
</script>
<template>
    s
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

                    <add_church_community />

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