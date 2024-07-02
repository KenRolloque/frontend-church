<script setup>
import { ref } from 'vue'
import dialogue from './dialogue.vue'

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

    }
])

var updateData = ref()


function getData(myData) {
    hideUpdate.value = true
    updateData.value = myData

}

function changeData() {
    console.log(JSON.stringify(updateData.value));
}


</script>



<template>

    <h1 id="statisticsTitle">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="size-">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
        </svg>
        Attendees
    </h1>

    <div id="filterContainer" v-if="hideUpdate === false">
        <ul>
            <li :class="{ activeService: activeService === 'all' }" @click="changeService('all')">All</li>
            <li :class="{ activeService: activeService === '9am' }" @click="changeService('9am')">9am</li>
            <li :class="{ activeService: activeService === '11am' }" @click="changeService('11am')">11am</li>
            <li :class="{ activeService: activeService === '3pm' }" @click="changeService('3pm')">3pm</li>
            <li :class="{ activeService: activeService === '5pm' }" @click="changeService('5pm')">5pm</li>
            <li :class="{ activeService: activeService === 'ys' }" @click="changeService('ys')">Youth Service</li>
        </ul>
    </div>

    <div class="tableContainer" v-if="hideUpdate === false">

        <DataTable :value="data" showGridlines tableStyle="min-width: 50rem">
            <Column :style="headerStyle" field="lname" header="Last Name"></Column>
            <Column :style="headerStyle" field="fname" header="First Name"></Column>
            <Column :style="headerStyle" field="mname" header="Middle Initial"></Column>
            <Column :style="headerStyle" field="facebook" header="Facebook"></Column>
            <Column :style="headerStyle" field="birthday" header="Birthday"></Column>
            <Column :style="headerStyle" field="mobileNumber" header="Mobile No."></Column>
            <Column :style="headerStyle" field="lifeStage" header="Life Stage"></Column>
            <Column :style="headerStyle" field="sectorOfSociety" header="Sector of Society"></Column>
            <Column :style="headerStyle" field="school" header="School"></Column>
            <Column :style="headerStyle" field="schoolLevel" header="School Level"></Column>
            <Column :style="headerStyle" field="serviceCommitment" header="Service Commitment"></Column>
            <Column :style="headerStyle" header="Action">
                <template #body>
                    <div class="actionContainer">

                        <Button @click="getData(data)" size="small" icon="pi pi-pencil" severity="info" text rounded />
                        <!-- <Button size="small" icon="pi pi-trash" severity="danger" text rounded /> -->
                        <dialogue />


                    </div>
                </template>
            </Column>

        </DataTable>
    </div>


    <div class="editContainer" v-if="hideUpdate === true">
        <form action="">
            <span id="headerTitle">
                <Button @click="hideUpdate = false" icon="pi pi-arrow-left" text raised rounded />
                <h6>Update Data</h6>
            </span>

            <span class='inputContainer'>
                <h6>Last Name</h6>
                <InputText id="lastname" v-model="updateData[0].lname" type="text" placeholder="Last Name" />
            </span>

            <span class='inputContainer'>
                <h6>First Name</h6>
                <InputText v-model="updateData[0].fname" type="text" placeholder="First Name" />
            </span>

            <span class='inputContainer'>
                <h6>Middle Initial</h6>
                <InputText v-model="updateData[0].mname" type="text" placeholder="Middle Initial" />
            </span>

            <span class='inputContainer'>
                <h6>Facebook</h6>
                <InputText v-model="updateData[0].facebook" type="text" placeholder="Facebook Account" />
            </span>

            <span class='inputContainer'>
                <h6>Birthday</h6>
                <DatePicker v-model="updateData[0].birthday" showIcon iconDisplay="input"
                    placeholder='Select Birthday' />
            </span>

            <span class='inputContainer'>
                <h6>Mobile Number</h6>
                <InputText v-model="updateData[0].mobileNumber" type="text" placeholder="Mobile Number" />
            </span>


            <span class='inputContainer'>
                <h6>Life Stage</h6>
                <Select v-model="updateData[0].lifeStage" :options="lifeStage" optionValue="label" optionLabel="label"
                    placeholder="Life Stage" />
            </span>

            <span class='inputContainer'>
                <h6>Sector of Society</h6>
                <Select v-model="updateData[0].sectorOfSociety" :options="society" optionValue="label"
                    optionLabel="label" placeholder="Sector of Society" />
            </span>

            <span class='inputContainer'>
                <h6>School</h6>
                <InputText v-model="updateData[0].school" type="text" placeholder="School" />
            </span>

            <span class='inputContainer'>
                <h6>School Level</h6>
                <InputText v-model="updateData[0].schoolLevel" type="text" placeholder="School Level" />
            </span>

            <span class='inputContainer'>
                <h6>Service Commitment</h6>
                <Select v-model="updateData[0].serviceCommitment" :options="service" optionValue="label"
                    optionLabel="label" placeholder="Select service" />
            </span>

            <Button label="Submit" severity="info" @click='changeData()' />
        </form>
    </div>




</template>


<style scoped>
#statisticsTitle {
    margin: 2em 0;
    font-family: Inter-SemiBold;
    font-size: 18;

    display: flex;
    align-items: center;
    gap: 1em;
    width: 100%;
    background-color: var(--blue1);
    color: white;

    padding: .5em;
}

#statisticsTitle>svg {
    width: 1.2em;
}

/* Table Container */
#filterContainer {
    display: flex;
    align-items: center;
    flex: 1;
    /* border: 1px solid red; */
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

.activeService {
    background-color: var(--purple);
    color: white;

}



/* Table Container */
#contentContainer {
    margin-top: 1em;

}

.tableContainer {
    margin-top: 1em;
}

.tableHeader {
    background-color: var(--purple);
    color: white;
}

.actionContainer {
    display: flex;


}

#delBttn,
#editBttn {
    width: 5em;
    font-size: 12px;
    font-family: Inter-Regular;
}

#delBttn {
    color: red;
}

#editBttn {
    color: blue;
}

.editContainer {
    width: 100%;
    justify-content: center;
    display: flex;
}

.editContainer>form {
    width: 50%;
    display: flex;
    gap: 1em;
    flex-direction: column;
}

#headerTitle {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1em;
    font-family: Inter-SemiBold;
    color: var(--gray);
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
