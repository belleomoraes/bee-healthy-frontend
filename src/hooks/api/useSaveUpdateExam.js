import useAsync from '../useAsync';
import useToken from '../useToken';
import * as examApi from '../../services/examApi';

export default function useSaveExamId() {
  const token = useToken();
  const {
    loading: examIdLoading,
    error: examIdError,
    act: saveUpdate,
  } = useAsync((body, id) => examApi.saveUpdate(body, id, token), false);

  return {
    examIdLoading,
    examIdError,
    saveUpdate,
  };
}
