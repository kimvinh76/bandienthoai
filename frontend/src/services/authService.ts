import axios from 'axios';

const API_BASE_URL = '/api';

const authApi = axios.create({
  baseURL: API_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  timeout: 10000,
});

export const authService = {
  register: async (payload: { name: string; email: string; password: string; phone?: string; address?: string }) => {
    const res = await authApi.post('/auth/register', payload);
    return res.data;
  },

  login: async (payload: { email: string; password: string }) => {
    const res = await authApi.post('/auth/login', payload);
    const token = res.data?.token;
    if (token) saveAuthToken(token);
    return res.data;
  }
  ,
  getMe: async () => {
    const res = await authApi.get('/auth/me');
    return res.data;
  }
};

// Helper to store token
export function saveAuthToken(token: string) {
  if (typeof window !== 'undefined') {
    localStorage.setItem('auth_token', token);
    // notify other parts of the app in the same tab
    try { window.dispatchEvent(new Event('authChanged')); } catch (e) { /* ignore */ }
  }
}

export function getAuthToken(): string | null {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('auth_token');
  }
  return null;
}

export function clearAuthToken() {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('auth_token');
    try { window.dispatchEvent(new Event('authChanged')); } catch (e) { /* ignore */ }
  }
}

export function attachAuthInterceptor(axiosInstance: any) {
  axiosInstance.interceptors.request.use((config: any) => {
    const token = getAuthToken();
    if (token) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });
}

// Attach interceptor to this authApi instance so all calls (getMe, etc.) include the token when present
attachAuthInterceptor(authApi);
