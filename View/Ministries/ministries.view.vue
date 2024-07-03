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
                <span>
                    <i class="pi pi-database"></i>
                    <h6>Ministries</h6>
                </span>
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


                <Card id="donutContainer">
                    <template #title>
                        <h6 id="graphTitle">Volunteers</h6>
                    </template>
                    <template #content>
                        <div class="w-full flex justify-center">
                            <myDonut />
                        </div>
                    </template>
                </Card>

            </div>

            <!-- Table -->
            <div id="tableContainer" v-if="isFilterActive === 2">
                <myTable />
            </div>






        </section>
    </main>
</template>