import './App.css';
import { Header } from "./components/index"
import {Home, Cart} from "./pages"
import {Route} from "react-router-dom"
import React from "react"




function App (){

  return (
    <div className="wrapper">
    <Header/>
    <div className="content">
      <Route path="/" component={Home} exact/>
      <Route path="/cart" component={Cart} exact/>
      
    </div>
  </div>
  );
}

export default App;
