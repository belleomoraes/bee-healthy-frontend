import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import MeasurementHistory from './MeasurementHistory';
import MeasurementRegistration from './MeasurementRegistrationPage';
import { useState } from 'react';
import { ButtonInsertionFilter } from '../../GeneralStyles/ButtonInsertionFilter';

export default function Measurements() {
  const [click, setClick] = useState(false);

  return (
    <>
      {!click && (
        <>
          <Display>
            <ButtonInsertionFilter onClick={() => setClick(true)}>Inserir nova medição</ButtonInsertionFilter>
            <MeasurementHistory />
          </Display>
        </>
      )}
      {click && <MeasurementRegistration setClick={setClick} />}
    </>
  );
}

const Display = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (max-width: 600px) {
    width: 400px;
  }
`;
