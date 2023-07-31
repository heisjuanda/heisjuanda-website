import { useEffect, useCallback } from 'react';

import { gsap } from 'gsap';

import { Button } from '../../common/Button/Button';

import { SOCIAL } from '../../constants/constants';

import './Talk.css';

const Talk = () => {

    const handleSubmit = useCallback((e) => {
        e.preventDefault();

        const data = Object.fromEntries(new window.FormData(e.target));

        console.log(data)
        const refactor = {

        };
        for (const prop in refactor) {
            if (refactor[prop]()) {
                return 'hola';
            }
        }
        /*{
            fullName: 'Juan David Moreno Alfonso',
            email: 'heisjuanda@gmail.com',
            subject: 'asdasd',
            company: 'XmartCall Tuluá; JUAN',
            message: 'asdad'
          }*/
    }, []);

    useEffect(() => {
        const tl = gsap.timeline();
        tl.to('.talk-section h2 div', 1, {
            delay: 0.99,
            translateY: '0%',
            ease: 'power4.out',
            stagger: {
                amount: 0.3
            }
        });
    }, []);

    return (
        <section className='talk-section'>
            <header className='talk-section__title'>
                <div>
                    <h2><div>{"Let's"}</div></h2>
                    <h2><div>Collaborate</div></h2>
                </div>
                <div className='title-email'>
                    <p>
                        <a href="mailto:heisjuanda@gmail.com">
                            heisjuanda@gmail.com
                        </a>
                    </p>
                </div>
                <div className='title-social'>
                    <h4>
                        Find me
                    </h4>
                    <ol>
                        {SOCIAL.map((socialMedia) => {
                            return (
                                <li key={socialMedia.id}>
                                    <p>
                                        <a href={socialMedia.link} target='_blank' rel="noreferrer">
                                            {socialMedia.name}
                                        </a>
                                    </p>
                                </li>
                            );
                        })}
                    </ol>
                </div>
            </header>
            <article className='talk-section__form'>
                <div>
                    <h2>
                        Say hello
                    </h2>
                </div>
                <div>
                    <form action="submit" onSubmit={handleSubmit}>
                        <div className='form-fields__container'>
                            <div className='form-name'>
                                <label htmlFor="fullName">Name</label>
                                <input
                                    id='fullName'
                                    name='fullName'
                                    type="text"
                                    placeholder='Your name'
                                    pattern="^(?! )[a-zA-Z\s]{2,20}$"
                                    maxLength={20}
                                    minLength={2}
                                />
                            </div>
                            <div className='form-email'>
                                <label htmlFor="email">Email</label>
                                <input
                                    id='email'
                                    name='email'
                                    type="email"
                                    placeholder='Email address'
                                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/"
                                />
                            </div>
                            <div className='form-subject'>
                                <label htmlFor="subject">Subject</label>
                                <input 
                                    id='subject' 
                                    name='subject' 
                                    type="text" 
                                    placeholder='Email subject' 
                                />
                            </div>
                            <div className='form-company'>
                                <label htmlFor="company">Company</label>
                                <input 
                                    id='company' 
                                    name='company' 
                                    type="text" 
                                    placeholder='Your company' 
                                />
                            </div>
                            <div className='form-message'>
                                <label htmlFor="message">Message</label>
                                <textarea 
                                    name="message" 
                                    id="message" 
                                    placeholder='Start typing here'
                                ></textarea>
                            </div>
                        </div>
                        <div className='form-send'>
                            <Button text='Submit' />
                        </div>
                    </form>
                </div>
            </article>
        </section>
    );
};

export default Talk;
