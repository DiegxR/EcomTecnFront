import { useEffect, useState } from "react";
import { appStore } from "../store/useStore";
import ProductsCard from "../components/ProductsCard";
import { GridPattern } from "../components/common/GridPattern";
import { Categories } from "../components/pages/products/Categories";

const Products = () => {
  const [currentCategory, setcurrentCategory] = useState("all");
  const { getCategories, categories, getProducts, Products } = appStore();

  useEffect(() => {
    getProducts(currentCategory);
  }, [categories, currentCategory]);

  useEffect(() => {
    getCategories();
    getProducts("all");
  }, []);

  return (
    <div className="flex flex-col items-center justify-center relative">
      <GridPattern />
      <h3 className="pt-8 pb-5">Selecciona una categoría</h3>
      <Categories
        currentCategory={currentCategory}
        setcurrentCategory={setcurrentCategory}
      />
      <div>
        <h3 className="text-center">
          {currentCategory === "all"
            ? "Todos los productos"
            : `Productos:  ${
                categories.find((category) => category.id === currentCategory)
                  ?.name
              }`}
        </h3>
        <div
          className="w-full py-5 justify-center flex gap-8 gap-x-[5vw] flex-wrap
    sm:grid sm:grid-cols-2 sm:gap-4
    lg:grid-cols-3 lg:gap-6"
        >
          {Products?.map((product) => (
            <ProductsCard item={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
