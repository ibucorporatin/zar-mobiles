import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import * as FaIcon from "react-icons/fa";
import { IconContext } from "react-icons";
import { AiOutlineYoutube } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { FiFacebook } from "react-icons/fi";
import { Link } from "react-scroll";
import classes from '../Header/Sidebar.module.css'

import "./MobileSideBar.css";

const icons = [
  {
    id: 1,
    name: <FaIcon.FaHome color="#D40300"  />,
    text: "Home",
    link: "home",
  },
  {
    id: 2,
    name: <FaIcon.FaUser color="#D40300" />,
    text: "About",
    link: "about",
  },
  {
    id: 4,
    name: <FaIcon.FaMobile color="#D40300" />,
    text: "Product",
    link: "projects",
  },
  {
    id: 5,
    name: <FaIcon.FaPhoneAlt color="#D40300"   />,
    text: "Contact",
    link: "contact",
  },
];

const MobileSideBar = () => {
  const [sidebar, setSidebar] = useState(false);

  const sidebarHandler = () => {
    setSidebar(!sidebar);
  };

  return (
    <>
      <div className="mobileNavbar">
        {!sidebar ? (
          <FaBars onClick={sidebarHandler} />
        ) : (
          <AiOutlineClose onClick={sidebarHandler} />
        )}
      </div>
      <nav className={sidebar ? "navbar active" : "navbar"}>
        <header className={classes.header}>
          {/* <img src={photo} alt="myface" /> */}

          <div className={classes.name}><span style={{color:"#D40300"}} >Zar</span  > <span style={{color:"#010101"}}  >mobiles</span></div>
          <div  className={classes.socialIcons} >
            <a
              href="https://instagram.com/zar_mobileadirai?igshid=MzNlNGNkZWQ4Mg=="
              target="_blank"
              rel="noreferrer"
            >
              <FaIcon.FaInstagram />
            </a>
        
         
          
            <a
              href="https://youtube.com/@zarmobileadirai240"
              target="_blank"
              title="freelancer"
              rel="noreferrer"
            >
              <AiOutlineYoutube />
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=100092293144756&mibextid=ZbWKwL"
              target="_blank"
              title="freelancer"
              rel="noreferrer"
            >
              <FiFacebook />
            </a>
            <a
              href="https://chat.whatsapp.com/EyMadtI2oD43ecyP2eSceR"
              target="_blank"
              title="freelancer"
              rel="noreferrer"
            >
              <BsWhatsapp />
            </a>
          </div>
        </header>
        <IconContext.Provider value={{ color: "#a8a9b4", size: "1.3rem" }}>
          <nav className={classes.list}>
            <ul>
              {icons.map((icon) => (
                <li key={icon.id}>
                  <Link
                    to={icon.link}
                    spy={true}
                    smooth={true}
                    offset={-7}
                    duration={1500}
                    onClick={sidebarHandler}
                    style={{ cursor: "pointer", textDecoration: "none" }}
                  >
                    {icon.name}
                    <span style={{color:"#010101"}} >{icon.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </IconContext.Provider>
        <footer className={classes.footer} style={{color:"red"}}>
          
          <span  style={{fontSize:12,color:"#010101"}} >
          © 2023 Zar-mobails. All rights reserved.
          </span>
        </footer>
      </nav>
    </>
  );
};

export default MobileSideBar;
