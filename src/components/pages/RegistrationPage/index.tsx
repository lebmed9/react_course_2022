import React from 'react';
import Button from '../../common/Button';
import Form from '../../common/Form';
import Input from '../../common/Form/Input';
import PageWrapper from '../../common/PageWrapper';

const RegistrationPage = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [repeatPassword, setRepeadPassword] = React.useState('');

  const submitHandler = () => {
    console.log(name, email, password, repeatPassword);

    if (password !== repeatPassword) {
      alert('пароли не совпадают');
    }
  };

  return (
    <PageWrapper>
      <Form title="Регистрация">
        <Input
          title="Name"
          id="name"
          placeholder="Введите имя"
          value={name}
          setValue={setName}
          type="text"
        />
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
        <Input
          title="Repeat Password"
          id="repeatPassword"
          placeholder="Повторите пароль"
          value={repeatPassword}
          setValue={setRepeadPassword}
          type="password"
        />
        <Button title="Регистрация" onClick={submitHandler} />
      </Form>
    </PageWrapper>
  );
};

export default RegistrationPage;
