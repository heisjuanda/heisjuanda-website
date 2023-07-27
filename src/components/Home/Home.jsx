import { useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import getLetters from '../../helpers/getLetters';
import { gsap } from 'gsap';

import heisjuandaLogoBlack from '../../assets/img/icons/heisjuandaLogoB.webp';

import './Home.css';

export const Home = () => {

    const history = useNavigate();

    const titleRef = useRef([]);
    const aboutMeRef = useRef();

    const handleGoToAbout = useCallback(() => {
        const tl = gsap.timeline();
        tl.to('.title-home__letters', {
            delay: 0.5,
            duration: 0.7,
            y: 100,
            ease: 'back.in',
            stagger: {
                amount: 0.3
            }
        });
        tl.to('.opcity-home__reveal', {
            delay: 0,
            duration: 0.7,
            opacity: 0,
            ease: 'power1.in',
        });
        setTimeout(() => {
            history('/about');
        }, 2300);
    }, [history]);

    useEffect(() => {
        const tl = gsap.timeline();

        titleRef.current = Array.from(document.querySelectorAll('.title-target'));
        const areDefined = aboutMeRef.current && titleRef.current.length > 0
        if (areDefined) {
            for (const word of titleRef.current) {
                getLetters(word, 'title-home__letters');
            }
            getLetters(aboutMeRef.current, 'about-me__letters');
            document.querySelectorAll('.about-me__letters').forEach((el, id) => {
                el.style.transform = `rotate(${id * 22.5}deg)`;
            });
        }
        tl.to('.title-home__letters', {
            delay: 0.9,
            duration: 1,
            y: 0,
            ease: 'back.out',
            stagger: {
                amount: 0.3
            }
        });
        tl.to('.opcity-home__reveal', {
            duration: 0.5,
            delay: 0,
            opacity: 0.9,
            ease: 'power1.out',
        });
    }, []);

    return (
        <section className='home-section'>
            <header className='home-section__title'>
                <h1 className='title-target'>JUANDA</h1>
                <h1 className='title-target'>YOUR FAVORITE</h1>
                <h1 className='title-target'>DEVELOPER</h1>
            </header>
            <article onClick={handleGoToAbout} className='home-section__about opcity-home__reveal'>
                <h2 ref={aboutMeRef}>
                    - ABOUT ME - ABOUT ME
                </h2>
            </article>
            <article className='home-section__logo-heisjuanda opcity-home__reveal'>
                <img src={heisjuandaLogoBlack} alt="he is juanda logo black color" />
            </article>
        </section>
    );
};