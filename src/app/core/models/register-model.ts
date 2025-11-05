import { ApiResponse } from "./auth-model";

export interface RegisterRequest {
  username: string;
  email: string;
  password: string;
  dni?: string;
  address?: string;
  phone?: string;
  role: 'CLIENT' | 'ADMIN' | 'EMPLOYEE';
}

export type RegisterResponse = ApiResponse<any>;
