import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import MeasurementMainPage from './MeasurementMainPage';
import { useState } from 'react';
import bloodImage from '../../../../assets/images/blood-pressure.png';
import glucoseImage from '../../../../assets/images/glucose.png';
import oxygenImage from '../../../../assets/images/oxygen.png';

export default function Measurements() {
  const [chooseMeasurement, setchooseMeasurement] = useState(false);
  return (
    <>
      <StyledTypography variant="h4">Medidas para controle</StyledTypography>
      {!chooseMeasurement && (
        <DisplayOptions>
          <Option onClick={() => setchooseMeasurement('BLOOD-PRESSURE')}>
            <img src={bloodImage} />
            Pressão arterial
          </Option>
          <Option onClick={() => setchooseMeasurement('GLUCOSE')}>
            <img src={glucoseImage} />
            Glicose
          </Option>
          <Option onClick={() => setchooseMeasurement('OXYGEN')}>
            <img src={oxygenImage} />
            Oxigenação
          </Option>
        </DisplayOptions>
      )}
      {chooseMeasurement && <MeasurementMainPage />}
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;

const DisplayOptions = styled.div`
  width: 80%;
  display: flex;
  align-items: space-around;
  justify-content: space-around;
  margin-left: 80px;
  margin-top: 60px;
  img {
    width: 60%;
    margin-bottom: 60px;
  }

  @media (max-width: 600px) {
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    img {
    width: 45%;
    margin-bottom: 1px;
  }
  }
`;

const Option = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: #333333;
  width: 200px;
  height: 300px;
  margin-right: 60px;
  padding: 2px 3px;
  color: #ffffff;
  font-size: 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  cursor: pointer;

  &:hover {
    opacity: 90%;
    background-color: #f1df38;
    color: #333333;
  }

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    text-align: center;
    margin-bottom: 20px;
    height: 200px;
  }
`;
