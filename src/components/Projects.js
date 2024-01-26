import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import Ecommerce from "../assets/img/EcommerceImg.png";
import todoList from "../assets/img/todoList.png";
import tracker from "../assets/img/trackerImg.png";
import expenseTracker from "../assets/img/expenseTracker.png"
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import realEstate from "../assets/img/realEstate.png"
import quizImg from "../assets/img/quizImg.png"
export const Projects = () => {

  const projects= [
    {
      title: "Expense Tracker",
      description: "Design & Development",
      imgUrl: expenseTracker,
    },
    {
      title: "Real Estate",
      description: "Design & Development",
      imgUrl: realEstate,
    },
    {
      title: "Todo List",
      description: "Design & Development",
      imgUrl: todoList,
    },
  ];

  const pro= [
    {
      title: "Ecommerce",
      description: "Design & Development",
      imgUrl: Ecommerce,
    },
    {
      title: "Quiz App",
      description: "Design & Development",
      imgUrl: quizImg,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: tracker,
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
                <p>I have worked on the following projects</p>
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
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
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