import { useEffect, useCallback, useLayoutEffect, useRef } from 'react';

import { TechStack } from '../ProjectPage/TechStack/TechStack';

import { gsap } from 'gsap';
import LocomotiveScroll from 'locomotive-scroll';

import { TECHSTACK } from '../../constants/constants';

import img1 from '../../assets/img/about/1.webp';
import img2 from '../../assets/img/about/2.webp';
import img3 from '../../assets/img/about/3.webp';
import img4 from '../../assets/img/about/4.webp';
import img5 from '../../assets/img/about/5.webp';
import img6 from '../../assets/img/about/6.webp';
import img7 from '../../assets/img/about/7.webp';

import './About.css';

const About = () => {
    const img = [img5, img2, img3, img6, img4, img7, img1];

    const scrollRef = useRef();

    const handleOverlayClick = useCallback(() => {
        const tl = gsap.timeline();
        tl.to('h2 div', 0.7, {
            yPercent: -100,
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
        tl.to('.about-section .container', {
            height: '200vh',
        });
        setTimeout(() => {
            scrollRef.current ? scrollRef.current.update() : null;
        }, 4800);
    }, []);

    useEffect(() => {
        const tl = gsap.timeline();
        tl.to('h2', 1,{
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
            el: document.querySelector('.container'),
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

        window.addEventListener('resize', handleResize);

        return () => {
            scrollRef.current.destroy();
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <section className='about-section'>
            <div className='container'>
                <div className='container-title'>
                    <h1>My Tech Tools</h1>
                </div>
                <div className='about-section__tech-stack'>
                    <TechStack techStack={TECHSTACK} />
                </div>
            </div>
            <div className='loader-about'>
                {img.map((img, id) => {
                    return (
                        <div key={id} className='img'>
                            <img src={img} alt="loader img" />
                        </div>
                    );
                })}
            </div>
            <div onClick={handleOverlayClick} className='overlay'>
                <div className='col'>
                    <h2><div>An unknow</div></h2>
                    <h2><div>Developer</div></h2>
                    <h2><div>Till now</div></h2>
                </div>
            </div>
            <div className='col click-here'>
                <h2><span>Click </span> anywhere to know him</h2>
            </div>
        </section>
    );
};

export default About;