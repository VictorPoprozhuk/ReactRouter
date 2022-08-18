import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import './index.css';

// import App from './SnikersSHOP/App';
// import App from './FramerMotion/App';
import App from './React-Dom/App';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
    , document.getElementById('root'));

