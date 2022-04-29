import React from 'react';
import Input from './input';

type FormPropsType = {
  title: string;
  children: React.ReactNode;
};

const Form = ({ title, children }: FormPropsType) => {
  return (
    <div>
      <h1>{title}</h1>
      <div className="form_inputs">{children}</div>
    </div>
  );
};

export default Form;
