import { FormEvent, useState } from "react";
import { userStore } from "../../store/useUser";
import { useIonAlert, useIonLoading, useIonRouter } from "@ionic/react";

export const useSignUp = () => {
  const [presentAlert] = useIonAlert();
  const [present, dismiss] = useIonLoading();
  const router = useIonRouter();
  const { signUp, user } = userStore();
  const [form, setForm] = useState<{ user: string; password: string }>({
    user: "",
    password: "",
  });
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await signUp(form.user, form.password);
      router.push("/dashboard/products");
      present({
        message: `Iniciando Sesión...`,
        duration: 2000,
      });
    } catch (error) {
      console.log(error);
      presentAlert({
        header: "Error al crear tu cuenta",
        subHeader: "Ocurrió un error en la conexión",
        message:
          "Por favor revisa tu conexión a internet o intentalo más tarde",
        buttons: ["Ok"],
      });
      throw error;
    }
  };
  return {
    handleSubmit,
    form,
    setForm,
  };
};
