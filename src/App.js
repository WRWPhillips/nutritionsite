import React from 'react';
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import SelectedFood from './components/SelectedFood';

function App() {
  return (
    <div className="App">
      <Header/>
      <SearchBar />
      <SelectedFood />
    </div>
  );
}

export default App;
