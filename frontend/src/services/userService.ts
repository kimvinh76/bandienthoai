import axios from 'axios';
import { User } from '../types/User';
import { attachAuthInterceptor } from './authService';

// Use relative '/api' so Next.js rewrites (next.config.js) proxy calls to backend.
const API_BASE_URL = '/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // 10s
});

function handleAxiosError(err: any) {
  if (err.response) {
    // Server responded with a status code outside 2xx
    const status = err.response.status;
    const data = err.response.data;
    return new Error(`API error ${status}: ${data && data.message ? data.message : JSON.stringify(data)}`);
  } else if (err.request) {
    // No response received
    return new Error('No response from server. Is the backend running?');
  } else {
    return new Error(err.message || 'Unknown error');
  }
}

export const userService = {
  // Lấy tất cả users
  getAllUsers: async (): Promise<User[]> => {
    try {
      const response = await api.get('/users');
      return response.data;
    } catch (err: any) {
      throw handleAxiosError(err);
    }
  },

  // Lấy user theo ID
  getUserById: async (id: number): Promise<User> => {
    try {
      const response = await api.get(`/users/${id}`);
      return response.data;
    } catch (err: any) {
      throw handleAxiosError(err);
    }
  },

  // Tạo user mới
  createUser: async (user: Omit<User, 'id' | 'createdAt' | 'updatedAt'>): Promise<User> => {
    try {
      const response = await api.post('/users', user);
      return response.data;
    } catch (err: any) {
      throw handleAxiosError(err);
    }
  },

  // Cập nhật user
  updateUser: async (id: number, user: Omit<User, 'id' | 'createdAt' | 'updatedAt'>): Promise<User> => {
    try {
      const response = await api.put(`/users/${id}`, user);
      return response.data;
    } catch (err: any) {
      throw handleAxiosError(err);
    }
  },

  // Xóa user
  deleteUser: async (id: number): Promise<string> => {
    try {
      const response = await api.delete(`/users/${id}`);
      return response.data;
    } catch (err: any) {
      throw handleAxiosError(err);
    }
  },

  // Tìm user theo email
  getUserByEmail: async (email: string): Promise<User> => {
    try {
      const response = await api.get(`/users/email/${email}`);
      return response.data;
    } catch (err: any) {
      throw handleAxiosError(err);
    }
  },
};

export { api };

// Attach auth interceptor dynamically to include token when available
attachAuthInterceptor(api);