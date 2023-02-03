import styled from 'styled-components';
import SearchBar from '../../SearchBar';
import { Button } from '../../GeneralStyles/Button';
import VaccinationRegistration from './VaccinationRegistration';
import VaccinationLine from './VaccinationLine';
import { useState } from 'react';

export default function VaccinationMainPage() {
  const [click, setClick] = useState(false);
  return (
    <>
      {!click && (
        <>
          <SearchBar />
          <Container>
            <VaccinationLine />
            <DisplayOptions>
              <Button onClick={() => setClick(true)}>Inserir novo registro de vacina</Button>
            </DisplayOptions>
          </Container>
        </>
      )}
      {click && <VaccinationRegistration />}
    </>
  );
}

const Container = styled.div`
  display: flex;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: initial;
  }
`;

const DisplayOptions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: space-around;
  position: absolute;
  top: 40vh;
  right: 20vw;

  @media (max-width: 600px) {
    right: 3vw;
  }
`;
