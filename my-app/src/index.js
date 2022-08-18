import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import User from './components/User/Uses';
import Admin from './components/Admin/Admin';
import Homepage from './components/Home/Homepage';



ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Homepage />} />
        <Route path="users" element={<User />} />
        <Route path="admins" element={<Admin />} />
      </Route>

    </Routes>

  </BrowserRouter>,
  document.getElementById('root')
);


