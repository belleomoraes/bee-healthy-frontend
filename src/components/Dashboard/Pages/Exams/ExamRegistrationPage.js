import Input from '../../../Forms/Input';
import { Button } from '../../GeneralStyles/Button';
import { MdAddCircle } from 'react-icons/md';
import { Container, FormWrapper, InputWrapper, SubmitContainer, Display } from '../../GeneralStyles/Registration';
import { useState } from 'react';
import useSaveExam from '../../../../hooks/api/useSaveExam';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';

export default function ExamRegistration({ setClick }) {
  const navigate = useNavigate();
  const { save } = useSaveExam();
  const [cardFile, setCardFile] = useState();
  const [examInfo, setExamInfo] = useState({
    date: '',
    description: '',
    local: '',
    name: '',
  });

  function handleChange(e) {
    e.preventDefault();
    setExamInfo({
      ...examInfo,
      [e.target.name]: e.target.value,
    });
  }

  async function saveExam({ examInfo }) {
    const body = {
      name: examInfo.name,
      local: examInfo.local,
      description: examInfo.description,
    };

    try {
      await save(body);

      setExamInfo({
        date: '',
        description: '',
        local: '',
        name: '',
      });
      navigate('/dashboard/exam');
      toast('Informações salvas com sucesso!');
    } catch (err) {
      console.log(err);
      toast('Não foi possível salvar as informações!');
    }
  }

  return (
    <>
      <Container>
        <FormWrapper>
          <InputWrapper>
            <Input label="Data" name="date" mask="99/99/9999" value={examInfo.date} onChange={handleChange} />
          </InputWrapper>
          <InputWrapper>
            <Input label="Name" name="name" value={examInfo.name} onChange={handleChange} />
          </InputWrapper>
          <InputWrapper>
            <Input label="Descrição" name="description" value={examInfo.description} onChange={handleChange} />
          </InputWrapper>
          <InputWrapper>
            <Input label="Local" name="local" value={examInfo.local} onChange={handleChange} />
          </InputWrapper>

          <InputWrapper>
            <Display>
              <h1>Arquivos</h1>
              <MdAddCircle />
            </Display>
            <Input
              label="Insira um arquivo"
              name="files"
              type="file"
              value={examInfo.file}
              onChange={(e) => setCardFile(e.target.files[0])}
              accept="application/pdf"
            />
          </InputWrapper>
        </FormWrapper>

        <SubmitContainer>
          <Button type="submit" onClick={() => saveExam({ examInfo })}>
            Salvar alterações
          </Button>
          <Button onClick={() => setClick(false)}>Voltar</Button>
        </SubmitContainer>
      </Container>
    </>
  );
}
