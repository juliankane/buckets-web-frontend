// Authorization fields 
export type AuthType = {
    id?: string
    email?: string
    password?: string
    confirmPassword?: string
    username?: string
}

export type FormStepRefType = { prevStep: () => void };