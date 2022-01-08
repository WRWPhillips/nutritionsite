import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Header from './Components/Header';
import SearchBar from './Components/SearchBar';
import { useState, useEffect } from 'react';
import mockData from './MockData/MockData';




function App() {

  const [searchTerm, setSearchTerm] = useState('bacon');
  const [searchSuggestions, setSearchSuggestions] = useState({});
  const [searchResults, setSearchResults] = useState(mockData);
    
  
  function Search(query) {
    useEffect(() => {
    axios.get(`https://api.nal.usda.gov/fdc/v1/foods/search?api_key=aObVYTuPvgoWi2bJmjYgOTjGsxbQqLKAIrl7uar5&query=${query}`
    ).then(resp => {
      setSearchResults(resp.data.foods);
    }).catch(err => console.error(err)
    )
  }, [])
}

  return (
    <div className="App">
      <Header />
      <SearchBar 
      queryWord={searchTerm}
      searchFunction={Search}
      />
    </div>
  );
}

export default App;
