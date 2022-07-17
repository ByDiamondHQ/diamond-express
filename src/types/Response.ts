export interface SuccessResponseBody {
  success: Boolean;
  data: { [key: string]: any };
  error?: string;
  notification?: {
    name: string;
    message: string;
  };
}

export interface FailureResponseBody {
  success: Boolean;
  data?: { [key: string]: any };
  error: string;
  notification?: {
    name: string;
    message: string;
  };
}