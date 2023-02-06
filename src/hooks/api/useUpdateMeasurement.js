import useAsync from '../useAsync';
import useToken from '../useToken';
import * as measurementApi from '../../services/measurementApi';

export default function useMeasurementId() {
  const token = useToken();
  const {
    loading: measurementIdLoading,
    error: measurementIdError,
    act: getMeasurementIdInformation,
  } = useAsync((id) => measurementApi.getExamIdInformation(id, token), false);

  return {
    measurementIdLoading,
    measurementIdError,
    getMeasurementIdInformation,
  };
}
