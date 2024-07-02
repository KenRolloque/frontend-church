<script setup>
import SideDrawer from '../../src/components/shared/navigation.vue';
</script>

<style scoped>
@import url('../../style/Dashboard/dashboard.css');
</style>

<template>
    <main>
        <section id="drawerContainer">
            <SideDrawer />
        </section>
        <section id="contentContainer">
            <p>Hello Dashboard</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis adipisci, quasi sint maiores
                obcaecati neque alias ab eligendi ipsam quo officia dolorum delectus eaque saepe deleniti, temporibus
                aperiam numquam nam?</p>
        </section>
    </main>
</template>