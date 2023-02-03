import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import Input from '../../../Forms/Input';
import { Button } from '../../GeneralStyles/Button';
import { Container, FormWrapper, InputWrapper, SubmitContainer } from '../../GeneralStyles/Registration';
import { useState, useEffect } from 'react';
export default function MeasurementRegistration() {
  const [measurementInfo, setMeasurementInfo] = useState({
    date: '',
    morning: '',
    afternoon: '',
    night: '',
  });

  function handleChange(e) {
    e.preventDefault();
    setMeasurementInfo({
      ...measurementInfo,
      [e.target.name]: e.target.value,
    });
  }
  return (
    <>
      <Container>
        <FormWrapper>
          <InputWrapper>
            <Input label="Data" name="date" mask="99/99/9999" value={measurementInfo.date} onChange={handleChange} />
          </InputWrapper>
          <InputWrapper>
            <Input label="Manhã" name="morning" value={measurementInfo.morning} onChange={handleChange} />
          </InputWrapper>
          <InputWrapper>
            <Input label="Tarde" name="afternoon" value={measurementInfo.afternoon} onChange={handleChange} />
          </InputWrapper>
          <InputWrapper>
            <Input label="Noite" name="night" value={measurementInfo.night} onChange={handleChange} />
          </InputWrapper>
        </FormWrapper>

        <SubmitContainer>
          <Button>Salvar alterações</Button>
        </SubmitContainer>
      </Container>
    </>
  );
}
