type User = {
  email: string;
  username: string;
  password: string; // in real apps you'd hash this!
  settings: string;
};

const users: Record<string, User> = {};

export const saveUser = (user: User) => {
  users[user.email] = user;
}

export const getUser = (email: string): User | null => {
  return users[email] || null;
}

export const userExist = (email:string): boolean => {
    return !!users[email]
}

export const getAllUsers = (): User[] => {
  return Object.values(users);

}