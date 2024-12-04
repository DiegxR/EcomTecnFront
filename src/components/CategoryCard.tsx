import { IonCard, IonImg } from "@ionic/react";
import { Category } from "../types";

interface Props {
  item: Category;
  currentCategory: string;
  setcurrentCategory: (value: string) => void;
}

const CategoryCard = ({ item, currentCategory, setcurrentCategory }: Props) => {
  return (
    <IonCard
      onClick={() =>
        setcurrentCategory(item.id === currentCategory ? "all" : item.id)
      }
      className={`flex ${
        currentCategory === item.id ? "bg-black" : "bg-white"
      } cursor-pointer rounded-md shadow-md  flex-col gap-3 w-[280px] h-[250px]`}
    >
      <IonImg
        alt={item.name}
        className="w-full rounded-t-md bg-gray-300 h-[200px]"
        src={item.image || "https://placehold.co/600x400"}
      />
      <p
        className={` text-center text-xl font-semibold ${
          currentCategory === item.id ? "text-white" : "text-gray-500"
        }`}
      >
        {item.name}
      </p>
    </IonCard>
  );
};

export default CategoryCard;
