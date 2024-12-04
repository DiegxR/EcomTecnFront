import React, { useEffect } from "react";
import { GridPattern } from "../components/common/GridPattern";
import { userStore } from "../store/useUser";
import ProductsCard from "../components/ProductsCard";

const WishProducts = () => {
  const { wishProducts } = userStore();

  return (
    <div className="flex flex-col items-center justify-center relative">
      <GridPattern />
      <h3 className="pt-8 pb-5">Tus productos deseados</h3>
      <div>
        <div
          className="w-full py-5 justify-center flex gap-8 gap-x-[5vw] flex-wrap
    sm:grid sm:grid-cols-2 sm:gap-4
    lg:grid-cols-3 lg:gap-6"
        >
          {wishProducts?.length !== 0 ? (
            wishProducts.map((product) => (
              <ProductsCard item={product} key={product.id} />
            ))
          ) : (
            <>Aún no tienes productos favoritos</>
          )}
        </div>
      </div>
    </div>
  );
};

export default WishProducts;
