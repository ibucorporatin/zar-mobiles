import Contact from "./Contact/Contact";
import classes from "./Intro.module.css";
import qualifiPhoto from "../../Assets/AdobeStock_562884714_Preview.png";

const educationsDetails1 = [
  {
    id: 1,
    name: "Phone Cases",
    duration: "2017-2019",
    destination: "Stylish protection for your mobile phone - choose our phone cases to keep your device safe and looking great.",
    native: "adirampattinam-614701",
  },
  {
    id: 2,
    name: "HeadPhones",
    duration: "6 months",
    destination: "Discover the perfect sound experience with our curated collection of high-quality headphones.",
  },
  {
    id: 3,
    name: "Portable Speakers",
    duration: "6 months",
    destination: "Enjoy high-quality sound on the go with our compact and powerful speakers.",
  },
];
const educationsDetails2 = [
  {
    id: 4,
    name: "Tempered glass",
    duration: "2019-2022",
    destination: "Enhance screen protection with our durable tempered glass protectors, preserving clarity and safeguarding against scratches and cracks.",
    native: "adirampattinam-614701",
  },
  {
    id: 5,
    name: "Charging Cables",
    duration: "2020-2021",
    destination: "Stay powered up and connected with our reliable and durable charging cables, ensuring fast and efficient charging for your devices.",
  },
  {
    id: 6,
    name: "Mobile Service",
    duration: "2 months",
    destination: " Reliable repairs, updates, and expert assistance for your devices at the best price.",
  },
];

const Intro = () => {
  return (
    <>
      <div className={classes.intro} id="about">  
        <h2>About</h2>

        <p>
        Our services encompass wholesale, retail, accessories, and mobile service. We operate online and offer a comprehensive range of mobile accessories to cater to the needs of both wholesale and retail customers. With a strong emphasis on customer satisfaction, we strive to provide top-quality products and reliable service.
        </p>
        <div style={{ marginTop: "15px" }} id="projects">
          {/* <Projects /> */}
          <div className={classes.education}>
          <h2>Products & Services</h2>
          <div className={classes.qualification}>
            <div className={classes.qualificationItem} data-aos="fade-right">
              <div>
                {educationsDetails1.map((item) => (
                  <div className={classes.listDesign} key={item.id}>
                    <h3 style={{color:"#010101"}}  >{item.name}</h3>
                    {/* <div>{item.duration}</div> */}
                    <p>
                      {item.destination} <br />
                      {/* {item.native && item.native} */}
                    </p>
                  </div>
                ))}
              </div>
              <div>
                {educationsDetails2.map((item) => (
                  <div className={classes.listDesign} key={item.id}>
                    <h3 style={{color:"#010101"}} >{item.name}</h3>
                    {/* <div>{item.duration}</div> */}
                    <p>
                      {item.destination}
                      {/* {item.native && item.native} */}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div data-aos="fade-left">
              <img src={qualifiPhoto}  alt="mobile"/>
            </div>
          </div>
        </div>
        </div>

        <div style={{ marginTop: "25px" }} id="contact">
          <Contact />
        </div>
      </div>
    </>
  );
};

export default Intro;
