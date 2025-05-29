

type User = {
    id: string;
    name: string;
    email: string;
}

type UserProfile = {
    id: string;
    name: string;
    email: string
    settings: {
        "light-mode": boolean;
    };
}

export type {User, UserProfile}