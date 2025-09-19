export interface User {
  id?: number;
  name: string;
  email: string;
  phone?: string;
  address?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface ApiResponse {
  message: string;
  data?: any;
  success: boolean;
}