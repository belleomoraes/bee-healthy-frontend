import api from './api';

export async function save(body, token) {
  const response = await api.post('/vaccination', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function getVaccinationInformation(token) {
  const response = await api.get('/vaccination', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function getVaccinationIdInformation(query, token) {
  const response = await api.get(`/vaccination/${query}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function saveUpdate(body, id, token) {
  const response = await api.put(`/vaccination/${id}`, body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
