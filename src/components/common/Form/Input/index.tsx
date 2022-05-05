import React, { ChangeEvent } from 'react';
import style from './Input.module.scss';

type InputPropsType = {
  title: string;
  id: string;
  placeholder: string;
  type?: 'text' | 'password';
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

// eslint-disable-next-line object-curly-newline
const Input = ({ title, id, placeholder, value, setValue, type }: InputPropsType) => {
  const handler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <label className={style.wrapper} htmlFor={id}>
      <span>{title}</span>
      <input id={id} placeholder={placeholder} value={value} onChange={handler} type={type} />
    </label>
  );
};

export default Input;
