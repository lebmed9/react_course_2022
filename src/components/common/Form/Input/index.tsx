import React, { ChangeEvent, SyntheticEvent } from 'react';
import style from './Input.module.scss';

type InputPropsType = {
  title: string;
  id: string;
  placeholder: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  type: 'text' | 'password';
};

const Input = ({ title, id, placeholder, value, setValue, type }: InputPropsType) => {
  const handler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);

    // setValue();
  };

  return (
    <label className={style.wrapper} htmlFor={id}>
      <span>{title}</span>
      <input id={id} placeholder={placeholder} value={value} onChange={handler} type={type} />
    </label>
  );
};
export default Input;
