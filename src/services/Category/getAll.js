import api, { headers } from '../api';

export default async function getAll() {
  try {
    const categories = await api.get('/categories', headers)
    return categories.data;
  } catch (e) {
    return Promise.resolve([]);
  }
}
