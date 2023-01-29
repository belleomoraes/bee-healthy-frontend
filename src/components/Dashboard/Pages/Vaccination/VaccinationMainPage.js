import styled from 'styled-components';
import SearchBar from '../../../Forms/SearchBar';
import { MdAddCircle } from 'react-icons/md';
import { Button } from '../../GeneralStyles/Button';
import VaccinationRegistration from './VaccinationRegistration';
import VaccinationLine from './VaccinationLine';

export default function VaccinationMainPage() {
  return (
    <>
      <SearchBar />
      <Container>
        <VaccinationLine />
        <DisplayOptions>
          <Button>
            Inserir novo registro de vacina
            <MdAddCircle size="30px" />
          </Button>
        </DisplayOptions>
      </Container>
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
