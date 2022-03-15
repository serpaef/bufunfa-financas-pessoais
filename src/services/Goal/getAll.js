import api, { headers } from '../api';

export default async function getAll() {
  try {
    const transactions = await api.get('/goals', headers)
    return transactions.data;
  } catch (e) {
    return Promise.resolve([]);
  }
}
