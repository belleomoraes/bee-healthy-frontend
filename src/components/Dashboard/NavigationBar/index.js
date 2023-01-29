import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { FaUserAlt, FaCalendarAlt } from 'react-icons/fa';
import { GiMedicines } from 'react-icons/gi';
import { MdOutlineMedicalServices } from 'react-icons/md';
import { TbVaccine } from 'react-icons/tb';
import { IoDocumentTextSharp, IoLogOut } from 'react-icons/io5';
import NavigationButton from './NavigationButton';
import logo from '../../../assets/images/bee-healthy.png';

export default function NavigationBar() {
  const location = useLocation();

  function isActive(buttonPath) {
    return location.pathname === buttonPath;
  }

  return (
    <Container>
      <Link to="/home">
        <NavigationButton active={isActive('/home')}>
          <img src={logo} width="50px" />
          <h1>bee-healthy</h1>
        </NavigationButton>
      </Link>

      <Link to="/dashboard/profile">
        <NavigationButton active={isActive('/dashboard/profile')}>
          <FaUserAlt />
          <span>Perfil</span>
        </NavigationButton>
      </Link>

      <Link to="/dashboard/exams">
        <NavigationButton active={isActive('/dashboard/exams')}>
          <IoDocumentTextSharp />
          <span>Exames</span>
        </NavigationButton>
      </Link>

      <Link to="/dashboard/vaccination">
        <NavigationButton active={isActive('/dashboard/vaccination')}>
          <TbVaccine />
          <span>Vacinas</span>
        </NavigationButton>
      </Link>

      <Link to="/dashboard/measurement">
        <NavigationButton active={isActive('/dashboard/measurement')}>
          <MdOutlineMedicalServices />
          <span>Medidas para controle</span>
        </NavigationButton>
      </Link>

      <Link to="/dashboard/medicine">
        <NavigationButton active={isActive('/dashboard/medicine')}>
          <GiMedicines />
          <span>Medicamentos</span>
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
  top: 0;
  bottom: 0;
  position: fixed;
  z-index: 1;

  h1 {
    font-family: Sacramento;
    font-size: 22px;
  }
  > a {
    text-decoration: none;
  }

  @media (max-width: 600px) {
    width: 100%;
    flex-direction: row;
    margin-bottom: 3vh;
    position: fixed;
    top: 0;
    height: 10%;
  }
`;