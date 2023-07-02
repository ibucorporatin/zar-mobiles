import classes from "./Projects.module.css";

import groceryImg from "../../../Assets/arProject.png";
import socialImg from "../../../Assets/social1.png";
import campImg from "../../../Assets/yelpcamp.png";
// import groceryImg from "../../../Assets/grocery.png";
// import socialImg from "../../../Assets/socialmedia.png";
// import campImg from "../../../Assets/camp2.png";

const Projects = () => {
  return (
    <>
      <h2 >Products</h2>
      <p>
        Hard-working web developer with a flair for creating elegant solutions
        in the least amount of time.
      </p>

      <div className={classes.project}>
        <div className={classes.projectItem1}>
          <div data-aos="fade-right">
            <img src={"https://images.unsplash.com/photo-1593830566460-2464575a9a24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vYmlsZSUyMGNvdmVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"} alt="mobile cover" />
          </div>
          <div data-aos="fade-left"> 
            <p style={{ paddingLeft: "20px" }}>
               A customer Can order a product{" "}
              and Only admins can create, edit , delete the products and
               check the customer ordered products.{" "}
              <a
                href="https://ar-traders-adirai.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                https://ar-traders-adirai.herokuapp.com/
              </a>
            </p>
          </div>
        </div>
        <div className={classes.projectItem2}>
          <div data-aos="fade-right">
            <p style={{ paddingRight: "20px" }}>
              A User can create, like, delete ,comment a post and follow and
              unfollow a users and receive the notfication live, chat with live with help of socket.io api and
              also admin can delete anyone's post <br />{" "}
              <a
                href="https://social-media-app-adirai.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                https://social-media-app-adirai.herokuapp.com/
              </a>
            </p>
          </div>
          <div data-aos="fade-left">
            <img src={socialImg} alt="grocery2" />
          </div>
        </div>
        <div className={classes.projectItem3} data-aos="fade-right">
          <div>
            <img src={campImg} alt="grocery3" />
          </div>
          <div data-aos="fade-left">
            <p style={{ paddingLeft: "20px" }}>
              A user can create campgrounds with location of map , edit , delete
              and review the campgrounds <a rel="noreferrer" href="https://yelpcamp-adirai.herokuapp.com/" target="_blank">
            https://yelpcamp-adirai.herokuapp.com/
          </a>
            </p>
          </div>
        </div>
      </div>

    </>
  );
};

export default Projects;
