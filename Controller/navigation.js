import { useRoute } from "vue-router";


export default{
    props: {
    //    active_nav: String,
      },
    setup(){

    },
    components:{
        useRoute

    },
    data(){
        return{
            route_path:'/dashboard'
        }
    },
    methods:{

        changeRoute(path){
            this.route_path = path
            this.$router.push(this.route_path);
            
        }


    }
}