import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlassState from './GlassState/GlassState';
import Header from './ComponentWithCss/Header';
import Body from './ComponentWithCss/Body';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Header />
    <Body/>
  </>
);