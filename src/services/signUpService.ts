import axios from "axios"

export const SignUp = async (user: string, password: string) =>{
    console.log(user, password)
    try {
       const {data} = await axios.post(`http://localhost:5103/api/Users`,{
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