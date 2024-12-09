<script setup>
import SideDrawer from '../../src/components/shared/navigation.vue';
import attendeeHistory from './graphs/attendeeHistory.vue';
import AttendeesRecord from './components/AttendeesRecord.vue';
import AttendeesTable from './components/AttendeesTable.vue';
import AttendeesAddRecord from './components/AttendeesAddRecord.vue';
import PieGraph from './graphs/attendeePieGraph.vue'
import AttendanceDonutGraph from './graphs/attendanceDonutGraph.vue'
import { ref } from "vue";

var historyFilter = ref(1);
var attendanceFilter = ref(1);
</script>


<template>
    <main>
        <section id="drawerContainer">
            <SideDrawer status="attendees" />
        </section>
        <section id="contentContainer">

            <!-- Filter tab -->
            <span id="generalFilter">
                <span>
                    <i class="pi pi-database"></i>
                    <h6>Attendees</h6>
                </span>
                <ul>
                    <li :class="{ activeGeneralFilter: isFilterActive === 1, notActiveFilter: isFilterActive != 1 }"
                        @click="changeFilter(1)">
                        Attendance
                    </li>

                    <li :class="{ activeGeneralFilter: isFilterActive === 2, notActiveFilter: isFilterActive != 2 }"
                        @click="changeFilter(2)">
                        Attendees
                    </li>

                    <li :class="{ activeGeneralFilter: isFilterActive === 3, notActiveFilter: isFilterActive != 3 }"
                        @click="changeFilter(3)">
                        Add
                    </li>
                </ul>
            </span>

            <!-- Attendees -->
            <div id="recordContainer" v-if="isFilterActive === 1">
                <AttendeesRecord />
            </div>

            <!-- Graphs -->
            <div id="reportContainer" v-if="isFilterActive === 1">

                <!-- Header -->
                <span id="statisticsTitle">
                    <h6>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
                        </svg>
                        Quarter Report
                    </h6>
                </span>

                <!-- Filter  -->
                <div id="filterHistory">
                    <h6 id="title">Q1 Overall Record from all Services</h6>

                    <span>
                        <Button size="small" @click="historyFilter = 1">Line Graph</Button>
                        <Button size="small" @click="historyFilter = 2">Pie Chart</Button>
                        <Button size="small" @click="historyFilter = 3">Table</Button>
                    </span>
                </div>

                <!-- Graphs -->

                <span id="lineGraph">

                    <attendeeHistory v-if="historyFilter == 1" />
                    <PieGraph v-if="historyFilter == 2" />
                </span>
            </div>

            <!-- Attendance -->
            <div id="dataContainer" v-if="isFilterActive === 2">
                <span v-if="attendanceFilter == 1">
                    <h1>Attendees Service Commitment Summary</h1>
                    <AttendanceDonutGraph />
                </span>
                <span v-if="attendanceFilter == 2">
                    <AttendeesTable />
                </span>

            </div>

            <!-- Add -->
            <div id="attendeesContainer" v-if="isFilterActive === 3">
                <AttendeesAddRecord />
            </div>



        </section>
    </main>
</template>

<script>
export default {
    data() {
        return {
            isFilterActive: 1,
            isCardActive: 1

        }
    },
    methods: {
        changeFilter(value) {
            this.isFilterActive = value;
        },

        changeRecord(value) {
            this.isCardActive = value;
        }
    }
}
</script>


<style scoped>
.loading {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
}

main {
    display: flex;
    gap: 2em;
    width: 100%;
    background-color: var(--gray4);


}

#drawerContainer {
    display: flex;
    position: fixed;
    z-index: 50;
    width: 270px;
}

#contentContainer {
    margin-left: 260px;
    background-color: var(--gray4);
    width: 90%;
    display: flex;
    flex-direction: column;
    padding: 0 2em;

}


/* General Filter */
#generalFilter {
    display: flex;
    width: 100%;
    margin-top: 1em;
    padding: 1em 1em;
    border-radius: 5px;
    background-color: white;

}

#generalFilter> :first-child {
    display: flex;
    align-items: center;
    gap: 1em;
    font-family: Inter-SemiBold;
    color: var(--purple);

}

#generalFilter>ul {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    gap: 1em;
    font-family: Inter-SemiBold;
    color: var(--gray);
    font-size: 13px;
}

#generalFilter>ul>li {

    width: 10%;
    text-align: center;
    padding: .4em 0;
    border-radius: 3px;
}

/* Record Container */
#recordContainer {
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    background-color: white;
    margin-top: 1em;
    padding: 1em 0 3em 0;
}

.notActiveFilter {
    background-color: var(--gray5);
}

.activeGeneralFilter {
    background-color: var(--purple);
    color: white;
}

/* Card */

#reportContainer {
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    background-color: white;
    margin-top: 1em;
    padding: 1em 1em;

}

#statisticsTitle {
    font-family: Inter-SemiBold;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1em 0 1em 0;
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

#date {
    width: 90%;
    padding: .5em 1em;
}


/*  */
#dataContainer {
    width: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    background-color: white;
    margin-top: 1em;
    padding: 0 1em 1em 0;
    margin-bottom: 1em;
}

#dataContainer>span {
    display: flex;
    flex-direction: column;
    width: 100%;

}

/* Add user */
#attendeesContainer {
    width: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    background-color: white;
    margin-top: 1em;
    padding: 0 1em 1em 0;
}

#attendeesContainer> :nth-child(2) {
    display: flex;
    width: 100%;
    gap: 3em;


}

#attendeesContainer>div> :first-child {
    display: flex;
    flex-direction: column;
    gap: 1em;
    width: 30%;
}

.addCard {
    width: 100%;
    font-family: Inter-SemiBold;
    font-size: 12px;

}


#statisticsTitle>svg {
    width: 1.2em;
}

#lineGraph {
    display: flex;
    justify-content: center;
    width: 100%;
    /* height: 30em; */
}

#filterHistory {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    margin-bottom: 2em;
}

#filterHistory>span {
    display: flex;
    gap: 10px;
}

#title {
    font-family: Inter-Bold;
    padding: 0 2em;
}
</style>