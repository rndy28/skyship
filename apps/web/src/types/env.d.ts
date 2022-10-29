declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_WEBSITE_URL: string;
    }
  }
}

export {};
