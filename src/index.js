import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'; // archivo de node_modules
import './global.css';
import Badge from './components/Badge';

const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__)

ReactDOM.render(<Badge 
	firstName='Lilly' 
	lastName='Kaufan' 
	jobTitle='Front End' 
	twitter='dvdgatik'
	avatar_url='https://www.gravatar.com/avatar?d=identicon'

	/>, container);