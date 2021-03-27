import React from 'react';
import NavBar from '../components/Navbar';
import Badge from '../components/Badge';
import header from '../images/badge-header.svg';
import BadgeForm from '../components/BadgeForm';
import './styles/BadgeNew.css';

class BadgeNew extends React.Component {
    state = { form: {
      firstName: '',
      lastName: '',
      jobTitle: '',
      twitter: '',
      email: '',

    } } //propiedad form 

    handleChange = e =>  {
      //nuevo valor
     /* const nextForm = this.state.form;
      nextForm[e.target.name] = e.target.value;*/
      this.setState({
       /* {form: { //sobrescribir la informacion que tiene form por eso solo sale un atributo por campo
          //[e.target.name]: e.target.value

        }}*/
        form: {
          ...this.state.form, //dejamos caer todos los valores que habia en this.state.form
          [e.target.name]: e.target.value
        },
      })
    }

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
               firstName={this.state.form.firstName}
               lastName={this.state.form.lastName}
               twitter={this.state.form.twitter} 
               avatar_url='https://www.gravatar.com/avatar?d=identicon'
               email={this.state.form.email}
               jobTitle={this.state.form.jobTitle}  />
              </div>
              <div className="col-6">
              <BadgeForm 
              onChange={this.handleChange} 
              formValues={this.state.form}
              />
              </div>
            </div>
          </div>
        </div>
      )
    }
}


export default BadgeNew;