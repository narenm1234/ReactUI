import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from './components/Login'
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Router>
   <Routes>
     <Route exact path="/"  element={<Login/>}></Route>
     <Route path="/home" element={<App/>}></Route>
   </Routes>
 </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//Default route 
//later based required we will be routing different comp
//swith Case 
//Basic things to understand
//Class components


//functional components

//add state hooks 

//Props
//States
