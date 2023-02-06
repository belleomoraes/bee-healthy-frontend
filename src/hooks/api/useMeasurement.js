import useAsync from '../useAsync';
import useToken from '../useToken';
import * as measurementApi from '../../services/examApi';

export default function useMeasurement() {
  const token = useToken();
  const {
    loading: measurementLoading,
    error: measurementError,
    act: getMeasurementInformation,
  } = useAsync((type) => measurementApi.getMeasurement(type, token), false);

  return {
    measurementLoading,
    measurementError,
    getMeasurementInformation,
  };
}
