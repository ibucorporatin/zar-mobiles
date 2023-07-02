import Typical from "react-typical";

import classes from "./AboutMe.module.css";

const AboutMe = () => {
  return (
    <>
      <main className={classes.aboutMe}>
        <div className={classes.content}>
          <div className={classes.name}><span style={{color:"#D40300",}} >Zar</span  > <span style={{color:"#010101"}}  >mobiles</span></div>
          <div className={classes.skill}> <span>
            <Typical
              loop={Infinity}
              steps={[
                "Wholesale",
                2000,
                "Retail",
                2000,
                "Accessories",
                2000,
                "Mobile Service",
                2000,
              ]}
            />
            </span>
          </div>

        </div>
      </main>
    </>
  );
};

export default AboutMe;
