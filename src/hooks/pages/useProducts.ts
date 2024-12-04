import { useEffect, useState } from "react";
import { Product } from "../../types";
import { appStore } from "../../store/useStore";
import { userStore } from "../../store/useUser";
import { useIonAlert } from "@ionic/react";

export const useProducts = ({ id }: { id: string }) => {
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const [presentAlert] = useIonAlert();
  const { Products } = appStore();
  const { addWishProduct, user } = userStore();
  const handleAddWichProduct = async () => {
    presentAlert({
      header: user.products.includes(id)
        ? "¿Quiere eliminar este producto de sus productos deseados?"
        : "¿Quieres agregar este a tus productos deseados?",
      buttons: [
        {
          text: "Cancelar",
          role: "cancel",
          handler: () => {
            console.log("Alert canceled");
          },
        },
        {
          text: "Aceptar",
          role: "confirm",
          handler: async () => {
            try {
              const data = await addWishProduct(id, user?.id);
            } catch (error) {
              presentAlert({
                header: "Error al crear al agregar producto",
                subHeader: "Ocurrió un error en la conexión",
                message:
                  "Por favor revisa tu conexión a internet o intentalo más tarde",
                buttons: ["Ok"],
              });
            }
          },
        },
      ],
    });
  };
  useEffect(() => {
    if (Products?.length > 0) {
      setProduct(Products.find((item) => item.id === Number(id)));
    }
  }, [Products]);

  return {
    product,
    handleAddWichProduct,
  };
};
