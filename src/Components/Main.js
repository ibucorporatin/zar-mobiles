import { useEffect } from "react";

import Media from "react-media";

import Aos from "aos";
import "aos/dist/aos.css";

import Sidebar from "./Header/Sidebar";
import AboutMe from "./Content/AboutMe";

import MobileSideBar from './Mobile/MobileSideBar'

import Intro from "../Components/Content/Intro";

import classes from "./Main.module.css";
import { BsWhatsapp } from "react-icons/bs";

const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = '9042455667';
  
    if (/(android|webos|iphone|ipad|ipod|blackberry|windows phone)/i.test(navigator.userAgent)) {
      // If it's a mobile device, open the WhatsApp application if installed
      window.open(`whatsapp://send?phone=${phoneNumber}`);
    } else {
      // If it's a desktop device or WhatsApp application is not installed, redirect to WhatsApp website
      window.open(`https://wa.me/${phoneNumber}`);
    }
  };
          return (
            <>
          
                  <div className={classes["grid-container-mobile"]}>
                    <div className={classes["grid-item"]} id="home">
                      <MobileSideBar />
                      <AboutMe />
                      <Intro />
                    </div>
                    <div className="mobileNavbar2">
       
         
          
              <BsWhatsapp onClick={handleWhatsAppClick} />
        
      
      </div>
                  </div>
                </>

  );
};

export default Main;
