import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { createHistory } from 'history';
import PageUser from './modules/session/PageUser';
import Index from './modules/Index';
import Home from './modules/session/home/Home';
import Settings from './modules/session/settings/Settings';
import TakeTurns from './modules/session/turns/takeTurns/TakeTurns';
import ViewTurns from './modules/session/turns/viewTurns/ViewTurns';
import ChangeTurns from './modules/session/turns/changeTurns/ChangeTurns';
import About from './modules/about/About';
import Contact from './modules/contact/Contact';
import Login from './modules/login/Login';
import Admin from './modules/admin/Admin';
import IndexPage from './modules/indexPage/IndexPage';
import Register from './modules/register/Register';
import PageAdmin from './modules/sessionAdmin/PageAdmin';
import HomeAdm from './modules/sessionAdmin/homeAdm/HomeAdm';
import WorkersApprove from './modules/sessionAdmin/workers/approve/WorkersApprove';
import CreateMarket from './modules/sessionAdmin/market/CreateMarket';

const Page = () => (
    <Router>
        <div>
        <Route exact path="/" component={Index} />
        <Route exact path="/about" component={Index} />
        </div>
    </Router>   
)

ReactDOM.render(<Page /> , document.getElementById('app'));
         