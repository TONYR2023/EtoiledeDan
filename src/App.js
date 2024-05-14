
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from "react-router-dom";
import "./App.css"


function App() {
  // création de l'état de isLoggedIn
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="App">
      <Header isLoggedIn={isLoggedIn}/>
      <main>
        {/* outlet indique l'endroit où vont s'afficher les composants définis dans les routes enfants */}
        <Outlet context={[isLoggedIn, setIsLoggedIn]} />
  
        <br />
      </main>
      <Footer />
    </div>
  
  );
}

export default App;
