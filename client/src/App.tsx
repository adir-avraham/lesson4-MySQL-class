import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import Customers from './component/customers'
import Navbar from './component/navbar'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SearchCustomer from './component/searchCustomer';
import Orders from './component/orders';

const App: React.FC = () => {
  return (
    <div>

      <BrowserRouter>
        <Navbar />

        <Switch>
        
          <Route path="/customers" component={Customers} />      
          <Route path="/searchCustomer" component={SearchCustomer} />   
          <Route path="/orders" component={Orders} />   
          <Route path="**" component={Customers} />
        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
