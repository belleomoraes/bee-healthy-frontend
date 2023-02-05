import api from './api';

export async function save(body, token) {
  const response = await api.post('/profile', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function getProfileInformation(token) {
  const response = await api.get('/profile', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
