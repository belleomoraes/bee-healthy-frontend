import styled from 'styled-components';
import SearchBar from '../../SearchBar';
import VaccinationRegistration from './VaccinationRegistration';
import VaccinationLine from './VaccinationLine';
import { useState, useEffect } from 'react';
import { ButtonInsertionFilter } from '../../GeneralStyles/ButtonInsertionFilter';
import { Margin, Container } from '../Exams/ExamMainPage';
import useVaccination from '../../../../hooks/api/useVaccination';
import WithoutVaccination from './WithoutVaccination';

export default function VaccinationMainPage() {
  const [click, setClick] = useState(false);
  const [id, setId] = useState('');
  const [vaccinationList, setVaccinationList] = useState([]);
  const { vaccination } = useVaccination();

  useEffect(() => {
    if (vaccination) {
      setVaccinationList(vaccination);
    }
  }, [vaccination]);

  return (
    <>
      {!click && (
        <Margin>
          <SearchBar />
          <Container>
            <ButtonInsertionFilter onClick={() => setClick(true)}>
              Inserir novo registro de vacina
            </ButtonInsertionFilter>
            {vaccinationList.length < 1 && <WithoutVaccination />}
            {vaccinationList.length >= 1 && (
              <VaccinationLine setClick={setClick} vaccinationList={vaccinationList} setId={setId} />
            )}
          </Container>
        </Margin>
      )}
      {click && <VaccinationRegistration setClick={setClick} id={id} />}
    </>
  );
}
