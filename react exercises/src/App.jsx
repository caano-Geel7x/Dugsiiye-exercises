// App.jsx
import UserCard from './exercises/exercise1';
import Blog from './exercises/exercise2';
import UserCardEx3 from './exercises/exercise3';
import Exercise4 from './exercises/exercise4';
import Exercise5 from './exercises/exercise5';
import './App.css';

const App = () => {
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
        </>
    );
};

export default App;