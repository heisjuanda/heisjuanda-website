import { useNavigate } from 'react-router-dom';
import { useCallback, useRef, useState, useEffect } from 'react';

import getLetters from '../../helpers/getLetters';

import { gsap } from 'gsap';

import './Menu.css';

export const Menu = () => {

    const menuOptions = [
        {
            id: 0,
            name: 'HOME',
            path: '/',
        },
        {
            id: 1,
            name: 'ABOUT',
            path: '/about',
        },
        {
            id: 2,
            name: 'WORK',
            path: '/project',
        },
        {
            id: 3,
            name: 'TALK',
            path: '/contact',
        },
        {
            id: 4,
            name: 'MORE',
            path: '/more',
        },
        {
            id: 5,
            name: 'CLOSE',
            path: '',
        },
    ];

    const history = useNavigate();

    const menuContainerRef = useRef();
    const menuOptionsRef = useRef();
    const menuOptionTextRef = useRef([]);
    const menuBtnRef = useRef();
    const menuOptionContainerRef = useRef();

    const [wasClicked, setWasClicked] = useState(false);
    const [isClose, setIsClose] = useState(true);
    const [currentPath, setCurrentPath] = useState('path');

    const handleMenuOpen = useCallback(() => {
        const tl = gsap.timeline();

        menuOptionTextRef.current = Array.from(document.querySelectorAll('.menu-option__target'));
        if (currentPath !== window.location.pathname) {
            if (menuOptionTextRef.current.length > 0) {
                for (const word of menuOptionTextRef.current) {
                    getLetters(word, 'option-letters__menu');
                }
            }
            setCurrentPath(window.location.pathname);
        }
        const areDefined = menuOptionsRef.current && menuContainerRef.current && menuOptionContainerRef.current;
        if (areDefined) {
            setWasClicked(true);
            menuOptionContainerRef.current.style.transform = 'translateX(0)';
            menuContainerRef.current.style.zIndex = '99';
            menuContainerRef.current.style.transform = 'translateX(0vw)';
            setTimeout(() => {
                setWasClicked(false);
            }, 1500);
            menuOptionsRef.current.style.transform = 'translateX(0vw)';
            tl.to('.option-letters__menu', {
                duration: 0.5,
                translateY: '0px',
                ease: 'power1.inOut',
                delay: 1,
                stagger: {
                    amount: 0.2
                }
            });
            setIsClose((prev) => !prev);
        }
    }, [currentPath]);

    const handleMenuClose = useCallback(() => {
        const tl = gsap.timeline();

        const areDefined = menuOptionsRef.current && menuContainerRef.current;
        if (areDefined) {
            setWasClicked(true);
            setTimeout(() => {
                menuContainerRef.current.style.transform = 'translateX(-100vw)';
            }, 800);
            setTimeout(() => {
                menuOptionsRef.current.style.transform = 'translateX(-100vw)';
            }, 500);
            setTimeout(() => {
                menuContainerRef.current.style.zIndex = '-99';
                setWasClicked(false);
            }, 1800);
            tl.to('.option-letters__menu', {
                duration: 0.6,
                translateY: '90px',
                ease: 'power4.inOut',
                stagger: {
                    amount: 0.2
                }
            })
            setIsClose(true);
        }
    }, []);

    const handleMenuSelectOption = useCallback((path) => {
        const tl = gsap.timeline();

        const areDefined = menuOptionsRef.current && menuContainerRef.current && menuOptionContainerRef.current;
        if (areDefined) {
            tl.to('.option-letters__menu', {
                duration: 0.6,
                translateY: '90px',
                ease: 'power4.inOut',
                stagger: {
                    amount: 0.2
                }
            });
            setTimeout(() => {
                history(`${path}`);
                menuOptionContainerRef.current.style.transform = 'translateX(-100vw)';
            }, 600)
            setWasClicked(true);
            setTimeout(() => {
                menuContainerRef.current.style.transform = 'translateX(-100vw)';
            }, 800);
            setTimeout(() => {
                menuOptionsRef.current.style.transform = 'translateX(-100vw)';
            }, 500);
            setTimeout(() => {
                menuContainerRef.current.style.zIndex = '-99';
                setWasClicked(false);
            }, 1800);
            setIsClose(true);
        }
    }, [history]);

    useEffect(() => {
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        let interval = null;

        if (menuBtnRef.current) {
            menuBtnRef.current.onmouseover = (event) => {
                let iteration = 0;

                clearInterval(interval);

                interval = setInterval(() => {
                    event.target.innerText = event.target.innerText
                        .split("")
                        .map((letter, index) => {
                            if (index < iteration) {
                                return event.target.dataset.value[index];
                            }
                            return letters[Math.floor(Math.random() * 26)]
                        })
                        .join("");

                    if (iteration >= event.target.dataset.value.length) {
                        clearInterval(interval);
                    }

                    iteration += 1 / 3;
                }, 50);
            };
        }
    }, []);

    return (
        <>
            <div className='menu-btn'>
                <button
                    ref={menuBtnRef}
                    data-value="MENU"
                    onClick={isClose ? handleMenuOpen : handleMenuClose}
                    disabled={wasClicked}
                >
                    MENU
                </button>
            </div>
            <section ref={menuContainerRef} className='menu-container'>
                <nav ref={menuOptionsRef}>
                    <ol ref={menuOptionContainerRef}>
                        {menuOptions.map((option) => {
                            if (option.path === '') {
                                return (
                                    <li key={option.id}>
                                        <p>
                                            <span className='menu-option__target' onClick={handleMenuClose} >{option.name}</span>
                                        </p>
                                    </li>
                                );
                            }
                            if (location.pathname !== option.path) {
                                return (
                                    <li key={option.id}>
                                        <p>
                                            <span
                                                onClick={() => { handleMenuSelectOption(option.path) }}
                                                className='menu-option__target'
                                            >{option.name}</span>
                                        </p>
                                    </li>
                                );
                            }
                        })}
                    </ol>
                </nav>
            </section>
        </>
    );
};
