
import {
  RegisterForm,
  SignInForm,
  ForgotPasswordForm,
} from "../../features/authforms";

import { useRef, useState, useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";
import { FormStepRefType } from "@features/authforms/types";

import { NavLink } from "@components/index";
import { LogoBoxHeader, BackButton} from "./components";



export default function Authenticate() {
  const location = useLocation();
  const path = location.pathname;

  const formStepRef = useRef<FormStepRefType>(null);
  const [showBack, setShowBack] = useState<boolean>(false);
  const navType = useNavigationType(); // "PUSH", "POP", or "REPLACE"
  const [animationClass, setAnimationClass] = useState("render-slide-right");

  useEffect(() => {
    if (navType === "POP") {
      setAnimationClass("render-slide-left");
    } else {
      setAnimationClass("render-slide-right");
    }
  }, [location.pathname, navType]);

  const handleFormBack = () => {
    formStepRef.current?.prevStep();
  };

  const handleFormContinued = (val: boolean) => {
    setShowBack(val);
  };

  const isSignIn = path === "/signin";
  const isRegister = path === "/register";
  const isForgot = path === "/forgotpassword";

  return (
    <div className="flex items-center justify-center min-h-screen">

      <div
        className="grid grid-rows-[auto_1fr_auto] w-[900px] space-y-5 pb-50 min-h-screen border-border rounded-xl shadow-2xl shadow-black/10" 
      >
        
        {/* AuthBox Header Heading */}
        <div className="relative flex justify-center items-center pt-55 row-start-1 row-end-2">
          {showBack && <BackButton onClick={handleFormBack} />}
          <LogoBoxHeader />
        </div>

        {/* Authorization Forms */}
        <div className="flex flex-col px-10 pt-20 h-full overflow-hidden row-start-2 row-end-3">
          {isSignIn && (
            <div className={`${animationClass}`}>
              <SignInForm />
            </div>
          )}
          {isRegister && (
            <div className={`${animationClass}`}>
              <RegisterForm formBack={handleFormContinued} ref={formStepRef} />
            </div>
          )}
          {isForgot && (
            <div className={` ${animationClass}`}>
              <ForgotPasswordForm />
            </div>
          )}
        </div>

        {/* Form footers */}
        <div className="relative flex justify-center w-full row-start-3 row-end-4">
          {isSignIn && (
            <div className="flex flex-col items-center gap-2">
              <NavLink to="/register" leadingText="Don't have an account? " linkText="Sign up free!" />
              <NavLink to="/forgotpassword" linkText="Forgot password?" />
            </div>
          )}

          {isRegister && (
            <>
              <NavLink to="/signin" leadingText="Already have an account? " linkText="Sign in" />
            </>
          )}

          {isForgot && (
            <>
              <NavLink to="/signin" linkText="Back to Sign In" />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
