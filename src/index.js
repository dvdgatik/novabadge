// // Crear un elemento
// const element = document.createElement('h1');

// // Insertar texto
// element.innerText = 'Hello, Platzi Badges'

// // Donde queremos colocarlo?

// const container = document.getElementById('app');

// container.appendChild(element);
 


import React from 'react'; // Nos permite usar JSX y usar REACT
import ReactDOM from 'react-dom';

//const jsx = <h1>Hello, Platzi Badges from React </h1>

//const element = React.createElement('a', {href: 'https://www.platzi.com'}, 'Ir a platzi');
//Create element tiene tres parámetros
//el elemento
//sus atributos
//el children (parecido al innerText o innerHTML)

//const name = 'David'
//const sum = () => 3+3
//const element = React.createElement('h1', {}, `Hola soy ${name}`);

//const jsx = <h1> hola soy, {undefined} </h1>

const jsx = 
<div>
	<h1>Hola, soy David</h1>
	<p>Soy un ingeniero frontend.</p>
</div>

const element = React.createElement(
	'div', 
	{},
	React.createElement('h1', {}, 'Hola soy Daniel'),
	React.createElement('p', {}, 'Soy un Ingeniero frontend')
)
const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__)

ReactDOM.render(element, container);