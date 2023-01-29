import styled from 'styled-components';
import { FiEdit } from 'react-icons/fi';
import { MdDelete } from 'react-icons/md';
import { BiChevronDownCircle, BiChevronUpCircle } from 'react-icons/bi';
export default function ExamLine() {
  return (
    <Container>
      <DateFilter>
        <BiChevronDownCircle />
        Organizar por data
        <BiChevronUpCircle />
      </DateFilter>
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
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4vh 2vw;
`;

const DateFilter = styled.div`
  width: 200px;
  height: 5vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 6vh;
  font-size: 2.5vh;
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
