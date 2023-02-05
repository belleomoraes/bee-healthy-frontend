import { Button } from '../../components/Dashboard/GeneralStyles/Button';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import logo from '../../assets/images/bee-healthy.png';
import Input from '../../components/Forms/Input';
import { Login, Wrapper } from '../../components/Dashboard/GeneralStyles/SignIn&Up';
import useSignUp from '../../hooks/api/useSignUp';
import { toast } from 'react-toastify';
export default function SignUpScreen() {
  const navigate = useNavigate();
  const { signUp } = useSignUp();
  const [registrationInfo, setRegistrationInfo] = useState({
    email: '',
    password: '',
    confirmation: '',
  });
  function handleChange(e) {
    e.preventDefault();
    setRegistrationInfo({
      ...registrationInfo,
      [e.target.name]: e.target.value,
    });
  }

  async function register({ registrationInfo }) {
    try {
      await signUp(registrationInfo);
      setRegistrationInfo({});
      toast('Cadastro realizado com sucesso!');
      navigate('/sign-in');
    } catch (err) {
      toast('Não foi possível fazer o cadastro!');
    }
  }
  function ChangeScreen() {
    navigate('/sign-in');
  }
  return (
    <Login>
      <img src={logo} width="100px" />
      <h1>bee-healthy</h1>
      <Wrapper>
        <Input label="E-mail" name="email" value={registrationInfo.email} onChange={handleChange} />
        <Input
          label="Senha"
          name="password"
          type="password"
          value={registrationInfo.password}
          onChange={handleChange}
        />
        <Input
          label="Confirme sua senha"
          name="confirmation"
          type="password"
          value={registrationInfo.confirmation}
          onChange={handleChange}
        />
        <Button onClick={() => register({ registrationInfo })}>Cadastrar</Button>
        <h2 onClick={ChangeScreen}>Já possui cadastro? Entre aqui!</h2>
      </Wrapper>
    </Login>
  );
}
