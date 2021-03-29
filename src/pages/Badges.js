import React from 'react';
import Navbar from '../components/Navbar';
import './styles/Badges.css';
import confLogo from '../images/badge-header.svg';
import BadgesList from '../components/BadgesList';

class Badges extends React.Component {

  state = {
    data: [
      {
        id: '1234561',
        firstName: 'Jorge',
        lastName: 'Delgadillo',
        email: 'jorge.delgadillo@hotmail.com',
        jobTitle: 'Legacy Brand Director',
        twitter: 'georgeskinny',
        avatarurl: 'https://ui-avatars.com/api/?name=Jorge+Delgadillo'
      },
      {
        id: '1234562',
        firstName: 'Daniel',
        lastName: 'Balderas',
        email: 'daniel.balderas@hotmail.com',
        jobTitle: '.NET Senior',
        twitter: 'danyflags',
        avatarurl: 'https://ui-avatars.com/api/?name=Daniel+Balderas'
      },
      {
        id: '1234563',
        firstName: 'Ruben',
        lastName: 'Flores',
        email: 'ruben.flores@hotmail.com',
        jobTitle: 'Java Senior',
        twitter: 'robinflowers',
        avatarurl: 'https://ui-avatars.com/api/?name=Ruben+Flores'
      }
    ]
  }
  render() {
     return (
       <div>
         <Navbar/>
         <div className='Badges'>
         <div className="Badges__hero">
           <div className="Badges__container">
           <img className='Badges_conf-logo' src={confLogo} alt="Conf Logo"/>
           </div>
         </div>
         </div>
         <div className='Badge__container'>
           <div className="Badges__buttons">
             <a href="/badges/new" className='btn btn-primary'>New Badge</a>
           </div>  
         {/* Listar cada uno de los datos en un solo componente*/}
           <div className='Badges__list'>
             <div className="Badges__container">
             <BadgesList badges={this.state.data}/>
             </div>
         </div>
       </div>
       </div>
     ); 
  }
}


export default Badges;