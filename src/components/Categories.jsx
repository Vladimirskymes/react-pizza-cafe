import React from 'react'

// export default class Categories extends React.Component{

//     state = {
//         index: 3
//     }
    
//     changeClass = (i) =>{
//         this.setState({
//             index: i
//         })
//         console.log(this.state)
//     }
//     render()
//     {
//     const {items, onClick} = this.props;

//     return (
        
//         <div className="categories">
//             <ul>
//               {items.map((i, index)=> (<li className = {index === this.state.index ? "active" : ""}
//                onClick={()=> this.changeClass(index)} key={`${i}__${index}`}>{i}</li>))}
//             </ul>
//         </div>
        
//     );
// }

export default function Categories({items, onClick}) {
    const state = React.useState(null);
    function selectItem(i){
        state[1](i)
    }
    return (
        
        <div className="categories">
            <ul>
              <li className= {state[0] === null ? "active" : " "}>Все</li>
                { items && items.map((i, index)=> (<li className = {index === state[0] ? "active" : ""}
                 onClick={()=> selectItem(index)} key={`${i}__${index}`}>{i}</li>))}
            </ul>
        </div>
        
    );
}
