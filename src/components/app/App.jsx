import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import '@pwabuilder/pwaupdate';

import Landing from '../../containers/landing/Landing';
import Home from '../../containers/home/Home';
import Canvas from '../../containers/canvas/Canvas.jsx';

import styles from './App.css';

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
  faEraser,
  fab
);

export default function App() {
  return (
    <main>
      <pwa-update></pwa-update>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/canvas" element={<Canvas />} />
      </Routes>
    </main>
  );
}
