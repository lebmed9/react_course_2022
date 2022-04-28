import React from 'react';
import NameComponent from './NameComponent';
import './App.css';

const App = () => (
  <div className="wrapper">
    <h1>React App</h1>
    <NameComponent fistName="Ivan" lastName="Smirnov" />
    <NameComponent fistName="Alex" lastName="Petrov" />
    <NameComponent fistName="Igor" lastName="Ivanov" />
  </div>
);

export default App;
