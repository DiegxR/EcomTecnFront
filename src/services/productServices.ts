import axios from "axios";

export const getProducts = async (value: string) => {
  try {
    const { data } = await axios.get(
      `http://localhost:5103/api/Products/${value}`
    );
    return data;
  } catch (error) {
    throw error;
  }
};

export const updateWichProducts = async (productId: string, userId: number) => {
  try {
    const { data } = await axios.patch(
      `http://localhost:5103/api/Users/${userId}/Products`,
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
            `http://localhost:5103/api/Products/byIds`,
            products
          );
          return data;
    } catch (error) {
        console.log(error)
        throw error;
    }
} 