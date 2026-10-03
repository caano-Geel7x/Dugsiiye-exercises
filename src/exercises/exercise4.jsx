import { useState } from "react";




function Exercise4 (){

    const [isVisible , setIsVisible] = useState(true);

 const toggle = ()=>{
    setIsVisible(!isVisible)
 }

    return(
        <>
        <button onClick={toggle}>turn {isVisible ? 'on': 'off' }</button>
         <p>the button is {isVisible ? 'off': 'on' }</p>
        
        </>
    )
}

export default Exercise4;