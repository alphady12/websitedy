import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import './About.css';
const About = () => {
 
    return (
    <Container className="mt-5">
      <br></br>
      <Row>
      <Col xs={6} md={4}>
         
      <div style={{ border: '2px solid red', padding: '5px' }}>
          <Image src="./front.jppg/Dy.jpg" thumbnail />
       </div>
        </Col>
        
        <Col md={6}>
          <div className="text-box" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', color: 'red',  fontWeight: 'bold', fontFamily: 'Anta' }}>
  <br></br>
          <br></br>
          <h2>About Me</h2>
          <p>Hi My name Is stephen Christian Dy,20 Yrs old from mabolo Naga City,Single and ready to mingle</p>
          <p>For Now I am taking Course Of Bachelor Of Science In information System,But on reality My dream is to become Military and serve the country and uphold The law,xperimenting with new knowledge.
          and I'm a shy person. But despite this challenges, I will love to learn and have the opportunity to improve and share my skills. In the future, I hope to be an instrument for change and achieve my dreams in life...Aluakhbar!!!!!!!!!!!!!.</p>
          </div>
          </Col>
      </Row>
      <Row className="mt-5">
  <Col md={6}>
    <div className="text-box" style={{backgroundColor: 'rgba(0, 0, 0, 0.7)', color: 'red', fontWeight: 'bold', fontFamily: 'Anta'}}>
      <h2>A Former Cdt.Major On Highschool days On Naga City School of arts and Trade Citezenship Advancement TRaining</h2>
      <p>Every September as a part Of penafrancia Fiesta Our school was one of the participant on Regional Mlitary Parade.I was Once before a Staff officer 4,and as an officer I was challenge on enhancing My leadership Skills</p>
      {/* You can add more content here */}
    </div>
  </Col>
  <Col xs={6} md={4}>
  <div style={{ border: '5px solid black', padding: '5px' }}>
   
    {/* Replace the src attribute with the path to your second image */}
    <Image src="./front.jppg/lt.jpg" thumbnail />
   </div>
  </Col>
   </Row>
      <Row className="mt-5">
        <Col xs={6} md={4}>
        <div style={{ border: '5px solid red', padding: '5px' }}>
          
          {/* Replace the src attribute with the path to your second image */}
          <Image src="./front.jppg/esteff.jpg" thumbnail />
         </div>
        </Col>
        <Col md={6}>
          <div className="text-box" style={{backgroundColor: 'rgba(0, 0, 0, 0.7)', color: 'red',  fontWeight: 'bold',fontFamily: 'Anta' }}>
            <h2>This one of my beloved Ferson But Who tf is this?</h2>
            <p>I met her when I was still working at a fast food here in Naga in SM if they had Immersion as a requirement in their school. I met her as a kind person (EMEE) and very noisy. also she was the cutest creature who I met here in the world that I didn't know there was a creature like this on earth, She came from Camarines sur and is currently in 1st year college at CBSUA.</p>
            {/* You can add more content here */}
          </div>
        </Col>
      </Row>
    
    
    </Container>
  );
}

export default About;
