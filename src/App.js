import './App.css';
import { Header, } from "./components/index"
import {Home, Cart} from "./pages"
import {Route} from "react-router-dom"
import React from "react"
import store from "./Redux/store"
import axios from "axios"
import {connect} from "react-redux"
import {setPizzas as setPizzasAction} from "./Redux/Actions/pizzas"

// function App() {
  
//   React.useEffect(() => {
//     axios.get("http://localhost:3000/bd.json").then(({data}) => {
//       setPizzas(data.pizzas);
//     })
   
//   }, [])
//   console.log(pizzas)
  
//   return (
//     <div className="wrapper">
//     <Header/>
//     <div className="content">
//       <Route path="/" render={() => <Home items={pizzas}/>} exact/>
//       <Route path="/cart" component={Cart} exact/>
      
//     </div>
//   </div>
//   );
// }
class App extends React.Component{


  componentDidMount(){

    axios.get("http://localhost:3000/bd.json").then(({data}) => {
       this.props.setPizzas(data.pizzas);
       
          })
        }
  render()
  {
    return (
      <div className="wrapper">
      <Header/>
      <div className="content">
        <Route path="/" render={() => <Home items={this.props.items}/>} exact/>
        <Route path="/cart" component={Cart} exact/>
        
      </div>
    </div>
    );
    }
  
  
    
    
}

const mapDistapchToProps = (dispatch) => {
  return {
    setPizzas: (items) => dispatch(setPizzasAction(items)),
    dispatch
  }
}
const mapStateToProps = (state) =>{
  return {
    items: state.pizzas.items
  }
}

export default connect(mapStateToProps, mapDistapchToProps)(App);
