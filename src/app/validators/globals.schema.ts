import { object, number, string, } from 'yup';

export const globals = object({
  PORT: number().required().typeError('Port must be a number'),
  DB_URL: string().required().typeError('A Database url is required'),

  
  EMAIL: object({
    HOST: string(),
    PORT: number(),
    USER: string(),
    PASS: string(),
    SENDER: string().email('Must be a valid email')
  }).notRequired()

  // Add other global variables here
});