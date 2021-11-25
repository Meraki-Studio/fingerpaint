/* eslint-disable */
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { UserProvider } from './state/UserProvider';
import * as serviceWorkerRegistration from './sw-registration';

import App from './components/app/App';

render(
  <UserProvider>
    <DndProvider backend={HTML5Backend}>
      <Router>
        <App />
      </Router>
    </DndProvider>
  </UserProvider>,
  document.getElementById('root')
);

serviceWorkerRegistration.register();
