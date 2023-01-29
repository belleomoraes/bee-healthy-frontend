import Typography from '@material-ui/core/Typography';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import styled from 'styled-components';
import DateFnsUtils from '@date-io/date-fns';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '../../../Forms/Input';
import { Button } from '../../../Forms/Button';

export default function Profile() {
  return (
    <>
      <StyledTypography variant="h4">Perfil</StyledTypography>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Container>
          <FormWrapper>
            <InputWrapper>
              <Input label="Nome Completo" name="name" type="text" />
            </InputWrapper>
            <InputWrapper>
              <Input name="cpf" label="CPF" type="text" maxLength="14" mask="999.999.999-99" />
            </InputWrapper>
            <InputWrapper>
              <Input label="Data de nascimento" name="birthday" mask="00/00/0000" />
            </InputWrapper>
            <InputWrapper>
              <Input label="Sexo" name="sex" />
            </InputWrapper>
            <InputWrapper>
              <Input label="Tipo Sanguíneo" name="blood" />
            </InputWrapper>
            <InputWrapper>
              <Input label="Telefone" name="phone" />
            </InputWrapper>
          </FormWrapper>
          <SubmitContainer>
            <Button type="submit">Salvar informações</Button>
          </SubmitContainer>
        </Container>
      </MuiPickersUtilsProvider>
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
