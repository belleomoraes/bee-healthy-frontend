import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import Input from '../../../Forms/Input';
import { Button } from '../../GeneralStyles/Button';
import { MdAddCircle } from 'react-icons/md';
import { Container, FormWrapper, InputWrapper, SubmitContainer, Display } from '../../GeneralStyles/Registration';
import { useState, useEffect } from 'react';

export default function ExamRegistration() {
  const [examInfo, setExamInfo] = useState({
    date: '',
    description: '',
    local: '',
    name: '',
  });

  function handleChange(e) {
    e.preventDefault();
    setExamInfo({
      ...examInfo,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Container>
          <FormWrapper>
            <InputWrapper>
              <Input label="Data" name="date" mask="99/99/9999" value={examInfo.date} onChange={handleChange} />
            </InputWrapper>
            <InputWrapper>
              <Input label="Name" name="name" value={examInfo.name} onChange={handleChange} />
            </InputWrapper>
            <InputWrapper>
              <Input label="Descrição" name="description" value={examInfo.description} onChange={handleChange} />
            </InputWrapper>
            <InputWrapper>
              <Input label="Local" name="local" value={examInfo.local} onChange={handleChange} />
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
