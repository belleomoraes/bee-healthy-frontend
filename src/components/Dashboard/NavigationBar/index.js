import { Link, useLocation } from 'react-router-dom';

import styled from 'styled-components';

import { FaUserAlt, FaCalendarAlt } from 'react-icons/fa';
import { BiStats } from 'react-icons/bi';
import { AiFillSetting } from 'react-icons/ai';
import { IoDocumentTextSharp, IoLogOut } from 'react-icons/io5';

import NavigationButton from './NavigationButton';

export default function NavigationBar() {
  const location = useLocation();

  function isActive(buttonPath) {
    return location.pathname === buttonPath;
  }

  return (
    <Container>
      <Link to="/dashboard/profile">
        <NavigationButton active={isActive('/dashboard/profile')}>
          <FaUserAlt />
          <span>Perfil</span>
        </NavigationButton>
      </Link>

      <Link to="/dashboard/calendar">
        <NavigationButton active={isActive('/dashboard/calendar')}>
          <FaCalendarAlt />
          <span>Agenda</span>
        </NavigationButton>
      </Link>

      <Link to="/dashboard/history">
        <NavigationButton active={isActive('/dashboard/history')}>
          <BiStats />
          <span>Histórico</span>
        </NavigationButton>
      </Link>

      <Link to="/dashboard/exam">
        <NavigationButton active={isActive('/dashboard/exam')}>
          <IoDocumentTextSharp />
          <span>Agendamento</span>
        </NavigationButton>
      </Link>

      <Link to="/dashboard/settings">
        <NavigationButton active={isActive('/dashboard/settings')}>
          <AiFillSetting />
          <span>Configurações</span>
        </NavigationButton>
      </Link>

      <Link to="/dashboard/logout">
        <NavigationButton active={isActive('/dashboard/logout')}>
          <IoLogOut />
          <span>Sair</span>
        </NavigationButton>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f1df38;
  width: 100px;
  height: 100%;
  justify-content: flex-start;
  margin-right: 4vw;

  > a {
    text-decoration: none;
  }

  @media (max-width: 600px) {
    width: 100%;
    flex-direction: row;
    margin-bottom: 4vh;
  }
`;
