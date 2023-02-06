import useAsync from '../useAsync';
import useToken from '../useToken';
import * as vaccinationApi from '../../services/vaccinationApi';

export default function useVaccination() {
  const token = useToken();
  const {
    data: vaccination,
    loading: vaccinationLoading,
    error: vaccinationError,
    act: getVaccinationInformation,
  } = useAsync(() => vaccinationApi.getVaccinationInformation(token));

  return {
    vaccination,
    vaccinationLoading,
    vaccinationError,
    getVaccinationInformation,
  };
}
