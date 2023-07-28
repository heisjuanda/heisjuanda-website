import { useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { gsap } from 'gsap';

import './ErrorPage.css';

const ErrorPage = () => {

    const history = useNavigate();

    const handleGoHome = useCallback(() => {
        const tl = gsap.timeline();
        tl.to('.container__go-back',{
            clipPath: 'circle(0% at 50% 50%)',
            duration: 0.3,
            ease: 'circ.in',
            zIndex: '-10'
        });
        tl.to('h2 div', {
            duration: 1,
            delay: 0.3,
            yPercent: 100,
            ease: 'power4.inOut',
            stagger: {
                amount: 0.3
            }
        });
        setTimeout(() => {
            history('/');
        },2000);
    }, [history]);

    useEffect(() => {
        const tl = gsap.timeline();

        tl.from('h2 div', {
            yPercent: 100,
        });
        tl.to('h2 div', {
            duration: 1,
            delay: 0.3,
            yPercent: 0,
            ease: 'power4.out',
            stagger: {
                amount: 0.3
            }
        });
        tl.to('.container__go-back',{
            clipPath: 'circle(51% at 50% 50%)',
            duration: 0.3,
            ease: 'circ.in',
        });
    }, []);

    return (
        <section className='error-section'>
            <header className='error-section__title'>
                <div className='text-container'>
                    <h2>
                        <div>PAGE</div>
                    </h2>
                    <h2>
                        <div>404 NOT</div>
                    </h2>
                    <h2>
                        <div>FOUND</div>
                    </h2>
                </div>
            </header>
            <article className='error-section__go-back'>
                <div className='container__go-back' onClick={handleGoHome}>
                    <h3>Go Home</h3>
                </div>
            </article>
        </section>
    );
};

export default ErrorPage;