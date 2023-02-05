import api from './api';

export async function save(body, token) {
  const response = await api.post('/exam', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function getExamInformation(token) {
  const response = await api.get('/exam', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function getExamIdInformation(query, token) {
  const response = await api.get(`/exam/${query}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function saveUpdate(body, id, token) {
  const response = await api.put(`/exam/${id}`, body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
