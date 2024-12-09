import axios from "axios";

function AxiosInstance(){
    axios.defaults.baseURL = import.meta.env.VITE_API_URL;
    axios.defaults.withXSRFToken = true;
    axios.defaults.withCredentials = true; 
}

export{AxiosInstance}