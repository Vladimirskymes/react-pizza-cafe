import React from 'react'
import { Categories, SortPopup, PizzaBlock } from "../components/index"
import {useSelector, useDispatch} from "react-redux"
import {setCategory} from "../Redux/Actions/filters"

const categoryNames = ["Мясные", "Вегетарианские", "Гриль", "Острые", "Закрытые"];
const sortItems = [{name: "популярности", type: "popular"}, {name: "цене", type: "price"}, {name: "алфавиту", type: "alphavite"} ]
function Home() {
  const dispatch = useDispatch();
  const {items } = useSelector(({pizzas}) => {
    return{
      items: pizzas.items,
    
    }
  })
  const onSelectCategory = React.useCallback((i) => {
    dispatch(setCategory(i))
  }, [])
    return (
        <div className="container">
        <div className="content__top">
          <Categories onClickItem = {onSelectCategory} 
          items = {categoryNames}></Categories>
          <SortPopup items = {sortItems}></SortPopup>
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          
         {
           items && items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)
           }
        </div>
      </div>
    )
}

export default Home
