import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import Input from '../../../Forms/Input';
import { Button } from '../../GeneralStyles/Button';
import { Container, FormWrapper, InputWrapper, SubmitContainer } from '../../GeneralStyles/Registration';
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
