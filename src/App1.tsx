import React, { useState } from 'react';
import './App.css';
import Main from './Main';
import { BrowserRouter , Routes, Route } from "react-router-dom";

function App1() {
    const [user] = useState("");
  return(
     <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Main /> }/>
      </Routes>
    </BrowserRouter>
  )
}
export default App1;