import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';

function GroupExample() {
  const cardGroupStyle = {
    margin: "auto",
    marginTop: "100px",
    textAlign: "center",
  };

  const logoContainerStyle = {
    display: "flex",
    justifyContent: "center",
  };

  const logoStyle = {
    width: "100px",
    height: "100px",
  };

  return (
    <div>
      <br />
      <header className="py-5" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'red', textAlign: 'center' }}>
        <Container>
          <h1 className="display-4">CONTACT</h1>
          <p className="lead">Contact me! whether you have questions, feedback, or just want to say hello, I'm here to listen.</p>
          <p className="lead">Get in touch via the contact information provided or use my convenient form. 
          We look forward to connecting with you!</p>
        </Container>
      </header>

      <div style={cardGroupStyle}>
        <CardGroup>
          <Card style={{ color: 'black', border: '2px solid red' }}>
            <div style={logoContainerStyle}>
              <Card.Img variant="top" src="https://www.pngitem.com/pimgs/m/156-1568222_red-png-contact-icon-png-download-phone-red.png" style={logoStyle} />
            </div>
            <Card.Body>
              <Card.Title>Phone:</Card.Title>
              <Card.Text>
                +63 684 434  535
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ color: 'black', border: '2px solid red' }}>
            <div style={logoContainerStyle}>
              <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.qNchQXfBm14sKzqYal9BLwHaHw?rs=1&pid=ImgDetMain" style={logoStyle} />
            </div>
            <Card.Body>
              <Card.Title>Email:</Card.Title>
              <Card.Text>
                scdy@gbox.ncf.edu.ph{' '}
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ color: 'black', border: '2px solid red' }}>
            <div style={logoContainerStyle}>
              <Card.Img variant="top" src="https://clipground.com/images/address-icon-png-15.jpg" style={logoStyle} />
            </div>
            <Card.Body>
              <Card.Title>Address:</Card.Title>
              <Card.Text>
                Camarines Sur, Naga City, Mabolo Zone 2
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
        <CardGroup>
          <Card style={{ color: 'black', border: '2px solid red' }}>
            <div style={logoContainerStyle}>
              <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.tozpIBHbVCdArjene99JiAD5D6?rs=1&pid=ImgDetMain" style={logoStyle} />
            </div>
            <Card.Body>
              <Card.Title>Facebook:</Card.Title>
              <Card.Text>
                Stephen Christian C Dy
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
    </div>
  );
}

export default GroupExample;