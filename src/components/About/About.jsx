import { useEffect, useCallback } from 'react';

import { TechStack } from '../ProjectPage/TechStack/TechStack';

import { gsap } from 'gsap';

import { TECHSTACK } from '../../constants/constants';

import img1 from '../../assets/img/about/1.jpg';
import img2 from '../../assets/img/about/2.jpg';
import img3 from '../../assets/img/about/3.jpg';
import img4 from '../../assets/img/about/4.jpg';
import img5 from '../../assets/img/about/5.png';
import img6 from '../../assets/img/about/6.jpg';
import img7 from '../../assets/img/about/7.jpg';

import './About.css';

const About = () => {

    const img = [img1, img2, img3, img4, img5, img6, img7];

    const handleOverlayClick = useCallback(() => {
        const tl = gsap.timeline();
        tl.to('h2 div', 1, {
            yPercent: -100,
            ease: 'power4.inOut',
            stagger: {
                amount: 0.5,
            },
        });
        tl.to('h2', 0.3, {
            clipPath: 'polygon(0 85%, 100% 85%, 100% 100%, 0 100%)',
            ease: 'power4.inOut',
            opacity: 0,
            stagger: {
                amount: 0.1,
            }
        });
        tl.to('.overlay', 0.5, {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
            ease: 'power4.inOut',
        });

        tl.to('.img', 0.5, {
            clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
            ease: 'power4.inOut',
            stagger: {
                amount: 1,
            }
        });
        tl.to('.loader-about', 0.5, {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
            ease: 'power4.inOut',
        });
        tl.to('.about-section .container', {
            height: '200vh',
        });
    }, []);

    useEffect(() => {
        const tl = gsap.timeline();
        tl.from('h2 div', {
            duration: 0.5,
            delay: 0.5,
            ease: 'power4.in',
            stagger: {
                amount: 0.5
            }
        });
        tl.to('h2', {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            duration: 1,
            delay: 0.3,
            yPercent: 100,
            ease: 'power4.out',
            stagger: {
                amount: 0.8,
            }
        });
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
                    <h2><div>AN UNKNOW</div></h2>
                    <h2><div>DEVELOPER</div></h2>
                    <h2><div>TILL NOW</div></h2>
                </div>
            </div>
            <div className='col click-here'>
                <h2><span>click </span> anywhere to know him</h2>
            </div>
        </section>
    );
};

export default About;