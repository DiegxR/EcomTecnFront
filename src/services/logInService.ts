import axios from "axios";
import { BASE_URL } from "../env";

export const LogIn = async (user: string, password: string) => {
  console.log(user, password);
  try {
    const { data } = await axios.post(
      `${BASE_URL}/api/Users/validate`,
      {"username": user, "password": password}
    );
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
