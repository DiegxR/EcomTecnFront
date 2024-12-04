import axios from "axios";

export const LogIn = async (user: string, password: string) => {
  console.log(user, password);
  try {
    const { data } = await axios.post(
      `http://localhost:5103/api/Users/validate`,
      {"username": user, "password": password}
    );
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
