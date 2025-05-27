import { Routes, Route, BrowserRouter} from 'react-router-dom';
import { Authenticate, Home, Profile } from './pages';
import { useEffect } from 'react';
import Header from './Header'

export default function App() {
  useEffect(() => {
    const script = 
      document.createElement("script");
        script.src= "https://accounts.google.com/gsi/client";
        script.async=true;
        script.defer=true;
        document.body.appendChild(script);
        return () => {
          document.body.removeChild(script);
        }
  },[]);

  return (  
    <BrowserRouter>
      <Header/>
      <div className='bg-background-rich min-h-screen min-w-screen'> 
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/signin" element={<Authenticate />}/>
          <Route path="/register" element={<Authenticate />}/>
          <Route path="/forgotpassword" element={<Authenticate />}/>
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

