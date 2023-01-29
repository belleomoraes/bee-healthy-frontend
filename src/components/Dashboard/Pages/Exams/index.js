import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import ExamMainPage from './ExamMainPage';

export default function Exams() {
  return (
    <>
      <StyledTypography variant="h4">Exames</StyledTypography>
      <ExamMainPage />
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;
