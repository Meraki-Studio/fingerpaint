import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';

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
    faEraser
);

export default function App() {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/canvas" element={<Canvas />} />
            </Routes>
        </main>
    );
}
