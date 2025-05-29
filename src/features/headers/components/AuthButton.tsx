import { FC } from "react"
import { Link } from "react-router-dom"

type AuthButtonProps = {
    variant?: "signin" | "register" | null 
}

const AuthButton: FC<AuthButtonProps> = ({ variant = "signin" }) => {
    const isSignIn = variant === "signin"
    return (
        <Link
            to={isSignIn ? "/signin" : "/register"}
            className={`
                inline-flex items-center justify-center
                text-text-primary text-lg font-semibold
                px-6 py-2 rounded-2xl border border-text-muted
                hover:border-bucket-aqua shadow-md hover:shadow-lg
            `}
        >
            {isSignIn ? "Sign In" : "Sign Up"}
        </Link>
    )
}

export { AuthButton }
