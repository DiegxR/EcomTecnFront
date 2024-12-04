import axios from "axios";
import { create, type StateCreator } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { Category, Product } from "../types";
import { getCategories } from "../services/categoriesServices";
import { getProducts } from "../services/productServices";

interface AppStore {
  categories: Category[];
  Products: Product[];
  isLoading: boolean;
  confirmed: boolean;
  errorMessage: string | null;
  setLoading: (value: boolean) => void;
  getCategories: () => Promise<void>;
  getProducts: (value: string) => Promise<void>;
}

export const storeApi: StateCreator<AppStore> = (set) => ({
  categories: [],
  wishProducts: [],
  Products: [],
  isLoading: false,
  confirmed: false,
  errorMessage: null,
  getCategories: async () => {
    try {
      const response = await getCategories();
      set({ categories: response.data });
    } catch (error) {
      set({ errorMessage: "Error al obtener las categorias" });
    }
  },
  getProducts: async (value) => {
    try {
      const data = await getProducts(value);
      set({ Products: data });
    } catch (error) {
      set({ errorMessage: "Error al obtener las products" });
    }
  },
  setLoading: (value: boolean) => {
    set({ isLoading: value });
  },
});

export const appStore = create<AppStore>()(
  devtools(
    persist(storeApi, {
      name: "products-store",
    })
  )
);
