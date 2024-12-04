import axios from "axios";
import { BASE_URL } from "../env";

export const getProducts = async (value: string) => {
  console.log(import.meta.env.VITE_SITE_API_URL)
  try {
    const { data } = await axios.get(
      `${BASE_URL}/api/Products/${value}`
    );
    return data;
  } catch (error) {
    throw error;
  }
};

export const updateWichProducts = async (productId: string, userId: number) => {
  try {
    const { data } = await axios.patch(
      `${BASE_URL}/api/Users/${userId}/Products`,
      [productId]
    );
    return data;
  } catch (error) {
    throw error;
  }
};

export const getProductsById = async (products: string[]) => {
    try {
        const { data } = await axios.post(
            `${BASE_URL}/api/Products/byIds`,
            products
          );
          return data;
    } catch (error) {
        console.log(error)
        throw error;
    }
} 