import React from "react";
import "./Techstacks.css";
import { FaReact,FaAngular, FaLinux, FaPhp,FaJava, FaNodeJs, FaAws ,FaVuejs} from "react-icons/fa";
import {
  SiRedux,
  SiHtml5,
  SiMaterialui,
  SiExpress,
  SiRedis,
  SiTailwindcss,
  SiNetlify
} from "react-icons/si";
import { DiCss3, DiMongodb } from "react-icons/di";
import { SiJavascript,SiPostgresql,SiMysql,SiSpringboot } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { BsBootstrap, BsWordpress } from "react-icons/bs";

export const Techstacks = () => {
  return (
    <>
      <div className="section main" data-aos="fade-right">
        <h2 className="section__title different">Skills</h2>
        <div className="techsection">
          <div>
            <SiJavascript />
            <h5>Javascript</h5>
          </div>
          <div>
            <SiHtml5 />
            <h5>HTML</h5>
          </div>
          <div>
            <DiCss3 />
            <h5>CSS</h5>
          </div>
          <div>
            <FaReact />
            <h5>React</h5>
          </div>
          <div>
            <FaNodeJs />
            <h5>Nodejs</h5>
          </div>
          <div>
            <DiMongodb />
            <h5>MongoDb</h5>
          </div>

          <div>
            <SiExpress />
            <h5>Express</h5>
          </div>

          <div>
            <FaJava/>
            <h5>Java</h5>
          </div>
          <div>
            <BsBootstrap />
            <h5>Bootstrap</h5>
          </div>
          <div>
            <FaPhp />
            <h5>Php</h5>
          </div>
          <div>
            <SiMysql />
            <h5>MySql</h5>
          </div>
          <div>
            <VscGithub />
            <h5>Github</h5>
          </div>
          <div>
            <FaVuejs />
            <h5>Vue js</h5>
          </div>

          <div>
            <SiSpringboot />
            <h5>Spring Boot</h5>
          </div>
          <div>
            <FaLinux />
            <h5>Linux</h5>
          </div>
          <div>
            <FaAngular />
            <h5>Angular</h5>
          </div>
          <div>
            <SiPostgresql />
            <h5>Postgresql</h5>
          </div>  
          <div>
            <SiRedux />
            <h5>Redux</h5>
          </div>
        </div>
      </div>
    </>
  );
};
