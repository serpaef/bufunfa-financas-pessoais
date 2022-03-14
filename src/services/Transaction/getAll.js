import api, { headers } from '../api';

export default async function getAll() {
  try {
    const transactions = await api.get('/transactions', headers)
    return transactions.data;
  } catch (e) {
    return Promise.resolve([]);
  }
}
