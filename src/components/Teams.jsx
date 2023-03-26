import { Container, Row, Col, Tab, Nav, NavItem } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import "./css/Teams.css"
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/a1.jpg";
import projImg2 from "../assets/img/a2.jpg";
import projImg3 from "../assets/img/a3.jpg";
import  p4 from "../assets/img/a4.jpg";
import p5 from "../assets/img/a5.jpg";
import p6 from "../assets/img/a6.jpg";
import p7 from "../assets/img/a7.jpg";
import p8 from "../assets/img/a8.jpg";
import p9 from "../assets/img/a9.jpg";
import p10 from "../assets/img/a10.jpg";
import p11 from "../assets/img/a11.jpg";
import p12 from "../assets/img/a12.jpg";
import p13 from "../assets/img/a13.jpg";
import p14 from "../assets/img/a14.jpg";
import p15 from "../assets/img/a15.jpg";
import p16 from "../assets/img/a16.jpg";
import p17 from "../assets/img/a17.jpg";
import p18 from "../assets/img/a18.jpg";
import p19 from "../assets/img/a19.jpg";
import p20 from "../assets/img/a20.jpg";
import p21 from "../assets/img/a21.jpg";
import p22 from "../assets/img/a22.jpg";
import p23 from "../assets/img/a23.jpg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import MeetOurTeam from "./MeetOurTeam";
const headings = ['Core Team ', 'Core Support', 'Web Team', 'Design Team', 'PR Team', 'Writing Team'];
export const Teams = () => {

  const projects = [
    {
    title: "Tejas Joshi",
    description: "Convener",
    imgUrl: p11,
    linkedIn: "https://www.linkedin.com/in/tejas-joshi-8478281ba/",
  },
    {
      title: "Tirth Joshi",
      description: "Co-Convener",
      imgUrl: p19,
      linkedIn:"https://www.linkedin.com/in/tirth5828/",
    },
    {
      title: "Dhruv Sharma ",
      description: "Core Support",
      imgUrl: p20,
      linkedIn: "https://www.linkedin.com/in/dhruv-sharma-2097a7258/",

    },
    {
      title: "Anmol Wadhwani",
      description: "Core Support",
      imgUrl: p5,
      linkedIn: "https://www.linkedin.com/in/anmol-wadhwani-237683249/",

    },
    {
      title: "Samanway Maji",
      description: "Core Support",
      imgUrl: projImg2,
      linkedIn: "https://www.linkedin.com/in/samanway-maji-7b180a246/",
    },
     
 {
  title: "Apoorv Pathak",
  description: "Core Support",
  imgUrl: p4,
  linkedIn: "https://www.linkedin.com/in/apoorv-pathak-a3b1931ba/",
},
{
  title: "Ayushi Shukla",
  description: "Website Team",
  imgUrl: p7,
  linkedIn: "https://www.linkedin.com/in/ayushi-shukla-6502b7228/",
},
{
  title: "Bhargavi Kamble",
  description: "Website Team",
  imgUrl: projImg1,
  linkedIn: "https://www.linkedin.com/in/bhargavi-kamble-275154201/",
},
{
  title: "Vijay Karanjkar",
  description: "Website Team",
  imgUrl: projImg3,
  linkedIn: "https://www.linkedin.com/in/vijay-k-2003/",
},
{
  title: "Vansh Goel",
  description: "Website Team",
  imgUrl: p13,
  linkedIn: "https://www.linkedin.com/in/vansh-goel-397647222/",
},
   
{
      title: "Shivang Bhargava",
      description: "Design Team",
      imgUrl: p16,
      linkedIn: "https://www.linkedin.com/in/shivang-bhargava-527b78207/",
},

    {
      title: "Dev Parmar",
      description: "Design Team",
      imgUrl: p14,
      linkedIn: "https://www.linkedin.com/in/dev-parmar-51b96a238/",
    },
    {
      title: "Garv Chouhan ",
      description: "Design Team",
      imgUrl: p12,
      linkedIn: "https://www.linkedin.com/in/garv-chouhan-3462401b3/",
    },
      
     {
      title: "Sanjeevani Lakade ",
      description: "Design Team",
      imgUrl: p17,
      linkedIn: "https://www.linkedin.com/in/sanjeevani-lakade-a4a374226/",
    },
 {
      title: "Nupur Jain",
      description: "Design Team",
      imgUrl: p18,
      linkedIn: "https://www.linkedin.com/in/nupur-jain-097958224/",
    },
 {
      title: "Khushi Saxena",
      description: "PR Team",
      imgUrl: p8,
      linkedIn: "https://www.linkedin.com/in/khushi-saxena-a965ba22a/",
    },

 {
      title: "Jagruti Piprade",
      description: "PR Team",
      imgUrl: p15,
      linkedIn: "https://www.linkedin.com/in/jagruti-piprade-61bb98224/",
    },

 
   
     {
      title: "Gargee Meshram ",
      description: "PR Team",
      imgUrl: p9,
      linkedIn: "https://www.linkedin.com/in/gargee-meshram-b2a54a245/",
    },
 {
      title: "Shravani Waghmare ",
      description: "PR Team",
      imgUrl: p22,
      linkedIn: "https://www.linkedin.com/in/shravani-waghmare-223942227/",
    },

 {
      title: " Ved Vaghela",
      description: "PR Team",
      imgUrl: p23,
      linkedIn: "https://www.linkedin.com/in/ved-vaghela-9215b5225/",
    },
    {
      title: "Ajitesh Kumar Singh",
      description: "Editorial Team",
      imgUrl: p21,
      linkedIn: "https://www.linkedin.com/in/ajitesh-kumar-singh-70b284160/",
    },
    {
      title: "Aryan Gupta",
      description: "Editorial Team",
      imgUrl: p6,
      linkedIn: "https://www.linkedin.com/in/aryan-gupta-334650227/",
    },
    {
      title: "Manas Ingle",
      description: "Editorial Team",
      imgUrl: p10,
      linkedIn: "https://www.linkedin.com/in/manas-ingle-68813b245/",
    },




  ];
const headings = ['Core Team', 'Core Support', 'Web Team', 'Design Team', 'PR Team', 'Editorial Team'];
const count = [2, 4, 4, 5, 5, 3];


const [loading, setLoading] = useState(true);

return (
 
 <div className="mot"> 
  <MeetOurTeam/>  

  <section className="project" id="project">    
    <Container>
      <Row className="cont">
        <Col size={12}>
          <TrackVisibility
            offset={200}
            partialVisibility={true}
            onChange={(isVisible) => setLoading(!isVisible)}
          >
            {({ isVisible }) => (
              <div
                className={
                  loading
                    ? ""
                    : isVisible
                    ? "animate__animated animate__fadeIn"
                    : ""
                }
              >
                {headings.map((heading, headingIndex) => (
                  <React.Fragment key={headingIndex}>
                    <h2>{heading}</h2>
                    <Tab.Container
                      id={`${headingIndex}-tabs`}
                      defaultActiveKey="first"
                    >
                      <Nav
                        variant="pills"
                        className="nav-pills mb-5 justify-content-center align-items-center"
                        id={`${headingIndex}-pills-tab`}
                      >
                      </Nav>
                      <Tab.Content
                        id="slideInUp"
                        className={
                          loading
                            ? ""
                            : isVisible
                            ? "animate__animated animate__slideInUp"
                            : ""
                        }
                      >
                        <Tab.Pane eventKey="first">
                          <div className="row project-cards">
                            {projects
                              .slice(
                                count
                                  .slice(0, headingIndex)
                                  .reduce((a, b) => a + b, 0),
                                count
                                  .slice(0, headingIndex + 1)
                                  .reduce((a, b) => a + b, 0)
                              )
                              .map((project, index) => (
                                <div
                                  key={index}
                                  className="col-sm-12 col-md-6 col-lg-3 mb-4 project-card-wrapper"
                                >
                                  <ProjectCard
                                    {...project}
                                    className="project-card"
                                  />
                                </div>
                              ))}
                          </div>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </React.Fragment>
                ))}
              </div>
            )}
          </TrackVisibility>
        </Col>
      </Row>
    </Container>
  </section>
  </div>
);
}