<script setup>
import SideDrawer from '../../src/components/shared/navigation.vue';
import myTable from './table.vue';
import { ref } from 'vue';
var isFilterActive = ref(1);

function changeFilter(item) {
    isFilterActive.value = item;
}

</script>

<style scoped>
@import url('../../style/Classes/classes.css');
</style>

<template>
    <main>
        <section id="drawerContainer">
            <SideDrawer />
        </section>
        <section id="contentContainer">

            <div id="generalFilter">
                <span>
                    <i class="pi pi-database"></i>
                    <h6>Classes</h6>
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

            <div id="summaryContainer" v-if="isFilterActive == 1">
                s
            </div>

            <div id="dataContainer" v-if="isFilterActive == 2">
                <myTable />
            </div>


        </section>
    </main>
</template>