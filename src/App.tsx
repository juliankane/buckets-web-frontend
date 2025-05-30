import { Routes, Route, BrowserRouter} from 'react-router-dom';
import { Authenticate, Home} from './pages';
import { Dashboard, Buckets, Account, Appearence, Notifications, Preferences, Privacy, Profile} from '@features/profile/views'
import { LocalLayout, AuthLayout, ProfileLayout, SettingsLayout, ColorLayout} from './layouts'
import { useEffect } from 'react';
import { PrivateRoute } from '@utils/PrivateRoute';


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
      <Route element={<ColorLayout/>}>
        <Route path="/" element={<LocalLayout/>}>
          <Route index element={<Home />} />
        </Route>

        {/** Authorization routes & layout */}
        <Route element={<AuthLayout/>}>
          <Route path="/signin" element={<Authenticate />} />
          <Route path="/register" element={<Authenticate />} />
          <Route path="/forgotpassword" element={<Authenticate />} />
        </Route>

        {/** User|Profile routes & layout */}
      
        <Route path="/:id" element={<PrivateRoute> <ProfileLayout/> </PrivateRoute>}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="buckets" element={<Buckets/>}/>
          <Route path="profile" element={<Profile/>} />
          <Route path="settings" element={<SettingsLayout/>}>

            <Route path="account" element={<Account/>} />
            <Route path="appearence" element={<Appearence/>}/>
            <Route path="notifications" element={<Notifications/>}/>
            <Route path="preferences" element={<Preferences/>}/>
            <Route path="privacy" element={<Privacy/>}/>
          </Route>
          </Route>

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
