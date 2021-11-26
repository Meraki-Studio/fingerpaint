import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Paper, Typography } from '@mui/material';
import { Box, palette } from '@mui/system';
import ProfileItem from './ProfileItem';
import { makers } from './data';
import './Landing.scss';
import { useAssets } from '../../utils/useAssets';

const logo = useAssets('brand', 'LogoHorizontal');
const mockup = useAssets('mockups', 'mainmockup_v2');
const painting = useAssets('mockups', 'painting');
const sticker = useAssets('mockups', 'sticker');
const Tutorial1 = useAssets('mockups', 'Tutorial-1');
const Tutorial2 = useAssets('mockups', 'Tutorial-2');
const Tutorial3 = useAssets('mockups', 'Tutorial-3');
const watercolor = useAssets('mockups', 'watercolor');
const logoMain = useAssets('brand', 'LogoPrimary');

const Landing = () => (
  <main className="container">
    <header className="header">
      <nav className="navBar">
        <img src={logo} alt="Fingerpaint Logo" className="logo" />
        <a href="#what">What is it</a>
        <a href="#how">How to use it</a>
        <a href="#who">Who made it</a>
      </nav>
      <Button
        href="home"
        variant="contained"
        // className="ctaBtn"
        sx={{ bgColor: 'primary.main', color: 'text.secondary' }}
      >
        <Link style={{ textDecoration: 'none' }} to="/home">
          Try it for Free
        </Link>
      </Button>
    </header>
    <Box
      component="section"
      className="heroContainer"
      sx={{ bgColor: 'background.section', pb: '2rem' }}
    >
      <Paper
        component="article"
        elevation={3}
        sx={{
          backgroundColor: 'primary.main',
          color: 'text.secondary',
          my: '1rem',
          width: '80vw',
        }}
        // className="status"
      >
        <Typography align="center" variant="h4">
          <img
            src={useAssets('ui', 'alert')}
            alt="alert"
            height="40px"
            style={{ marginRight: '1rem' }}
          />
          Fingerpaint now in Beta
          <img
            src={useAssets('ui', 'alert')}
            alt="alert"
            height="40px"
            style={{ marginLeft: '1rem' }}
          />
        </Typography>
        <Typography align="center" variant="body2">
          Some features are incomplete; please be patient as we bring our
          complete vision to fruition.
        </Typography>
      </Paper>
      <Box component="article" className="heroText">
        <Paper
          component="article"
          elevation={0}
          sx={{
            bgcolor: 'transparent',
            width: '20rem',
            ml: 'auto',
            mr: 'auto',
          }}
        >
          <Typography variant="h2">Creativity, simplified.</Typography>
          <Typography paragraph>
            Concocting fantastical creations has never been so simple. Nurture
            the next generation of digital designers. Fridge magnets not
            included.
          </Typography>
          <Button
            href="home"
            variant="contained"
            className="ctaBtn"
            sx={{
              bgColor: 'primary.main',
              color: 'text.secondary',
              mt: '1rem',
            }}
          >
            <Link style={{ textDecoration: 'none' }} to="/home">
              Try it for Free
            </Link>
          </Button>
        </Paper>
        <figure className="heroImage">
          <img src={mockup} height="400px" alt="Hero" />
        </figure>
      </Box>
    </Box>
    <Box component="section" className="what">
      <img className="whatImg" src={logoMain} alt="Hero" />
      <div className="whatText">
        <h3>
          Fingerpaint: making digital design tools accessible and fun for your
          child.
        </h3>
        <p>
          At last, a mobile app that preliterate kids can enjoy right off the
          bat. Designed for children ages 2 - 5, Fingerpaint equips your child
          with basic design tools that are intuitive to navigate. <br />
          <br />
          Fingerpaint is a Progressive Web App built using the React Framework
          and Material UI for the front-end components. We also utilized
          React-Canvas-Draw and React Color in order to make the canvas more
          accessible and appealing to young children.
        </p>
      </div>
    </Box>
    <Box component="section" className="features">
      <article className="featureCard">
        <figure>
          <img src={painting} alt="feature" />
          <figcaption>Interactive Canvas</figcaption>
        </figure>
        <p>
          Draw a doodle, adorn with stamps, and change the background.
          Fingerpaint’s interactive canvas allows your child to create, modify,
          and erase easily and intuitively.
        </p>
      </article>
      <article className="featureCard">
        <figure>
          <img src={sticker} alt="feature" />
          <figcaption>Fun stickers</figcaption>
        </figure>
        <p>
          Who doesn’t love stickers? Choose from a broad array of cute and silly
          stamps and stickers. If you can do it on paper, why not with
          Fingerpaint?
        </p>
      </article>
      <article className="featureCard">
        <figure>
          <img src={watercolor} alt="feature" />
          <figcaption>Minimal interface</figcaption>
        </figure>
        <p>
          Don’t let the tool get in the way of your enjoyment. Fingerpaint’s
          interface is designed to be unobtrusive so your child can focus on
          what’s really important.
        </p>
      </article>
    </Box>
    {/* <section className="video">
        <p>Video goes here!</p>
      </section> */}
    <Box component="section" className="howContainer">
      <div className="how">
        <div className="howText">
          <h3>Step 1: Select a tool to use</h3>
          <p>
            Choose from a paintbrush, a stamp, a backdrop editor, and or an
            eraser. Situated in the tools dock below, it’s as simple as tapping
            the one you want.
          </p>
        </div>
        <img className="howImg" src={Tutorial1} alt="Select a tool" />
      </div>
      <div className="how">
        <img className="howImg" src={Tutorial2} alt="Hero" />
        <div className="howText">
          <h3>Step 2: Choose a color or stamp and begin creating</h3>
          <p>
            Upon selecting your tool of choice, you can now either choose from a
            rainbow of colors, or choose from a collection of cute stamps.{' '}
            <br />
            <br />
            You can reach this menu by tapping on the palette icon or selected
            stamp located on the left side of the bottom controls.
          </p>
        </div>
      </div>
      <div className="how">
        <div className="howText">
          <h3>Step 3: Inspect, undo, hide</h3>
          <p>
            Enable view-mode with a single tap. Pinch and drag to zoom and pan,
            without drawing. Tap the icon again to return to draw mode. <br />
            <br />
            Made an accident? Tap the undo or redo icons accordingly. <br />
            <br />
            Want to hide the interface? You can do that too! Simply tap the eye
            icon to hide the interface. Tap again to unhide it.
          </p>
        </div>
        <img className="howImg" src={Tutorial3} alt="Hero" />
      </div>
    </Box>
    <section className="team">
      {makers.map((maker) => {
        return <ProfileItem key={maker.name} maker={maker} />;
      })}
    </section>
    <footer className="footer">
      <a href="https://github.com/Meraki-Studio/fingerpaint">
        Steal this code!
      </a>

      <a href="">Steal this design!</a>
    </footer>
  </main>
);

export default Landing;
