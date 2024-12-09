<script setup>
import { getAttendance } from '../../../src/state/attendance.js'
import { ref, toRef, onMounted, watch, computed } from 'vue'
import axios from 'axios'

const props = defineProps({
    records: Object
})

const service = computed({
    get: () => props.records
})
const data = ref()

watch(props, async (newData) => {
    data.value = newData
})

onMounted(() => {

})


</script>
<template>

    <Card class="card" v-if="data">
        <template #title>
            <span class="cardTitle">
                <h6 v-if="data.records.service == undefined"> Overall Record</h6>
                <h6 v-if="data.records.service != undefined"> {{ data.records.service }} Record</h6>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                </svg>
            </span>

        </template>
        <template #subtitle>
            <span class="subTitle">
                <Tag severity="secondary" value="Secondary" style="font-size: 12px;">
                    {{ data.records.attendance_date }}
                </Tag>
                <h6></h6>
                <!-- {{ record.attendance_date }} -->
            </span>
        </template>
        <template #content>


            <span id="totalCount" class="countService">
                <h6>Adult</h6>
                <h6>{{ data.records.attendance_adults }}</h6>
            </span>

            <span id="totalCount" class="countService">
                <h6>Foreigner </h6>
                <h6>{{ data.records.attendance_foreigner }}</h6>
            </span>

            <span id="totalCount">
                <h6>Toddler</h6>
                <h6>{{ data.records.attendance_toddlers }}</h6>
            </span>

            <span id="totalCount">
                <h6>Kids Church</h6>
                <h6>{{ data.records.attendance_kids }}</h6>
            </span>

            <span id="totalCount" class="totalCount">
                <h6>Total </h6>
                <h6> {{ data.records.attendance_total }}</h6>
            </span>
        </template>
    </Card>
</template>

<style scoped>
.card {
    padding: .3em;
}

.cardTitle {
    display: flex;
    color: var(--blue2);
    font-family: Inter-SemiBold;
}

.cardTitle>svg {
    color: var(--green1);
    width: 1.2em;
}



#totalCount {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    gap: 1em;
    font-size: 13px;
    font-family: Inter-SemiBold;
    margin-top: .5em;
    padding: 3px 5px;
    border-bottom: 1px solid var(--gray1)
}

#totalCount> :first-child {
    width: 40%;
}

.totalCount {
    font-size: 12px;
    background-color: var(--green2);
    color: white;
    border-radius: 4px
        /* background-color: var(--green2);
    color: white;
    padding: 3px 10px;
    border-radius: 5px */
}

#statisticsTitle>svg {
    width: 2em;
}
</style>