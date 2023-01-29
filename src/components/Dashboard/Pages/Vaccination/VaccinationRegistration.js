import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import styled from 'styled-components';
import DateFnsUtils from '@date-io/date-fns';
import Input from '../../../Forms/Input';
import { Button } from '../../../Forms/Button';
export default function VaccinationRegistration() {
  return (
    <>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Container>
          <FormWrapper>
            <InputWrapper>
              <Input label="Data" name="date" type="text" />
            </InputWrapper>
            <InputWrapper>
              <Input label="Nome da vacina" name="name" type="text" />
            </InputWrapper>
            <InputWrapper>
              <Input label="Dose" name="dose" type="text" />
            </InputWrapper>
            <InputWrapper>
              <Input label="Fabricante" name="manufacturer" type="text" />
            </InputWrapper>
            <InputWrapper>
              <Input label="Lote" name="lot" type="text" />
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

const SubmitContainer = styled.div`
  margin-top: 40px !important;
  width: 40% !important;
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
