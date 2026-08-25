import React, { useState , useEffect,} from 'react';

const Exercise6 = ()=>{

const[name , setname ] = useState('')
const [greeting , setgreeting] = useState('hello!')

useEffect(() =>{
  if (!name) {
    document.title = 'welcome!';
  } else{
     document.title = `${greeting} , ${name}`;
  }
},[name , greeting]);

return (
    <div>
        <h2>inter your name</h2>
             <input
                 type="text"
                value={name}
               onChange={(e) => setname(e.target.value)}
           />
      <h2>choose a greeting</h2>
           <input 
                type="text"
                value={greeting}
               onChange={(e) => setgreeting(e.target.value)}
   
          />
      </div>
);
};


export default Exercise6;