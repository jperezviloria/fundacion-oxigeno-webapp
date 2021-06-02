import React from "react"

import Header from "./components/common/header/HeaderComponent"
import FooterComponent from "./components/common/footer/FooterComponent"

import IndexPage from "./pages/publics/index/IndexPage"
import PaymentPage from "./pages/publics/payment/PaymentPage"
import EventPage from "./pages/publics/events/EventsPage"
import TeamPage from "./pages/publics/team/TeamPage"
import LoginPage from "./pages/publics/login/LoginPage"

import AdminPage from "./pages/privates/admin/AdminPage"


import "./App.css"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  // Redirect,
  // useHistory,
  // useLocation
} from "react-router-dom";

const App = () =>{
  return(
    <Router className ="appStyle">
      <Header/>
      <Switch>
        <Route exact path="/">
          <IndexPage/>
        </Route>
        <Route path="/donar">
          <PaymentPage/>
        </Route>
        <Route path="/equipo">
          <TeamPage/>
        </Route>
        <Route path="/eventos">
          <EventPage/>
        </Route>
        <Route path="/login">
          <LoginPage/>
        </Route>
        <Route path="/admin/secure/dashboard">
          <AdminPage/>
        </Route>
      </Switch>
      <FooterComponent/>
    </Router>
      
      
    
  )
}

export default App;
