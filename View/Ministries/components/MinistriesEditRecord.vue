<script setup>
import { toRef, ref, defineProps } from 'vue';

// Props
const props = defineProps({
    data: {
        type: Object
    }
})
const data = toRef(props, 'data')

// Select Items
const statuses = ref([
    {
        name: "Member", key: "0"
    }, {
        name: "Not Member", key: "1"
    }
])

</script>

<template>
    <h6 id="itemName">{{ data.fname }} {{ data.lname }} - {{ data.serviceCommitment }}</h6>


    <!-- Kids Church -->
    <div class="ministryContainer">
        <h1 class='ministryTitle'>Kids Church</h1>
        <div>
            <span class="statusContainer" v-for="status in statuses">
                <RadioButton v-model="data.kidsChurch" :inputId="status.key" name="dynamic" :value="status.name" />
                <label :for="status.key" class="ml-2">{{ status.name }}</label>
            </span>
        </div>
    </div>

    <!-- Prayer Team -->
    <div class="ministryContainer">
        <h1 class='ministryTitle'>Prayer Team</h1>
        <div>
            <span class="statusContainer" v-for="status in statuses">
                <RadioButton v-model="data.prayerTeam" :inputId="status.key" name="dynamic" :value="status.name" />
                <label :for="status.key" class="ml-2">{{ status.name }}</label>
            </span>
        </div>
    </div>

    <!-- Ushering & Security-->
    <div class="ministryContainer">
        <h1 class='ministryTitle'>Ushering & Security</h1>
        <div>
            <span class="statusContainer" v-for="status in statuses">
                <RadioButton v-model="data.ushering" :inputId="status.key" name="dynamic" :value="status.name" />
                <label :for="status.key" class="ml-2">{{ status.name }}</label>
            </span>
        </div>
    </div>

    <!-- Communications-->
    <div class="ministryContainer">
        <h1 class='ministryTitle'>Communications</h1>
        <div>
            <span class="statusContainer" v-for="status in statuses">
                <RadioButton v-model="data.communication" :inputId="status.key" name="dynamic" :value="status.name" />
                <label :for="status.key" class="ml-2">{{ status.name }}</label>
            </span>
        </div>
    </div>

    <!-- Technical & Stage Management-->
    <div class="ministryContainer">
        <h1 class='ministryTitle'>Technical & Stage Management</h1>
        <div>
            <span class="statusContainer" v-for="status in statuses">
                <RadioButton v-model="data.technical" :inputId="status.key" name="dynamic" :value="status.name" />
                <label :for="status.key" class="ml-2">{{ status.name }}</label>
            </span>
        </div>
    </div>

    <!-- Admin-->
    <div class="ministryContainer">
        <h1 class='ministryTitle'>Admin</h1>
        <div>
            <span class="statusContainer" v-for="status in statuses">
                <RadioButton v-model="data.admin" :inputId="status.key" name="dynamic" :value="status.name" />
                <label :for="status.key" class="ml-2">{{ status.name }}</label>
            </span>
        </div>
    </div>

    <!-- Music-->
    <div class="ministryContainer">
        <h1 class='ministryTitle'>Music</h1>
        <div>
            <span class="statusContainer" v-for="status in statuses">
                <RadioButton v-model="data.music" :inputId="status.key" name="dynamic" :value="status.name" />
                <label :for="status.key" class="ml-2">{{ status.name }}</label>
            </span>
        </div>
    </div>

    <!-- Creative Design-->
    <div class="ministryContainer">
        <h1 class='ministryTitle'>Creative Design</h1>
        <div>
            <span class="statusContainer" v-for="status in statuses">
                <RadioButton v-model="data.creativeDesign" :inputId="status.key" name="dynamic" :value="status.name" />
                <label :for="status.key" class="ml-2">{{ status.name }}</label>
            </span>
        </div>
    </div>

    <span id="editBttnContainer">
        <Button type="button" size='small' label="Update" icon='pi pi-send' />
    </span>

</template>

<style scoped>
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


.ministryContainer {
    display: flex;
    justify-content: space-between;
    width: 95%;
    padding: .8em 0;
    border-bottom: 2px solid var(--gray5);
    font-size: 13px;

}

.ministryContainer>div {

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
</style>