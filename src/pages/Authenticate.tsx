
import {
  RegisterForm,
  SignInForm,
  ForgotPasswordForm,
} from "../features/auth";
import { Logo, BackArrow } from "../assets";
import { useRef, useState, useEffect } from "react";
import { FormStepRefType } from "@features/auth/types";
import { Link, useLocation, useNavigationType } from "react-router-dom";


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
      <div className="fixed min-w-[900px] h-full min-h-screen border-3 border-border rounded-xl pointer-events-none shadow-2xl shadow-black/10" />
        <div className="flex flex-col rounded-lg w-full max-w-[800px] max-h-[900px] space-y-25">
          

          {/** Authorization Header Heading */}
          <div className="relative flex flex-col justify-center items-center w-full h-full">

            {/** Show backarrow for multi-step forms */}
            {showBack && (
              <button onClick={handleFormBack} 
                className="absolute left-0 ml-4 group ring-2 text-text-secondary ring-border w-12 h-12 
                flex items-center justify-center rounded-full
              hover:bg-black-warm     hover:text-text-primary hover:ring-text-primary hover:ring-3 transition-all"
              > 
                <BackArrow className="w-12 h-12 rotate-12 p-1" />
              </button>
            )}
            
            <Link to="/" className="hover:cursor-pointer flex items-center" aria-label='/'>
                <span className="w-32 h-32 flex items-center justify-center rounded-full bg-bucket-red ">
                    <Logo className="w-4 h-4 md:w-8 md:h-8 lg:w-24 lg:h-24 rotate-12 fill transition-all duration-200 " />
                </span>
                <span className='ml-4 font-sarif-sans sarif-sans font-bold text-text-heading text-4xl tracking-wider'>
                    buckets
                </span>
            </Link>
          </div>
          

          {/**  Authorization Forms */}
          <div className="flex flex-col min-h-[500px] overflow-hidden">
            {isSignIn && (
              <div className={`flex flex-col flex-grow justify-center ${animationClass}`}>
                <SignInForm />
              </div>
            )}
            {isRegister && (
              <div className={`flex flex-col flex-grow justify-center ${animationClass}`}>
                <RegisterForm formBack={handleFormContinued} ref={formStepRef} />
              </div>
            )}
            {isForgot && (
              <div className={`flex flex-col flex-grow justify-center ${animationClass}`}>
                <ForgotPasswordForm />
              </div>
            )}

            {/** Form footers -> NOTE: Refractor this*/}
            <div className="flex flex-col flex-grow justify-end items-center w-full h-full">
              {isSignIn && (
                <div className="flex flex-col gap-2 items-center">
                  <Link
                    to="/register"
                    className="text-lg text-text-primary"
                  >
                    Don't have an account? <span className=" text-link hover:underline hover:text-link-hover focus:outline-none">Create one</span>
                  </Link>
                  <Link
                    to="/forgotpassword"
                    className="text-md text-text-secondary hover:underline hover:text-link-hover"
                  >
                    Forgot password?
                  </Link>
                </div>
              )}
              
              {isRegister && (
                <div className="flex justify-center w-full px-4">
                  <span className="text-lg text-text-secondary">
                    Already have an account?{" "}
                    <Link
                      to="/signin"
                      className="text-link hover:underline hover:text-link-hover focus:outline-none"
                    >
                      Sign in
                    </Link>
                  </span>
                </div>
              )}

              {isForgot && (
                <div className="flex justify-end w-full px-4">
                  <Link
                    to="/signin"
                    className="text-lg text-link  hover:underline hover:text-link-hover focus:outline-none"
                  >
                    Back to Sign In
                  </Link>
                </div>
              )}



            </div>
          </div>
        </div>
    </div>
  );
}