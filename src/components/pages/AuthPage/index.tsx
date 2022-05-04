import React, { useState } from 'react';
import Button from '../../common/Button';
import Form from '../../common/Form';
import Input from '../../common/Form/Input';
import PageWrapper from '../../common/PageWrapper';

const AuthPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const submitHeandler = () => {
    console.log({ email, password });
  };

  return (
    <PageWrapper>
      <Form title="Авторизация">
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
          type="password"
        />
        <Button title="Войти" onClick={submitHeandler} />
      </Form>
    </PageWrapper>
  );
};

export default AuthPage;
