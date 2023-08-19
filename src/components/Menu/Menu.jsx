import { useNavigate } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';

import { gsap } from 'gsap';

import './Menu.css';

export const Menu = () => {

    const menuOptions = [
        {
            id: 0,
            name: 'Home',
            path: '/',
        },
        {
            id: 1,
            name: 'About',
            path: '/about',
        },
        {
            id: 2,
            name: 'Work',
            path: '/project',
        },
        {
            id: 3,
            name: 'Talk',
            path: '/contact',
        },
        {
            id: 4,
            name: 'More',
            path: '/more',
        },
        {
            id: 5,
            name: 'Close',
            path: '',
        },
    ];

    const history = useNavigate();

    const menuContainerRef = useRef();
    const menuOptionsRef = useRef();
    const menuBtnRef = useRef();
    const menuOptionContainerRef = useRef();

    const [wasClicked, setWasClicked] = useState(false);
    const [isClose, setIsClose] = useState(true);

    const handleMenuOpen = () => {
        const tl = gsap.timeline();

        const areDefined = menuOptionsRef.current && menuContainerRef.current && menuOptionContainerRef.current;
        if (areDefined) {
            setWasClicked(true);
            menuOptionContainerRef.current.style.transform = 'translateX(0)';
            menuContainerRef.current.style.zIndex = '99';
            menuContainerRef.current.style.transform = 'translateX(0vw)';
            setTimeout(() => {
                setWasClicked(false);
            }, 1550);
            menuOptionsRef.current.style.transform = 'translateX(0vw)';
            tl.to('.menu-option__target', {
                duration: 0.5,
                translateY: '0px',
                ease: 'power2.out',
                delay: 1,
                stagger: {
                    amount: 0.2
                }
            });
            setIsClose((prev) => !prev);
        }
    };

    const handleMenuClose = () => {
        const tl = gsap.timeline();

        const areDefined = menuOptionsRef.current && menuContainerRef.current;
        if (areDefined) {
            setWasClicked(true);
            setTimeout(() => {
                menuContainerRef.current.style.transform = 'translateX(-100vw)';
            }, 1000);
            setTimeout(() => {
                menuOptionsRef.current.style.transform = 'translateX(-100vw)';
            }, 800);
            setTimeout(() => {
                menuContainerRef.current.style.zIndex = '-99';
                setWasClicked(false);
            }, 1900);
            tl.to('.menu-option__target', {
                duration: 0.5,
                translateY: '90px',
                ease: 'power4.in',
                stagger: {
                    amount: 0.2
                }
            })
            setIsClose(true);
        }
    };

    const handleMenuSelectOption = (path) => {
        const tl = gsap.timeline();

        const areDefined = menuOptionsRef.current && menuContainerRef.current && menuOptionContainerRef.current;
        if (areDefined) {
            tl.to('.menu-option__target', {
                duration: 0.5,
                translateY: '90px',
                ease: 'power4.in',
                stagger: {
                    amount: 0.2
                }
            });
            setTimeout(() => {
                history(`${path}`);
                menuOptionContainerRef.current.style.transform = 'translateX(-100vw)';
            }, 700)
            setWasClicked(true);
            setTimeout(() => {
                menuContainerRef.current.style.transform = 'translateX(-100vw)';
            }, 1000);
            setTimeout(() => {
                menuOptionsRef.current.style.transform = 'translateX(-100vw)';
            }, 800);
            setTimeout(() => {
                menuContainerRef.current.style.zIndex = '-99';
                setWasClicked(false);
            }, 1900);
            setIsClose(true);
        }
    };

    useEffect(() => {
        const letters = "abcdefghijklmnopqrstuvwxyz";

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
                    data-value="Menu"
                    onClick={isClose ? handleMenuOpen : handleMenuClose}
                    disabled={wasClicked}
                >
                    Menu
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
                            if (`/${location.pathname.split('/')[1]}` !== option.path) {
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
