import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

const Loader = lazy(() => import("../components/Loader/Loader"));

import { Menu } from "../components/Menu/Menu";
import { Home } from '../components/Home/Home';
const About = lazy(() => import('../components/About/About'));
const Work = lazy(() => import('../components/Work/Work'));
const ProjectPage = lazy(() => import('../components/ProjectPage/ProjectPage'));

export const RoutesConfiguration = () => {
    return (
        <Router>
            <Menu />
            <Routes>
                <Route path='*' element={
                    <Suspense fallback={<Loader color={'white'} />}>
                        <div />
                    </Suspense>
                } />
                <Route path='/' element={<Home />} />
                <Route path='/about' element={
                    <Suspense fallback={<Loader color={'rbg(15,15,15)'} />}>
                        <About />
                    </Suspense>
                } />
                <Route path='/project' element={
                    <Suspense fallback={<Loader color={'white'} />}>
                        <Work />
                    </Suspense>
                } />
                <Route path='/project/:id' element={
                    <Suspense fallback={<Loader color={'rgb(15,15,15)'} />}>
                        <ProjectPage />
                    </Suspense>
                } />
            </Routes>
        </Router>
    );
};