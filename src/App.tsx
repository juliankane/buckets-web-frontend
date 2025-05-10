import { Routes, Route } from 'react-router-dom';
import {
  Home,
  SignIn,
  SignUp,
  Settings,
  BucketDashboard,
  ProfileDashboard,
} from '@pages/index';



export default function App() {

  // testing routes
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/signin" element={<SignIn/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/settings/usr?" element={<Settings/>}/>
      <Route path="/dashboard/usr?" element={<ProfileDashboard/>}/>
      <Route path="/bucket/usr?/bucketcode/?" element={<BucketDashboard/>}/>
    </Routes>
    
  )
}

