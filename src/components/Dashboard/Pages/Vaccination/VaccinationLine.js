import { FiEdit } from 'react-icons/fi';
import { MdDelete } from 'react-icons/md';
import { BiChevronDownCircle, BiChevronUpCircle } from 'react-icons/bi';
import { Container, DateFilter, Display, DisplayIon, Card } from '../../GeneralStyles/History';
export default function VaccinationLine() {
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
            <h1>COVID-19</h1>
            <h2>1ª dose</h2>
          </Display>

          <DisplayIon>
            <MdDelete color="red" />
            <FiEdit color="green" />
          </DisplayIon>
        </Card>

        <h3>08/05/2022</h3>
        <Card>
          <Display>
            <h1>COVID-19</h1>
            <h2>2ª dose</h2>
          </Display>

          <DisplayIon>
            <MdDelete color="red" />
            <FiEdit color="green" />
          </DisplayIon>
        </Card>

        <h3>08/05/2022</h3>
        <Card>
          <Display>
            <h1>COVID-19</h1>
            <h2>3ª dose</h2>
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
