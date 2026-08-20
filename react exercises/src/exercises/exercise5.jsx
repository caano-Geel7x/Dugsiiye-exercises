import { useState } from "react";

const Exercise5 = ()=> {


const [user, setUser] = useState({ name:"khadar", age:23 , role:"student"});

const updateAge = ()=>{
    setUser({ ...user, age: user.age + 1});
}
 return(
    <>
    <p>Name :{user.name}, Age:{user.age}, Role: {user.role}</p>
    <button onClick={updateAge}>increase age</button>
    </>
 );

}

 export default Exercise5;