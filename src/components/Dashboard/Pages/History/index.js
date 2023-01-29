import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import HistoryMainPage from './HistoryMainPage';

export default function History() {
  return (
    <>
      <StyledTypography variant="h4">Histórico</StyledTypography>
      <HistoryMainPage />
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;
