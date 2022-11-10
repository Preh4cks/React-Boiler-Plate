import React, { useState,  useEffect } from 'react';
import './App.css';
import Axios from 'axios';

function App() {
  const [users, setUser] = useState('');

  useEffect(() => {
    Axios.get('http://localhost:8888/').then((response) => {
      console.log(response);
    });
  })

  return null;
}

export default App;
