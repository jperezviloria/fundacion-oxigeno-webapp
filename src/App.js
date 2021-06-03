import React from "react"

import LogoutPage from "./pages/privates/logout/LogoutPage"


import HeaderPublic from "./components/common/header/publics/HeaderComponent"
import HeaderPrivateSuperUser from "./components/common/header/privates/superuser/HeaderComponent"
import HeaderPrivateUser from "./components/common/header/privates/user/HeaderComponent"
import HeaderFilter from "./components/common/header/filter/HeaderFilter"
import FooterComponent from "./components/common/footer/FooterComponent"

import PrivatesRoutes from "./service/PrivatesRoutes"
import PublicRoutes from "./service/PublicRoutes"


import IndexPage from "./pages/publics/index/IndexPage"
import PaymentPage from "./pages/publics/payment/PaymentPage"
import EventPage from "./pages/publics/events/EventsPage"
import TeamPage from "./pages/publics/team/TeamPage"
import LoginPage from "./pages/publics/login/LoginPage"

import AdminPage from "./pages/privates/admin/AdminPage"


import UserAuthContext from "./context/userAuth/UserAuthContext"
import UserAuthState from "./context/userAuth/UserAuthState"


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
      <UserAuthState>
      {/* <HeaderPrivateSuperUser/> */}
      {/* <HeaderPublic/> */}
      <HeaderFilter/>
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
        <Route path="/logout">
          <LogoutPage/>
        </Route>
        <Route path="/admin/secure/dashboar">
          <AdminPage/>
        </Route>
        <PrivatesRoutes exact path ="/admin/secure/dashboard" component={AdminPage} />
      </Switch>
      <FooterComponent/>
      </UserAuthState>
    </Router>
      
      
    
  )
}

export default App;
