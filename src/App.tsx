import { Routes, Route, BrowserRouter} from 'react-router-dom';
import { AuthBox, Home, } from './pages';
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
          <Route path="/signin" element={<AuthBox />}/>
          <Route path="/register" element={<AuthBox />}/>
          <Route path="/forgotpassword" element={<AuthBox />}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

