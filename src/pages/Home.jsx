import React from 'react'
import { Categories, SortPopup, PizzaBlock } from "../components/index"

import {useSelector, useDispatch} from "react-redux"
import {setCategory, setSortBy} from "../Redux/Actions/filters"
import {fetchPizzas} from "../Redux/Actions/pizzas"
import PizzaLoadingBlock from '../components/PizzaBlock/PizzaLoadingBlock'

const categoryNames = ["Мясные", "Вегетарианские", "Гриль", "Острые", "Закрытые"];
const sortItems = [
{name: "популярности", type: "popular", order: "desc"},
 {name: "цене", type: "price", order: "desc"},
{name: "алфавиту", type: "name", order: "asc"} ]
function Home() {


  const dispatch = useDispatch();

  const items  = useSelector(({pizzas}) =>  pizzas.items)
  const isLoaded  = useSelector(({pizzas}) =>  pizzas.isLoaded)
  const {category, sortBy}  = useSelector(({filters}) =>  filters)

  React.useEffect(() => {
    dispatch(fetchPizzas(sortBy, category))
  }, [sortBy, category]);

  const onSelectCategory = React.useCallback((i) => {
    dispatch(setCategory(i))
  }, [])
  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type))
  }, [])

    return (
        <div className="container">
        <div className="content__top">
          <Categories activeCategory={category} onClickCategory = {onSelectCategory} 
          items = {categoryNames}></Categories>
          <SortPopup onClickSortType={onSelectSortType} activeSortType = {sortBy.type} items = {sortItems}></SortPopup>
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          
         {
           isLoaded ? items.map((obj) => <PizzaBlock isLoading={true} key={obj.id} {...obj} />) 
           :Array(10).fill(0).map((_, index) => <PizzaLoadingBlock key={index}/>)
           }

        </div>
      </div>
    )
}

export default Home
