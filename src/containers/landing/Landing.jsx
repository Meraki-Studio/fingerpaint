import React from 'react';
import ProfileItem from './ProfileItem';
import { makers } from './data';
import './Landing.scss';

const logo = new URL('../../../public/assets/Logo_horiz.png', import.meta.url);

const Landing = () => (
  <>
    <header className="header">
      <nav className="navBar">
        <img src={logo} alt="Fingerpaint Logo" className="logo" />
        <a href="#what">What is it</a>
        <a href="#how">How to use it</a>
        <a href="#who">Who made it</a>
      </nav>
      <button href="#download" className="ctaBtn">
        Try it for free
      </button>
    </header>
    <main className="container">
      <div className="heroContainer">
        <div className="hero">
          <article className="heroText">
            <h2>Creativity, simplified.</h2>
            <p>
              Concocting fantastical creations has never been so simple. Nurture
              the next generation of digital designers. Fridge magnets not
              included.
            </p>
            <button href="#download" className="ctaBtn">
              Try it for free
            </button>
          </article>
          <figure className="heroImage">
            <img src="http://place-puppy.com/300x300" alt="Hero" />
          </figure>
        </div>
      </div>
      <section className="what">
        <img
          className="whatImg"
          src="http://place-puppy.com/500x500"
          alt="Hero"
        />
        <div className="whatText">
          <h3>
            Fingerpaint: making digital design tools accessible and fun for your
            child.
          </h3>
          <p>
            At last, a mobile app that preliterate kids can enjoy right off the
            bat. Designed for children ages 2 - 5, Fingerpaint equips your child
            with basic design tools that are intuitive to navigate. Fingerpaint
            is a Progressive Web App built using the React Framework and
            Material UI for the front-end components. We also utilized
            React-Canvas-Draw and React Color in order to make the canvas more
            accessible and appealing to young children.
          </p>
        </div>
      </section>
      <section className="features">
        <article className="featureCard">
          <figure>
            <img src="http://place-puppy.com/50x50" alt="feature" />
            <figcaption>Interactive Canvas</figcaption>
          </figure>
          <p>
            Draw a doodle, adorn with stamps, and change the background.
            Fingerpaint’s interactive canvas allows your child to create,
            modify, and erase easily and intuitively.
          </p>
        </article>
        <article className="featureCard">
          <figure>
            <img src="http://place-puppy.com/50x50" alt="feature" />
            <figcaption>Fun stickers</figcaption>
          </figure>
          <p>
            Who doesn’t love stickers? Choose from a broad array of cute and
            silly stamps and stickers. If you can do it on paper, why not with
            Fingerpaint?
          </p>
        </article>
        <article className="featureCard">
          <figure>
            <img src="http://place-puppy.com/50x50" alt="feature" />
            <figcaption>Minimal interface</figcaption>
          </figure>
          <p>
            Don’t let the tool get in the way of your enjoyment. Fingerpaint’s
            interface is designed to be unobtrusive so your child can focus on
            what’s really important.
          </p>
        </article>
      </section>
      <section className="video">
        <p>Video goes here!</p>
      </section>
      <section className="howContainer">
        <div className="how">
          <div className="howText">
            <h3>Step 1: Select a tool to use</h3>
            <p>
              Choose from a variety of brushes, a rainbow of hues, a collection
              of stamps, and a panorama of backgrounds. Situated in the tools
              dock below, it’s as simple as tapping the one you want.
            </p>
          </div>
          <img
            className="howImg"
            src="http://place-puppy.com/500x500"
            alt="Hero"
          />
        </div>
        <div className="how">
          <img
            className="howImg"
            src="http://place-puppy.com/500x500"
            alt="Hero"
          />
          <div className="howText">
            <h3>Step 2: Choose a style</h3>
            <p>
              Upon selecting your tool of choice, you can now either choose your
              favorite variation, or swipe the sub-menu down if you’re content
              with what you already equipped. You can always return to the menu
              by clicking on the tool icon again.
            </p>
          </div>
        </div>
        <div className="how">
          <div className="howText">
            <h3>Step 3: Inspect, undo, hide</h3>
            <p>
              Enable view-mode with a single tap. Pinch and drag to zoom and
              pan, without drawing. Tap the icon again to return to draw mode.
              Made an accident? Tap the undo or redo icons accordingly. Want to
              hide the interface? You can do that too! Simply tap the eye icon
              to hide the interface. Tap again to unhide it.
            </p>
          </div>
          <img
            className="howImg"
            src="http://place-puppy.com/500x500"
            alt="Hero"
          />
        </div>
      </section>
      <section className="team">
        {makers.map((maker) => {
          return <ProfileItem key={maker.name} maker={maker} />;
        })}
      </section>
    </main>
  </>
);

export default Landing;
