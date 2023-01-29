import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import Input from '../../../Forms/Input';
import { Button } from '../../../Forms/Button';
import { Container, FormWrapper, InputWrapper, SubmitContainer } from '../../GeneralStyles/Registration';
export default function MeasurementRegistration() {
  return (
    <>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Container>
          <FormWrapper>
            <InputWrapper>
              <Input label="Data" name="date" type="text" />
            </InputWrapper>
            <InputWrapper>
              <Input label="Manhã" name="morning" type="text" />
            </InputWrapper>
            <InputWrapper>
              <Input label="Tarde" name="afternoon" type="text" />
            </InputWrapper>
            <InputWrapper>
              <Input label="Noite" name="night" type="text" />
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
