import styled from 'styled-components';
import SearchBar from '../../SearchBar';
import ExamRegistration from './ExamRegistrationPage';
import WithoutExam from './WithoutExam';
import ExamLine from './ExamLine';
import { useState, useEffect } from 'react';
import { ButtonInsertionFilter } from '../../GeneralStyles/ButtonInsertionFilter';
import useExam from '../../../../hooks/api/useExam';

export default function ExamsMainPage() {
  const [click, setClick] = useState(false);
  const [examList, setExamList] = useState([]);
  const { exam } = useExam();

  useEffect(() => {
    if (exam) {
      setExamList(exam);
    }
  }, [exam]);

  return (
    <>
      {!click && (
        <Margin>
          <SearchBar />
          <Container>
            <ButtonInsertionFilter onClick={() => setClick(true)}>Inserir novo exame</ButtonInsertionFilter>
            {examList.length < 1 && <WithoutExam />}
            {examList.length >= 1 && <ExamLine />}
          </Container>
        </Margin>
      )}
      {click && <ExamRegistration setClick={setClick} />}
    </>
  );
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: initial;
  }
`;

export const Margin = styled.div`
  margin-left: 100px;
  margin-top: 45px;

  @media (max-width: 600px) {
    margin-left: 10px;
    margin-top: 20px;
  }
`;
