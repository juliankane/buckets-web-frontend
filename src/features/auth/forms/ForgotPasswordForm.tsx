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
    const [error, setError] = useState<boolean>(false);
    

    const onSubmit: SubmitHandler<AuthType> = async ( data ) => {
        try {
            const res = await fetch('/api/users/resetpassword', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (!res.ok) throw new Error("Forgot Password failed!");
            const message = await res.json();
            console.log(message)
            setError(false)
            setConfirmed(true)

            
        } catch (error) {
            setError(true)
            console.log(error)
        }
    };



    return (
        
        <div className="flex flex-col flex-1 space-y-10"> 
            <div className="min-h-[2.5rem] relative justify-center items-center flex">
                {error && <div className=" bg-bucket-red text-text-heading px-4 py-2 rounded shadow text-center max-w-md">
                     <p>Account does not exist</p>
                    </div>}
            </div>

            {!confirmed && 
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-15">
                    <div className="flex flex-col flex-1 justify-center items-center">
                        <h2 className="text-[35px] text-text-primary">                                
                            Reset your password
                        </h2>
                        <p className="text-lg text-text-secondary max-w-[80%] text-center mx-auto">
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
                    <p className="text-[30px] text-text-heading max-w-[80%] text-center mx-auto">
                        An email with instructions has been sent 
                        <span className="text-[20px]">
                            <br/>The link provided will expire in 30 minutes
                        </span>
                    </p>    

                    <span className="text-lg text-text-primary">
                            Didn't receive code?{" "}
                        <button className="text-link hover:underline focus:outline-none hover:text-link-hover">
                            Resend code
                        </button>
                    </span>
                </div>
            </div>
        )}
    </div>

  )
}