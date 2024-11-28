import { Container } from "react-bootstrap";
import {Nav,Tab,Row ,Col} from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";



export const Projects = () => {
  const Projects = [
    {
      title: "Bussiness startio",
      description: "development",
      ImgUrl: projImg1,
    },
    {
      title: "Bussiness startio",
      description: "development",
      ImgUrl: projImg2,
    },
    {
      title: "Bussiness startio",
      description: "development",
      ImgUrl: projImg3,
    },
    {
      title: "Bussiness startio",
      description: "development",
      ImgUrl: projImg1,
    },
    {
      title: "Bussiness startio",
      description: "development",
      ImgUrl: projImg2,
    },
    {
      title: "Bussiness startio",
      description: "development",
      ImgUrl: projImg3,
    },
  ];
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            {/* <P>web developer</P> */}
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
            <Nav variant="pills" defaultActiveKey="/home">
              <Nav.Item>
                <Nav.Link eventKey="first">Tab one</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Tab two</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third" disabled>
                 Tab three
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
                <Tab.Pane eventKey="first">
                   <Row>
                     {
                        Projects.map((project,index) =>{
                            return (
                                <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                        })
                     }
                   </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">lorem Ipsum</Tab.Pane>
                <Tab.Pane eventKey="third">lorem Ipsum</Tab.Pane>
            </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="/"></img>
    </section>
  )
}
