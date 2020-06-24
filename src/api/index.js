import axios from 'axios';

export const api = {
  registration: (data) => axios.post('/register', {
    ...data,
  }).then((res) => res),

  login: (data) => axios.post('/login', {
    ...data,
  }).then((res) => res),

  contacts: {
    fetch: () => axios.get('/664/contacts').then((res) => res),
    delete: (id, token) => axios.delete(`/664/contacts/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => res),
    create: (data, token) => axios.post('/664/contacts', data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => res),
    search: ({ name }) => axios.get(`/contacts?name=${name}`).then((res) => res),
    change: (id, data, token) => axios.patch(`/664/contacts/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => res),
  },
};
