import { baseUrl } from "../const";
import axios from "axios";

export const wilayah: any = () => {
  return new Promise(async (resolve: any, reject: any) => {
    await axios
      .get(`${baseUrl}cwilayah/wilayahKabGet`)
      .then((response: any): void => {
        if (response.status === 200) {
          const result: any = response.data;
          resolve(result);
        } else {
          type Message = {
            code: number;
            msg: string;
          };
          const error: Message = {
            code: response.status,
            msg: "Failed",
          };
          resolve(error);
        }
      })
      .catch((error: any): void => {
        reject(error);
      });
  });
};
