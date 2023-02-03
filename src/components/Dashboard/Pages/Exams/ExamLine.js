import { FiEdit } from 'react-icons/fi';
import { MdDelete } from 'react-icons/md';
import { BiChevronDownCircle, BiChevronUpCircle } from 'react-icons/bi';
import { Container, DateFilter, Display, DisplayIon, Card } from '../../GeneralStyles/History';
export default function ExamLine() {
  return (
    <Container>
      <DateFilter>
        <BiChevronDownCircle cursor="pointer" />
        Organizar por data
        <BiChevronUpCircle cursor="pointer" />
      </DateFilter>
      <Display>
        <h3>08/05/2022</h3>
        <Card>
          <Display>
            <h1>Ginecologista</h1>
            <h2>Dra. Luciana Garcia</h2>
          </Display>

          <DisplayIon>
            <MdDelete color="red" cursor="pointer" />
            <FiEdit color="green" cursor="pointer" />
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
