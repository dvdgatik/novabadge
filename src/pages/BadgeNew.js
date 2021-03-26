import React from 'react';
import NavBar from '../components/Navbar';
import Badge from '../components/Badge';
import header from '../images/badge-header.svg';
import BadgeForm from '../components/BadgeForm';
import './styles/BadgeNew.css';

class BadgeNew extends React.Component {
    render() {
      return(
        <div>
          <NavBar></NavBar>
          <div className='BadgeNew__hero'>
            <img className='img-fluid' src={header} alt="Logo"/>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-6">
              <Badge 
               firstName='David'
               lastName='Gatica'
               twitter='dvdgatic' 
               avatar_url='https://www.gravatar.com/avatar?d=identicon' 
               jobTitle='Front End Software Engineer'  />
              </div>
              <div className="col-6">
              <BadgeForm/>
              </div>
            </div>
          </div>
        </div>
      )
    }
}


export default BadgeNew;