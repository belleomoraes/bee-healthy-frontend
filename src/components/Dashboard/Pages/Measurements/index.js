import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import MeasurementMainPage from './MeasurementMainPage';

export default function Measurements() {
  return (
    <>
      <StyledTypography variant="h4">Medidas para controle</StyledTypography>
      <MeasurementMainPage />
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;
