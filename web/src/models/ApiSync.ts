import axios, { AxiosPromise } from 'axios';
import { UserProps } from './User';

interface hasId {
  id?: number;
}

export class ApiSync<T extends hasId> {
  constructor(private rootUrl: string) {}

  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootUrl}/${id}`);
  }

  save(data: UserProps): AxiosPromise {
    const { id } = data;
    if (id) {
      return axios.put(`${this.rootUrl}/${id}`, data);
    } else {
      return axios.post(this.rootUrl, data);
    }
  }
}
