import React, { useRef, useState } from "react";
import { userStore } from "../../store/useUser";
import { IonContent, IonIcon, IonPopover, useIonAlert, useIonRouter } from "@ionic/react";
import {  exitOutline } from "ionicons/icons"
const Profile = () => {
  const { user } = userStore();
  const router = useIonRouter();
  const [presentAlert] = useIonAlert();
  const popover = useRef<HTMLIonPopoverElement>(null);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const {logOut} = userStore();
  const handleLogout = () =>{
    presentAlert({
      header:"¿Estás seguro de cerrar sesión?",
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
            logOut();
            router.push('/');
          }
        },
      ],
    });

  }
  const openPopover = (e: any) => {
    popover.current!.event = e;
    setPopoverOpen(true);
  };
  return (
    <>
      <div
        onClick={openPopover}
        className="rounded-full text-lg cursor-pointer flex items-center justify-center w-[30px] h-[30px] bg-gray-300"
      >
        {user.name.split("")[0].toUpperCase()}
      </div>
      <IonPopover
        ref={popover}
        isOpen={popoverOpen}
        onDidDismiss={() => setPopoverOpen(false)}
      >
        <IonContent class="ion-padding">
          <div className="flex flex-col gap-2">
            <p className="">Tu cuenta</p>
            <p className="border-b-[1px] pb-2 text-gray-400  w-[50%] border-solid border-gray-300">{user.name}</p>
           <div onClick={()=> handleLogout()} className="flex gap-2 px-2 cursor-pointer hover:bg-gray-300 rounded-md items-center">
            <IonIcon className="w-[20px] h-[30px]" icon={exitOutline}/>
              <p>Cerrar sesión</p>
           </div>
          </div>
        </IonContent>
      </IonPopover>
    </>
  );
};

export default Profile;
