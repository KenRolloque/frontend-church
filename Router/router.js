import { createMemoryHistory, createRouter } from "vue-router";

import LoginView from '../View/login.view.vue'
import DashboardView from '../View/Dashboard/dashboard.view.vue'
import AttendeesView from '../View/Attendees/attendees.view.vue'
import MinistriesView from '../View/Ministries/ministries.view.vue'
import EventView from '../View/Dashboard/dashboard.view.vue'
import ClassesView from '../View/Classes/classes.view.vue'
import StaffView from '../View/Staff/staff.view.vue'


const routes = [
    {
        path: '/', 
        name:'login',
        component:LoginView
    },
    {
        path:'/dashboard', 
        name:'dashboard',
        component:DashboardView
    },
    {
        path:'/attendees',
        name:'attendees',
        component:AttendeesView
    },
    {
        path:'/ministries',
        name:'ministries',
        component: MinistriesView
    },
    {
        path:'/events',
        name:'events',
        component:EventView,
    },
    {
        path:'/classes',
        name:'classes',
        component:ClassesView,
    },
    {
        path:'/staffs',
        name:'staffs',
        component:StaffView,
    }
]

const router = createRouter({
    history:createMemoryHistory(),
    routes,
})

export default router;