import React from "react";
import Image from "next/image";
import loginImage from "../../Images/Login/loginImage.svg";
import Zoom from "react-reveal/Zoom";

const Login = () => {
  return (
    <div className="w-full h-full py-10">
      <Zoom>
        <div className="space-y-6 text-center">
          <h4 className="text-3xl font-semibold">Are you excited?</h4>
          <p className="text-sm text-gray-500">
            Join our booz community for <br /> boozzeeed link
          </p>
          <div>
            <Image src={loginImage} alt="Login Image" />
          </div>
          <button className="outline-none px-8 py-4 text-white bg-blue-600 rounded-full">
            Google Login
          </button>
        </div>
      </Zoom>
    </div>
  );
};

export default Login;
