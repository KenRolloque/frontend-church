<script setup>
import SideDrawer from '../../src/components/shared/navigation.vue';
</script>

<!-- <style scoped>
@import url('../../style/Dashboard/dashboard.css');
</style> -->

<template>
    <main>
        <section id="drawerContainer">
            <SideDrawer status='staffs' />
        </section>
        <section id="contentContainer">
            <p>Hello Staff</p>
        </section>
    </main>
</template>