import { Col } from "react-bootstrap";

export const ProjectCard =({url, title, description, imgUrl}) => {

    return (
        <Col sm={6} md={4}>
            <a href={url} className="project-card-url" rel="noopener noreferrer" target="_blank">
                <div className="proj-imgbx">
                    <img src={imgUrl} alt="projCardImg" height={280}/>
                    <div className="proj-txtx">
                        <h4>{title}</h4>
                        <span>{description}</span>
                    </div>
                </div>
            </a>
        </Col>
    )
}