import { Col } from "react-bootstrap";

export const ProjectCard = ({title, description,ImgUrl}) =>{
    return(
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={ImgUrl} alt=""/>
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <space>{description}</space>
                    </div>
            </div>
        </Col>
    )
}