import LoginRequest from "../types/LoginRequest";
import RegisterRequest from "../types/RegisterRequest";

const BASE_URL = 'http://localhost:8080';

export const AuthService = {
  
  login: async (loginRequest: LoginRequest): Promise<string> => {

    try {
      const response = await fetch(`${BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginRequest),
      });

      if (!response.ok) {
        throw new Error('Inicio de sesión fallido');
      }
      const { token } = await response.json();
      if (!token) {
        throw new Error('ERROR: No se ha podido encontrar el token');
      }

      localStorage.setItem('tokenLogIn', token);
      return token;

    } catch (error) {
      console.error('Error al iniciar sesión desde el service');
      throw error;
    }
  },

  register: async (registerRequest: RegisterRequest): Promise<string> => {

    try {
      const response = await fetch(`${BASE_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registerRequest),
      });

      if (!response.ok) {
        throw new Error('Registro fallido');
      }

      const { token } = await response.json();
      if (!token) {
        throw new Error('ERROR: No se ha podido encontrar el token');
      }

      localStorage.setItem('token', token);
      return token;

    } catch (error) {
      console.error('Error al registrar desde el service');
      throw error;
    }
  }
};