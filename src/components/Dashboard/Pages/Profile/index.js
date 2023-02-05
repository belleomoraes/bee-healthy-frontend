import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import Input from '../../../Forms/Input';
import { Button } from '../../GeneralStyles/Button';
import dayjs from 'dayjs';
import { useState, useEffect } from 'react';
import useProfile from '../../../../hooks/api/useProfile';
import useSaveProfile from '../../../../hooks/api/useSaveProfile';
import { toast } from 'react-toastify';

export default function Profile() {
  const { save } = useSaveProfile();
  const { profile } = useProfile();
  const [profileInfo, setProfileInfo] = useState({
    name: '',
    cpf: '',
    birthday: '',
    sex: '',
    blood: '',
    phone: '',
  });

  function handleChange(e) {
    e.preventDefault();
    setProfileInfo({
      ...profileInfo,
      [e.target.name]: e.target.value,
    });
  }

  useEffect(() => {
    if (profile) {
      setProfileInfo({
        name: profile.name,
        cpf: profile.cpf,
        birthday: profile.birthday,
        sex: profile.sex,
        blood: profile.blood,
        phone: profile.phone,
      });
    }
  }, [profile]);

  async function saveProfileInformation({ profileInfo }) {
    try {
      await save(profileInfo);
      setProfileInfo({ name: '', cpf: '', birthday: '', sex: '', blood: '', phone: '' });
      toast('Informações salvas com sucesso!');
    } catch (err) {
      toast('Não foi possível salvar as informações!');
    }
  }

  console.log(profileInfo);
  return (
    <>
      <StyledTypography variant="h4">Perfil</StyledTypography>

      <Container>
        <FormWrapper>
          <InputWrapper>
            <Input label="Nome Completo" name="name" value={profileInfo.name} onChange={handleChange} />
          </InputWrapper>
          <InputWrapper>
            <Input
              name="cpf"
              label="CPF"
              maxLength="14"
              mask="999.999.999-99"
              value={profileInfo.cpf}
              onChange={handleChange}
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              label="Data de nascimento"
              name="birthday"
              mask="99/99/9999"
              value={profileInfo.birthday}
              onChange={handleChange}
            />
          </InputWrapper>
          <InputWrapper>
            <Input label="Sexo" name="sex" value={profileInfo.sex} onChange={handleChange} />
          </InputWrapper>
          <InputWrapper>
            <Input label="Tipo Sanguíneo" name="blood" value={profileInfo.blood} onChange={handleChange} />
          </InputWrapper>
          <InputWrapper>
            <Input
              label="Telefone"
              name="phone"
              mask="(99)99999-9999"
              value={profileInfo.phone}
              onChange={handleChange}
            />
          </InputWrapper>
        </FormWrapper>
        <SubmitContainer>
          <Button onClick={() => saveProfileInformation({ profileInfo })}>Salvar informações</Button>
        </SubmitContainer>
      </Container>
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;

const SubmitContainer = styled.div`
  margin-top: 40px !important;
  width: 40% !important;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 4vh 2vw;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const FormWrapper = styled.form`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  > div {
    width: calc(50% - 20px);
    margin: 0 10px 0 0;
  }

  @media (max-width: 600px) {
    > div {
      width: 100%;
      padding-left: 0px !important;
    }
  }
`;

const InputWrapper = styled.div`
  > div {
    width: 100%;
  }
`;
