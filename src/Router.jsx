import React, { useEffect } from "react";
import { Navigate, useRoutes, useNavigate, useLocation } from "react-router-dom";
import Dashboard from "./pages/dashboard/dashboard";
import Sidebar from "./pages/sidebar/Sidebar";
import Login from "./pages/login/Login";
import Discovery from "./pages/discovery/Discovery";
import Socail from "./pages/socials/Socail";
import Sorry from "./pages/notavlb/Sorry";
import Segmentation from "./pages/segmentation/Segmentation";
import Competitor from "./pages/competitor/competitor";
import Channel from "./pages/Channel/channel";
import Support from "./pages/Support/Support";


export default function Router() {
  let location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      navigate("/signup");
    }
    
    // if(location.pathname == "/support"){
    //   document.querySelector('.font-lato').style.display="unset"
    // }else{
    //   document.querySelector('.font-lato').style.display="none"
    // }
  }, []);
  
 
  return useRoutes([
    { path: "/signup", element: <Login /> },
    {
      // path: "/",
      element: <Sidebar />,
      children: [
        { path: "/", element: <Discovery /> },
        { path: "dashboard", element: <Dashboard /> },
        { path: "Social", element: <Socail /> },
        { path: "segmentation", element: <Segmentation /> },
        { path: "competitors", element: <Competitor /> },
        { path: "channels", element: <Channel /> },
        { path: "Support", element: <Support /> },
      ],
    },
  ]);
}
