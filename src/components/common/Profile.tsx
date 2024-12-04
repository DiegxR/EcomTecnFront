import React, { useRef, useState } from "react";
import { userStore } from "../../store/useUser";
import { IonContent, IonPopover } from "@ionic/react";

const Profile = () => {
  const { user } = userStore();
  const popover = useRef<HTMLIonPopoverElement>(null);
  const [popoverOpen, setPopoverOpen] = useState(false);

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
          <div className="flex flex-col">
            <p>{user.name}</p>
          </div>
        </IonContent>
      </IonPopover>
    </>
  );
};

export default Profile;
