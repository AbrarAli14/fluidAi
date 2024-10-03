'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import styles from '../styles/Home.module.css';

export default function Features() {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        } else {
            controls.start('hidden');
        }
    }, [controls, inView]);

    const cardVariantsLTR = {
        hidden: { opacity: 0, x: -100 }, 
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                ease: 'easeOut',
            },
        },
    };

    const cardVariantsRTL = {
        hidden: { opacity: 0, x: 100 }, 
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                ease: 'easeOut',
            },
        },
    };

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <span className={styles.mystong}>.Fluid Ai</span>
                <h1>Unlock Seamless Efficiency </h1>
                <button className={styles.joinButton}>Join Waitlist</button>
            </div>

            <div className={styles.cards}>
                {/* Example of a Card with Animation */}
                <motion.div
            className={`${styles.carda} ${styles.card1}`}
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={cardVariantsLTR} // Animation variant
        >
            <div className={styles.imageContainera}>
                {/* Background Image */}
                <img src="/w.png" alt="Restaurant Le Bous" className={styles.cardImagea} layout="fill" objectFit="cover" />
                
                {/* Overlay Content */}
                <div className={styles.overlaya}>
                    <div className={styles.topmover}>

                    <small className={styles.overlayTexta}>Reservations</small>
                    <h3 className={styles.titlea}>Restaurant Le Bous</h3>
                    <div className={styles.detailsa}>
                        <span className={styles.icona}>🕒</span>
                        <small>4 Oct 20:00</small>
                    </div>
                    </div>

                </div>
            </div>
        </motion.div>

                <motion.div
                    className={`${styles.card} ${styles.card2}`}
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={cardVariantsLTR} 
                >
                    <div className={styles.cardContent}>
                        <div className={styles.topRow}>
                            <div>
                                <span>Dubai</span>
                                <h2>DXB</h2>
                                <p>Oct 4<br />8:20</p>
                            </div>
                            <div className={styles.flightIcon}>
                                <span>Emirates Airlines</span>
                                <img src="/cc.png" alt="Plane Icon" />
                                <p>Non-Stop</p>
                            </div>
                            <div>
                                <span>Paris</span>
                                <h2>CDG</h2>
                                <p>4 Oct<br />13:30</p>
                            </div>
                        </div>

                        <div className={styles.bottomRow}>
                            <div>
                                <p>Flight <strong>EK073</strong></p>
                                <p>Class <strong>Guest</strong></p>
                            </div>
                            <div>
                                <p>Aircraft <strong>A380</strong></p>
                                <p>7 hours 10 mins</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

               

                  <motion.div
                    className={`${styles.card} ${styles.card3}`}
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={cardVariantsRTL} 
        >
            <div className={styles.cardHeader}>
                
                <div className={styles.avatars}>
                    <img src="/image.png" alt="Person 1" width={40} height={40} />
                    <img src="/image2.png" alt="Person 2" width={40} height={40} />
                    <img src="/image3.png" alt="Person 3" width={40} height={40} />
                </div>
                <div className={styles.contents}>

                <small>Upcoming Events</small>
                <p className='font-bold'>Kite Beach</p>
                <small>10:00 - 14:00</small>
                </div>
                </div>
                </motion.div>

                <motion.div
                    className={`${styles.card} ${styles.card9}`}
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={cardVariantsLTR} 
                >
                    <p>Book Flight </p>
                </motion.div>

                <motion.div
                    className={`${styles.card} ${styles.card10}`}
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={cardVariantsRTL} 
                >
                    <p>Trip ideas</p>
                </motion.div>

                <motion.div
                    className={`${styles.carde} ${styles.card4}`}
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={cardVariantsLTR} 
                >
                    <div className={styles.imageContainer}>
                        <img src="/b.png" className={styles.cardImage} />
                        <div className={styles.tag}>Restaurant</div>
                        <div className={styles.overlay}>
                            <h3>Clap Dubai</h3>
                            <p>4.4 • $$$$ • Japanese</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className={`${styles.card} ${styles.card6}`}
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={cardVariantsRTL} 
                >
                    <small>Café nearby </small>
                </motion.div>

                <motion.div
                    className={`${styles.card} ${styles.card11}`}
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={cardVariantsLTR} 
                >
                    <strong>Next TO-DO</strong>
                    <p>Renew Car Insurance</p>
                </motion.div>

                <motion.div
                    className={`${styles.card} ${styles.card7}`}
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={cardVariantsRTL} 
        >
            <div className={styles.cardHeader}>
                
                <div className={styles.avatars}>
                    <img src="/image.png" alt="Person 1" width={40} height={40} />
                    <img src="/image2.png" alt="Person 2" width={40} height={40} />
                    <img src="/image3.png" alt="Person 3" width={40} height={40} />
                </div>
                <div className={styles.contents}>

                <small>Upcoming Events</small>
                <p className='font-bold'>Kite Beach</p>
                <small>10:00 - 14:00</small>
                </div>
                </div>
                </motion.div>
            </div>
        </div>
    );
}
