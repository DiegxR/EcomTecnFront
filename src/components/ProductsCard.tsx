import {
  IonButton,
  IonCard,
  IonIcon,
  IonImg,
  useIonRouter,
} from "@ionic/react";
import { Product } from "../types";
import { formatPrice } from "../utils/formattedPrice";
import { heartOutline, heartSharp } from "ionicons/icons";
import { userStore } from "../store/useUser";
import { useProducts } from "../hooks/pages/useProducts";

const ProductsCard = ({ item }: { item: Product }) => {
  const router = useIonRouter();
  const { user } = userStore();
  const { handleAddWichProduct } = useProducts({ id: `${item.id}` });
  const { formattedPrice } = formatPrice(item?.price);
  const handleHeart = () => {
    if (Array.isArray(user.products)) {
      return user?.products.includes(`${item.id}`) ? heartSharp : heartOutline;
    } else {
      return heartOutline;
    }
  };
  return (
    <IonCard
      className={`flex relative  rounded-md shadow-md  flex-col gap-3 w-[340px] h-[400px]`}
    >
      <div className=" flex flex-col gap-5 h-[300px]">
        <div
          onClick={async () =>
            await handleAddWichProduct()
          }
          className="rounded-lg bg-white cursor-pointer flex justify-center items-center p-[8px] absolute right-3 top-3"
        >
          <IonIcon icon={handleHeart()} className="w-[15px] h-[15px] " />
        </div>
        <IonImg
          alt={item.title}
          className="w-full rounded-t-md bg-gray-300 h-[200px]"
          src={item.images[0] || "https://placehold.co/600x400"}
        />
        <div className="flex px-5 flex-col">
          <p className={"text-start font-semibold text-black"}>{item.title}</p>
          <p className={"text-start font-semibold text-gray-400"}>
            {formattedPrice}
          </p>
        </div>
      </div>
      <IonButton
        onClick={() => router.push(`/productDetails/${item.id}`)}
        color="dark"
        className="px-5 cursor-pointer "
      >
        Ver detalles
      </IonButton>
    </IonCard>
  );
};

export default ProductsCard;
