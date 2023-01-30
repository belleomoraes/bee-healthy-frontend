import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import Input from '../../../Forms/Input';
import { Button } from '../../GeneralStyles/Button';
import { MdAddCircle } from 'react-icons/md';
import { Container, FormWrapper, InputWrapper, SubmitContainer, Display } from '../../GeneralStyles/Registration';

export default function ExamRegistration() {
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
