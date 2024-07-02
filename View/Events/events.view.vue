<script setup>
import SideDrawer from '../../src/components/shared/navigation.vue';
</script>

<!-- <style scoped>
@import url('../../style/Dashboard/dashboard.css');
</style> -->

<template>
    <main>
        <section id="drawerContainer">
            <SideDrawer />
        </section>
        <section id="contentContainer">
            <p>Hello Events</p>
        </section>
    </main>
</template>