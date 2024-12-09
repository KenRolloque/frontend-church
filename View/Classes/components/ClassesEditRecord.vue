<script setup>
import { ref, toRef, defineProps } from 'vue'

// Props
const props = defineProps({
    data: {
        type: Object,
        default: () => { }
    }
})
const data = toRef(props, 'data');

// Select Items
const statuses = ref([
    {
        name: "Completed", key: "0"
    }, {
        name: "Incomplete", key: "1"
    }
])


</script>
<template>


    <h6> {{ data.fname }} {{ data.lname }}</h6>

    <ul id="listOfClasses">
        <li>
            <h6>Victory Weekend</h6>
            <span v-for="status in statuses">
                <RadioButton v-model="data.victoryweekend" :inputId="status.key" name="dynamic" :value="status.name" />
                <label :for="status.key" class="ml-2">{{ status.name }}</label>
            </span>
        </li>
        <li>
            <h6>Church Community</h6>
            <span v-for="status in statuses">
                <RadioButton v-model="data.churchcommunity" :inputId="status.key" name="dynamic" :value="status.name" />
                <label :for="status.key" class="ml-2">{{ status.name }}</label>
            </span>
        </li>
        <li>
            <h6>Purple Book Part 1</h6>
            <span v-for="status in statuses">
                <RadioButton v-model="data.purblebook_pt1" :inputId="status.key" name="dynamic" :value="status.name" />
                <label :for="status.key" class="ml-2">{{ status.name }}</label>
            </span>
        </li>
        <li>
            <h6>Purple Book Part 2</h6>
            <span v-for="status in statuses">
                <RadioButton v-model="data.purblebook_pt2" :inputId="status.key" name="dynamic" :value="status.name" />
                <label :for="status.key" class="ml-2">{{ status.name }}</label>
            </span>
        </li>
        <li>
            <h6>Purple Book Part 3</h6>
            <span v-for="status in statuses">
                <RadioButton v-model="data.purblebook_pt2" :inputId="status.key" name="dynamic" :value="status.name" />
                <label :for="status.key" class="ml-2">{{ status.name }}</label>
            </span>
        </li>
        <li>
            <h6>Purple Book Part 4</h6>
            <span v-for="status in statuses">
                <RadioButton v-model="data.purblebook_pt3" :inputId="status.key" name="dynamic" :value="status.name" />
                <label :for="status.key" class="ml-2">{{ status.name }}</label>
            </span>
        </li>
        <li>
            <h6>Making Disciples Part 1</h6>
            <span v-for="status in statuses">
                <RadioButton v-model="data.purblebook_pt4" :inputId="status.key" name="dynamic" :value="status.name" />
                <label :for="status.key" class="ml-2">{{ status.name }}</label>
            </span>
        </li>
        <li>
            <h6>Making Disciples Part 2</h6>
            <span v-for="status in statuses">
                <RadioButton v-model="data.makingdisciples_pt1" :inputId="status.key" name="dynamic"
                    :value="status.name" />
                <label :for="status.key" class="ml-2">{{ status.name }}</label>
            </span>
        </li>
        <li>
            <h6>Empowering Leaders</h6>
            <span v-for="status in statuses">
                <RadioButton v-model="data.empoweringleaders" :inputId="status.key" name="dynamic"
                    :value="status.name" />
                <label :for="status.key" class="ml-2">{{ status.name }}</label>
            </span>
        </li>
        <li>
            <h6>Leader 113 </h6>
            <span v-for="status in statuses">
                <RadioButton v-model="data.leaders113" :inputId="status.key" name="dynamic" :value="status.name" />
                <label :for="status.key" class="ml-2">{{ status.name }}</label>
            </span>
        </li>

        <span id="editBttnContainer">
            <Button type="button" size='small' label="Update" icon='pi pi-send' />
        </span>
    </ul>

</template>

<style scoped>
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