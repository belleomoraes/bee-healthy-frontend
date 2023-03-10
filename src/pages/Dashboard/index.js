import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../../components/Dashboard/NavigationBar';

export default function Dashboard() {
  return (
    <DashboardContainer>
      <NavigationBar />
      <PagesContainer>
        <Outlet />
      </PagesContainer>
    </DashboardContainer>
  );
}

const PagesContainer = styled.div`
  padding: 8vh 2vw;
  margin-left: 100px;
  background-color: red;
  width: 100%;
  height: 100%;
  background-color: #ffffff;

  & > * {
    text-align: initial;
  }

  @media (max-width: 600px) {
    padding: 2vh 6vw;
    margin-left: 10px;
    margin-top: 90px;
  }
`;

const DashboardContainer = styled.div`
  display: flex;
  overflow: hidden;
  justify-content: flex-start;

  & > * {
    text-align: initial;
  }

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`;
