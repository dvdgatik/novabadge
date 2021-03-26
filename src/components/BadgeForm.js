import React from 'react';


class BadgeForm extends React.Component {

  handleChange = (e) =>  {
    console.log({
      name:  e.target.name,
      value: e.target.value,
      class: e.target.className
    });

  }

  handleClick = (e) => {
    console.log('Button was clicked');
  }

  handleSubmit = (e) => {
    //Hacer que un formulario no se envie 
    e.preventDefault();
    console.log('Form was submited');
  }


 
  render() {
    return(
      <div>
        <h1>New Attendant</h1>
        <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input onChange={this.handleChange} className='form-control' type='text' name='firstName' id='firstName'/>
        </div>
        <button type='submit' onClick={this.handleClick} className="btn btn-primary">Save</button>
        </form>
      </div>
    );
  }
}


export default BadgeForm;