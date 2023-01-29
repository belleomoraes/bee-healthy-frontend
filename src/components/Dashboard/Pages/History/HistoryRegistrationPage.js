import Typography from '@material-ui/core/Typography';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import styled from 'styled-components';
import DateFnsUtils from '@date-io/date-fns';
import Input from '../../../Forms/Input';
import { Button } from '../../../Forms/Button';
import { MdAddCircle } from 'react-icons/md';

export default function History() {
  return (
    <>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Container>
          <FormWrapper>
            <InputWrapper>
              <Input label="Data" name="date" type="text" />
            </InputWrapper>
            <InputWrapper>
              <Input label="Tipo" name="type" type="text" />
            </InputWrapper>
            <InputWrapper>
              <Input label="Descrição" name="description" type="text" />
            </InputWrapper>
            <InputWrapper>
              <Input label="Local ou médico" name="location" type="text" />
            </InputWrapper>
            <InputWrapper>
              <Display>
                <h1>Observações</h1>
                <MdAddCircle />
              </Display>
              <Input label="Insira uma observação" name="observations" type="text" />
            </InputWrapper>
            <InputWrapper>
              <Display>
                <h1>Arquivos</h1>
                <MdAddCircle />
              </Display>
              <Input label="Insira um arquivo" name="files" />
            </InputWrapper>
          </FormWrapper>

          <SubmitContainer>
            <Button type="submit">Salvar alterações</Button>
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
const Display = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2vh 2vh;
  font-size: 5vh;
  > h1 {
    font-size: 4vh !important;
  }
`;
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 4vh 2vw;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const FormWrapper = styled.form`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  > div {
    width: 100%;
  }
`;
