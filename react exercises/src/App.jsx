// App.jsx
import UserCard from "./exercises/exercise1";
import Blog from "./exercises/exercise2";
import UserCardEx3 from "./exercises/exercise3";
import Exercise4 from "./exercises/exercise4";
import Exercise5 from "./exercises/exercise5";
import "./App.css";
import Exercise6 from "./exercises/exercise6";
import Exercise7 from "./exercises/exercise7";
import Exercise8 from "./exercises/exercise8";
import GitHubUserSearch from "./exercises/exercise9";
import UserList from "./exercises/exercise10";
import LogInForm from "./exercises/exercise11";
import Counter from "./exercises/exercise12";
import DoubleCounter from "./exercises/exercise13";
import MultiStepForm from "./exercises/exercise14";
import React, { useState } from "react";
import Greeting from "./exercises/exercise15";
import LanguageContext from "./exercises/languagecontext";
import Exercise16 from "./exercises/exercise16";
import  ContactForm from "./exercises/exercise17";
import ContactApp from "./exercises/exercise18";
import Apps from "./exercises/exercise19";
import  StudentDashboard from './exercises/exercise21' 
import Hooks from "./exercises/practice";
import  Formcantrolled from './exercises/exercise22'

function App() {
  const [language, setLanguage] = useState("en");
  const togglelanguage = () => {
    setLanguage((prevLang) => (prevLang === "en" ? "es" : "en"));
  };

  const users = [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" },
  ];

  return (
    <LanguageContext.Provider value={language}>
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
        <UserCardEx3 name="khadar" email="khadar.ahmed@gmail.com" />
        <UserCardEx3 name="caanoGeel" email="caanogeel@gmail.com" />
        <UserCardEx3 name="khalif" email="khalif@gmail.com" />
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
        <Exercise7 />
      </div>
      <div className="exercise-block">
        <h3 className="exercise-label">Exercise 8</h3>
        <Exercise8 />
      </div>
      <div className="exercise-block">
        <h3 className="exercise-label">Exercise 9</h3>
        <GitHubUserSearch />
      </div>
      <div className="exercise-block">
        <h3 className="exercise-label">Exercise 10</h3>
        <UserList users={users} />
      </div>
      <div className="exercise-block">
        <h3 className="exercise-label">Exercise 11</h3>
        <LogInForm />
      </div>
      <div className="exercise-block">
        <h3 className="exercise-label">Exercise 12</h3>
        <Counter />
      </div>
      <div className="exercise-block">
        <h3 className="exercise-label">Exercise 13</h3>
        <DoubleCounter />
      </div>
      <div className="exercise-block">
        <h3 className="exercise-label">Exercise 14</h3>
        <MultiStepForm />
      </div>
      <div className="exercise-block">
        <h3 className="exercise-label">Exercise 15</h3>
        <button onClick={togglelanguage}>
          Switch to {language === "en" ? "Spanish" : "English"}
        </button>
        <Greeting />
      </div>
      <div className="exercise-block">
        <h3 className="exercise-label">Exercise 16</h3>
        <Exercise16 />
      </div>
      <div className="exercise-block">
        <h3 className="exercise-label">Exercise 17</h3>
        <ContactForm />
      </div>
      <div className="exercise-block">
        <h3 className="exercise-label">Exercise 18</h3>
        <ContactApp />
      </div>
      <Apps />
      <div className="exercise-block">
        <h3 className="exercise-label">Exercise 21</h3>
        <StudentDashboard />
      </div>
      <div className="exercise-block">
        <h3 className="exercise-label">exercise 22</h3>
        <Formcantrolled />
      </div>
      <div className="exercise-block">
        <h3 className="exercise-label">PRACTICE</h3>
        <Hooks />
      </div>
      

    </LanguageContext.Provider>
  );
}

export default App;
