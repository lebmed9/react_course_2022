import React, { useEffect, useState } from 'react';
import Button from '../../common/Button';
import Input from '../../common/Form/Input';
import Form from '../../common/Form';
import PageWrapper from '../../common/PageWrapper';

const RegistrationPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorPassword2, setErrorPassword2] = useState(false);
  const [viewPassword, setViewPassword] = useState(true);

  const submitHandler = () => {
    if (password !== repeatPassword && password.length < 10 && password.length > 0) {
      setErrorPassword(true);
      setErrorPassword2(true);
    } else {
      console.log(name, email, password, repeatPassword);
    }
  };

  const changeType = () => {
    setViewPassword((prev) => !prev);
  };

  useEffect(() => {
    if (password !== repeatPassword) {
      setErrorPassword(true);
    } else {
      setErrorPassword(false);
    }
  });

  useEffect(() => {
    if (password.length < 10 && password.length > 0) {
      setErrorPassword2(true);
    } else {
      setErrorPassword2(false);
    }
  }, [password]);

  return (
    <PageWrapper>
      <Form title="Регистрация">
        <Input title="Name" id="name" placeholder="Введите имя" value={name} setValue={setName} />
        <Input
          title="Email"
          id="email"
          placeholder="Введите почту"
          value={email}
          setValue={setEmail}
          type="text"
        />
        <Input
          title="Password"
          id="password"
          placeholder="Введите пароль"
          value={password}
          setValue={setPassword}
          type={viewPassword ? 'password' : 'text'}
        />
        <Input
          title="Repeat Password"
          id="repeatPassword"
          placeholder="Повторите пароль"
          value={repeatPassword}
          setValue={setRepeatPassword}
          type={viewPassword ? 'password' : 'text'}
        />
        {errorPassword && (
          <div>
            <span>Пароли не совпадают</span>
          </div>
        )}
        {errorPassword2 && (
          <div>
            <span>Пароль должен быть больше 10 символов</span>
          </div>
        )}

        <Button title={viewPassword ? 'Показать пароль' : 'Скрыть пароль'} onClick={changeType} />

        <Button title="Регистрация" onClick={submitHandler} />
      </Form>
    </PageWrapper>
  );
};

export default RegistrationPage;
