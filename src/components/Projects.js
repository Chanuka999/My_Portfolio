import { Container } from "react-bootstrap";

export const Projects = () => {
  const project = [
    {
      title: "Bussiness startio",
      description: "development",
      ImgUrl: projImg,
    },
    {
      title: "Bussiness startio",
      description: "development",
      ImgUrl: projImg,
    },
    {
      title: "Bussiness startio",
      description: "development",
      ImgUrl: projImg,
    },
    {
      title: "Bussiness startio",
      description: "development",
      ImgUrl: projImg,
    },
    {
      title: "Bussiness startio",
      description: "development",
      ImgUrl: projImg,
    },
    {
      title: "Bussiness startio",
      description: "development",
      ImgUrl: projImg,
    },
  ];
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <P>web developer</P>
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
            <Tab.content>
                <Tab.Pane eventKey="first">
                   <Row>
                     {
                        Projects.map((project,index) =>{
                            return (
                                <p>{project.title}</p>
                            )
                        })
                     }
                   </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">lorem Ipsum</Tab.Pane>
                <Tab.Pane eventKey="third">lorem Ipsum</Tab.Pane>
            </Tab.content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
