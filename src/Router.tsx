import React, { useState } from 'react';
import './App.css';
import App from './App';
import Main from './Main';
import { BrowserRouter , Routes, Route } from "react-router-dom";

function Router() {
    const [user] = useState("");
  return(
     <BrowserRouter>
      <Routes>
        <Route path="/" element={ <App /> }/>
        <Route path="/main" element={ <Main /> }/>
      </Routes>
    </BrowserRouter>
  )
}
export default Router;