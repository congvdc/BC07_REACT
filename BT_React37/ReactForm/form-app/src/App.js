import logo from './logo.svg';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import StudentList from './Form/StudentList';

export default function App() {
  return (
    <BrowserRouter>
            <Routes>
                <Route path='' element={<StudentList />} >
                </Route>
            </Routes>
        </BrowserRouter>
  );
}
