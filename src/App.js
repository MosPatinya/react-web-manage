import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DashBoard from './components/Dashboard';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import { AuthProvider } from './components/Auth';
// import { Form, Button, Col, Container } from 'react-bootstrap';
import Show from './Show';
import Edit from './Edit';
import Create_List from './List_user';
import Home from './Navbar/Home'
import User from './Navbar/User';
import Create from './Create';
import Place from './Navbar/Place';
import ShowPlace from './ShowPlace';
import Graf from './Navbar/graf';
import EditPlace from './EditPlace';
import ShowPlaceCheck from './ShowPlaceCheck';
import Add from './add';
import Addplace from './addPlace';
function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={LogIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/dashboard" component={DashBoard} />
          <Route path='/show/:id' component={Show} />
          <Route path='/showplace/:id' component={ShowPlace}/>
          <Route path='/showplacecheck/:id' component={ShowPlaceCheck}/>
          <Route path='/edit/:id' component={Edit} />
          <Route path='/editPlace/:id' component={EditPlace} />
          <Route path='/create_List' component={Create_List} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/user' component={User} />
          <Route exact path='/creat' component={Create}/>
          <Route exact path='/add' component={Add}/>
          <Route exact path='/addplace' component={Addplace}/>
          <Route exact path='/place' component={Place}/>
          <Route exact path='/graf' component={Graf}/>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;