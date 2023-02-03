import Input from '../../../Forms/Input';
import { Button } from '../../GeneralStyles/Button';
import { Container, FormWrapper, InputWrapper, SubmitContainer } from '../../GeneralStyles/Registration';
import { useState, useEffect } from 'react';
export default function VaccinationRegistration({ setClick }) {
  const [vaccinationInfo, setVaccinationInfo] = useState({
    date: '',
    name: '',
    dose: '',
    manufacturer: '',
    lot: '',
  });

  function handleChange(e) {
    e.preventDefault();
    setVaccinationInfo({
      ...vaccinationInfo,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <>
      <Container>
        <FormWrapper>
          <InputWrapper>
            <Input label="Data" name="date" mask="99/99/9999" value={vaccinationInfo.date} onChange={handleChange} />
          </InputWrapper>
          <InputWrapper>
            <Input label="Nome da vacina" name="name" value={vaccinationInfo.name} onChange={handleChange} />
          </InputWrapper>
          <InputWrapper>
            <Input label="Dose" name="dose" value={vaccinationInfo.dose} onChange={handleChange} />
          </InputWrapper>
          <InputWrapper>
            <Input
              label="Fabricante"
              name="manufacturer"
              value={vaccinationInfo.manufacturer}
              onChange={handleChange}
            />
          </InputWrapper>
          <InputWrapper>
            <Input label="Lote" name="lot" value={vaccinationInfo.lot} onChange={handleChange} />
          </InputWrapper>
        </FormWrapper>

        <SubmitContainer>
          <Button>Salvar alterações</Button>
          <Button onClick={() => setClick(false)}>Voltar</Button>
        </SubmitContainer>
      </Container>
    </>
  );
}
