<script setup>
import { ref, computed } from 'vue'
import ClassesEditRecord from './ClassesEditRecord.vue';

const headerStyle = {
    fontSize: '13px',
    color: '#696969'
}

var activeService = ref('all');
var hideUpdate = ref(false);
var columns = ([
    {
        column: 'lname',
        header: 'Last Name'
    },
    {
        column: 'fname',
        header: 'First Name'
    },
    {
        column: 'one2one',
        header: 'One2One'
    },
    {
        column: 'victoryweekend',
        header: 'Victory Weekend'
    },
    {
        column: 'churchcommunity',
        header: 'Church Community'
    },
    {
        column: 'purblebook_pt1',
        header: 'Purprle Book Part 1'
    },
    {
        column: 'purblebook_pt2',
        header: 'Purprle Book Part 2'
    },
    {
        column: 'purblebook_pt3',
        header: 'Purprle Book Part 3'
    }
    ,
    {
        column: 'purblebook_pt4',
        header: 'Purprle Book Part 4'
    },
    {
        column: 'makingdisciples_pt1',
        header: 'Making Disciples Part 1'
    }
    ,
    {
        column: 'makingdisciples_pt2',
        header: 'Making Disciples Part 2'
    },
    {
        column: 'empoweringleaders',
        header: 'Empowering Leaders'
    },
    {
        column: 'leaders113',
        header: 'Leaders 113'
    }
])

var data = ([
    {
        lname: 'Rolloque',
        fname: 'Ken Mark',
        one2one: 'Completed',
        victoryweekend: 'Completed',
        churchcommunity: 'Completed',
        purblebook_pt1: 'Completed',
        purblebook_pt2: 'Completed',
        purblebook_pt3: 'Completed',
        purblebook_pt4: 'Completed',
        makingdisciples_pt1: 'Completed',
        makingdisciples_pt2: 'Completed',
        empoweringleaders: 'Incomplete',
        leaders113: 'Incomplete',
    }
])


function changeService(service) {
    activeService.value = service;

}



var isEdit = ref(false)
function selectRow(status) {
    isEdit.value = status;
}

// Select Items
const items = [
    {
        label: 'One2One',
        command: attendeeFilter(),
    },
    {
        label: 'Victory Weekend',
        command: attendeeFilter(),
    },
    {
        label: 'Church Community',
        command: attendeeFilter(),
    },
    {
        label: 'Purple Book Part 1',
        command: attendeeFilter(),
    },
    {
        label: 'Purple Book Part 2',
        command: attendeeFilter(),
    },
    {
        label: 'Purple Book Part 3',
        command: attendeeFilter(),
    },
    {
        label: 'Purple Book Part 4',
        command: attendeeFilter(),
    },
    {
        label: 'Making Disciples Part 1',
        command: attendeeFilter(),
    },
    {
        label: 'Making Disciples Part 2',
        command: attendeeFilter(),
    },
    {
        label: 'Empowering Leaders',
        command: attendeeFilter(),
    },
    {
        label: 'Leaders 113',
        command: attendeeFilter(),
    },

];

// Filter
function attendeeFilter() { }
const selectedUser = ref()
const isEnable = computed(() => {
    return selectedUser.value == undefined ? true : false;
})

</script>

<template>
    <div class="tableContainer" v-if="!isEdit">
        <DataTable v-model:selection='selectedUser' class="myTable" :value="data" showGridlines scrollable
            tableStyle="min-width: 50rem;">

            <template #header>
                <div class="header">

                    <IconField class="searchContainer">
                        <InputIcon class="pi pi-search" />
                        <InputText class="searchInput" placeholder="Search" />
                    </IconField>
                    <span class="actionContainer">
                        <Button @click="selectRow(true)" :disabled="isEnable" id="editBttn" severity="secondary"
                            icon="pi pi-pencil" label="Edit" text aria-label="Filter" />
                        <SplitButton size="small" severity="secondary" label="Classes" :model="items" />
                    </span>
                </div>
            </template>
            <Column selectionMode="single" headerStyle="width: 3rem"></Column>
            <Column v-for="column in columns" :key="column.field" :header="column.header" :field="column.field"
                :style="headerStyle">
                <template #body="slotProps">
                    <span id="completed" v-if="slotProps.data[column.column] == 'Completed'">
                        {{ slotProps.data[column.column] }}
                    </span>

                    <span id="incomplete" v-else-if="slotProps.data[column.column] == 'Incomplete'">
                        {{ slotProps.data[column.column] }}
                    </span>

                    <span v-else>
                        {{ slotProps.data[column.column] }}
                    </span>
                </template>
            </Column>

            <Column :style="headerStyle" header="Action">
                <template #body>
                    <div class="labelContainer">
                        <Button @click="selectRow(true, data)" class="editBttn" size="small" label="Edit"
                            icon="pi pi-pencil" severity="info" text />
                    </div>
                </template>
            </Column>
        </DataTable>

    </div>
    <div class="editContainer" v-if="isEdit">
        <span>
            <Button @click="selectRow(false)" icon="pi pi-arrow-left" severity="contrast" text rounded />
            <h6>Back</h6>
        </span>
        <ClassesEditRecord :data=selectedUser />
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


.actionContainer {
    display: flex;
    gap: .5em
}

#editBttn {
    font-size: 11px;
}

/* #filterContainer {
    display: flex;
    align-items: center;
    flex: 1;
    padding: 0 2em;
    margin-top: 2em;
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
} */

#completed {
    display: flex;
    justify-content: center;
    background-color: var(--green2);
    color: white;
    padding: 2px 5px;
    border-radius: 3px;
    font-family: Inter-SemiBold;
    font-size: 10px;
}

#incomplete {
    display: flex;
    justify-content: center;
    background-color: rgb(185, 0, 0);
    color: white;
    padding: 2px 5px;
    border-radius: 3px;
    font-family: Inter-SemiBold;
    font-size: 10px;
}

.activeService {
    background-color: var(--purple);
    color: white;

}

.myTable {
    width: 70em;

}

.tableContainer {
    margin-top: 2em;
    width: 100%;
    display: flex;
    padding: 0 2em;

}

.editBttn {
    font-size: 13px;
}

/* Update */
.editContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.5em 0;
}

.editContainer> :nth-child(1) {
    display: flex;
    align-items: center;
    width: 95%;
}

.editContainer> :nth-child(2) {
    display: flex;
    width: 92%;
    margin-top: 1em;
    background-color: var(--purple);
    color: white;
    font-family: Inter-SemiBold;
    font-size: 14px;
    padding: .6em 1em;
}
</style>