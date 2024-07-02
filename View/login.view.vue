<style scoped>
@import url('../style/login.css');
</style>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const passwordStyle = {
    width: '100%'
}
function gotoHome() {

    router.push('/dashboard');
}
</script>

<template>
    <main>
        <Card id="loginContainer">
            <template #title>
                <h6 class="title">Login</h6>
            </template>
            <template #content>

                <div class="usernameCont">
                    <label for="username">Username</label>
                    <InputText id="username" placeholder="Enter username" />
                </div>

                <div class="passwordCont">
                    <label for="password">Password</label>
                    <Password class="w-full" id="password" placeholder="Enter password" :feedback="false"
                        :inputStyle=passwordStyle :style=passwordStyle />
                </div>

                <Button id="loginButton" label="Submit" @click="gotoHome()" />

            </template>
        </Card>

    </main>
</template>
