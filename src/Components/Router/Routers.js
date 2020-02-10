import React from 'react'; 
import {Route, BrowserRouter as Router} from 'react-router-dom';
import LandingPage from '../Pages/LandingPage';
import Register from '../Pages/Register';
import Login from '../Pages/Login'

const Routers = () => {
    return (
        <Router>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
        </Router> 
    )
}

export default Routers