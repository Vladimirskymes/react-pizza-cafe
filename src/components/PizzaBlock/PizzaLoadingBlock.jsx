import React from 'react'
import ContentLoader from "react-content-loader"

function PizzaLoadingBlock() {
    return (
        <ContentLoader className = "pizza-block"
        speed={2}
        width={280}
        height={460}
        viewBox="0 0 280 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
     
         >
        <circle cx="137" cy="144" r="139" /> 
        <rect x="-1" y="287" rx="0" ry="0" width="280" height="34" /> 
        <rect x="-2" y="325" rx="6" ry="6" width="280" height="84" /> 
        <rect x="0" y="413" rx="0" ry="0" width="98" height="30" /> 
        <rect x="51" y="456" rx="0" ry="0" width="0" height="32" /> 
        <rect x="56" y="453" rx="0" ry="0" width="1" height="1" /> 
        <rect x="147" y="415" rx="0" ry="0" width="125" height="30" />
      </ContentLoader>
    )
}

export default PizzaLoadingBlock
