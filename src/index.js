import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'; // archivo de node_modules
import './global.css';
import Badges from './pages/Badges';
import App from './components/App';
const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__)

ReactDOM.render(<App/>, container);