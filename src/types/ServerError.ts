export interface ServerError {
  response: {
    data: {
      status: number;
      message: string;
      error: string;
      timestamp: Date;
    };
  };
}
