import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Button from '@mui/material/Button';

export default function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Landing />}>
                    <Route path="login" element={<Login />} />
                    <Route path="home" element={<Home />} />
                    <Route path="canvas" element={<Canvas />} />
                </Route>
            </Routes>
        </div>
    );
}
