<script setup>
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
    }
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
    {
        field: 'action',
        header: 'Action'
    }



]

</script>

<template>
    <h1 id="statisticsTitle">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
        </svg>
        Ministry Data
    </h1>

    <DataTable :value="data" showGridlines tableStyle="min-width: 50rem" v-if="isShow == false">
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


    <Card v-if="isShow == true" class="card1">
        <template #content>
            <div class="editContainer">
                <h6>
                    <Button @click="showEditMinistry(false)" icon=" pi pi-arrow-left" text rounded />
                    Update Ministry
                </h6>

                <h6 id="itemName">Ken Mark Rolloque - 9am Service</h6>


                <!-- Kids Church -->
                <div>
                    <h1 class='ministryTitle'>Kids Church</h1>
                    <div v-for="status in statuses">
                        <span class="statusContainer">
                            <RadioButton v-model="editMinistry[0].kidsChurch" :inputId="status.key" name="dynamic"
                                :value="status.name" />
                            <label :for="status.key" class="ml-2">{{ status.name }}</label>
                        </span>
                    </div>
                </div>

                <!-- Prayer Team -->
                <div>
                    <h1 class='ministryTitle'>Prayer Team</h1>
                    <div v-for="status in statuses">
                        <span class="statusContainer">
                            <RadioButton v-model="editMinistry[0].prayerTeam" :inputId="status.key" name="dynamic"
                                :value="status.name" />
                            <label :for="status.key" class="ml-2">{{ status.name }}</label>
                        </span>
                    </div>
                </div>

                <!-- Ushering & Security-->
                <div>
                    <h1 class='ministryTitle'>Ushering & Security</h1>
                    <div v-for="status in statuses">
                        <span class="statusContainer">
                            <RadioButton v-model="editMinistry[0].ushering" :inputId="status.key" name="dynamic"
                                :value="status.name" />
                            <label :for="status.key" class="ml-2">{{ status.name }}</label>
                        </span>
                    </div>
                </div>

                <!-- Communications-->
                <div>
                    <h1 class='ministryTitle'>Communications</h1>
                    <div v-for="status in statuses">
                        <span class="statusContainer">
                            <RadioButton v-model="editMinistry[0].communication" :inputId="status.key" name="dynamic"
                                :value="status.name" />
                            <label :for="status.key" class="ml-2">{{ status.name }}</label>
                        </span>
                    </div>
                </div>

                <!-- Technical & Stage Management-->
                <div>
                    <h1 class='ministryTitle'>Technical & Stage Management</h1>
                    <div v-for="status in statuses">
                        <span class="statusContainer">
                            <RadioButton v-model="editMinistry[0].technical" :inputId="status.key" name="dynamic"
                                :value="status.name" />
                            <label :for="status.key" class="ml-2">{{ status.name }}</label>
                        </span>
                    </div>
                </div>

                <!-- Admin-->
                <div>
                    <h1 class='ministryTitle'>Admin</h1>
                    <div v-for="status in statuses">
                        <span class="statusContainer">
                            <RadioButton v-model="editMinistry[0].admin" :inputId="status.key" name="dynamic"
                                :value="status.name" />
                            <label :for="status.key" class="ml-2">{{ status.name }}</label>
                        </span>
                    </div>
                </div>

                <!-- Music-->
                <div>
                    <h1 class='ministryTitle'>Music</h1>
                    <div v-for="status in statuses">
                        <span class="statusContainer">
                            <RadioButton v-model="editMinistry[0].music" :inputId="status.key" name="dynamic"
                                :value="status.name" />
                            <label :for="status.key" class="ml-2">{{ status.name }}</label>
                        </span>
                    </div>
                </div>

                <!-- Creative Design-->
                <div>
                    <h1 class='ministryTitle'>Creative Design</h1>
                    <div v-for="status in statuses">
                        <span class="statusContainer">
                            <RadioButton v-model="editMinistry[0].creativeDesign" :inputId="status.key" name="dynamic"
                                :value="status.name" />
                            <label :for="status.key" class="ml-2">{{ status.name }}</label>
                        </span>
                    </div>
                </div>

                <div id="updateBttnContainer">
                    <Button size="small" id="updateBttn" label='Update' />
                </div>

            </div>
        </template>
    </Card>


</template>

<style scoped>
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
    padding: 1em 0;

}

.editContainer>div {
    display: flex;
    margin-top: 1em;
    gap: 6em;
    padding: 0 4em;
}



.statusContainer> :nth-child(2) {
    margin-right: 1em;
    font-size: 12px;
}

.ministryTitle {
    width: 30%;
}

.card1 {
    padding: 0 0 2em 0;
}

#itemName {
    background-color: var(--blue1);
    margin: 0 3em;
    padding: .5em 1em;
    margin-top: 1em;
    font-family: Inter-SemiBold;
    font-size: 16px;
    color: white;
}

#updateBttnContainer {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    /* border: 1px solid red; */
    margin-top: 2em
}

#updateBttn {
    width: 100%;
}
</style>