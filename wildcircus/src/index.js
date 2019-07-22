import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link} from 'react-router-dom'
import './index.css';
import App from './App';
import Home from '../src/components/Home'
import Animals from '../src/components/Animals'
import Artists from '../src/components/Artists'
import HomePage from '../src/components/Homepage'
import Ticketing from '../src/components/Ticketing'
import Shows from '../src/components/Shows/Shows'
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';





ReactDOM.render(
    <BrowserRouter>
<App />
<Route exact path="/" component={Home} />
<Route exact path="/Homepage" component={HomePage} />
<Route exact path="/Shows" component={Shows} />


<Route exact path="/Animals" component={Animals} />
<Route exact path="/Artists" component={Artists} />
<Route exact path="/Ticketing" component={Ticketing} />
</BrowserRouter>

, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
