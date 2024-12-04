import { useIonAlert, useIonLoading, useIonRouter } from "@ionic/react";
import { FormEvent, useState } from "react";
import { userStore } from "../../store/useUser";

export const useLogin = () => {
  const [present, dismiss] = useIonLoading();
  const { logIn, user } = userStore();
  const router = useIonRouter();
  const [form, setForm] = useState<{ user: string; password: string }>({
    user: "",
    password: "",
  });
  const [presentAlert] = useIonAlert();
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await logIn(form.user, form.password);
      router.push("/dashboard/products");
      present({
        message: `Iniciando Sesión...`,
        duration: 2000,
      });
    } catch (error: any) {
      presentAlert({
        header: "Error al iniciar sesion",
        subHeader: "",
        message: error.response.data.message
          ? error.response.data.message
          : "Ocurrió un error en la conexión",
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
