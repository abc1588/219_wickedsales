import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/maaterialize.min';
import '../assets/css/app.css';
import React from 'react';
import {Route} from 'react-router-dom';
import ProductRoutes from './products';


const App = () => (
    <div>
        <div className="app">
            <h1 className="center">Wicked Sales</h1>
            <Route path="/products" component={ProductRoutes}/>
        </div>
    </div>
);

export default App;
