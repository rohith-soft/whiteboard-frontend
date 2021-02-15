import { urls } from "../../constants";
import axios from "axios";

export const fetchAllTasks = async () => {
  const url = urls.getAllTasks;
  try {
    const resp = await axios.get(url);
    if (resp.status == 200) {
      resp.data.map((task) => {
        window.localStorage.setItem(task.id, task.name);
      });
    }
  } catch (err) {
    console.log(err);
  }
};
