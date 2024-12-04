import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonImg,
  IonTitle,
  useIonRouter,
} from "@ionic/react";
import { GridPattern } from "../components/common/GridPattern";
import { SignupForm } from "../components/pages/signUp/SignupForm";
import logo from "../../public/logo.png";

const SignUp = () => {
  const router = useIonRouter();

  return (
    <>
      <div className="flex relative items-center justify-center w-screen h-screen">
        <GridPattern />
        <IonCard className="flex flex-col w-[90%] max-w-[450px] rounded-xl backdrop-blur-sm bg-white/30 shadow-md p-5 z-30">
          <IonCardHeader className="flex justify-center items-center flex-col">
            <IonImg className="w-[200px] h-[170px] -mb-10 -mt-14" src={logo} />
            <IonTitle className="-mt-2">Tienda online</IonTitle>
            <h2 className="text-center text-3xl font-bold text-black">
              Crea tu cuenta
            </h2>
          </IonCardHeader>
          <IonCardContent className="flex flex-col gap-6">
            <SignupForm />
            <p className="cursor-pointer text-xs md:text-sm mx-auto">
              ¿Ya tienes cuenta? Aquí puedes{" "}
              <span onClick={() => router.push("/")} className="font-bold">
                Iniciar sesión
              </span>
            </p>
          </IonCardContent>
        </IonCard>
      </div>
    </>
  );
};

export default SignUp;
