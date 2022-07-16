import { object, string, } from 'yup';

export const signup = object({
  name: string().required().typeError('Name field is required'),
  email: string().required().typeError('Email field is required'),
});

export const token = object({
  email: string().required().typeError('Email field is required'),
});

export const login = object({
  token: string().required().typeError('Token field is required'),
});
