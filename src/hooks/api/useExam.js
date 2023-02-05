import useAsync from '../useAsync';
import useToken from '../useToken';
import * as examApi from '../../services/examApi';

export default function useExam() {
  const token = useToken();
  const {
    data: exam,
    loading: examLoading,
    error: examError,
    act: getExamInformation,
  } = useAsync(() => examApi.getExamInformation(token));

  return {
    exam,
    examLoading,
    examError,
    getExamInformation,
  };
}
