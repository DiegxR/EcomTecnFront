import axios from "axios"

export const getCategories = async () =>{
    try {
       const data = await axios.get("http://localhost:5103/api/Categories") 
        return data;
    } catch (error) {
        throw error;
    }
}