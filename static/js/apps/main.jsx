import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router, Route, IndexRoute, useRouterHistory } from 'react-router';
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
import ViewMarket from './modules/sessionAdmin/market/ViewMarket';
import WorkersView from './modules/sessionAdmin/workers/WorkersView';
import ViewAllTurns from './modules/session/turns/viewAllTurns';

const history = useRouterHistory(createHistory)({
  basename: '/base-path'
});

ReactDOM.render(
    <Router history={ browserHistory }>
        <Route path="/" component={ Index }>
            <Route path="/home" component={ IndexPage } />
            <Route path="/login" component={ Login } />
            <Route path="/contact" component={ Contact } />
            <Route path="/about" component={ About } />
            <Route path="/admin/login" component={ Admin } />
            <Route path="/register" component={ Register } />
        </Route>
        <Route path="/worker" component={ PageUser } >
            <Route path="/worker/home" component={ Home } />
            <Route path="/worker/turns/take" component={ TakeTurns } />
            <Route path="/worker/turns/view" component={ ViewTurns } />
            <Route path="/worker/turns/viewAll" component={ ViewAllTurns } />
            <Route path="/worker/turns/change" component={ ChangeTurns } />
            <Route path="/worker/settings" component={ Settings } />
            <Route path="/exit" />
        </Route>
        <Route path="/admin" component={ PageAdmin }>
            <Route path="/admin/home" component={ HomeAdm } />
            <Route path="/admin/worker/approve" component={ WorkersApprove } />
            <Route path="/admin/worker/view" component={ WorkersView } />
            <Route path="/admin/market/create" component={ CreateMarket } />
            <Route path="/admin/view/supermarket" component={ ViewMarket} />
            <Route path="/admin/worker/viewAllTurns" component={ ViewAllTurns } />
        </Route>
    </Router>,
    document.getElementById('app')
);
