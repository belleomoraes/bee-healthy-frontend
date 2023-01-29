import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import VaccinationMainPage from './VaccinationMainPage';

export default function Vaccination() {
  return (
    <>
      <StyledTypography variant="h4">Cartão de vacinação</StyledTypography>
      <VaccinationMainPage />
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;
