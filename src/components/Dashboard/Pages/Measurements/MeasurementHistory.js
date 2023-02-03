import styled from 'styled-components';
import { FiEdit } from 'react-icons/fi';
import { MdDelete } from 'react-icons/md';
export default function MeasurementHistory() {
  return (
    <>
      <Display>
        <Header>
          <h1>Data</h1>
          <h1>Manhã</h1>
          <h1>Tarde</h1>
          <h1>Noite</h1>
          <h1>Edição</h1>
        </Header>
        <History>
          <h1>22/12/2022</h1>
          <h1>10x8</h1>
          <h1>10x8</h1>
          <h1>10x8</h1>
          <DisplayIon>
            <FiEdit color="green" cursor="pointer" />
            <MdDelete color="red" cursor="pointer" />
          </DisplayIon>
        </History>
        <History>
          <h1>22/12/2022</h1>
          <h1>10x8</h1>
          <h1>10x8</h1>
          <h1>10x8</h1>
          <DisplayIon>
            <FiEdit color="green" cursor="pointer" />
            <MdDelete color="red" cursor="pointer" />
          </DisplayIon>
        </History>
      </Display>
    </>
  );
}

const Display = styled.div`
  width: 85vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 3vw;
  margin-top: 40px;

  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  > h2 {
    padding: 10px;
  }

  @media (max-width: 600px) {
    width: 100%;
    font-size: 10px !important;
    padding: 10px;
  }
`;

const DisplayIon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60px;
`;
const Header = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 20px;
  padding: 6px;
  background-color: #f1df38;

  @media (max-width: 600px) {
    width: 100%;
    font-size: 18px;
  }
`;

const History = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 20px;
  padding: 10px;
`;
