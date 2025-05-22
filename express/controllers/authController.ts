import { Request, Response } from 'express';
import { saveUser, getUser } from '../data/userStore'

export const signUp= (req: Request, res: Response) => {
  const { email, password, username} = req.body;
  saveUser({ email, username, password })
  
  if (password === confirmPassword) {   

  
  res.status(201).json({ message: 'User is signed up' });
}

export const signIn = (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = getUser(email);
  if (!user || user.password !== password) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  console.log('Signed in user:', email);
  res.status(200).json({ message: 'User is signed in', user: { email, username: user.username } });
}

export const passwordReset = (req: Request, res: Response) => {
  const { email } = req.body;
  // send link
  console.log('Forgot password:', email);
  res.status(200).json({ message: 'Password reset link sent' });
};






