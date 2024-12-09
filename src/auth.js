import axios from "axios";
import { AxiosInstance } from "./axios_instance";

 
async function checkAuth(){
    try {
        AxiosInstance();  // Assuming this sets up your Axios instance correctly
        const response = await axios.get('/api/auth');
        console.log(response.status)
        return response.status;  // Return the status from the Axios response
    } catch (error) {
        console.error("Error checking authentication:", error);
        return error.status;
        throw error;  // Re-throw the error to handle it elsewhere if needed
       
    }
}


export {checkAuth}