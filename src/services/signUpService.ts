import axios from "axios"
import { BASE_URL } from "../env";

export const SignUp = async (user: string, password: string) =>{
    console.log(user, password)
    try {
       const {data} = await axios.post(`${BASE_URL}/api/Users`,{
        "id": 0,
          "name": user,
          "password": password,
          "products": [ 
          ]
        }) 
        return data;
    } catch (error) {
        console.log(error)
        throw error;
    }
}