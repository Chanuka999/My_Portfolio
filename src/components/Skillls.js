// import {Container,Row ,Col} from "react-bootstrap";
// import colorSharp from "../assets/img/color-sharp.png";
// import meter1 from "../assets/img/meter1.svg";
// import meter2 from "../assets/img/meter2.svg";
// import meter3 from "../assets/img/meter3.svg";
// import Carousel from "react-multi-carousel";
// export const Skillls = () =>{
//     const responsive = {
//         superLargeDesktop: {
//           // the naming can be any, depends on you.
//           breakpoint: { max: 4000, min: 3000 },
//           items: 5
//         },
//         desktop: {
//           breakpoint: { max: 3000, min: 1024 },
//           items: 3
//         },
//         tablet: {
//           breakpoint: { max: 1024, min: 464 },
//           items: 2
//         },
//         mobile: {
//           breakpoint: { max: 464, min: 0 },
//           items: 1
//         }
//       };

//  return(
//     <section className="skill" id="skills">
//        <Container>
//          <Row>
//            <Col>
//              <div className="skill-bx">
//                 <h2>
//                     Skills
//                 </h2>
//                 <p>I am a full Stack developer</p>
//                 <Carousel responsive={responsive} infinite={true} className="skill-slider">
//                     <div className="item">
//                        <img src={meter1} alt="Image" />
//                        <h5>Web development</h5>
//                     </div>
//                     <div className="item">
//                        <img src={meter2} alt="Image" />
//                        <h5>Brand Identity</h5>
//                     </div>
//                     <div className="item">
//                        <img src={meter3} alt="Image" />
//                        <h5>logo design</h5>
//                     </div>
//                     <div className="item">
//                        <img src={meter1} alt="Image" />
//                        <h5>Web development</h5>
//                     </div>
//                 </Carousel>
//              </div>
//            </Col>
//          </Row>
//        </Container>
//        <img className="background-image-left" src={colorSharp} />

//     </section>
//  )

// }

import React from "react";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import colorSharp from "../assets/img/color-sharp.png";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";

export const Skillls = () => {
  const skills = [
    { name: "HTML5", level: 90, icon: <FaHtml5 size={40} color="#E44D26" /> },
    { name: "CSS3", level: 85, icon: <FaCss3Alt size={40} color="#1572B6" /> },
    { name: "JavaScript", level: 80, icon: <FaJs size={40} color="#F7E018" /> },
    { name: "React.js", level: 75, icon: <FaReact size={40} color="#61DAFB" /> },
    { name: "Node.js", level: 70, icon: <FaNodeJs size={40} color="#68A063" /> },
    { name: "Database", level: 65, icon: <FaDatabase size={40} color="#4DB33D" /> },
  ];

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx text-center">
              <h2>Skills</h2>
              <p>
                As a Full-Stack Developer, I specialize in creating dynamic and
                responsive web applications using modern technologies.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          {skills.map((skill, index) => (
            <Col key={index} xs={12} md={6} lg={4} className="mb-4 text-center">
              <div className="skill-card">
                {skill.icon}
                <h5 className="mt-3">{skill.name}</h5>
                <ProgressBar
                  now={skill.level}
                  label={`${skill.level}%`}
                  variant="info"
                  className="mt-2"
                />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      <img
        className="background-image-left"
        src={colorSharp}
        alt="Decorative background"
      />
    </section>
  );
};
