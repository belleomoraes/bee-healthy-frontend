import styled from 'styled-components';
import SearchBar from '../../../Forms/SearchBar';
import { BiChevronDownCircle, BiChevronUpCircle } from 'react-icons/bi';
import { FiFilter, FiEdit } from 'react-icons/fi';
import { MdAddCircle, MdDelete } from 'react-icons/md';
import { Button } from '../../GeneralStyles/Button';

export default function HistoryMainPage() {
  return (
    <>
      <SearchBar />

      <DateFilter>
        <BiChevronDownCircle />
        Organizar por data
        <BiChevronUpCircle />
      </DateFilter>
      <Container>
        <HistoryLine />

        <Options />
      </Container>
    </>
  );
}

function HistoryLine() {
  return (
    <Display>
      <h3>08/05/2022</h3>
      <Card>
        <Display>
          <h1>Ginecologista</h1>
          <h2>Dra. Luciana Garcia</h2>
        </Display>

        <DisplayIon>
          <MdDelete color="red" />
          <FiEdit color="green" />
        </DisplayIon>
      </Card>

      <h3>08/05/2022</h3>
      <Card>
        <Display>
          <h1>Ginecologista</h1>
          <h2>Dra. Luciana Garcia</h2>
        </Display>

        <DisplayIon>
          <MdDelete color="red" />
          <FiEdit color="green" />
        </DisplayIon>
      </Card>

      <h3>08/05/2022</h3>
      <Card>
        <Display>
          <h1>Ginecologista</h1>
          <h2>Dra. Luciana Garcia</h2>
        </Display>

        <DisplayIon>
          <MdDelete color="red" />
          <FiEdit color="green" />
        </DisplayIon>
      </Card>

      <h3>08/05/2022</h3>
      <Card>
        <Display>
          <h1>Ginecologista</h1>
          <h2>Dra. Luciana Garcia</h2>
        </Display>

        <DisplayIon>
          <MdDelete color="red" />
          <FiEdit color="green" />
        </DisplayIon>
      </Card>
      <h3>08/05/2022</h3>
      <Card>
        <Display>
          <h1>Ginecologista</h1>
          <h2>Dra. Luciana Garcia</h2>
        </Display>

        <DisplayIon>
          <MdDelete color="red" />
          <FiEdit color="green" />
        </DisplayIon>
      </Card>
      <h3>08/05/2022</h3>
      <Card>
        <Display>
          <h1>Ginecologista</h1>
          <h2>Dra. Luciana Garcia</h2>
        </Display>

        <DisplayIon>
          <MdDelete color="red" />
          <FiEdit color="green" />
        </DisplayIon>
      </Card>
      <h3>08/05/2022</h3>
      <Card>
        <Display>
          <h1>Ginecologista</h1>
          <h2>Dra. Luciana Garcia</h2>
        </Display>

        <DisplayIon>
          <MdDelete color="red" />
          <FiEdit color="green" />
        </DisplayIon>
      </Card>
    </Display>
  );
}

function Options() {
  return (
    <DisplayOptions>
      <Button>
        Filtrar por tipo
        <FiFilter />
      </Button>

      <Button>
        Inserir novo histórico
        <MdAddCircle />
      </Button>
    </DisplayOptions>
  );
}

const DateFilter = styled.div`
  width: 200px;
  height: 5vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 6vh;
  font-size: 2.5vh;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: initial;
  }
`;

const Display = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;
  h3 {
    font-size: 2.3vh;
    margin: 4vh;
  }
`;

const DisplayOptions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;
  position: absolute;
  top: 40vh;
  right: 10vw;

  @media (max-width: 600px) {
    right: 3vw;
  }
`;

const DisplayIon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: space-between;
`;

const Card = styled.div`
  width: 30vw;
  height: 15vh;
  display: flex;
  justify-content: space-between;
  padding: 2vh 3vw;
  font-size: 25px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  h1 {
    font-weight: bold;
    font-size: 20px !important;
    margin-bottom: 3vh;
  }

  h2 {
    font-size: 14px !important;
  }

  @media (max-width: 600px) {
    width: 230px;
  }
`;
