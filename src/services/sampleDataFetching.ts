import axios, { AxiosRequestConfig } from "axios";

class DataFetch {
  public static get(): Promise<AxiosRequestConfig> | undefined {
    return axios.get("http://localhost:3000/posts");
  }
}
export default DataFetch;
