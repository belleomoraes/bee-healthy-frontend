import useAsync from '../useAsync';
import useToken from '../useToken';
import * as profileApi from '../../services/profileApi';

export default function useSaveProfile() {
  const token = useToken();

  const {
    loading: saveProfileLoading,
    error: saveProfileError,
    act: save,
  } = useAsync((data) => profileApi.save(data, token), false);

  return {
    saveProfileLoading,
    saveProfileError,
    save,
  };
}
