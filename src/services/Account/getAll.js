import api, { headers } from '../api';

export default async function getAll() {
  try {
    const accounts = await api.get('/accounts', headers)
    return accounts.data;
  } catch (e) {
    return Promise.resolve([]);
  }
}
