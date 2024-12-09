<script setup>
import { ref, onMounted, watch, computed, defineAsyncComponent } from 'vue'
import { AxiosInstance } from '../../../src/axios_instance'
import axios from 'axios';
import { getAttendance } from '../../../src/state/attendance.js'
import { formatDate, formatDate2 } from '../../../src/dateFilter.js'
import { noRecord } from '../../../src/components/shared/sweetalert.js'
// import BarGraph from '../graphs/BarGraph.vue'

var attendance = getAttendance();

const AsyncyCard = defineAsyncComponent({
    loader: () => import('./cardRecord.vue'),
    // loadingComponent: LoadingComponent,
    delay: 1000,
    timeout: 3000,

});

const AsyncBarGraph = defineAsyncComponent({
    loader: () => import('../graphs/attendeeBarGraph.vue'),
    delay: 1000,
    timeout: 3000,
});

const filterDate = ref()
const data = ref();
// Watch Date filter


watch(filterDate, (newDate) => {
    changeFilter();

})

// Change Date
var temp = ref()
async function changeFilter() {
    try {
        AxiosInstance();
        const response = await axios.get('/api/attendance/get/latest/' + formatDate2(filterDate.value))

        if (response.status === 204) {
            noRecord();
            getData();
        }
        attendance.data = response.data;
        temp.value = response.data['Services']

        attendance.all = response.data.All

        attendance.nine = temp.value[0];

        attendance.eleven = temp.value[1];

        attendance.three = temp.value[2];

        attendance.five = temp.value[3];



    } catch (error) {
        // noRecord();
    }
}


// Fetch Data from API
async function getData() {
    AxiosInstance();
    await axios.get('/api/attendance/get/latest')
        .then(response => {
            attendance.data = response.data;
            attendance.all = response.data.All

            attendance.nine = response.data.Services[0];
            attendance.eleven = response.data.Services[1];
            attendance.three = response.data.Services[2];
            attendance.five = response.data.Services[3];

            if (attendance.nine == undefined) {
                attendance.nine == undefined

            } else if (attendance.eleven == undefined) {
                attendance.eleven == undefined

            } else if (attendance.three == undefined) {
                attendance.three == undefined

            } else if (attendance.five == undefined) {
                attendance.five == undefined

            }


            filterDate.value = response.data.date;


        })
}
onMounted(() => {

    getData();

})
</script>

<template>

    <span id="statisticsTitle">
        <h6>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
            </svg>
            All Service Record
        </h6>
    </span>
    <span id="filterRecord">
        <h6>Select Date</h6>
        <DatePicker v-model="filterDate" placeholder="mm/dd/yyyy" showIcon fluid :showOnFocus="false"
            :manualInput="false" />

    </span>
    <span id="barGraph">
        <AsyncBarGraph :records="attendance.data" />
    </span>
    <span id="data1">
        <AsyncyCard :records="attendance.all" v-if="attendance.all != undefined" />
        <AsyncyCard :records="attendance.nine" v-if="attendance.nine != undefined" />
        <AsyncyCard :records="attendance.eleven" v-if="attendance.eleven != undefined" />
        <AsyncyCard :records="attendance.three" v-if="attendance.three != undefined" />
        <AsyncyCard :records="attendance.five" v-if="attendance.five != undefined" />
    </span>




</template>

<style scoped>
/* Cards */
#statisticsTitle {

    font-family: Inter-SemiBold;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1em;
    width: 100%;
    background-color: white;
    padding: 0 1.5em;
    margin: 1em 0 1em 0;

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


#filterRecord {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 1em;
    width: 100%;
    padding: 0 1.5em;
    margin-bottom: 1em;
    position: sticky;
    top: 1em;
    z-index: 100;
}

#filterRecord>h6 {
    font-family: Inter-SemiBold;
    font-size: 13px;
    color: var(--gray2);
}

#barGraph {
    display: flex;
    width: 100%;
    padding: 0 2em;
}

#data1 {
    display: flex;
    /* justify-content: center; */
    flex-wrap: wrap;
    gap: 2em;
    padding: 0 2em;
    margin-top: 2em
}

#data1>* {
    width: 30%;
}

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
    gap: 1em;
    font-size: 13px;
}

#totalCount> :first-child {
    width: 40%;
}

#statisticsTitle>svg {
    width: 2em;
}
</style>