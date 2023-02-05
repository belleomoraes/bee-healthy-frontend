import Input from '../../../Forms/Input';
import { Button } from '../../GeneralStyles/Button';
import { MdAddCircle } from 'react-icons/md';
import { Container, FormWrapper, InputWrapper, SubmitContainer, Display } from '../../GeneralStyles/Registration';
import { useState, useEffect } from 'react';
import useSaveExam from '../../../../hooks/api/useSaveExam';
import useUpdateExam from '../../../../hooks/api/useUpdateExam';
import useSaveUpdateExam from '../../../../hooks/api/useSaveUpdateExam';
import { toast } from 'react-toastify';

export default function ExamRegistration({ setClick, id }) {
  const { save } = useSaveExam();
  const { saveUpdate } = useSaveUpdateExam();
  const { getExamIdInformation } = useUpdateExam();

  const [examInfo, setExamInfo] = useState({
    date: '',
    description: '',
    local: '',
    name: '',
  });

  if (id) {
    useEffect(() => {
      try {
        async function getExams() {
          const exams = await getExamIdInformation(id);

          setExamInfo({
            name: exams.name,
            description: exams.description,
            local: exams.local,
          });
        }
        getExams();
      } catch (err) {
        console.log(err);
      }
    }, []);
  }

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
      setClick(false);
      toast('Informações salvas com sucesso!');
    } catch (err) {
      toast('Não foi possível salvar as informações!');
    }
  }

  async function saveUpdateExam({ examInfo, examId }) {
    const body = {
      name: examInfo.name,
      local: examInfo.local,
      description: examInfo.description,
    };

    try {
      await saveUpdate(body, examId);

      setExamInfo({
        date: '',
        description: '',
        local: '',
        name: '',
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

          {/* <InputWrapper>
            <Display>
              <h1>Arquivos</h1>
              <MdAddCircle />
            </Display>
            <Input label="Insira um arquivo" name="files" type="file" value={examInfo.file} accept="application/pdf" />
          </InputWrapper> */}
        </FormWrapper>

        <SubmitContainer>
          <Button
            type="submit"
            onClick={() => {
              if (!id) {
                saveExam({ examInfo });
              } else saveUpdateExam({ examInfo, examId: id });
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
