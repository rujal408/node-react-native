import axiosConfig from './axiosConfig';

class API {
  post<T>(url: string, data: T) {
    return axiosConfig.post(url, data);
  }

  get<T>(url: string, params?: T) {
    return axiosConfig.get(url, params ? params : {});
  }

  patch<T>(url: string, params?: T) {
    return axiosConfig.patch(url, params ? params : {});
  }
}

export default API;
