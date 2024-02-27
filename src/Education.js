import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';

function EducationSection() {
  
  const cardGroupStyle = {
    margin: "auto",
    marginTop: "100px",
    textAlign: "center",
    border: "3px solid red", // Add a 1px solid red border
  };

  const logoContainerStyle = {
    display: "flex",
    justifyContent: "center",
  };

  const logoStyle = {
    width: "160px",
    height: "160px",
  };

  return (
     <div>
        <br></br>
        <header className="bg-dark text-white text-center py-5" style={{ color: 'rgba(255, 0, 0, 0.7)' }}>
        <Container>
          <h1 className="display-4">EDUCATION</h1>
          <p className="lead">This is my education Section where I put here the  schools where I studied kindergarten and up to grade 12</p>
        </Container>
      </header>

      <div style={cardGroupStyle}>
       
       <CardGroup>
          <Card>
            <br />
            <div style={logoContainerStyle}>
              <Card.Img variant="top" src="./front.jppg/Fbenitez.jpg" style={logoStyle} />
            </div>
            <Card.Body>
              <Card.Title><h3>Francisco Benitez Elementary School(Main)</h3></Card.Title>
              <Card.Text>
                I studied here from kindergarten <p>to grade 6 from 2009 to 2016.</p>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <br />
            <div style={logoContainerStyle}>
              <Card.Img variant="top" src="./front.jppg/MakatihighSchool.jpg" style={logoStyle} />
            </div>
            <Card.Body>
              <Card.Title><h3>Makati high School</h3></Card.Title>
              <Card.Text>
                I studied here from grade 7 <p>to grade 8 from 2016 to 2017.</p>
              
              
              
              
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>

        <CardGroup>

          <Card>
            <br />
            <div style={logoContainerStyle}>
              <Card.Img variant="top" src="./front.jppg/NCSAT.jpg" style={logoStyle} />
            </div>
            <Card.Body>
              <Card.Title><h3>Naga City School Of Arts and trades</h3></Card.Title>
              <Card.Text>
                I studied here from grade 9 <p>to grade 12 from 2017 to 2021.</p>
              
               </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
    </div>
  
  
   );
}

export default EducationSection;