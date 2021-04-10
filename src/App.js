import './App.css';
import { Header, } from "./components/index"
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

// const mapDistapchToProps = (dispatch) => {
//   return {
//     setPizzas: (items) => dispatch(setPizzasAction(items)),
//     dispatch
//   }
// }
// const mapStateToProps = (state) =>{
//   return {
//     items: state.pizzas.items
//   }
// }

// export default connect(mapStateToProps, mapDistapchToProps)(App);
