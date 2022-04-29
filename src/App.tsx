import React from 'react';
import './App.css';
import NameComponent from './NameComponent';
import Counter from './Counter';
import Form from './Form';
import Input from './input';

const App = () => (
  <div className="wrapper">
    <h1>React App</h1>
    <NameComponent fistName="Ivan" lastName="Smirnov" />
    <Counter title="watermelon" />
    <Counter title="pineapple" />
    <Form title="Auth">
      <Input />
    </Form>
    <Form title="Reg">
      <Input />
      <Input />
    </Form>
    <img src="/image/logo192.png" alt="test" />
  </div>
);

export default App;
