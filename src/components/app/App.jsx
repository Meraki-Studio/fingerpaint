import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { CssBaseline } from '@mui/material';

import Landing from '../../containers/Landing';
import Login from '../../containers/Login';
import Home from '../../containers/Home';
import Canvas from '../../containers/Canvas.jsx';

import {
    faArrowLeft,
    faUndoAlt,
    faRedoAlt,
    faExpandArrowsAlt,
    faEye,
    faPalette,
    faPaintBrush,
    faStamp,
    faFillDrip,
    faImage,
    faEraser,
} from '@fortawesome/free-solid-svg-icons';

import {
    faLinkedin,
    faLinkedinIn,
    faGithub,
    faGithubAlt,
    faTwitter,
} from '@fortawesome/free-brands-svg-icons';

library.add(
    faArrowLeft,
    faUndoAlt,
    faRedoAlt,
    faExpandArrowsAlt,
    faEye,
    faPalette,
    faPaintBrush,
    faStamp,
    faFillDrip,
    faImage,
    faEraser,
    faLinkedin,
    faLinkedinIn,
    faGithub,
    faGithubAlt,
    faTwitter
);

export default function App() {
    return (
        <CssBaseline>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/canvas" element={<Canvas />} />
            </Routes>
        </CssBaseline>
    );
}
