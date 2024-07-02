<script setup>
import SideDrawer from '../../src/components/shared/navigation.vue';
import attendeeHistory from '../../src/components/unique/graphs/attendeeHistory.vue';
import record from './record.vue';
import myTable from './table.vue';
import add from './add.vue';
import { ref } from "vue";

</script>

<style scoped>
@import url('../../style/Attendees/attendees.css');

#statisticsTitle>svg {
    width: 1.2em;
}

#lineGraph {
    display: flex;
    width: 100%;
    height: 30em;

}
</style>

<template>
    <main>
        <section id="drawerContainer">
            <SideDrawer />
        </section>
        <section id="contentContainer">

            <!-- Filter tab -->
            <span id="generalFilter">
                <ul>
                    <li :class="{ activeGeneralFilter: isFilterActive === 1, notActiveFilter: isFilterActive != 1 }"
                        @click="changeFilter(1)">
                        Summary
                    </li>

                    <li :class="{ activeGeneralFilter: isFilterActive === 2, notActiveFilter: isFilterActive != 2 }"
                        @click="changeFilter(2)">
                        Table
                    </li>

                    <li :class="{ activeGeneralFilter: isFilterActive === 3, notActiveFilter: isFilterActive != 3 }"
                        @click="changeFilter(3)">
                        Add
                    </li>
                </ul>
            </span>

            <!-- Summary -->
            <div id="recordContainer" v-if="isFilterActive === 1">

                <record />
                <h1 id="statisticsTitle">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
                    </svg>
                    History
                </h1>
                <h6>June, 2024 Overall Record from all Services</h6>
                <span id="lineGraph">
                    <attendeeHistory />
                </span>
            </div>

            <!-- Table -->
            <div id="dataContainer" v-if="isFilterActive === 2">
                <myTable />
            </div>

            <!-- Add -->
            <div id="attendeesContainer" v-if="isFilterActive === 3">
                <add />
            </div>



        </section>
    </main>
</template>

<script>
export default {
    data() {
        return {
            isFilterActive: 1,
            isCardActive: 1,
            search: '',
            headers: [
                {
                    align: 'start',
                    key: 'lname',
                    sortable: false,
                    title: 'Last Name',
                },
                { key: 'fname', title: 'First Name' },
                { key: 'mname', title: 'Middle Initial' },
                { key: 'facebook', title: 'Facebook' },
                { key: 'bday', title: 'Birthday' },
                { key: 'mobileNo', title: 'Mobile Number' },
                { key: 'lifeStage', title: 'Life Stage' },
                { key: 'school', title: 'School' },
                { key: 'schoolLevel', title: 'School Level' },
                { key: 'serviceCommitment', title: 'Service Commitment' },
            ],
            data: [
                {
                    lname: 'Frozen Yogurt',
                    fname: 'Frozen Yogurt',
                    mname: 159,
                    facebook: 6.0,
                    bday: 24,
                    mobileNo: 4.0,
                    lifeStage: 1,
                    school: 1,
                    schoolLevel: 1,
                    serviceCommitment: 1,
                },
                {
                    lname: 'Frozen Yogurt',
                    fname: 'Frozen Yogurt',
                    mname: 159,
                    facebook: 6.0,
                    bday: 24,
                    mobileNo: 4.0,
                    lifeStage: 1,
                    school: 1,
                    schoolLevel: 1,
                    serviceCommitment: 1,
                },
                {
                    lname: 'Frozen Yogurt',
                    fname: 'Frozen Yogurt',
                    mname: 159,
                    facebook: 6.0,
                    bday: 24,
                    mobileNo: 4.0,
                    lifeStage: 1,
                    school: 1,
                    schoolLevel: 1,
                    serviceCommitment: 1,
                },
                {
                    lname: 'Frozen Yogurt',
                    fname: 'Frozen Yogurt',
                    mname: 159,
                    facebook: 6.0,
                    bday: 24,
                    mobileNo: 4.0,
                    lifeStage: 1,
                    school: 1,
                    schoolLevel: 1,
                    serviceCommitment: 1,
                },

            ],
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