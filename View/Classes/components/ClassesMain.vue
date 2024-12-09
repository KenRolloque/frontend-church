<script setup>
import { changeBackground } from '../../../src/state/ministryRouting'
import { ref } from 'vue'
import ClassesTable from './ClassesTable.vue'
import One2One from './tables/one2one.vue'
import VW from './tables/vw.vue'
import Classes from './tables/classes.vue'

const bg = changeBackground();
function changeClasses(classes, activeClass) {
    bg.selectedClasses = classes
    bg.activeClass = activeClass

}

</script>

<template>
    <span id="headerTitle">
        <h6>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
            </svg>
            Church Classes
        </h6>
    </span>

    <section id="main">
        <div id="navigation">
            <!-- <h6>Ministries</h6> -->
            <ul id="navigation_list">
                <li :class="{ active: bg.selectedClasses === 'one2one' }" @click="changeClasses('one2one', 'One2One')">
                    One 2 One
                </li>

                <li :class="{ active: bg.selectedClasses === 'vicweek' }"
                    @click="changeClasses('vicweek', 'Victory Weekend')">Victory
                    Weekend
                </li>

                <li :class="{ active: bg.selectedClasses === 'church_community' }"
                    @click="changeClasses('church_community', 'Church Community')">
                    Church
                    Community</li>

                <li :class="{ active: bg.selectedClasses === 'church_purble_book1' }"
                    @click="changeClasses('church_purble_book1', 'Purple Book 1')">
                    Purble Book 1</li>

                <li :class="{ active: bg.selectedClasses === 'church_purble_book2' }"
                    @click="changeClasses('church_purble_book2', 'Purble Book 2')">
                    Purble
                    Book 2
                </li>

                <li :class="{ active: bg.selectedClasses === 'church_purble_book3' }"
                    @click="changeClasses('church_purble_book3', 'Purple Book 3')">
                    Purble
                    Book 3
                </li>

                <li :class="{ active: bg.selectedClasses === 'church_purble_book4' }"
                    @click="changeClasses('church_purble_book4', 'Purple Book 4')">
                    Purble Book 4</li>

                <li :class="{ active: bg.selectedClasses === 'making_disciples1' }"
                    @click="changeClasses('making_disciples1', 'Making Disciples 1')">
                    Making Disciples 1</li>

                <li :class="{ active: bg.selectedClasses === 'making_disciples2' }"
                    @click="changeClasses('making_disciples2', 'Making Disciples 2')">
                    Making Disciples 2</li>

                <li :class="{ active: bg.selectedClasses === 'empowering_leaders' }"
                    @click="changeClasses('empowering_leaders', 'Empowering Leaders')">
                    Empowering Leaders</li>

                <li :class="{ active: bg.selectedClasses === 'leaders113' }"
                    @click="changeClasses('leaders113', 'Leader 113')">
                    Leaders 113</li>
            </ul>
        </div>

        <div class="data_table" v-if="bg.selectedClasses == 'one2one'">
            <One2One />
        </div>
        <div class="data_table" v-else-if="bg.selectedClasses == 'vicweek'">
            <VW />
        </div>

        <div class="data_table" v-else="bg.selectedClasses != 'vicweek' || bg.selectedClasses != 'one2one'">
            <Classes />
        </div>


    </section>

</template>

<style scoped>
#headerTitle {
    font-family: Inter-SemiBold;
    display: flex;
    gap: 1em;
    width: 100%;
    background-color: white;
    margin: 1em 0 1em 0;
}

#headerTitle>h6 {
    width: 100%;
    display: flex;
    align-items: center;
    font-size: 16px;
    gap: 1em;
    padding: .5em 1em;
    background-color: var(--gray1);
    color: var(--gray3);
}

#main {
    display: flex;
    gap: 1em;
}

#navigation {

    display: flex;
    flex-direction: column;
    width: 20%;
    font-size: 12px;
    font-family: Inter-SemiBold;
    color: var(--gray2);
}

#navigation>h6 {
    background-color: var(--blue1);
    color: white;
    padding: 10px;
    font-size: 13px;
}

#navigation_list {
    margin-top: 1em;
    margin-left: 1em;
    display: flex;
    flex-direction: column;

}

#navigation_list>li {
    padding: 5px 10px;
}

.active {
    background-color: var(--blue1);
    color: white;
    padding: 5px 10px;
    border-radius: 5px;

}

/* Data Table */

.data_table {
    width: 80%;

    flex: 1;
    display: flex;
    flex-direction: column;
}
</style>