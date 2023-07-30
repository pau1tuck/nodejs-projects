declare module 'express-session' {
    interface SessionData {
      jwt: string;
      [key: string]: any;
    }
  }