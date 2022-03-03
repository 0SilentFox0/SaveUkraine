import axiosOriginal, { AxiosRequestConfig } from 'axios';

interface Config {
  directus: AxiosRequestConfig;
}

const config: Config = {
  directus: {
    baseURL: 'https://stopwarukraine.directus.app/',
  },
};

const createApi = (config = {}) => {
  const api = axiosOriginal.create(config);
  api.interceptors.request.use(
    successfulReq => {
      return successfulReq;
    },
    error => {
      console.log('ERROR: ', error);

      throw error;
    },
  );
  return api;
};

export const directus = createApi(config.directus);
