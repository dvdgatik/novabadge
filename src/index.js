import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'; // archivo de node_modules
import './global.css';
import Badge from './components/Badge';
import BadgeNew from './pages/BadgeNew';
import Badges from './pages/Badges';

const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__)

ReactDOM.render(<Badges/>, container);