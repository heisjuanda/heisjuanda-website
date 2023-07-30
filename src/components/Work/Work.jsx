import { useEffect,useLayoutEffect, useState, useRef, useCallback } from 'react';

import LocomotiveScroll from 'locomotive-scroll';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Projects } from './components/Project/Projects';

import { PROJECTS } from '../../constants/constants';

import './Work.css';

const Work = () => {

    const headerSectionRef = useRef();
    const animationRef = useRef();

    const [windowWidth, setWindowWidth] = useState(0);
    const [locomotive, setLocomotive] = useState();

    const handleTransition = useCallback(() => {
        animationRef.current = Array.from(document.querySelectorAll('.transition-project'));
        if (animationRef.current.length > 0) {
            for (const divElement of animationRef.current) {
                divElement.classList.add('animation-project');
            }
        }
    }, []);

    useEffect(() => {
        setWindowWidth(window.innerWidth);
    }, []);

    useLayoutEffect(() => {
        const condition = windowWidth > 800;
        //locomotive
        let directionScroll = condition ? 'horizontal' : 'vertical';

        const scroll = new LocomotiveScroll({
            el: document.querySelector('.work-section'),
            smooth: true,
            smoothMobile: true,
            multiplier: 1,
            lerp: 0.06,
            direction: directionScroll,
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
        setLocomotive(scroll);

        gsap.registerPlugin(ScrollTrigger);
        if (condition) {
            ScrollTrigger.scrollerProxy('.work-section', {
                scrollTop(value) {
                    return arguments.length ? scroll.scrollTo(value, 0, 0) : scroll.scroll.instance.scroll.x;
                },
                getBoundingClientRect() {
                    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
                },
                pinType: document.querySelector('.work-section').style.transform ? 'transform' : 'fixed',
            });
            gsap.to('.work-section', {
                x: () => -scroll.scroll.instance.scroll.x,
                ease: 'none',
                scrollTrigger: {
                    trigger: '.work-section',
                    scrub: true,
                    start: 'top top',
                    end: 'bottom bottom',
                    invalidateOnRefresh: true,
                },
            });
        } else {
            ScrollTrigger.killAll();
        }

        const handleScrollUpdate = () => {
            scroll.update();
        };

        const handleResize = () => {
            handleScrollUpdate();
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            scroll.destroy();
        }
    }, [windowWidth]);

    return (
        <>
            {Array(3).fill().map((nullEelement, id) => {
                return (
                    <div
                        key={id}
                        ref={animationRef}
                        className={`transition-project transition-${id}`}
                    ></div>
                );
            })}
            <section className='work-section'>
                <header ref={headerSectionRef} data-scroll-section className='work-section__title interactable'>
                    <h1>
                        <span data-scroll data-scroll-direction={windowWidth > 801 ? 'horizontal' : 'vertical'} data-scroll-speed={windowWidth > 801 ? '1' : "0.8"}>
                            SOME
                        </span>
                        <span data-scroll data-scroll-direction='horizontal' data-scroll-speed={windowWidth > 801 ? '-1' : "0"}>
                            {windowWidth <= 801 ? (
                                <div className='span'>
                                    <span data-scroll data-scroll-direction={'horizontal'} data-scroll-speed="1">OF</span>
                                    <span data-scroll data-scroll-direction={'horizontal'} data-scroll-speed="-1">MY</span>
                                </div>
                            ) : ('OF MY')}
                        </span>
                        <span data-scroll data-scroll-direction={windowWidth > 801 ? 'horizontal' : 'vertical'} data-scroll-speed={windowWidth > 801 ? '2' : "-0.8"}>
                            PROJECTS
                        </span>
                    </h1>
                </header>
                <article data-scroll-section className='work-section__content'>
                    <div className='content-projects__container'>
                        {PROJECTS.map((project) => {
                            return (
                                <Projects
                                    width={windowWidth}
                                    key={project.id}
                                    title={`${project.title}`.toUpperCase()}
                                    description={project.description}
                                    images={[project.images[0], project.images[1]]}
                                    number={project.id}
                                    scroll={locomotive}
                                    transition={handleTransition}
                                />
                            );
                        })}
                    </div>
                </article>
            </section>
        </>
    );
};

export default Work;