const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0
   }
   const getTotalPrice = (arr) => {
    return arr.reduce((sum, arr)=>arr.price+sum, 0)
   }
   const updateState = (itemsObj) => {
    const items = Object.values(itemsObj).map((obj)=> obj.items)
    const allPizzas = Object.values(items).flat();
    const totalPrice = getTotalPrice(allPizzas)
    return {
      allPizzas,
      totalPrice
    }

   }
   const cart = (state = initialState, action) => {
       switch (action.type){
        case 'ADD_PIZZA_CART': {
            const currentPizzaItems = !state.items[action.payload.id]
              ? [action.payload]
              : [...state.items[action.payload.id].items, action.payload];
      
            const newItems = {
              ...state.items,
              [action.payload.id]: {
                items: currentPizzaItems,
                totalPrice: getTotalPrice(currentPizzaItems),
              },
            };
            const {allPizzas, totalPrice} = updateState(newItems)
               return {
                ...state,
                items: newItems,
                totalPrice: totalPrice,
                totalCount: allPizzas.length
              };
            }
        case "CLEAR_CART":{
            return initialState
        }
        case "REMOVE_CART_ITEM":{
          const newItems = {
            ...state.items
          }
          delete newItems[action.payload]
          const {allPizzas, totalPrice} = updateState(newItems)
          return {
            ...state,
            items: newItems,
            totalPrice,
            totalCount: allPizzas.length
          }
        }
        case "PLUS_CART_ITEM": {
          
          const newObjectItems = [...state.items[action.payload].items,
          state.items[action.payload].items[0]
        ]
  
        const newItems = { 
            ...state.items,
            [action.payload]: {
            items: newObjectItems,
            totalPrice: getTotalPrice(newObjectItems),
          },
        }
        const {allPizzas, totalPrice} = updateState(newItems)
          return{
            ...state,
            items: newItems,
            totalPrice,
            totalCount: allPizzas.length

          }
        }
        case "MINUS_CART_ITEM": {
          const oldItems = state.items[action.payload].items
          const newObjectItems = oldItems.length>1? [...state.items[action.payload].items].slice(1) : oldItems
          
          const newItems = {
            ...state.items,
            [action.payload]:{
              items: newObjectItems,
              totalPrice: getTotalPrice(newObjectItems)
            }
          }
          const {allPizzas, totalPrice} = updateState(newItems)
          return {
            ...state,
            items: newItems,
            totalPrice,
            totalCount: allPizzas.length
          }
        }
     
      
           default: return state;
       }
   
   
       
   }
   export default cart;