import React from 'react'



const Categories = React.memo(function Categories({items, onClickItem}) {
    const [activeItem, setActiveItem] = React.useState(null);
    function selectItem(index){
        setActiveItem(index);
        onClickItem(index);
    }
    return (
        
        <div className="categories">
            <ul>
              <li className= {activeItem === null ? "active" : " "}
              onClick = {() => selectItem(null)}>Все</li>
                { items && items.map((i, index)=> (<li className = {activeItem === index ? "active" : ""}
                 onClick={()=> selectItem(index)} key={`${i}__${index}`}>{i}</li>))}
            </ul>
        </div>
        
    );
})
export default Categories;
