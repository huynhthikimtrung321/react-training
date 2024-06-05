const BASE_API_URL = process.env['BASE_API_URL'] ?? '';

interface DeleteParams {
  endpoint: string;
  id: string;
}

export const service = {
  delete: async ({ endpoint, id }: DeleteParams) => {
    try {
      const res = await fetch(`${BASE_API_URL}/${endpoint}/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();

      return { data, error: null };
    } catch (error) {
      return { data: null, error: 'No data received' };
    }
  },
};
