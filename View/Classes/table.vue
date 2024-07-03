<script setup>
import { ref } from 'vue'

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


var selectedRow = ref();
var isEdit = ref(false)
function selectRow(status, data) {
    selectedRow.value = data;
    isEdit.value = status;
}


const statuses = ref([
    {
        name: "Completed", key: "0"
    }, {
        name: "Incomplete", key: "1"
    }
])
</script>

<template>
    <div id="filterContainer" v-if="!isEdit">
        <ul>
            <li :class="{ activeService: activeService === 'all' }" @click="changeService('all')">All</li>
            <li :class="{ activeService: activeService === '9am' }" @click="changeService('9am')">9am</li>
            <li :class="{ activeService: activeService === '11am' }" @click="changeService('11am')">11am</li>
            <li :class="{ activeService: activeService === '3pm' }" @click="changeService('3pm')">3pm</li>
            <li :class="{ activeService: activeService === '5pm' }" @click="changeService('5pm')">5pm</li>
            <li :class="{ activeService: activeService === 'ys' }" @click="changeService('ys')">Youth Service</li>
        </ul>
    </div>

    <div class="tableContainer" v-if="!isEdit">
        <DataTable class="myTable" :value="data" showGridlines scrollable tableStyle="min-width: 50rem;">
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

        <h6> {{ data[0].fname }}</h6>

        <ul id="listOfClasses">
            <li>
                <h6>Victory Weekend</h6>
                <span v-for="status in statuses">
                    <RadioButton v-model="selectedRow[0].victoryweekend" :inputId="status.key" name="dynamic"
                        :value="status.name" />
                    <label :for="status.key" class="ml-2">{{ status.name }}</label>
                </span>
            </li>
            <li>
                <h6>Church Community</h6>
                <span v-for="status in statuses">
                    <RadioButton v-model="selectedRow[0].churchcommunity" :inputId="status.key" name="dynamic"
                        :value="status.name" />
                    <label :for="status.key" class="ml-2">{{ status.name }}</label>
                </span>
            </li>
            <li>
                <h6>Purple Book Part 1</h6>
                <span v-for="status in statuses">
                    <RadioButton v-model="selectedRow[0].purblebook_pt1" :inputId="status.key" name="dynamic"
                        :value="status.name" />
                    <label :for="status.key" class="ml-2">{{ status.name }}</label>
                </span>
            </li>
            <li>
                <h6>Purple Book Part 2</h6>
                <span v-for="status in statuses">
                    <RadioButton v-model="selectedRow[0].purblebook_pt2" :inputId="status.key" name="dynamic"
                        :value="status.name" />
                    <label :for="status.key" class="ml-2">{{ status.name }}</label>
                </span>
            </li>
            <li>
                <h6>Purple Book Part 3</h6>
                <span v-for="status in statuses">
                    <RadioButton v-model="selectedRow[0].purblebook_pt2" :inputId="status.key" name="dynamic"
                        :value="status.name" />
                    <label :for="status.key" class="ml-2">{{ status.name }}</label>
                </span>
            </li>
            <li>
                <h6>Purple Book Part 4</h6>
                <span v-for="status in statuses">
                    <RadioButton v-model="selectedRow[0].purblebook_pt3" :inputId="status.key" name="dynamic"
                        :value="status.name" />
                    <label :for="status.key" class="ml-2">{{ status.name }}</label>
                </span>
            </li>
            <li>
                <h6>Making Disciples Part 1</h6>
                <span v-for="status in statuses">
                    <RadioButton v-model="selectedRow[0].purblebook_pt4" :inputId="status.key" name="dynamic"
                        :value="status.name" />
                    <label :for="status.key" class="ml-2">{{ status.name }}</label>
                </span>
            </li>
            <li>
                <h6>Making Disciples Part 2</h6>
                <span v-for="status in statuses">
                    <RadioButton v-model="selectedRow[0].makingdisciples_pt1" :inputId="status.key" name="dynamic"
                        :value="status.name" />
                    <label :for="status.key" class="ml-2">{{ status.name }}</label>
                </span>
            </li>
            <li>
                <h6>Empowering Leaders</h6>
                <span v-for="status in statuses">
                    <RadioButton v-model="selectedRow[0].empoweringleaders" :inputId="status.key" name="dynamic"
                        :value="status.name" />
                    <label :for="status.key" class="ml-2">{{ status.name }}</label>
                </span>
            </li>
            <li>
                <h6>Leader 113 </h6>
                <span v-for="status in statuses">
                    <RadioButton v-model="selectedRow[0].leaders113" :inputId="status.key" name="dynamic"
                        :value="status.name" />
                    <label :for="status.key" class="ml-2">{{ status.name }}</label>
                </span>
            </li>

            <span id="editBttnContainer">
                <Button type="button" size='small' label="Update" icon='pi pi-send' />
            </span>
        </ul>

    </div>


</template>

<style scoped>
#filterContainer {
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
}

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

#listOfClasses {
    display: flex;
    flex-direction: column;

    width: 90%;
    margin-top: 1em;

}

#listOfClasses>li {
    display: flex;
    width: 100%;
    padding: .8em 0;
    border-bottom: 2px solid var(--gray5);

}

#listOfClasses>li>h6 {
    width: 90%;
    font-family: Inter-SemiBold;
    font-size: 13px;
    color: var(--green1);
}

#listOfClasses>li>span {
    display: flex;
    align-items: center;
    gap: 1em;
    margin-right: 3em;
    font-size: 13px;

}

#editBttnContainer {
    margin-top: 2em;
    display: flex;
    width: 100%;
    justify-content: flex-end;

}

#editBttnContainer> :nth-child(1) {
    background-color: var(--blue1);
    color: white;
}
</style>