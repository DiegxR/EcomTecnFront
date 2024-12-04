import { IonInput, IonButton } from "@ionic/react";
import { useLogin } from "../../../hooks";

export const LoginForm = () => {
  const { handleSubmit, form, setForm } = useLogin();

  return (
    <form
      className="flex h-full mx-auto w-[90%] flex-col gap-10"
      onSubmit={(e) => handleSubmit(e)}
    >
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="font-semibold text-sm">
            Usuario
          </label>
          <div className="border-solid border-[1px] border-gray-400 rounded-full px-3">
            <IonInput
              onInput={(e) =>
                setForm({
                  ...form,
                  user: e.currentTarget.value as string,
                })
              }
              required
              placeholder="Ingresa tu ususario"
              minlength={6}
              color=""
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="font-semibold text-sm">
            Contraseña
          </label>
          <div className="border-solid border-[1px] border-gray-400 rounded-full px-3">
            <IonInput
              type="password"
              onInput={(e) =>
                setForm({
                  ...form,
                  password: e.currentTarget.value as string,
                })
              }
              placeholder="Ingresa tu contraseña"
              required
              minlength={6}
              color=""
            />
          </div>
        </div>
      </div>
      <IonButton
        type="submit"
        className="w-[90%] mx-auto rounded-full text-sm font-medium"
        color="dark"
        shape="round"
        size="large"
      >
        Iniciar Sesión
      </IonButton>
    </form>
  );
};
