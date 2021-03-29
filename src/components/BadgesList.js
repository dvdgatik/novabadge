import React from 'react';


class BadgesList extends React.Component {

  render() {

    return (
        <ul className="list-unstyled">
         {/* Por cada uno de los elementos que tenga en data convertirlos de un objeto a elementos
         con el metodo map
         map recibe una funcion como argumento y tiene que regresar otro valor

         this.state.data.map or this.props.badges.data.map
          */}
         {this.props.badges.map((badge)=> {
           return(
             <li key={badge.id}>
               {badge.firstName} {badge.lastName}
             </li>
             )

         })}
               
         </ul>
      );
  }


}

export default BadgesList;