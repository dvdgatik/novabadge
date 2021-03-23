// // Crear un elemento
// const element = document.createElement('h1');

// // Insertar texto
// element.innerText = 'Hello, Platzi Badges'

// // Donde queremos colocarlo?

// const container = document.getElementById('app');


// container.appendChild(element);
// 


import React from 'react'; // Nos permite usar JSX y usar REACT
import ReactDOM from 'react-dom';

const element = <h1>Hello, Platzi Badges from React </h1>

const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__)

ReactDOM.render(element, container);