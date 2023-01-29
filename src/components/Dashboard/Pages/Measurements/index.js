import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import MeasurementHistory from './MeasurementHistory';
import MeasurementRegistration from './MeasurementRegistrationPage';

export default function Measurements() {
  return (
    <>
      <StyledTypography variant="h4">Medidas para controle</StyledTypography>
      <DisplayOptions>
        <Option>Pressão arterial</Option>
        <Option>Glicose</Option>
        <Option>Oxigenação</Option>
      </DisplayOptions>
      <MeasurementHistory />
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
