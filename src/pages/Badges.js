import React from 'react';
import Navbar from '../components/Navbar';
import {Link} from  'react-router-dom';
import './styles/Badges.css';
import confLogo from '../images/badge-header.svg';
import BadgesList from '../components/BadgesList';
import api from '../api';

class Badges extends React.Component {

 state = {
   loading: true,
   error: null,
   data: undefined
 }

  //constructor recibe props
  /* */
  /*constructor(props) {
    super(props);
    console.log('1. constructor()');

     this.state = { 
       data: []
    
  };
  }

  componentDidMount() {
    console.log('3. componentDidMount()');
    this.timeoutId = setTimeout(()=>{
      this.setState({

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
      })
    },3000);

    //Y si existe ese id y ese trabajo esta pendiente lo cancela (el Timeout no va a ocurrir)

    

  }

  componentDidUpdate(prevProps, prevState) {

    console.log('5. componentDidUpdate()');
    //valores anteriores
    console.log({
      prevProps: prevProps, prevState: prevState
    });
    //valores actuales
    console.log({
      props: this.props,
      state: this.state
    });

  }

  componentWillUnmount() {
    //Ayuda a evitar la perdida de memoria
    console.log('6. compunentWillUnmount');
    clearTimeout(this.timeoutId);
  }*/

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    this.setState({loading: true, error: null});

    try {
      // esperar la respuesta con await
      // para poder usar await hay que declarar la funcion como async
      const data = await api.badges.list(); //Esta llamada es asincrona regresa una promesa
      // si hay un error se guarda en el catch
      this.setState({ loading: false, data: data});
    } catch (error) {
      this.setState({loading: false, error: error })
    }
  };

  render() {
    if (this.state.loading == true) {
      return 'Loading...';
    }

    if (this.state.error) {
      return `Error ${this.state.error.message}`;
    }
    console.log('2/3. Render')
     return (
       <React.Fragment>
         {/*<Navbar/>*/}
         <div className='Badges'>
         <div className="Badges__hero">
           <div className="Badges__container">
           <img className='Badges_conf-logo' src={confLogo} alt="Conf Logo"/>
           </div>
         </div>
         </div>
         <div className='Badge__container'>
           <div className=" col-8 Badges__buttons ">
             <Link to="/badges/new" className='btn btn-primary'>New Badge</Link>
           </div>  
         {/* Listar cada uno de los datos en un solo componente*/}
           <div className='Badges__list'>
             <div className="Badges__container">
             <BadgesList badges={this.state.data}/>
             </div>
         </div>
       </div>
       </React.Fragment>
     ); 
  }
}


export default Badges;