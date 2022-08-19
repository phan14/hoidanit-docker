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
import ManagaUsers from './components/Admin/Content/ManagaUsers';
import DashBoard from './components/Admin/Content/DashBoard';



ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Homepage />} />
        <Route path="users" element={<User />} />
      </Route>

      <Route path="/admins" element={<Admin />} >
        <Route index element={<DashBoard />} />
        <Route path="manage-users" element={<ManagaUsers />} />

      </Route>



    </Routes>

  </BrowserRouter>,
  document.getElementById('root')
);


