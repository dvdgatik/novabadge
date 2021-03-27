import React from 'react';


class BadgeForm extends React.Component {
  state = {
  };
  handleChange = (e) =>  {
    /*console.log({
      name:  e.target.name,
      value: e.target.value,
      class: e.target.className
    });*/

    this.setState({
      //firstName: e.target.value
       [e.target.name]: e.target.value
    });

  }

  handleClick = (e) => {
    console.log('Button was clicked');
  }

  handleSubmit = (e) => {
    //Hacer que un formulario no se envie 
    e.preventDefault();
    console.log('Form was submited');
    console.log(this.state);
  }


 
  render() {
    return(
      <div>
        <h1>New Attendant</h1>
        <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input 
          onChange={this.handleChange} 
          className='form-control' 
          type='text' 
          name='firstName' 
          id='firstName'
          value={this.state.firstName}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input 
          onChange={this.handleChange} 
          className='form-control' 
          type='text' name='lastName' 
          id='lastName'
          value={this.state.lastName}
          />
        </div>
         <div className="form-group">
          <label htmlFor="email">E mail</label>
          <input 
          onChange={this.handleChange} 
          className='form-control' 
          type='email' 
          name='email' 
          id='email'
          value={this.state.email}
          />
        </div>
         <div className="form-group">
          <label htmlFor="jobTitle">Job Title</label>
          <input 
          onChange={this.handleChange} 
          className='form-control' 
          type='text' 
          name='jobTitle' 
          id='jobTitle'
          value={this.state.jobTitle}
          />
        </div>
        <div className="form-group">
          <label htmlFor="twitter">Twitter</label>
          <input onChange={this.handleChange}
           className='form-control'
           type='text'
           name='twitter'
           id='twitter'
           value={this.state.twitter}
           />
        </div>
       
        <button type='submit' onClick={this.handleClick} className="btn btn-primary">Save</button>
        </form>

      </div>
    );
  }
}


export default BadgeForm;