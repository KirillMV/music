import { Routes, Route } from "react-router-dom";
import { Login } from "./login";
import  Wrapper  from "./companents/wrapper";
import { MyTrack } from "./my_track";
export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/ " element={<Wrapper />}/>
      <Route path="/my_track" element={<MyTrack/>}/>
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};
