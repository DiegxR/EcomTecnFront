import {
  IonButton,
  IonIcon,
  IonImg,
  useIonRouter,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
} from "@ionic/react";
import { closeSharp, heartSharp } from "ionicons/icons";
import { useParams } from "react-router";
import { formatPrice } from "../utils/formattedPrice";
import { useProducts } from "../hooks/pages/useProducts";
import { useEffect, useState } from "react";
import { userStore } from "../store/useUser";

const ProductDetails = () => {
  const param = useParams();
  const router = useIonRouter();
  const [isFavorite, setIsFavorite] = useState(false);
  const id = (param as { id: string }).id;
  const { handleAddWichProduct } = useProducts({ id: id });
  const { product } = useProducts({ id });
  const { user } = userStore();
  const { formattedPrice } = formatPrice(product?.price as number);
  useEffect(() => {
    if (user.products.includes(id)) {
      setIsFavorite(true);
    }
  }, [user, param]);

  return (
    <div className="flex max-h-max flex-col gap-6 relative overflow-auto">
      {product ? (
        <>
          <IonIcon
            onClick={() => router.goBack()}
            icon={closeSharp}
            className="absolute cursor-pointer w-[30px] h-[30px] right-3 top-3"
          />
          {isFavorite ? (
            <IonIcon
              icon={heartSharp}
              className="absolute cursor-pointer w-[30px] h-[30px] left-3 top-3"
            />
          ) : (
            <></>
          )}
          <IonImg
            src={product!.images[0]}
            className="h-[50vh] max-h-[100%] rounded-t-lg bg-gray-400 w-screen"
          />
          <div className="flex gap-1 pl-[5%] flex-col">
            <h3 className="font-bold text-2xl">{product!.title}</h3>
            <p className="text-lg font-bold">{formattedPrice}</p>
            <p className="text-gray-400">{product.description}</p>
            <div className="flex mt-10 gap-[5vw]">
              {product.images.map((item) => (
                <IonImg src={item} class="w-[150] h-[150px]" />
              ))}
            </div>
          </div>
          <div className="w-full flex justify-center py-2 bg-gray-200">
            <IonButton onClick={() => handleAddWichProduct()} color="dark">
              {isFavorite ? "Quitar de productos deseados" : "Agregar a productos deseados"}
            </IonButton>
          </div>
        </>
      ) : (
        <div className="flex items-center justify-center h-screen w-screen">
          <IonCard className="flex flex-col items-center">
            <IonCardHeader>
              <IonCardTitle>Producto no encontrado</IonCardTitle>
              <IonCardSubtitle>Algo salió mal :c</IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent>
              <IonButton onClick={() => router.goBack()} color="dark">
                Volver
              </IonButton>
            </IonCardContent>
          </IonCard>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
