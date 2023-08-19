import { useEffect, useLayoutEffect, useRef } from 'react';

import { TechStack } from '../ProjectPage/TechStack/TechStack';

import { gsap } from 'gsap';
import LocomotiveScroll from 'locomotive-scroll';
import { debounce } from '../../helpers/debounce';

import { TECHSTACK } from '../../constants/constants';

import img1 from '../../assets/img/about/1.webp';
import img2 from '../../assets/img/about/2.webp';
import img3 from '../../assets/img/about/3.webp';
import img4 from '../../assets/img/about/4.webp';
import img5 from '../../assets/img/about/5.webp';
import img6 from '../../assets/img/about/6.webp';
import img7 from '../../assets/img/about/7.webp';
import arrowDW from '../../assets/img/icons/arrowDownB.png';

import './About.css';

const About = () => {
    const img = [img5, img2, img3, img6, img4, img7, img1];

    const scrollRef = useRef();
    const arrowsRef = useRef([]);

    const handleOverlayClick = () => {
        const tl = gsap.timeline();
        tl.to('h2 div', 0.7, {
            yPercent: -110,
            ease: 'power4.inOut',
            stagger: {
                amount: 0.5,
            },
        });
        tl.to('h2', 0.2, {
            clipPath: 'polygon(0 85%, 100% 85%, 100% 100%, 0 100%)',
            ease: 'power4.inOut',
            opacity: 0,
        });
        tl.to('.overlay', 0.3, {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
            ease: 'power4.inOut',
        });

        tl.to('.img', 1, {
            clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
            ease: 'power1.inOut',
            stagger: {
                amount: 1.5,
            }
        });
        tl.to('.loader-about', 0.5, {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
            ease: 'power4.inOut',
        });
        setTimeout(() => {
            scrollRef.current ? scrollRef.current.update() : null;
        }, 4800);
    };

    useEffect(() => {
        const tl = gsap.timeline();
        tl.to('h2', 1, {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            delay: 0.7,
            yPercent: 100,
            ease: 'power4.out',
            stagger: {
                amount: 0.8,
            }
        });
    }, []);

    useLayoutEffect(() => {
        scrollRef.current = new LocomotiveScroll({
            el: document.querySelector('.about-me-section'),
            smooth: true,
            smoothMobile: true,
            multiplier: 1,
            lerp: 0.06,
            direction: 'vertical',
            smartphone: {
                smooth: true,
                locomotive: true,
                init: true,
                speed: 20,
                multiplier: 2
            },
            tablet: {
                smooth: true,
                locomotive: true,
                init: true,
                breakpoint: 0,
                speed: 20,
                multiplier: 2,
            },
        });

        const handleResize = () => {
            scrollRef.current ? scrollRef.current.update : null;
        };

        let previousScrollTop = 0;
        let isScrollingDown = true;
        let tween = null;

        arrowsRef.current = Array.from(document.querySelectorAll('.arrow'));

        if (arrowsRef.current.length > 0) {
            tween = gsap.to(
                '.marquee__part',
                {
                    translateX: '-100%',
                    repeat: -1,
                    duration: 5,
                    ease: 'linear'
                }
            ).totalProgress(0.5);

            gsap.set('.marquee__inner', { translateX: '-50%' });
        }

        scrollRef.current.on('scroll', debounce((instance) => {
            const currentScroll = instance.scroll.y;
            if (currentScroll > previousScrollTop) {
                isScrollingDown = true;
            } else {
                isScrollingDown = false;
            }
            gsap.to(tween, {
                timeScale: isScrollingDown ? 1 : -1,
            });

            for (const arrow of arrowsRef.current) {
                if (isScrollingDown) {
                    arrow.classList.remove('active');
                } else {
                    arrow.classList.add('active');
                }
            }
            previousScrollTop = currentScroll;
        }, /*15.9*/10));

        window.addEventListener('resize', handleResize);

        return () => {
            scrollRef.current.destroy();
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <main className='about-section'>
            <section className='about-me-section'>
                <header className='marquee'>
                    <div className='marquee__inner'>
                        {Array(6).fill().map((nullElement, id) => {
                            return (
                                <div key={id} className='marquee__part'>
                                    Juan David Moreno Alfonso
                                    <div className='arrow'>
                                        <img src={arrowDW} alt="white arrow right" />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </header>
                <article className='about-me-section__juanda'>
                    <div>
                        <img src={img2} alt="picture of the most beautiful man" />
                    </div>
                    <div>
                        <p>
                            I am a devoted Software System Engineering student that is interested in web development and building seamless user experiences. 
                            With a good understanding of JavaScript, HTML, and CSS, I am always challenging myself to master the React and Angular frameworks in order to keep current on trends and technologies.
                            <span><br /><br /></span>
                            In addition to programming, I value a healthy lifestyle, which includes going to the gym on a daily basis for physical fitness and mental clarity. 
                            For me, learning is a lifetime journey. I consume literature for personal and professional development, constantly looking for creative answers to problems.
                            <span><br /><br /></span>
                            My ultimate objective is to assist businesses in succeeding online by leveraging my knowledge to increase their visibility, improve customer interaction, and create exceptional digital experiences. 
                            I am dedicated to create effective solutions while working cooperatively with a worldwide network of professionals.
                        </p>
                    </div>
                </article>
                <article className='about-me-section__tech-stack'>
                    <h3>My Tech Tools</h3>
                    <div className='tech-stack__tools'>
                        <TechStack techStack={TECHSTACK} />
                    </div>
                </article>
            </section>

            <section className='loader-about'>
                {img.map((img, id) => {
                    return (
                        <div key={id} className='img'>
                            <img src={img} alt="loader img" />
                        </div>
                    );
                })}
            </section>

            <section onClick={handleOverlayClick} className='overlay'>
                <article className='col'>
                    <h2><div>An unknow</div></h2>
                    <h2><div>Developer</div></h2>
                    <h2><div>Till now</div></h2>
                </article>
            </section>

            <section className='col click-here'>
                <h2><span>Click </span> anywhere to know him</h2>
            </section>
        </main >
    );
};

export default About;