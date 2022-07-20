
import './App.css';
import List from './List';
import data from './data';
import React,{ useState } from 'react';

function App() {
  const[people, setPeople] = useState(data);
  return (
    <main>
      <section className="container">
        <List people = {people}/>
        <h3>{people.length} Birthdays Today</h3>
        
        <button className="btn" onClick={()=>setPeople([])}>
          Clear all
        </button>
      </section>
    </main>
  );
}

export default App;
