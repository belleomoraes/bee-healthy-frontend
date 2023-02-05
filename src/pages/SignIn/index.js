import { Button } from '../../components/Dashboard/GeneralStyles/Button';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import logo from '../../assets/images/bee-healthy.png';
import Input from '../../components/Forms/Input';
import { Login, Wrapper } from '../../components/Dashboard/GeneralStyles/SignIn&Up';
import useSignIn from '../../hooks/api/useSignIn';
import { toast } from 'react-toastify';
export default function SignIn() {
  const navigate = useNavigate();
  const { signIn } = useSignIn();
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: '',
  });
  function handleChange(e) {
    e.preventDefault();
    setLoginInfo({
      ...loginInfo,
      [e.target.name]: e.target.value,
    });
  }

  async function logIn({ loginInfo }) {
    try {
      await signIn(loginInfo);
      setLoginInfo({});
      toast('Login realizado com sucesso!');
      navigate('/dashboard');
    } catch (err) {
      toast('Não foi possível fazer o login!');
    }
  }

  function ChangeScreen() {
    navigate('/sign-up');
  }
  return (
    <Login>
      <img src={logo} width="100px" />
      <h1>bee-healthy</h1>
      <Wrapper>
        <Input label="E-mail" name="email" value={loginInfo.email} onChange={handleChange} />
        <Input label="Senha" name="password" value={loginInfo.password} onChange={handleChange} />
        <Button onClick={() => logIn({ loginInfo })}>Entrar</Button>
        <h2 onClick={ChangeScreen}>Primeira vez? Cadastre-se</h2>
      </Wrapper>
    </Login>
  );
}
