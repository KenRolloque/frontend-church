<style scoped>
@import url('../style/login.css');
</style>

<!-- <script setup>
import { useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';
import axios from 'axios';
import VueCookies from 'vue-cookies'


const router = useRouter();
const passwordStyle = {
    width: '100%'
}

// Login

const logindata = ref([
    {
        'username': null,
        'password': null
    }

])

async function login() {

    try {
        await axios.post('/api/login', {
            'username': logindata.value[0].username,
            'password': logindata.value[0].password
        })

            .then(
                response => {
                    if (response.status === 200) {
                        console.log(response.data);
                        setCookies(response.data);
                        router.push('/dashboard');
                    } else {
                        throw new Error('Network response was not ok.');
                    }
                }
            )




    } catch (error) {
        console.log(error);
    }
}



function setCookies(info) {
    // const $cookies = inject('$cookies').set('admin_id', info.data.admin_id);zzz
    VueCookies.$cookies.set('admin_id', info.data.admin_id)
}

onMounted(async () => {
    axios.defaults.baseURL = import.meta.env.VITE_API_URL;
    axios.defaults.withXSRFToken = true;
    axios.defaults.withCredentials = true;
    const response = await axios.get('/sanctum/csrf-cookie', {
        withCredentials: true,
    })
})

</script> -->

<script>
import { useRouter } from 'vue-router';
import VueCookies from 'vue-cookies'
import { onMounted, ref } from 'vue';
import { AxiosInstance } from '../src/axios_instance.js'

import axios from 'axios';

export default {

    setup() {
        const passwordStyle = {
            width: '100%'
        }
        const router = useRouter();

        return {
            passwordStyle,
            router
        }
    },
    components: {
        useRouter,
        VueCookies
    },
    data() {
        return {
            logindata: {
                username: null,
                password: null
            }
        }
    },
    methods: {
        async login() {
            try {
                AxiosInstance();
                await axios.post('/api/login', {
                    'username': this.logindata.username,
                    'password': this.logindata.password
                },
                )

                    .then(
                        response => {
                            if (response.status === 200) {
                                console.log(response.data);
                                this.getCookies(response.data);
                                this.$router.push('/dashboard');
                            } else {
                                throw new Error('Network response was not ok.');
                            }
                        }
                    )
            } catch (error) {
                console.log(error);
            }
        },

        async getToken() {
            AxiosInstance();
            try {
                const response = await axios.get('/sanctum/csrf-cookie', {
                    withCredentials: true,
                });

                console.log(response.data); // or handle the response data
            } catch (error) {
                console.error('Error fetching CSRF cookie:', error);
            }
        },
        getCookies(info) {

            this.$cookies.set('admin_id', info.data.admin_id);
            this.$cookies.set('admin_fname', info.data.admin_fname);
            this.$cookies.set('admin_lname', info.data.admin_lname)
            this.$cookies.set('admin_mname', info.data.admin_mname)
            this.$cookies.set('admin_username', info.data.username)
            this.$cookies.set('admin_position', info.data.admin_position)
        }
    },

    mounted() {
        AxiosInstance();
        this.getToken();
    }
}
</script>
<template>
    <main>
        <Card id="loginContainer">
            <template #title>
                <h6 class="title">Login</h6>
            </template>
            <template #content>

                <form action="">
                    <div class="usernameCont">
                        <label for="username">Username</label>
                        <InputText id="username" v-model="logindata.username" placeholder="Enter username" />
                    </div>

                    <div class="passwordCont">
                        <label for="password">Password</label>
                        <Password class="w-full" id="password" v-model="logindata.password" placeholder="Enter password"
                            :feedback="false" :inputStyle=passwordStyle :style=passwordStyle />
                    </div>

                    <Button id="loginButton" label="Submit" @click="login()" />
                </form>
            </template>
        </Card>

    </main>
</template>
