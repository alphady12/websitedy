import React, { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import './Home.css';

const HomePage = () => {
  const [audio] = useState(new Audio('./DJODNA.mp3')); // Initialize audio in the state
  const [isPlaying, setIsPlaying] = useState(false); // State to track whether audio is playing

  useEffect(() => {
    const playAudio = () => {
      if (audio.readyState === 4) { // Check if audio is loaded and can be played
        audio.play();
        setIsPlaying(true); // Update state to indicate that audio is playing
      }
    };

    const pauseAudio = () => {
      audio.pause();
      setIsPlaying(false); // Update state to indicate that audio is paused
    };

    playAudio(); // Attempt to play audio when component mounts

    // Add event listener to handle external pauses
    audio.addEventListener('pause', pauseAudio);

    return () => {
      // Cleanup by removing event listener
      audio.removeEventListener('pause', pauseAudio);
    };
  }, [audio]); // Depend on audio state

  const handleTogglePlay = () => {
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);
    }
  };

  return (
    <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'red', border: '2px solid white' }}>
      <br></br>
      <header className="py-5" style={{ textAlign: 'center' }}>
        <Container>
          <h1 className="display-4" style={{ fontSize: '3.5rem', fontFamily: 'Anta, Anta' }}>This Is My Dream Unit Of Laptop.</h1>
          <p className="lead" style={{ fontSize: '2.5rem', fontFamily: 'Kode Mono, Kode Mono' }}>Acer Predator Helios 300</p>
        </Container>
      </header>

      <section className="py-5">
        <Container>
          <Row>
            <Col md={6}>
            <div className="text-box" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', border: '2px solid red' }}>
              <h2 style={{ fontWeight: 'bold', fontFamily: 'Anta', fontSize: '2.4rem' }}>Welcome!</h2>
                <p style={{ fontFamily: 'Anta', fontSize: '2.4rem' }}>
                  Welcome to my website! I am here to give you a great experience.
                </p>
                <p style={{ fontFamily: 'Anta', fontSize: '2.3rem', textShadow: '0 0 3px darkred' }}>
                  Acer Predator Helios 300 (2021) is a Windows 10 Home laptop with a 15.60-inch display
                </p>
              </div>
            </Col>
            <Col md={6}>
              <Col md={6}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <img
                    src="./front.jppg/pres.png"
                    alt="Sample"
                    className="img-fluid rounded"
                    style={{ maxWidth: '100%', height: '300px' }}
                  />
                  <img
                    src="./front.jppg/wp.png"
                    alt="Sample"
                    className="img-fluid rounded"
                    style={{ maxWidth: '100%', height: '300px' }}
                  />
                </div>
              </Col>
            </Col>
          </Row>
        </Container>
      </section>
      <div style={{ textAlign: 'center'  }}>
      <Button variant="primary" onClick={handleTogglePlay} style={{ backgroundColor: 'grey', color: 'red', border: '1px solid black', fontFamily: 'Anta' }}>

          {isPlaying ? 'Pause Music' : 'Play Music'}
        </Button>
      </div>
    </div>
  );
};

export default HomePage;