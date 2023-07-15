import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";
import profilePic from "../../assets/Photo_fw14_056.png";


export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img src={profilePic} alt="Images" />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                {/* Hi , My name is{" "}
                <span className="different">Mr. Chit Khonn Cho </span> and I am from{" "}
                <span className="different">
                  {" "}
                  Yangon, Myanmar
                </span> */}
                I'm a passionate{" "}
                <span className="different">
                Full Stack Developer
                </span>
                . with expertise in front-end technologies like HTML, CSS, and JavaScript. I also have experience with popular frameworks like React and Angular.{" "}
                <span className="different">I enjoy creating </span>user-friendly interfaces and building robust back-end systems using languages like Node.js, Java, PHP and databases like MongoDB , MySql. Let's collaborate and create impactful web applications together!
              </h4>
              <h4>Other My Hobies :</h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Watch Anime and Read Manga:'D{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Play Football and Play Guiter{" "}
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
