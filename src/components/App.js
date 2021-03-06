import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Badges from '../pages/Badges';
import Layout from './Layout';
import BadgesNew from '../pages/BadgeNew';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
function App() {
  return (
    <BrowserRouter>
    	<Layout>
      <Switch>
         <Route exact path='/badges' component={Badges}/>
         <Route exact path='/badges/new' component={BadgesNew}/>
         <Route exact path='/' component={Home}/>
         <Route  component={NotFound}/>
       </Switch> 
       </Layout>
    </BrowserRouter>
    ) 

}

export default App;