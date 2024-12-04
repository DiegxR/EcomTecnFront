import axios from "axios"
import { BASE_URL } from "../env";

export const getCategories = async () =>{
    try {
       const data = await axios.get(`${BASE_URL}/api/Categories`) 
        return data;
    } catch (error) {
        throw error;
    }
}