import {useForm, SubmitHandler } from "react-hook-form"
import { Input } from '../components/Input'
import { useState } from "react";
import { AuthType } from "../types"


export function ForgotPasswordForm () {
    const { control, handleSubmit, formState } = useForm<AuthType>({
        defaultValues: {
            email: "",
        }, mode: "onTouched" })

    const [confirmed, setConfirmed] = useState<boolean>(false)
    
    const onSubmit: SubmitHandler<AuthType> = () => { 
        // processs - invalid -> trigger error
        setConfirmed(true) 
    }
    return (
        <div className="flex flex-col flex-1 "> 
            {!confirmed && 
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-15">
                    <div className="flex flex-col flex-1 justify-center items-center">
                        <h2 className="text-[35px] text-white">                                
                            Reset your password
                        </h2>
                        <p className="text-lg text-white max-w-[80%] text-center mx-auto">
                            Enter your email address and we will send you a link with instructions
                        </p>
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

                

                <div className="flex flex-1 justify-center pb-20">                
                    <button type="submit"  disabled={!formState}
                    className={`rounded-full h-10 w-50 text-md text-white transition-colors duration-200 ease-in-out $
                        ${formState.isValid
                            ? 'bg-[#32D1C6] hover:bg-[#32D1C6]/80 cursor-pointer'
                            : 'bg-gray-700 cursor-not-allowed'}`
                        }
                    >   
                        Send
                    </button>
                </div>
            </form>}

        {/** email sent */}
        {confirmed && 
            (<div>
                <div className="flex flex-col flex-1 justify-center items-center text-center space-y-10">
                    <p className="text-[30px] text-white max-w-[80%] text-center mx-auto">
                        An email with instructions has been sent 
                        <span className="text-[20px]">
                            <br/>The link provided will expire in 30 minutes
                        </span>
                    </p>    

                    <span className="text-lg text-white">
                            Didn't receive code?{" "}
                        <button className="text-blue-600 hover:underline focus:outline-none">
                            Resend code
                        </button>
                    </span>
                </div>
            </div>
        )}
    </div>
  )
}