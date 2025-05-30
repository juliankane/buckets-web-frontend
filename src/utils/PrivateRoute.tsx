
import { ReactNode } from  'react'
import { useUserStore } from "@store/userStore";
import { useNavigate } from "react-router-dom";
import { useLayoutEffect } from "react";

export const PrivateRoute = ({ children }: { children: ReactNode }) => {
    const authToken = useUserStore((state) => state.authToken);
    const navigate = useNavigate();

    useLayoutEffect(() => {
        if (!authToken)  navigate("/", { replace: true });
    }, [authToken, navigate]);

    if (!authToken) return null;

    return children;
}
