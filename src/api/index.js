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
  },
};
