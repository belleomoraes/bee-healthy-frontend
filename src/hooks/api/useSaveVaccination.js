import useAsync from '../useAsync';
import useToken from '../useToken';
import * as vaccinationApi from '../../services/vaccinationApi';

export default function useSaveVaccination() {
  const token = useToken();

  const {
    loading: saveVaccinationLoading,
    error: saveVaccinationError,
    act: save,
  } = useAsync((data) => vaccinationApi.save(data, token), false);

  return {
    saveVaccinationLoading,
    saveVaccinationError,
    save,
  };
}
