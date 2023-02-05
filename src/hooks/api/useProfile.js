import useAsync from '../useAsync';
import useToken from '../useToken';
import * as profileApi from '../../services/profileApi';

export default function useProfile() {
  const token = useToken();
  const {
    data: profile,
    loading: profileLoading,
    error: profileError,
    act: getProfileInformation,
  } = useAsync(() => profileApi.getProfileInformation(token));

  return {
    profile,
    profileLoading,
    profileError,
    getProfileInformation,
  };
}
