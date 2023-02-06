import useAsync from '../useAsync';
import useToken from '../useToken';
import * as measurementApi from '../../services/measurementApi';

export default function useSaveMeasurement() {
  const token = useToken();

  const {
    loading: saveMeasurementLoading,
    error: saveMeasurementError,
    act: save,
  } = useAsync((data) => measurementApi.save(data, data.type, token), false);

  return {
    saveMeasurementLoading,
    saveMeasurementError,
    save,
  };
}
