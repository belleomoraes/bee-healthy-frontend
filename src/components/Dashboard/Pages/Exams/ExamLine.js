import { FiEdit } from 'react-icons/fi';
import { MdDelete } from 'react-icons/md';
import { BiChevronDownCircle, BiChevronUpCircle } from 'react-icons/bi';
import { Container, DateFilter, Display, DisplayIon, Card } from '../../GeneralStyles/History';
import dayjs from 'dayjs';
export default function ExamLine({ examList }) {
  return (
    <Container>
      <DateFilter>
        <BiChevronDownCircle cursor="pointer" />
        Organizar por data
        <BiChevronUpCircle cursor="pointer" />
      </DateFilter>
      <Display>
        {examList.map((exam) => (
          <>
            <h3>{dayjs(exam.createdAt).format('MM/DD/YYYY')}</h3>
            <Card>
              <Display>
                <h1>{exam.name}</h1>
                <h2>{exam.local}</h2>
              </Display>

              <DisplayIon>
                <MdDelete color="red" cursor="pointer" />
                <FiEdit color="green" cursor="pointer" />
              </DisplayIon>
            </Card>
          </>
        ))}
      </Display>
    </Container>
  );
}
