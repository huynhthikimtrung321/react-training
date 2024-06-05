const BASE_API_URL = process.env['BASE_API_URL'] ?? '';

interface PutParams<T> {
  endpoint: string;
  id: string;
  body: Omit<T, 'id'>;
}

interface DeleteParams {
  endpoint: string;
  id: string;
}

export const service = {
  put: async <T>({ endpoint, body, id }: PutParams<T>) => {
    try {
      const res = await fetch(`${BASE_API_URL}/${endpoint}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      const data: T = await res.json();

      return { data, error: null };
    } catch (error) {
      return { data: null, error: 'No data received' };
    }
  },
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
