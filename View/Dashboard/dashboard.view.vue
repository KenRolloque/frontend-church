<script setup>
import { ref } from 'vue'
import axios from 'axios';
import SideDrawer from '../../src/components/shared/navigation.vue';
import { checkAuth } from '../../src/auth.js'
import { useRouter } from 'vue-router'

const router = useRouter();
const status = ref([])

checkAuth().then(response => {
    if (response != 200) {
        router.push('/');
    } else {
        console.log("safe")
    }
})



</script>

<style scoped>
@import url('../../style/Dashboard/dashboard.css');
</style>

<template>
    <main>
        <section id="drawerContainer">
            <SideDrawer status="dashboard" />
        </section>
        <section id="contentContainer">

            <p>Hello Dashboard</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis adipisci, quasi sint maiores
                obcaecati neque alias ab eligendi ipsam quo officia dolorum delectus eaque saepe deleniti, temporibus
                aperiam numquam nam?</p>
        </section>
    </main>
</template>../../src/cookies.js