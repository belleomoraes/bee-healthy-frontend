import useAsync from '../useAsync';
import useToken from '../useToken';
import * as vaccinationApi from '../../services/vaccinationApi';

export default function useUpdateVaccination() {
  const token = useToken();
  const {
    loading: vaccinationIdLoading,
    error: vaccinationIdError,
    act: getVaccinationIdInformation,
  } = useAsync((query) => vaccinationApi.getVaccinationIdInformation(query, token), false);

  return {
    vaccinationIdLoading,
    vaccinationIdError,
    getVaccinationIdInformation,
  };
}
