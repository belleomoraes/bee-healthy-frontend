import styled from 'styled-components';
import SearchBar from '../../SearchBar';
import { Button } from '../../GeneralStyles/Button';
import VaccinationRegistration from './VaccinationRegistration';
import VaccinationLine from './VaccinationLine';
import { useState } from 'react';
import { ButtonInsertionFilter } from '../../GeneralStyles/ButtonInsertionFilter';
import { Margin, Container } from '../Exams/ExamMainPage';

export default function VaccinationMainPage() {
  const [click, setClick] = useState(false);
  return (
    <>
      {!click && (
        <Margin>
          <SearchBar />
          <Container>
            <ButtonInsertionFilter onClick={() => setClick(true)}>
              Inserir novo registro de vacina
            </ButtonInsertionFilter>
            <VaccinationLine />
          </Container>
        </Margin>
      )}
      {click && <VaccinationRegistration />}
    </>
  );
}
