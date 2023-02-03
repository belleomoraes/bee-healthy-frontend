import styled from 'styled-components';
import SearchBar from '../../SearchBar';
import { Button } from '../../GeneralStyles/Button';
import ExamRegistration from './ExamRegistrationPage';
import WithoutExam from './WithoutExam';
import ExamLine from './ExamLine';

export default function ExamsMainPage() {
  return (
    <>
      <SearchBar />

      <Container>
        <ExamRegistration />
        <DisplayOptions>
          <Button>Inserir novo exame</Button>
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
