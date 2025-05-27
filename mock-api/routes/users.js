import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';


const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const defaultUserPath = path.join(__dirname, '../data/default-user.json');
let users = {}; 
let defaultUser = null;

if (fs.existsSync(defaultUserPath)) {
    defaultUser = JSON.parse(fs.readFileSync(defaultUserPath, 'utf-8'));
    users[defaultUser.email] = defaultUser;
}

function createUser(email, name, password, id = Date.now().toString()) {
    return {
        id,
        email,
        name,
        password,
        settings: { "light-mode": true }
    };
}

router.post('/signup', (req, res) => {
    const { email, name, password } = req.body
    if (users[email]) { return res.status(409).json({ message: 'User already exist' });}

    const user = createUser(email, name, password)

    users[email] = user;
    res.status(201).json({ message: 'Signup successful', token: `token-${user.id}`, user });
});

router.post('/signin', (req, res) => {
    const { email, password } = req.body;
    const user = users[email];
    if (!user || user.password !== password) {return res.status(401).json({ message: 'Invalid credentials' }); }
    
    res.json({
        message: 'Signin successful',
        token: `token-${user.id}`,
        user
    });
});

router.post('/resetpassword', (req, res) => {
    const {email} = req.body;
    const user = users[email];
    if (!user) {return res.status(404).json({message: `Unknown account  ${email}`})}

    res.json({
        message: `Reset password successful`
    });
})


router.get('/:id/profile', (req, res) => {
  const { id } = req.params;
  const found = Object.values(users).find(u => u.id === id);
  if (!found) { return res.status(404).json({ message: 'User not found' }); }

  const { password, ...userData } = found;
  res.json(userData);
});

export default router;


