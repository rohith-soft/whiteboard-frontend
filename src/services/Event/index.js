import { urls, statusContants } from "../../constants";
import axios from "axios";
import * as moment from "moment";

export const fetchAllEvents = async (queryParams) => {
  console.log("HP rows1.5 " );

  const url = urls.getAllEvents + queryParams;
  await axios
    .get(url)
    .then((resp) => {
      if (resp.status == 200) {
        if (resp.data.length > 0) {
          resp.data.map((whiteBoardEvent) => {
            var taskId = whiteBoardEvent["task_id"];
            whiteBoardEvent["task_id"] = window.localStorage.getItem(taskId);
            var status = whiteBoardEvent["status"];
            whiteBoardEvent["status"] = statusContants[status];
            var dateTime = whiteBoardEvent["scheduled"];
            whiteBoardEvent["scheduled"] = `${moment(dateTime).format("L")} ${moment(dateTime).format("LT")}`;
          });
        }
        return resp.data;
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
