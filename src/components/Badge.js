import React from 'react'; // Para usar JSX
import confLogo from '../images/badge-header.svg'

//Los componentes son clases (o funciones)

class Badge extends React.Component {
   render() {
       return(
           <div>
             <img src={confLogo} alt='Logo de la conferencia'/>
             <div>
               <img src="https://www.gravatar.com/avatar?d=identicon" alt="Avatar"/>
               <h1>
                 David <br/> Gatica
               </h1>
             </div>
             <div>
               <p>Frontend Engineer</p>
               <p>@dvdgatik</p>
             </div>
             <div>
               #novaconf
             </div>
           </div>
         )
   }
}

export default Badge;