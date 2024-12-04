import {
  IonAccordion,
  IonAccordionGroup,
  IonItem,
  IonLabel,
} from "@ionic/react";
import { Dispatch, SetStateAction } from "react";
import CategoryCard from "../../CategoryCard";
import { appStore } from "../../../store/useStore";

interface Props {
  currentCategory: string;
  setcurrentCategory: Dispatch<SetStateAction<string>>;
}

export const Categories = ({ currentCategory, setcurrentCategory }: Props) => {
  const { categories } = appStore();

  return (
    <IonAccordionGroup defaultValue="second" class="w-full flex flex-col gap-5">
      <IonAccordion className="w-[100%] mx-auto rounded-md" value="first">
        <IonItem
          className="w-[20vw] min-w-[400px] pl-[10%]"
          slot="header"
          color="dark"
        >
          <IonLabel>
            Categoría:{" "}
            <span className="font-bold">
              {
                categories.find((category) => category.id === currentCategory)
                  ?.name
              }
            </span>
          </IonLabel>
        </IonItem>
        <div
          slot="content"
          className="w-full py-5 justify-center flex gap-8 gap-x-[5vw] flex-wrap"
        >
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              currentCategory={currentCategory}
              setcurrentCategory={setcurrentCategory}
              item={category}
            />
          ))}
        </div>
      </IonAccordion>
    </IonAccordionGroup>
  );
};
