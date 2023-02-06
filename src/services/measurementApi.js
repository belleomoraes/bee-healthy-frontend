import api from './api';

export async function getMeasurementInformation(type, token) {
  const response = await api.get(`/measurements/${type}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function save(body, type, token) {
  const response = await api.post(`/measurements/${type}`, body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function getMeasurementIdInformation(id, token) {
  const response = await api.get(`/measurements/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function saveUpdate(body, id, token) {
  const response = await api.put(`/measurements/${id}`, body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
