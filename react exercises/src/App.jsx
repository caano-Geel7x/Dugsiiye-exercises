
// App.jsx
import UserCard from './exercises/exercise1';
import Blog from './exercises/exercise2';
import  UserCardEx3 from './exercises/exercise3';

const App = () => {
  return (
    <div>
      <UserCardEx3  name="khadar" email = "khadar.ahmed@gmail.com"/>
      <UserCardEx3  name="caanoGeel" email = "caanogeel@.gmail.com"/>
      <UserCardEx3  name="khalif" email = "khalif@.gmail.com"/>
      <Blog />
    </div>
  );
};

export default App;

