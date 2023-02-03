import styled from 'styled-components';
import { Button } from '../../components/Dashboard/GeneralStyles/Button';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import logo from '../../assets/images/bee-healthy.png';
import Input from '../../components/Forms/Input';
import { Login, Wrapper } from '../../components/Dashboard/GeneralStyles/SignIn&Up';

export default function SignUpScreen() {
  const navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: '',
    confirmation: '',
  });
  function handleChange(e) {
    e.preventDefault();
    setLoginInfo({
      ...loginInfo,
      [e.target.name]: e.target.value,
    });
  }

  function ChangeScreen() {
    navigate('/sign-in');
  }
  return (
    <Login>
      <img src={logo} width="100px" />
      <h1>bee-healthy</h1>
      <Wrapper>
        <Input label="E-mail" name="email" value={loginInfo.email} onChange={handleChange} />
        <Input label="Senha" name="password" value={loginInfo.password} onChange={handleChange} />
        <Input label="Confirme sua senha" name="confirmation" value={loginInfo.confirmation} onChange={handleChange} />
        <Button>Cadastrar</Button>
        <h2 onClick={ChangeScreen}>Já possui cadastro? Entre aqui!</h2>
      </Wrapper>
    </Login>
  );
}
