import useAsync from '../useAsync';
import useToken from '../useToken';
import * as examApi from '../../services/examApi';

export default function useSaveExam() {
  const token = useToken();

  const {
    loading: saveExamLoading,
    error: saveExamError,
    act: save,
  } = useAsync((data) => examApi.save(data, token), false);

  return {
    saveExamLoading,
    saveExamError,
    save,
  };
}
