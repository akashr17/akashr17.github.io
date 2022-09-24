import { Col, Container, Row } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg3 from "../assets/img/proj-img-3.png";
import projImg2 from "../assets/img/proj-img-2.png";
import projImg1 from '../assets/img/logo-2.png';

export const Projects = () => {
    const projects = [
        {
            url: "https://github.com/akashr17/akashr17.github.io",
            title: "Personal Website",
            description: "Designed a website using React, HTML, and CSS to showcase my experience, projects, and skills with an interactive UI.",
            imgUrl: projImg1
        },
        {
            url: "https://github.com/akashr17/Amazoom",
            title: "Autonmous Warehouse System",
            description: "Designed a virtual warehouse in C# with CLI client and server interface and TCP socket connection. Along with automated and multi-threaded robots for retrieval of orders placed by the client. Used thread safe queues for keeping track of working orders and created an algorithm to efficiently send out delivery trucks with the fulfilled orders.",
            imgUrl: projImg2
        },
        {
            // url: "https://github.com/akashr17/hike_website",
            title: "mytinerary",
            description: "Designed and coded the front end of a website using React. The website created an itinerary based upon your trip destination and preferences.",
            imgUrl: projImg3
        }
    ]

    return(
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>
                            Projects
                        </h2>
                        <p>
                            Here is a list of the projects I have worked on. Hover over each project to learn more about it.
                        </p>
                        <Row>
                            {
                                projects.map((project,index)=> {
                                    return (
                                        <ProjectCard key={index} {...project}/>
                                    )
                                })
                            }
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}