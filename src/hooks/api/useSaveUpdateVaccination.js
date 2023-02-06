import useAsync from '../useAsync';
import useToken from '../useToken';
import * as vaccinationApi from '../../services/vaccinationApi';

export default function useUpdateVaccination() {
  const token = useToken();
  const {
    loading: vaccinationIdLoading,
    error: vaccinationIdError,
    act: saveUpdate,
  } = useAsync((body, id) => vaccinationApi.saveUpdate(body, id, token), false);

  return {
    vaccinationIdLoading,
    vaccinationIdError,
    saveUpdate,
  };
}
