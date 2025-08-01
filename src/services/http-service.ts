import type { AxiosResponse } from "axios";
import apiClient from "./api-client";

interface Entity {
    id: number;
}
class HttpService {

    private endpoint: string;

    constructor(endpoint: string){
        this.endpoint = endpoint
    }

    getAll<T>(){
        const controller = new AbortController();

        const request = apiClient
              .get<T[]>(this.endpoint, {
                signal: controller.signal,
              })
        return {request, cancel: () => controller.abort()}
    }

    delete(id: number) : Promise<AxiosResponse>  {
        return apiClient.delete(`${this.endpoint}/${id}`);
    }

    add<T>(entity: T): Promise<AxiosResponse>{
        return apiClient
              .post(this.endpoint, entity)
    }

    update<T extends Entity>(entity: T): Promise<AxiosResponse> {
         return apiClient.patch(`${this.endpoint}/${entity.id}`, entity)
    }

}

const create = (endpoint: string) => new HttpService(endpoint);

export default create;

