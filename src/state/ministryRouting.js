import {defineStore} from 'pinia'

export const changeBackground = defineStore('background',{

    state: ()=>({
        selectedMinistry: 'kids',
        selectedClasses:'one2one',
        activeClass:'One2One'


    }),

    getters:{
        getState(state){
            return state.selectedMinistry
        }
    }
})