// App.jsx
import UserCard from './exercises/exercise1';
import Blog from './exercises/exercise2';
import UserCardEx3 from './exercises/exercise3';
import Exercise4 from './exercises/exercise4';
import Exercise5 from './exercises/exercise5';
import './App.css';
import Exercise6 from './exercises/exercise6';
import Exercise7 from './exercises/exercise7';
import Exercise8 from './exercises/exercise8';
import  GitHubUserSearch from './exercises/exercise9';
import UserList from './exercises/exercise10';
import LogInForm from './exercises/exercise11';

const App = () => {
     const users = [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' },];

    return (
        <>
            <div className="exercise-block">
                <h3 className="exercise-label">Exercise 1</h3>
                <UserCard />
            </div>

            <div className="exercise-block">
                <h3 className="exercise-label">Exercise 2</h3>
                <Blog />
            </div>

            <div className="exercise-block">
                <h3 className="exercise-label">Exercise 3</h3>
                <UserCardEx3 name="khadar" email="khadar.ahmed@gmail.com"/>
                <UserCardEx3 name="caanoGeel" email="caanogeel@gmail.com"/>
                <UserCardEx3 name="khalif" email="khalif@gmail.com"/>
            </div>

            <div className="exercise-block">
                <h3 className="exercise-label">Exercise 4</h3>
                <Exercise4 />
            </div>
            <div className="exercise-block">
                <h3 className="exercise-label">Exercise 5</h3>
                <Exercise5 />
            </div>
            <div className="exercise-block">
                <h3 className="exercise-label">Exercise 6</h3>
                 <Exercise6 />
            </div>
            <div className="exercise-block">
                <h3 className="exercise-label">Exercise 7</h3>
                 <Exercise7/>
            </div>
            <div className="exercise-block">
                <h3 className="exercise-label">Exercise 8</h3>
                 <Exercise8/>
            </div>
            <div className="exercise-block">
                <h3 className="exercise-label">Exercise 9</h3>
                 < GitHubUserSearch/>
            </div>
            <div className="exercise-block">
                <h3 className="exercise-label">Exercise 10</h3>
                <UserList users={users} />
            </div>
            <div className="exercise-block">
                <h3 className="exercise-label">Exercise 11</h3>
               < LogInForm  />
            </div>
        </>
    );
};

export default App;