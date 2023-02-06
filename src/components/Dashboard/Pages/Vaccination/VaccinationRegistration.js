import Input from '../../../Forms/Input';
import { Button } from '../../GeneralStyles/Button';
import { Container, FormWrapper, InputWrapper, SubmitContainer } from '../../GeneralStyles/Registration';
import { useState, useEffect } from 'react';
import useSaveVaccination from '../../../../hooks/api/useSaveVaccination';
import useUpdateVaccination from '../../../../hooks/api/useUpdateVaccination';
import useSaveUpdateVaccination from '../../../../hooks/api/useSaveUpdateVaccination';
import { toast } from 'react-toastify';
export default function VaccinationRegistration({ setClick, id }) {
  const { save } = useSaveVaccination();
  const { saveUpdate } = useSaveUpdateVaccination();
  const { getVaccinationIdInformation } = useUpdateVaccination();

  const [vaccinationInfo, setVaccinationInfo] = useState({
    date: '',
    name: '',
    dose: '',
    manufacturer: '',
    lot: '',
  });

  function handleChange(e) {
    e.preventDefault();
    setVaccinationInfo({
      ...vaccinationInfo,
      [e.target.name]: e.target.value,
    });
  }

  if (id) {
    useEffect(() => {
      try {
        async function getVaccination() {
          const vaccination = await getVaccinationIdInformation(id);

          setVaccinationInfo({
            name: vaccination.name,
            dose: vaccination.dose,
            manufacturer: vaccination.manufacturer,
            lot: vaccination.lot,
          });
        }

        getVaccination();
      } catch (err) {
        console.log(err);
      }
    }, []);
  }

  async function saveVaccination({ vaccinationInfo }) {
    const body = {
      name: vaccinationInfo.name,
      dose: vaccinationInfo.dose,
      manufacturer: vaccinationInfo.manufacturer,
      lot: vaccinationInfo.lot,
    };

    try {
      await save(body);

      setVaccinationInfo({
        name: '',
        dose: '',
        manufacturer: '',
        lot: '',
      });
      setClick(false);
      toast('Informações salvas com sucesso!');
    } catch (err) {
      toast('Não foi possível salvar as informações!');
    }
  }

  async function saveUpdateVaccination({ vaccinationInfo, vaccinationId }) {
    const body = {
      name: vaccinationInfo.name,
      dose: vaccinationInfo.dose,
      manufacturer: vaccinationInfo.manufacturer,
      lot: vaccinationInfo.lot,
    };

    try {
      await saveUpdate(body, vaccinationId);

      setVaccinationInfo({
        name: '',
        dose: '',
        manufacturer: '',
        lot: '',
      });
      setClick(false);
      toast('Informações salvas com sucesso!');
    } catch (err) {
      toast('Não foi possível salvar as informações!');
    }
  }
  return (
    <>
      <Container>
        <FormWrapper>
          <InputWrapper>
            <Input label="Data" name="date" mask="99/99/9999" value={vaccinationInfo.date} onChange={handleChange} />
          </InputWrapper>
          <InputWrapper>
            <Input label="Nome da vacina" name="name" value={vaccinationInfo.name} onChange={handleChange} />
          </InputWrapper>
          <InputWrapper>
            <Input label="Dose" name="dose" value={vaccinationInfo.dose} onChange={handleChange} />
          </InputWrapper>
          <InputWrapper>
            <Input
              label="Fabricante"
              name="manufacturer"
              value={vaccinationInfo.manufacturer}
              onChange={handleChange}
            />
          </InputWrapper>
          <InputWrapper>
            <Input label="Lote" name="lot" value={vaccinationInfo.lot} onChange={handleChange} />
          </InputWrapper>
        </FormWrapper>

        <SubmitContainer>
          <Button
            onClick={() => {
              if (!id) {
                saveVaccination({ vaccinationInfo });
              } else saveUpdateVaccination({ vaccinationInfo, vaccinationId: id });
            }}
          >
            Salvar alterações
          </Button>
          <Button onClick={() => setClick(false)}>Voltar</Button>
        </SubmitContainer>
      </Container>
    </>
  );
}
