import axios from "axios";
import { create, type StateCreator } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { Category, Product, User } from "../types";
import { getCategories } from "../services/categoriesServices";
import {
  getProducts,
  getProductsById,
  updateWichProducts,
} from "../services/productServices";
import { SignUp } from "../services/signUpService";
import { LogIn } from "../services/logInService";

interface userInfo {
  user: User;
  wishProducts: Product[];
  isLoading: boolean;
  confirmed: boolean;
  errorMessage: string | null;
  setLoading: (value: boolean) => void;
  signUp: (user: string, password: string) => Promise<void>;
  logIn: (user: string, password: string) => Promise<void>;
  logOut: () => void;
  addWishProduct: (productId: string, userId: number) => Promise<void>;
}

export const storeApi: StateCreator<userInfo> = (set) => ({
  user: { id: 0, name: "", password: "", products: [] },
  wishProducts: [],
  isLoading: false,
  confirmed: false,
  errorMessage: null,
  setLoading: (value: boolean) => {
    set({ isLoading: value });
  },
  signUp: async (user: string, password: string) => {
    try {
      const data = await SignUp(user, password);
      let products = [];
      if (data?.products?.length !== 0) {
        products = await getProductsById(data.products);
      }
      set({
        user: data,
        confirmed: true,
        isLoading: false,
        wishProducts: products,
      });
    } catch (error) {
      throw error;
    }
  },
  addWishProduct: async (productId: string, userId: number) => {
    console.log(productId, userId);
    try {
      const data = await updateWichProducts(productId, userId);
      const products = await getProductsById(data.products);
      console.log(data, products);
      set({ wishProducts: products, user: data });
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
  logOut: () => {
    set({ user: { id: 0, name: "", password: "", products: [] } });
  },
  logIn: async (user: string, password: string) => {
    console.log(user, password);
    try {
      const data = await LogIn(user, password);
      let products = [];
      if (data?.products?.length !== 0) {
        products = await getProductsById(data.products);
      }
      console.log(data, products);
      set({
        user: data,
        confirmed: true,
        isLoading: false,
        wishProducts: products,
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
});

export const userStore = create<userInfo>()(
  devtools(
    persist(storeApi, {
      name: "user-store",
    })
  )
);
