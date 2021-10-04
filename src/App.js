
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Home from './Components/home/Home';
import Contact from './Components/contact/Contact';
import Header from './Components/header/Header';
import Footer from './Components/footer/Footer';
import About from './Components/aboutUs/About';


import { createContext, useEffect, useState } from 'react';
import Services from './servieces/Services';
export const userContext = createContext();
function App() {
  const [services,setServices]=useState([]);
  useEffect(()=>{
    fetch('/service.json')
    .then(res =>res.json())
    .then(data=>setServices(data))
  },[])
  return (
    <div className="">
      <userContext.Provider value ={{services}}>
      <Router>
      <Header/>
      
      <Switch>

        <Route exact path = "/">
          <Home></Home>
        </Route>
        <Route exact path = "/home">
          <Home></Home>
        </Route>
        <Route exact path = "/contact">
          <Contact></Contact>
        </Route>
        <Route exact path = "/services">
          <Services></Services>
        </Route>
        <Route exact path = "/about">
          <About></About>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
      </userContext.Provider>
    
      
    </div>
  );
}

export default App;
