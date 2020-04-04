import React from 'react';
import './App.scss';
import Navbar from './components/navbar/navbar.component';
import Homepage from './pages/homepage/homepage.component';

function App() {
  return (
    <div className="App"  data-spy="scroll" data-target=".navbar">
      <Navbar />
      <Homepage />
    </div>
  );
}

export default App;
