import { Routes, Route, BrowserRouter} from 'react-router-dom';
import { Authenticate, Home} from './pages';
import { Dashboard, Buckets} from '@features/ContentViews'
import { LocalLayout, AuthLayout, ProfileLayout} from './layouts'
import { useEffect } from 'react';

function AppContent() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (

    <Routes>
      
      {/** Public routes & layout */}
      <Route element={<LocalLayout/>}>
        <Route path="/" element={<Home />} />
      </Route>



      {/** Authorization routes & layout */}
      <Route element={<AuthLayout/>}>
        <Route path="/signin" element={<Authenticate />} />
        <Route path="/register" element={<Authenticate />} />
        <Route path="/forgotpassword" element={<Authenticate />} />
      </Route>


      {/** User|Profile routes & layout */}
      <Route path="/profile/:id" element={<ProfileLayout/>}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="buckets" element={<Buckets/>}/>
      </Route>

    </Routes>

  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
