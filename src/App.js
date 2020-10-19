import React from 'react';
import Pets from './components/Pets'
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <nav className="navbar navbar-light bg-light">
          <span className="navbar-brand mb-0 h1">Pets ReactJS</span>
        </nav>
      </header>
      <main className='container w-100'>
        <h1 className='mb-4 mt-4 text-danger text-uppercase'>Pets Management</h1>
        <div className="row">
          <Pets/>
        </div>
      </main>
    </div>
  );
}

export default App;
