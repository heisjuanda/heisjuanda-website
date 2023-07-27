import PropTypes from 'prop-types'
import { useEffect, useCallback, useRef, useState } from 'react';

import Matter from 'matter-js';

import './TechStack.css';
import { random } from 'lodash';

export const TechStack = (props) => {
    const {
        techStack,
    } = props;

    const Engine = Matter.Engine;
    const World = Matter.World;
    const Bodies = Matter.Bodies;
    const Body = Matter.Body;

    const [engine, setEngine] = useState();
    const [words, setWords] = useState([]);
    const [ground, setGround] = useState();
    const [wallLeft, setWallLeft] = useState();
    const [wallRight, setWallRight] = useState();
    const [wordsToDisplay, setWordsToDisplay] = useState(techStack);

    const canvasRef = useRef(null);

    const handleSetUp = useCallback(() => {
        const canvas = canvasRef.current;

        const width = window.innerWidth;
        const height = window.innerHeight - 60;

        canvas.width = width;
        canvas.height = height;

        setEngine(Engine.create());
        setGround(Bodies.rectangle(width / 2, height - 20, width, 10));
        setWallLeft(Bodies.rectangle(0, height / 2, 10, height));
        setWallRight(Bodies.rectangle(width, height / 2, 10, height));
        World.add(engine.world, [ground, wallLeft, wallRight]);

        for (let i in wordsToDisplay.length) {
            words.push(new World(random(width),-200, wordsToDisplay[i]));
        }
    }, [Bodies, Engine, World, engine.world, ground, wallLeft, wallRight, words, wordsToDisplay]);

    const handleDraw = useCallback(() => {
        Engine.update(engine);
        for (let word of words) {
            word.show();
        }

        class Word {
            constructor(x,y,word) {
                this.body = Bodies.rectangle(x,y,word.length*10,40);
                this.word = word;
                Word.add(engine.world, this.body);
            }
            show() {
                let pos = this.body.position;
                let angle = this.body.angle;
                push();
                 
            }
        }

    }, [Bodies, Engine, engine, words]);

    return (
        <section className='tech-tack-section'>
            <canvas ref={canvasRef}></canvas>
        </section>
    );
};

TechStack.propTypes = {
    techStack: PropTypes.arrayOf(PropTypes.string),
};