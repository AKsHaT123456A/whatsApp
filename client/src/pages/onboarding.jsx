import React from "react";
import Image from "next/image";
function onboarding() {
  return (
    <div className="bg-panel-header-background h-screen w-screen flex text-white flex-col items-center justify-center  ">
      <div className="flex items-center justify-center gap-2">
        <Image src="/whatsapp.gif" width={300} height={300} alt="WhatsApp" />
        <span className="text-7xl">WhatsApp</span>
      </div>
      <div className="twxt-2xl">Create your profile</div>
      <div className="flex flex-col items-center justify-center mt-5 gap-6"></div>
    </div>
  );
}

export default onboarding;
