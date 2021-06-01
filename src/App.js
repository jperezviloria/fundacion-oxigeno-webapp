import React from "react"

import Header from "./components/common/header/HeaderComponent"
import FooterComponent from "./components/common/footer/FooterComponent"

import IndexPage from "./pages/index/IndexPage"
import PaymentPage from "./pages/payment/PaymentPage"
import EventPage from "./pages/events/EventsPage"
import TeamPage from "./pages/team/TeamPage"
import LoginPage from "./pages/login/LoginPage"

import "./App.css"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
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
      </Switch>
      <FooterComponent/>
    </Router>
      
      
    
  )
}

export default App;
