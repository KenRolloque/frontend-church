import { useRoute } from "vue-router";
import VueCookies from 'vue-cookies'
import { ref, toRef,defineProps } from 'vue'

export default{
    props:{
        status:String
    },
    setup(props){
        const userDetails = ref([{
            fname: 1,
            mname: 2,
            lname: 3,
            username: 4,

        }])
        
        var myActive = props.status;
        
        const activeColor = {
            color:'white',
            backgroundColor:'#3F51B5',
            borderRadius:'3px',
        }
        
        return {
            userDetails,
            activeColor,
            myActive
            
        }
    },
    components:{
        useRoute,
        VueCookies,
     

    },
    data(){
        return{
            userDetails:{
                fname: 1,
                mname: 2,
                lname: 3,
                username: 4,
    
            },
            route_path:'/dashboard',
            activeRouter: this.active
        

        }
    },
    methods:{

        changeRoute(path){
            this.route_path = path
            this.$router.push(this.route_path);
            
        }
    },
    mounted(){
        this.userDetails.fname = this.$cookies.get('admin_fname')
        this.userDetails.mname = this.$cookies.get('admin_mname')
        this.userDetails.lname = this.$cookies.get('admin_lname')
        this.userDetails.username = this.$cookies.get('admin_username')
    }
}