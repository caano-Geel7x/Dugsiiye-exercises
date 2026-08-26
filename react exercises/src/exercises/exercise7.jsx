import react , { useState, useEffect } from "react";


const Exercise7 = () => {
    const [coors, setcoords] = useState ({x:0 , y:0});

    useEffect(() => {
        const handleMouseMove = (e) => {

             setcoords({ x: e.clientX,  y: e.clientY});
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        };

    },[]);

    return(
        <div>
               <p> mouse x: {coors.x} </p>
               <p> mouse y: {coors.y}</p>
        </div>
    );


};

export default Exercise7;