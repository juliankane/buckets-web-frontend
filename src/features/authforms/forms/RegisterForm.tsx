import { useState, RefObject, useImperativeHandle, useEffect } from "react";
import { useForm, SubmitHandler, useWatch  } from "react-hook-form"
import { useNavigate } from "react-router-dom";
import {useUserStore} from "@store/userStore"
import { AuthType, FormStepRefType} from '../types'
import { GoogleButton } from "@components/index";
import { FormSeperator, FormInput, FormButton } from "../components";

type Props = {
    formBack: (show:boolean) => void;
    ref?: RefObject<FormStepRefType | null>;
};

export function RegisterForm ({formBack, ref}: Props) {
    const { control, handleSubmit} = useForm<AuthType>({
        defaultValues: {
            email: "",
            password: "",
            confirmPassword: "",
            username: "",
        }, mode: "onTouched"
    })
    const [step, setStep] = useState<number>(0);
    const watchStepFields = useWatch({control})
    const setUser = useUserStore((state) => state.setUser);
    const navigate = useNavigate()

    const nextStep = () => { if (step < 2 && step >= 0) { setStep(step + 1); formBack(true);}};
    
    useImperativeHandle(ref, () => { return { 
        prevStep() { if (step > 0){ setStep(step-1) }}
    }}, [step]);

    
    const isStepValid = () => {
        switch (step) { 
            case 0: 
                return ( !!watchStepFields.email && /^\S+@\S+\.\S+$/.test(watchStepFields.email) 
                );
            case 1:
                return ( !!watchStepFields.password && !!watchStepFields.confirmPassword && 
                    watchStepFields.password === watchStepFields.confirmPassword &&
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/.test(watchStepFields.password)
                 );
            case 2:
                return (!!watchStepFields.username);
        }
    };

    useEffect(() => {if (step === 0) { formBack(false) } })
    
    const onSubmit: SubmitHandler<AuthType> = async ( data ) => {
        try {
            const res = await fetch('/api/users/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (!res.ok) throw new Error("Signup failed");

            const message = await res.json();
            const user = message.user

            setUser(user);
            navigate(`/profile/${user.id}`);
        } catch (error) {
            console.error("Login error", error);
            alert("Failed to sign in!")
        }
    };



    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {/** Sliding form */}
           <div className="flex w-full h-full transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${step * 100}%)` }}>

                {/** Step 1 */}
                <div className="w-full flex-shrink-0 h-full flex flex-col justify-center ">
                    <GoogleButton className="flex justify-center"/>
                    <FormSeperator text="or"/>
                    
                    
                    <div className="mx-30"> 
                        <FormInput header="email" name="email" control={control} 
                            rules={{
                                required: true,
                                pattern: {
                                    value: /^\S+@\S+\.\S+$/,
                                    message: "Invalid email format",
                                }, 
                            }} 
                        />
                    </div>
                </div>

                {/**Step 2 */}
                <div className="w-full flex-shrink-0 h-full flex flex-col justify-center ">
                    <div className="flex justify-center">
                        <h2 className="text-[35px] text-text-heading">
                            Create a password
                        </h2>
                    </div>

                    <div className="mx-30">
                        <FormInput header="password" name="password" control={control} 
                            rules={{
                            required: "Password is required", 
                            minLength: {
                                value: 8,
                                message: "Password must be at least 8 characters long",
                            },
                            pattern: {
                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                message:
                                "Password must contain uppercase, lowercase, number, and special character",
                            },
                            }}
                        /> 

                        <FormInput header="re-enter password" name="confirmPassword" control={control} 
                            rules={{
                            required: "Password is required",
                            minLength: {
                                value: 8,
                                message: "Password must be at least 8 characters long",
                            },
                            pattern: {
                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                message:
                                "Password must contain uppercase, lowercase, number, and special character",
                            },
                            }}
                        />
                    </div>
                </div>
                
                {/** Step 3 */}
                <div className="w-full flex-shrink-0 h-full flex flex-col justify-center space-y-5">
                    <div className="flex justify-center">
                        <h2 className="text-[35px] text-shadow-text-primary">
                            Create a username
                        </h2>
                    </div>
        
                    <div className="mx-30"> 
                        <FormInput header="Username" name="username" control={control} 
                            rules = {{required: true
                            }}
                        />
                    </div>
                </div>
            </div>

            {/** Local footer buttons */}
            <div className="pt-2 flex justify-center">
                {(step === 0 || step === 1) && (
                    <FormButton text="Continue" type="button" onClick={nextStep} disabled={!isStepValid()}
                    />
                )}

                {step === 2 && (
                    <FormButton text="Sign In" type="submit" disabled={!isStepValid()}/>
                    
                )}
            </div>
        </form>
    )
}
