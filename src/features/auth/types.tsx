

// Authorization fields 
export type AuthType = {
    preventDefaults(): unknown
    email?: string
    password?: string
    confirmPassword?: string
    username?: string
}

export type FormStepRefType = { prevStep: () => void };