import { defineStore } from "pinia";
import axios from "axios";
import {AxiosInstance} from '../axios_instance.js'

export  const getAttendance = defineStore ('attendance',{

    state: ()=>({
        all:{},
        nine:{},
        eleven:{},
        three:{},
        five:{},
        data:{}

    }),

    getters:{
        sendNine(state){
            return state.nine
        }
    },
    actions:{
    
    }
})