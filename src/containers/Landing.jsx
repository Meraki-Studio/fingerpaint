import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
} from '@mui/material';

import juliImg from '../assets/images/Juli.jpg';
import nickImg from '../assets/images/Nick.png';
// import jamesImg from '../assets/images/James.jpg';

import styles from './Landing.css';

const Landing = () => {
    return (
        <>
            <header className={styles.header}>
                <span className={styles.logo}>Fingerpaint</span>
                <nav className={styles.navBar}>
                    <a href="#what">What is it</a>
                    <a href="#how">How to use it</a>
                    <a href="#who">Who made it</a>
                </nav>
                <button href="#download" className={styles.ctaBtn}>
                    Try it for free
                </button>
            </header>
            <main className={styles.container}>
                <section className={styles.hero}>
                    <article className={styles.heroText}>
                        <h2>Creativity, simplified.</h2>
                        <p>
                            Concocting fantastical creations has never been so
                            simple. Nurture the next generation of digital
                            designers. Fridge magnets not included.
                        </p>
                    </article>
                    {/* Not currently applying class name here */}
                    <figure className={styles.heroImage}>
                        <img src="http://place-puppy.com/300x300" alt="Hero" />
                    </figure>
                </section>
                <section className={styles.what}>
                    <span className={styles.whatText}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Ut recusandae modi, repellat beatae non ipsum
                        ratione expedita autem delectus et officiis. Nesciunt
                        quae culpa nostrum mollitia voluptate voluptatibus nobis
                        laudantium.
                    </span>
                    <img
                        className={styles.whatImg}
                        src="http://place-puppy.com/500x500"
                        alt="Hero"
                    />
                </section>
                <section className={styles.features}>
                    <article className={styles.featureCard}>
                        <figure>
                            <img
                                src="http://place-puppy.com/50x50"
                                alt="feature"
                            />
                            <figcaption>Interactive Canvas</figcaption>
                        </figure>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quisquam, quis.
                        </p>
                    </article>
                    <article className={styles.featureCard}>
                        <figure>
                            <img
                                src="http://place-puppy.com/50x50"
                                alt="feature"
                            />
                            <figcaption>Fun stickers</figcaption>
                        </figure>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quisquam, quis.
                        </p>
                    </article>
                    <article className={styles.featureCard}>
                        <figure>
                            <img
                                src="http://place-puppy.com/50x50"
                                alt="feature"
                            />
                            <figcaption>Minimal interface</figcaption>
                        </figure>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quisquam, quis.
                        </p>
                    </article>
                </section>
                <section className={styles.video}>
                    <p>Video goes here!</p>
                </section>
                <section className={styles.how}>
                    <span className={styles.howText}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Ut recusandae modi, repellat beatae non ipsum
                        ratione expedita autem delectus et officiis. Nesciunt
                        quae culpa nostrum mollitia voluptate voluptatibus nobis
                        laudantium.
                    </span>
                    <img
                        className={styles.howImg}
                        src="http://place-puppy.com/500x500"
                        alt="Hero"
                    />
                </section>
                <section className={styles.team}>
                    <Card sx={{ maxWidth: 250 }} className={'styles.teamCard'}>
                        <CardMedia
                            component="img"
                            src={juliImg}
                            alt="Juli Vela"
                            sx={{
                                height: 150,
                                width: 150,
                                borderRadius: '50%',
                            }}
                        />
                        <CardContent>
                            <Typography components="p">
                                An engineer with a passion for learning and
                                teaching others. Juli codes to save the planet,
                                advocate for mental health, and encourage other
                                neurodiverse womxn along the way!
                            </Typography>
                        </CardContent>
                        <div className={styles.teamLinks}>
                            <a href="https://juliannevela.dev">
                                See her work here →
                            </a>
                            <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
                            <FontAwesomeIcon icon={['fab', 'github-alt']} />
                            <FontAwesomeIcon icon={['fab', 'twitter']} />
                        </div>
                    </Card>
                    <article className={styles.teamCard}>
                        <figure>
                            <img
                                src="http://place-puppy.com/50x50"
                                alt="team"
                            />
                            <figcaption>
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit.
                            </figcaption>
                        </figure>
                    </article>
                    <article className={styles.teamCard}>
                        <figure>
                            <img
                                src="http://place-puppy.com/50x50"
                                alt="team"
                            />
                            <figcaption>
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit.
                            </figcaption>
                        </figure>
                    </article>
                </section>
            </main>
        </>
    );
};

export default Landing;
