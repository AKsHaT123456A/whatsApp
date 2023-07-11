import React from "react";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";
import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { firebaseAuth } from "@/utils/FirebaseConfig";
import { CHECK_USER_ROUTE } from "@/utils/ApiRoutes";
import axios from "axios";
import { useRouter } from "next/router";
const login=()=> {
  // const navigate = useNavigate();
const router=useRouter();
  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    const {
      user: { displayName: name, email, photoURL: profileImage },
    } = await signInWithPopup(firebaseAuth, provider);
    try {
      if (email) {
        const { data } = await axios.post(CHECK_USER_ROUTE, { email });
        console.log("HI");
        console.log({ data }, "HI");
        if (!data.success) {
          router.push("/onboarding");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex justify-center items-center bg-panel-header-background h-screen w-screen flex-col flex-wrap gap-6 ">
      <div className="flex items-center justify-center gap-2 text-white ">
        <Image
          src="/whatsapp.gif"
          width={300}
          height={300}
          alt="WhatsApp"
        ></Image>
        <span className="text-7xl">WhatsApp</span>
      </div>
      <button className="flex items-center justify-center gap-7 bg-search-input-container-background p-5 rounded-lg">
        <FcGoogle className="text-4xl" />
        <span className="text-white text-2xl" onClick={handleLogin}>
          Login With Google
        </span>
      </button>
    </div>
  );
}

export default login;
