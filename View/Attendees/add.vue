<script setup>

import { ref } from 'vue'
var isCardActive = ref(1);

function changeRecord(item) {
    this.isCardActive = item;
}
const service = ref([
    { name: '9am Service' },
    { name: '11am Service' },
    { name: '3pm Service' },
    { name: '5pm Service' },
    { name: 'Youth Service' }
]);

</script>

<template>



    <div id="addFilter">
        <span>
            <Button label="Add Service Record" class="button1" severity="secondary"
                :class="{ addCardActive: isCardActive === 1 }" @click="changeRecord(1)" />

            <Button class="button1" label=" Add Attendees Record" severity="secondary"
                :class="{ addCardActive: isCardActive === 2 }" @click="changeRecord(2)" />
        </span>

        <span id="serviceRecordContainer" v-if="isCardActive === 1">
            <form action="">
                <DatePicker showIcon iconDisplay="input" placeholder='Select date' />
                <Select :options="service" optionLabel="name" placeholder="Select service" />
                <InputText type="number" placeholder="Total Number of Adults" />
                <InputText type="number" placeholder="Total Number of Foreigner" />
                <InputText type="number" placeholder="Total Number of Kids" />
                <InputText type="number" placeholder="Total Attendees" />

                <Button label="Submit" severity="info" />
            </form>
        </span>

        <span id="attendeesRecordContainer" v-if="isCardActive === 2">

            <form action="">


                <InputText type="text" placeholder="Last Name" />
                <InputText type="text" placeholder="First Name" />
                <InputText type="text" placeholder="Middle Initial" />
                <InputText type="text" placeholder="Facebook Account" />
                <DatePicker v-model="buttondisplay" showIcon iconDisplay="input" placeholder='Select Birthday' />
                <InputText type="text" placeholder="Mobile Number" />
                <Select :options="service" optionLabel="name" placeholder="Life Stage" />
                <Select :options="service" optionLabel="name" placeholder="Sector of Society" />
                <InputText type="text" placeholder="School" />
                <InputText type="text" placeholder="School Level" />
                <Select :options="service" optionLabel="name" placeholder="Select service" />


                <Button label="Submit" severity="info" />
            </form>
        </span>
    </div>

</template>


<style scoped>
#statisticsTitle {
    font-family: Inter-SemiBold;
    display: flex;
    align-items: center;
    justify-content: center;

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

.addCardActive {
    background-color: var(--blue2);
    color: white;
}

.button1 {
    font-size: 14px;


}

#serviceRecordContainer {
    width: 100%;
    display: flex;
}

#serviceRecordContainer>form {
    display: flex;

    flex-direction: column;
    gap: 1em;
    width: 100%;

}

#submitServiceRecordBttn {
    background-color: var(--blue1);
    color: white;
    height: 3em;
}

#addFilter {
    display: flex;
    margin-top: 1em;
    gap: 1em;
    padding: 1em 2em;
}

#addFilter> :first-child {
    display: flex;
    flex-direction: column;
    gap: 1em;
    width: 30%;
}

/* Attendees Service Record */
#attendeesRecordContainer {
    width: 100%;
    display: flex;
    margin-bottom: 1em;
}

#attendeesRecordContainer>form {
    display: flex;
    flex-direction: column;
    gap: 1em;
    width: 100%;
}
</style>