import { PersonJSON } from "@/datamodel";
import axios, { AxiosResponse } from "axios";

const JSON_URL = "https://updates.suade.org/files/people.json";

export function fetchData(): Promise<PersonJSON[]> {
  return new Promise((resolve, reject) => {
    axios
      .get(JSON_URL)
      .then((elem: AxiosResponse<PersonJSON[]>) => {
        console.log(elem.data);
        resolve(elem.data);
      })
      .catch((err: any) => reject(err));
  });
}
