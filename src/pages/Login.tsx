import {
  IonButton,
  IonImg,
  IonInput,
  IonTitle,
  IonCard,
  useIonRouter,
  IonCardHeader,
  IonCardContent,
} from "@ionic/react";
import logo from "../../public/logo.png";
import { GridPattern } from "../components/common/GridPattern";
import { LoginForm } from "../components/pages/login/LoginForm";

const Login = () => {
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
              Iniciar sesión
            </h2>
          </IonCardHeader>
          <IonCardContent className="flex flex-col gap-6">
            <LoginForm />
            <p className="cursor-pointer text-xs md:text-sm mx-auto">
              ¿No estás registrado? Aquí puedes{" "}
              <span
                onClick={() => router.push("/signUp")}
                className="font-bold"
              >
                Crear una cuenta
              </span>
            </p>
          </IonCardContent>
        </IonCard>
      </div>
    </>
  );
};

export default Login;
