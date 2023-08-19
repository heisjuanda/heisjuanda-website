import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import getLetters from '../../helpers/getLetters';
import { gsap } from 'gsap';

import img1 from '../../assets/img/about/2.webp';
import arrowRB from '../../assets/img/icons/arrowRightB.png';
import heisjuandaLogoBlack from '../../assets/img/icons/heisjuandaLogoB.webp';

import './Home.css';

export const Home = () => {

    const history = useNavigate();

    const titleRef = useRef([]);
    const aboutMeRef = useRef();
    const animationTransitionRef = useRef();
    const svgRef = useRef();

    const handleGoToAbout = () => {
        const tl = gsap.timeline();
        tl.to('.title-home__letters', 0.7, {
            y: 100,
            ease: 'back.in',
            stagger: {
                amount: 0.3
            }
        });
        tl.to('.opcity-home__reveal', 0.5, {
            opacity: 0,
            ease: 'power1.in',
        });
        tl.to('.opcity-home__reveal', {
            zIndex: '-10',
        });
        if (svgRef.current && animationTransitionRef.current) {
            const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
            const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";
            tl.to(svgRef.current, 0.6, {
                attr: { d: curve },
                ease: "power3.in",
            }).to(svgRef.current, 0.6, {
                attr: { d: flat },
                ease: "power3.out",
            });
        }
        setTimeout(() => {
            history('/about');
        }, 3550);
    };

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
        tl.to('.home-section__title img', {
            delay: 0.9,
            duration: 0.5,
            clipPath: 'circle(70.7% at 50% 50%)',
            ease: 'power1.inOut'
        });
        tl.to('.title-home__letters', {
            duration: 1,
            y: 0,
            ease: 'back.out',
            stagger: {
                amount: 0.3
            }
        });
        tl.to('.opcity-home__reveal', {
            duration: 0.5,
            opacity: 1,
            ease: 'power1.out',
        });
    }, []);

    return (
        <section className='home-section'>
            <div ref={animationTransitionRef} className="loader-wrap">
                <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
                    <path ref={svgRef} d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
                </svg>
            </div>
            <header className='home-section__title'>
                <div>
                    <h1 className='title-target'>JuanDa</h1>
                    <h1 className='title-target'>Your favorite</h1>
                    <h1 className='title-target'>Developer</h1>
                </div>
                <div>
                    <img className='opcity-home__reveal' src={img1} alt="Juan David Moreno Alfonso wearing a face mask" />
                </div>
            </header>
            <article onClick={handleGoToAbout} className='home-section__about opcity-home__reveal'>
                <h2 ref={aboutMeRef}>
                    - ABOUT ME - ABOUT ME
                </h2>
                <div className='about-arrow__home'>
                    <img src={arrowRB} alt="black right arrow" />
                </div>
            </article>
            <article className='home-section__logo-heisjuanda opcity-home__reveal'>
                <img src={heisjuandaLogoBlack} alt="he is juanda logo black color" />
            </article>
        </section>
    );
};