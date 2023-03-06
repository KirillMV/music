import { Routes, Route } from "react-router-dom";
import { Login } from "./companents/login/login";
import { SignUp } from "./companents/signup/signup";
import  Wrapper  from "./companents/wrapper";
import { MyTrack } from "./my_track";


export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp/>}/> 
      <Route path="/" element={<Wrapper />}/>
      <Route path="/my_track" element={<MyTrack/>}/>
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};
