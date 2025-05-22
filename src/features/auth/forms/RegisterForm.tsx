import {  useState, RefObject, useImperativeHandle,  useEffect } from "react";
import {useForm, SubmitHandler, useWatch  } from "react-hook-form"
import { GoogleButton } from "../../../components/GoogleButton";
import { Input } from '../components/Input'
import {AuthType, FormStepRefType} from '../types'


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
    
    const onSubmit: SubmitHandler<AuthType> = async (data) => {
        data.preventDefaults();
     }
    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {/** Sliding form */}
           <div className="flex w-full h-full transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${step * 100}%)` }}>
                
                {/** Step 1 */}
                <div className="w-full flex-shrink-0 h-full flex flex-col justify-center ">
                    <GoogleButton className="flex justify-center"/>
                    <div className="flex items-center my-3">
                        <div className="flex-grow h-px bg-white/20" />
                        <span className="mx-4 text-text-primary text-md select-none">or</span>
                        <div className="flex-grow h-px bg-white/20" />
                    </div>
                    
                    <div className="mx-30"> 
                        <label htmlFor="email" className="mb-2 text-md text-text-muted">
                            email
                        </label>
                        <Input name="email" control={control} 
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
                        <label htmlFor="password" className="text-md text-text-muted">
                            password
                        </label>           
                        <Input name="password" control={control} 
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
                    
                    
                        <label htmlFor="password" className="mb-2 text-md text-text-muted ">
                            re-enter password
                        </label>
                        <Input name="confirmPassword" control={control} 
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
                        <label htmlFor="username" className="mb-2 text-md text-text-muted">
                            Username
                        </label>
                        <Input name="username" control={control} 
                            rules = {{required: true
                            }}
                        />
                    </div>
                </div>
            </div>

            {/** Local footer buttons */}
            <div className="flex flex-1 justify-center pb-20">
                {(step === 0 || step === 1 ) && (
                    <button type="button" onClick={nextStep} disabled={!isStepValid()}
                        className={`rounded-full h-10 w-50 text-sm text-white transition-colors duration-200 ease-in-out $
                            ${isStepValid()
                                ? 'bg-[#32D1C6] hover:bg-[#32D1C6]/80 cursor-pointer'
                                : 'bg-gray-700 cursor-not-allowed'}`
                            }> 
                            Continue
                    </button>
                )}
                
                
                {step === 2 && (
                    <button type="submit" disabled={!isStepValid()} 
                        className={`rounded-full h-10 w-50 text-sm text-white transition-colors duration-200 ease-in-out 
                        ${isStepValid() 
                                ? 'bg-[#32D1C6] hover:bg-[#32D1C6]/80 cursor-pointer'
                                : 'bg-gray-700 cursor-not-allowed'}`
                            }> 
                            Sign In 
                    </button>
                )}
            </div>
        </form>
    )
}
