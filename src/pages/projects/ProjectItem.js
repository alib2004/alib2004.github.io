import React from 'react';
import Col from "react-bootstrap/Col";
import './ProjectItem.css'
const ProjectItem = ({myproject}) => {
    console.log(myproject);
    
    return (
        myproject.map((proj) => (
            <Col xs={12} sm={12} xl={4} md={6} key={proj.id}>
              <div className="project-item">
                <img
                  src={proj.img}
                  className="img-fluid rounded"
                  alt={proj.title}
                />
                <h3 className="project-item__title">{proj.title}</h3>
                <p className="project-item__desc">{proj.desc}</p>
                <div className="project-item__title-links">
                  {proj.github && (
                    <a href={proj.github} className="project-item__title-link">
                      Github
                    </a>
                  )}
                  {proj.github ? (
                    <a href={proj.demo} className="project-item__title-link">
                      Demo
                    </a>
                  ) : (
                    <a href={proj.link} className="project-item__title-link">
                      Site
                    </a>
                  )}
                </div>
              </div>
            </Col>
          ))
    );
}

export default ProjectItem;