<style>
@import url('../../style/Ministry/ministry.css');
</style>

<script setup>
import navigation from '../../src/components/shared/navigation.vue';
import myTable from './table.vue';
import myDonut from './donut.vue'
import { ref } from 'vue';

var isFilterActive = ref(1);

function changeFilter(item) {
    isFilterActive.value = item;
}


</script>

<template>
    <main>
        <section id="drawerContainer">
            <navigation />
        </section>

        <section id="contentContainer">

            <!-- General Filter -->
            <div id="generalFilter">
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
            </div>

            <!-- Summary -->
            <div id="summary" v-if="isFilterActive === 1">
                <h1 id="statisticsTitle">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
                    </svg>
                    Ministry Summary
                </h1>

                <div id="graphContainer">

                    <Card id="donutContainer">
                        <template #title>
                            <h6 class="ml-4">Volunteers</h6>
                        </template>
                        <template #content>
                            <div class="w-full flex justify-center">
                                <myDonut />
                            </div>
                        </template>
                    </Card>
                </div>
            </div>

            <!-- Table -->
            <div id="summary" v-if="isFilterActive === 2">
                <myTable />
            </div>






        </section>
    </main>
</template>