import React from 'react';
import Navbar from './Navbar';

//En los componentes funcionales props es su unico argumento
//Siempre que renderizamos el elemento o componente debemos renderizar uno
/*
React.Fragment
 */
function Layout(props) {
	const children =  props.children;
	return (
			<React.Fragment>
			<Navbar/>
			{props.children}
			</React.Fragment>
		)
}

export default Layout;