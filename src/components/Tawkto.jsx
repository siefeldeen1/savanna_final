import React, { useEffect } from "react";
// import TawkTo from 'tawk.to';
import { useLocation } from "react-router-dom";

const Tawkto = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/support") {
      // Replace 'YOUR_TAWKTO_WIDGET_CODE' with the actual code provided by Tawk.to
      const tawkToScript = `
    var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
    (function(){
    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
    s1.async=true;
    s1.src='https://embed.tawk.to/64cbb56dcc26a871b02d0d74/1h6trpd23';
    s1.charset='UTF-8';
    s1.setAttribute('crossorigin','*');
    s0.parentNode.insertBefore(s1,s0);
    })();
   `;

      const script = document.createElement("script");
      script.innerHTML = tawkToScript;
      document.head.appendChild(script);

      // return () => {
      // };

      // if (window && window.Tawk_API) {
      //   // Set visitor attributes
      //   window.Tawk_API.setAttributes({
      //     name: "John Doe", // Replace with actual user's name
      //     email: "john@example.com", // Replace with actual user's email
      //     // Add more attributes as needed
      //   });
      // }
    } else {
      document.head.removeChild(script);
    }
  }, [location]);

  return <div></div>;
};

export default Tawkto;
