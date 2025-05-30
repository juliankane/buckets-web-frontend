import {useForm, SubmitHandler } from "react-hook-form"
import { useNavigate } from "react-router-dom";
import {useUserStore} from "@store/userStore"
import { AuthType } from  "../types"
import { GoogleButton } from "@components/index";
import { FormSeperator, FormButton, FormInput } from "../components";


export function SignInForm() {
    const { control, handleSubmit, formState } = useForm<AuthType>({
        defaultValues: {
            email: "",
            password: "",
        }, mode: "onTouched" 
    })

    const setUser = useUserStore((state) => state.setUser);
    const setAuthToken = useUserStore((state) => state.setAuthToken)
    const navigate = useNavigate()

    const onSubmit: SubmitHandler<AuthType> = async ( data ) => {
        try {
            const res = await fetch('/api/users/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (!res.ok) throw new Error("Login failed");

            const message = await res.json();
            const user = message.user
            
            setUser(user);
            setAuthToken('bingbong');
            navigate(`/${user.id}`); // use the actual ID now

        } catch (error) {
            console.error("Login error", error);
            alert("Failed to sign in!")
        }
    };
    

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex-col justify-center">
                <GoogleButton className="flex justify-center"/>
                <FormSeperator text="or"/>

                <div className="mx-30">         
                    <div className="pb-2">
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

                    <div className="pb-2">
                        <FormInput header="password" name="password" control={control} 
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
                    <FormButton text="Sign In" type="submit" disabled={!formState}/>
                </div>
            </div>
        </form>
    )
}