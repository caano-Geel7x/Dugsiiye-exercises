import { useState } from "react";

const LogInForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setisLoggedIn] = useState(false);

const handleLogin = (event)=> {
    event.preventDefault();
    if(username && password){
        setisLoggedIn(true)
    }
};
const handleLogout = ()=> {
    setPassword('');
    setUsername('');
    setisLoggedIn(false)
};
 
if(isLoggedIn){
    return(
        <div>
        <h2>welcome,{username}!</h2>
        <button onClick={handleLogout}>logout</button>
        </div>
    );
}
        


  return (
    <form onSubmit={handleLogin}>
      <h2>login</h2>
      <div>
        <label>
          username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          passaword:
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </div>
            <button type="submit" >login</button>
   </form>
  );
};

export default LogInForm;
