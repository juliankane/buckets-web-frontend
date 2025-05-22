import {useForm, SubmitHandler } from "react-hook-form"
import { GoogleButton } from "../../../components/GoogleButton";
import { AuthType } from  "../types"
import { Input } from '../components/Input'

export function SignInForm() {
    const { control, handleSubmit, formState } = useForm<AuthType>({
        defaultValues: {
            email: "",
            password: "",
        }, mode: "onTouched" 
    })

    const onSubmit: SubmitHandler<AuthType> = (data) => console.log(data)
    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex-col justify-center">
                <GoogleButton className="flex justify-center"/>
    
                <div className="flex items-center my-3">
                    <div className="flex-grow h-px bg-white/20" />
                    <span className="mx-4 text-white text-md select-none">or</span>
                    <div className="flex-grow h-px bg-white/20" />
                </div>

                <div className="mx-30">         
                    <div className="pb-2">
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

                    <div className="pb-2">
                        <label htmlFor="password" className="mb-2 text-md font-medium text-text-muted">
                            password
                        </label>       
                        <Input name="password" control={control} 
                            rules={{
                                required: "Password is required",
                                pattern: {
                                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                    message:
                                    "Password must contain uppercase, lowercase, number, and special character",
                                },
                            }}
                        /> 
                    </div>
                </div>

                <div className="flex justify-center pt-2">                
                    <button type="button" disabled={!formState}
                        className={`rounded-full h-10 w-50 text-sm text-white transition-colors duration-200 ease-in-out $
                            ${formState.isValid
                                ? 'bg-[#32D1C6] hover:bg-[#32D1C6]/80 cursor-pointer'
                                : 'bg-gray-700 cursor-not-allowed'}`
                            }> 
                            Sign In 
                    </button>
                </div>
            </div>
        </form>
    )
}