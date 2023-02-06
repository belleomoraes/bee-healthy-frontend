import { FiEdit } from 'react-icons/fi';
import { MdDelete } from 'react-icons/md';
import { BiChevronDownCircle, BiChevronUpCircle } from 'react-icons/bi';
import { Container, DateFilter, Display, DisplayIon, Card } from '../../GeneralStyles/History';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
export default function VaccinationLine({ setClick, vaccinationList, setId }) {
  const navigate = useNavigate();

  function edit(vaccination) {
    setClick(true);
    setId(vaccination.id);
    navigate(`?vaccinationId=${vaccination.id}`);
  }
  return (
    <Container>
      <DateFilter>
        <BiChevronDownCircle cursor="pointer" />
        Organizar por data
        <BiChevronUpCircle cursor="pointer" />
      </DateFilter>
      <Display>
        {vaccinationList.map((vaccination) => (
          <>
            <h3>{dayjs(vaccination.createdAt).format('MM/DD/YYYY')}</h3>
            <Card>
              <Display>
                <h1>{vaccination.name}</h1>
                <h2>{vaccination.manufacturer}</h2>
              </Display>

              <DisplayIon>
                <MdDelete color="red" cursor="pointer" />
                <FiEdit color="green" cursor="pointer" onClick={() => edit(vaccination)} />
              </DisplayIon>
            </Card>
          </>
        ))}
      </Display>
    </Container>
  );
}
