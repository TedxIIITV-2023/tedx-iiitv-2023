import { Col } from "react-bootstrap";
import { FaLinkedin } from "react-icons/fa";

export const ProjectCard = ({ title, description, imgUrl, linkedIn }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span className="desc">{description}</span>
          {linkedIn && (
            <a href={linkedIn} target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          )}
        </div>
      </div>
    </Col>
  );
};
