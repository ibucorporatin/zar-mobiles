import classes from "./Contact.module.css";
import { FiMail, FiSmartphone, FiMapPin } from "react-icons/fi";

const Contact = () => {
  return (
    <>
      <h2>Contact</h2>

      <div className={classes.contact}>
        <div className={classes.location} data-aos="fade-right">
          <div style={{ marginBottom: "30px" }}>
            <span>
              {" "}
              <FiMapPin />
            </span>{" "}
            <h3>Location:</h3>
            <div className={classes.contactText}>
            17/middle street
,
Adirampattinm
-614701
            </div>
          </div>
          <div style={{ marginBottom: "30px" }}>
            <span>
              <FiMail size={"20px"} />
            </span>{" "}
            <h3>Email:</h3>
            <div className={classes.contactText} style={{ marginLeft: "45px" }}>
            Salesadirai@gmail.com
            </div>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <span>
              <FiSmartphone />
            </span>{" "}
            <h3>Call:</h3>
            <div>+91 9042455667</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
