import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Landing from '../../containers/Landing';
import Login from '../../containers/Login';
import Home from '../../containers/Home';
import Canvas from '../../containers/Canvas.jsx';

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
