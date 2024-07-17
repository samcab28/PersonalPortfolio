import { Col } from "react-bootstrap";

interface ProjectCardProps {
  title: string;
  description: string;
  imgUrl: string;
  link: string;  // Add link prop for the project link
}

function ProjectCard({ title, description, imgUrl, link }: ProjectCardProps) {
    return (
        <Col size={12} sm={6} md={4}>
            <div className="proj-imgbx">
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <img src={imgUrl} alt={title} />
                </a>
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                    <a href={link} target="_blank" rel="noopener noreferrer" className="proj-btn">
                        View Project
                    </a>
                </div>
            </div>
        </Col>
    )
}

export default ProjectCard;
