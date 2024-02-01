import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import Ecommerce from "../assets/img/EcommerceImg.png";
import todoList from "../assets/img/todoList.png";
import tracker from "../assets/img/trackerImg.png";
import expenseTracker from "../assets/img/expenseTracker.png"
import myPortImg from "../assets/img/myPortImg.PNG"
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import realEstate from "../assets/img/realEstate.png"
import quizImg from "../assets/img/quizImg.png"
import recipeImg from "../assets/img/recipeImg.png"
import Analysics from "../assets/img/Analysics.png"
import designerImg from "../assets/img/designerImg.PNG"
export const Projects = () => {

  const projects= [
    {
      title: "My Portfolio Website",
      description: "Design & Development",
      imgUrl: myPortImg,
    },
    {
      title: "E-commerce website",
      description: "Design & Development",
      imgUrl: Ecommerce,
  
    },
    {
      title: "Search Recipe",
      description: "Design & Development",
      imgUrl: recipeImg,
    },
  ];

  const pro= [
    {
      title: "Quiz App",
      description: "Design & Development",
      imgUrl: quizImg,
  
    },
    {
      title: "Analysis site",
      description: "Design & Development",
      imgUrl: Analysics,
    },
    {
      title: "Designer site",
      description: "Design & Development",
      imgUrl: designerImg,
    },
  ];
  const proj= [
    {
      title: "Real Estate",
      description: "Design & Development",
      imgUrl: realEstate,
  
    },
    {
      title: "Expense Tracker",
      description: "Design & Development",
      imgUrl:expenseTracker ,
    },
    {
      title: "Todo list",
      description: "Design & Development",
      imgUrl: todoList,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Some of my projects</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
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
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          pro.map((pro, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...pro}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          proj.map((proj, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...proj}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}