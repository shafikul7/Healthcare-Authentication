import React from "react";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import './App.css';
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import Register from "./components/Register/Register";
import ServiceDetails from "./components/ServiceDetails/ServiceDetails";
import Services from "./components/Services/Services";
import Team from "./components/Team/Team";
import AuthProvider from "./Context/AuthProvider";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

function App() {
  
  
  return (
    <div className="App">
       <AuthProvider >
       <Router>
         <Header/>
      <Switch>
          <Route exact path="/about">
           <About/>
          </Route>
          <Route exact path="/services">
           <Services/>
          </Route>
          <PrivateRoute exact path="/servicedetails/:serviceId">
           <ServiceDetails/>
          </PrivateRoute>
          <Route exact path="/team">
           <Team/>
          </Route>
          <Route exact path="/contacts">
           <Contact/>
          </Route>
          <Route exact path="/home">
          <Home/>
          </Route>
          <Route exact path="/login">
          <Login/>
          </Route>
          <Route exact path="/register">
          <Register/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="*">
           <NotFound/>
          </Route>
        </Switch>
       <Footer/>
    </Router>
    </AuthProvider>
    </div>
  );
}

export default App;
