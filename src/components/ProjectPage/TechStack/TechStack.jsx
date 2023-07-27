import PropTypes from 'prop-types'
import { useEffect, useRef } from 'react';

import Matter from 'matter-js';

import './TechStack.css';

export const TechStack = (props) => {
    const {
        techStack,
    } = props;

    const Engine = Matter.Engine,
        Render = Matter.Render,
        Runner = Matter.Runner,
        Bodies = Matter.Bodies,
        Composite = Matter.Composite,
        Mouse = Matter.Mouse,
        MouseConstraint = Matter.MouseConstraint;

    const canvasRef = useRef(null);

    useEffect(() => {
        const handleMatterCreation = () => {
            let engine,
                render;
            if (canvasRef.current) {
                engine = Engine.create();
                render = Render.create({
                    canvas: canvasRef.current,
                    engine: engine,
                    options: {
                        background: 'white',
                        wireframes: false,
                        width: window.innerWidth,
                        height: window.innerHeight,
                    }
                });
                let boxes = [];
                for (const logo of techStack) {
                    let box = Bodies.rectangle(
                        window.innerWidth / 2,
                        0,
                        100,
                        100,
                        {
                            label: 'hola',
                            density: 0.8,
                            frictionAir: 0.01,
                            restitution: 0.5,
                            friction: 0.001,
                            render: {
                                sprite: {
                                    texture: logo
                                },
                            }
                        });
                    boxes.push(box);
                }
                let ground = Bodies.rectangle(
                    window.innerWidth / 2,
                    window.innerHeight,
                    window.innerWidth,
                    10,
                    { isStatic: true });
                let wallL = Bodies.rectangle(
                    window.innerWidth,
                    window.innerHeight / 2,
                    10,
                    window.innerHeight,
                    { isStatic: true });
                let wallR = Bodies.rectangle(
                    0,
                    window.innerHeight / 2,
                    10,
                    window.innerHeight,
                    { isStatic: true });
                let ciel = Bodies.rectangle(
                    window.innerWidth / 2,
                    0,
                    window.innerWidth,
                    10,
                    { isStatic: true });
                for (const box of boxes) {
                    Composite.add(engine.world, [box, ground, wallL, wallR, ciel]);
                }
                Render.run(render);

                let runner = Runner.create();

                Runner.run(runner, engine);

                let mouse = Mouse.create(render.canvas);
                let mouseConstraint = MouseConstraint.create(engine, {
                    mouse: mouse,
                    constraint: {
                        stiffness: 0.2,
                        render: {
                            visible: false,
                        },
                    },
                });

                Composite.add(engine.world, mouseConstraint);
            }
        };
        handleMatterCreation();
        window.addEventListener('resize', handleMatterCreation);

        return () => {
            window.removeEventListener('resize', handleMatterCreation);
        };
    }, [Bodies, Composite, Engine, Mouse, MouseConstraint, Render, Runner, techStack]);

    return (
        <section className='tech-tack-section'>
            <canvas ref={canvasRef}></canvas>
        </section>
    );
};

TechStack.propTypes = {
    techStack: PropTypes.arrayOf(PropTypes.string).isRequired,
};
