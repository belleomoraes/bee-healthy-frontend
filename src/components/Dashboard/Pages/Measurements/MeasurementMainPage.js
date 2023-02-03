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
          <DisplayOptions>
            <Option>Pressão arterial</Option>
            <Option>Glicose</Option>
            <Option>Oxigenação</Option>
          </DisplayOptions>
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

const StyledTypography = styled(Typography)`
  margin-bottom: 60px !important;
`;

const DisplayOptions = styled.div`
  width: 500px;
  display: flex;
  align-items: space-around;
  justify-content: space-around;
  margin: 0 auto;

  @media (max-width: 600px) {
    width: 400px;
  }
`;

const Display = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 80px;

  @media (max-width: 600px) {
    width: 400px;
  }
`;

const Option = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: #333333;
  width: 150px;
  height: 100px;
  padding: 2px 3px;
  color: #ffffff;
  font-size: 15px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  cursor: pointer;

  &:hover {
    opacity: 90%;
  }

  @media (max-width: 600px) {
    width: 120px;
    height: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    text-align: center;
  }
`;
