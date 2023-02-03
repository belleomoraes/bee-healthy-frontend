import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import MeasurementHistory from './MeasurementHistory';
import MeasurementRegistration from './MeasurementRegistrationPage';
import { useState } from 'react';
import { Button } from '../../GeneralStyles/Button';

export default function Measurements() {
  const [click, setClick] = useState(false);
  return (
    <>
      {!click && (
        <>
          <Display>
            <MeasurementHistory />
            <Button onClick={() => setClick(true)}>Inserir nova medição</Button>
          </Display>
        </>
      )}
      {click && <MeasurementRegistration />}
    </>
  );
}

const Display = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 60px;

  @media (max-width: 600px) {
    width: 400px;
  }
`;
