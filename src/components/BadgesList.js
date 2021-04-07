import React from 'react';
import {Link} from 'react-router-dom';


class BadgesList extends React.Component {

  render() {
    if (this.props.badges.length == 0) {
      return (
        <div>
          <h3>No badges were found</h3>
          <Link className='btn btn-primary' to='/badges/new'>Create new Badge</Link>
        </div>
        )
    }
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
               <div className="Badge__content-list row">
                 <div className="Badge__img-list col-2">
                   <img src={badge.avatarUrl} alt=""/>
                 </div>
                 <div className="Badge__describe col-10">
                 <span className='Badge__span-list'>{badge.firstName} {badge.lastName}</span>
                  <span className='Badge__span-list twitter'>@{badge.twitter}</span>
                  <span className='Badge__span-list job-title'>{badge.jobTitle}</span>
                 </div>
               </div>
             </li>
             )

         })}
               
         </ul>
      );
  }


}

export default BadgesList;