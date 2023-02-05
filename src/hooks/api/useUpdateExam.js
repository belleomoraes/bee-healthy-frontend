import useAsync from '../useAsync';
import useToken from '../useToken';
import * as examApi from '../../services/examApi';

export default function useExamId() {
  const token = useToken();
  const {
    loading: examIdLoading,
    error: examIdError,
    act: getExamIdInformation,
  } = useAsync((query) => examApi.getExamIdInformation(query, token), false);

  return {
    examIdLoading,
    examIdError,
    getExamIdInformation,
  };
}
