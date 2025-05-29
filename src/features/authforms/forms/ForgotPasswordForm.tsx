import { useState } from "react";
import {useForm, SubmitHandler } from "react-hook-form"
import { AuthType } from "../types"
import { NavLink } from "@components/InlineLink"
import { FormButton, FormInput } from "../components";

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
            console.log(error)
            setError(false)
            setConfirmed(true)

        } catch (error) {
            setError(true)
            console.log(error)
        }
    };



    return (
        <div> 
            {!confirmed && 
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex-col justify-center space-y-10">
                    <div className="flex flex-col items-center justify-center">
                        <h2 className="text-[35px] text-text-primary">                                
                            Reset your password
                        </h2>
                        <p className="text-lg text-text-secondary max-w-[80%] text-center mx-auto">
                            Enter your email address and we will send you a link with instructions
                        </p>
                    </div>

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

                <div className="flex justify-center pt-2"> 
                    <FormButton text="Send" type="submit" disabled={!formState}/>            
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
                    
                    <NavLink to="" leadingText="Didn't receive code? " linkText="Resend code"/>
                </div>
            </div>
        )}
    </div>
  )
}