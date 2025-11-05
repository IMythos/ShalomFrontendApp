export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponseData {
  token: string;
  role: string;
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T | null;
}

export type LoginResponse = ApiResponse<LoginResponseData>;
