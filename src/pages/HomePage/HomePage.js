import React, { useState, useEffect } from "react";
import TableScreenTemplate from "../../components/templates/TableScreenTemplate/TableScreenTemplate";
import TopNavigationBar from "../../components/organisms/TopNavigationBar/TopNavigationBar";
import SideNavigationBar from "../../components/organisms/SideNavigationBar/SideNavigationBar";
import { headCells } from "../../constants";
import EnhancedTable from "../../components/organisms/WhiteBoardTable/EnhancedTable";
import axios from "axios";
import { urls, statusContants } from "../../constants";

export default function HomePage(props) {
  const [activeTab, setActiveTab] = useState("List");
  const [rows, setRows] = useState([]);
  const [data, setData] = useState({
    status: [],
    start_date: "",
    end_date: "",
  });
  console.log("tasks", props.tasks);

  const fetchAllEvents = () => {
    var status = data.status.length > 0 ? "status=" + data.status : "";
    var dateRange =
      data.start_date === "" || data.end_date === ""
        ? ""
        : "start_date=" + data.start_date + "&end_date=" + data.end_date;
    console.log("status -  dateRange", status + "  -  " + dateRange);
    const url = urls.getAllEvents + frameQueryParams(status, dateRange);
    console.log("url ", url);
    axios
      .get(url)
      .then((resp) => {
        if (resp.status == 200) {
          if (resp.data.length > 0) {
            resp.data.map((whiteBoardEvent) => {
              var taskId = whiteBoardEvent["task_id"];
              whiteBoardEvent["task_id"] = window.localStorage.getItem(taskId);
              var status = whiteBoardEvent["status"];
              whiteBoardEvent["status"] = statusContants[status];
            });
          }
          setRows(resp.data);
        }
      })
      .catch((err) => {
        console.log(err);
        setRows([
          {
            id: 2,
            status: "IN_PROGRESS",
            task_id: 1,
            description: "Dummy Description.",
            scheduled: "2021-02-08T08:47:52+0000",
            duration_minutes: 10,
            location_latitude: 42.298,
            location_longitude: -71.088,
            location_address: "Boston, MA",
            city: "Boston",
            state: "MA",
            contact_name: "Dummy Contact Name",
            contact_number: "1234567890",
            notes: "Dummy Notes.",
          },
        ]);
      });
  };

  function frameQueryParams(status, dateRange) {
    if (status !== "" && dateRange !== "") {
      return "?" + status + "&" + dateRange;
    } else {
      if (status === "" && dateRange === "") {
        return "";
      }
      if (status !== "") {
        return "?" + status;
      } else {
        return "?" + dateRange;
      }
    }
  }

  useEffect(() => {
    fetchAllEvents();
  }, []);

  useEffect(() => {
    fetchAllEvents();
  }, [data]);

  const handleTabChange = (event, value) => {
    console.log("Tab Value Changed -> ", value);
    setActiveTab(value);
  };

  const handleFilterButtonClick = (event, status, startDate, endDate) => {
    setData({ status: status, start_date: startDate, end_date: endDate });
  };

  return (
    <div>
      <TableScreenTemplate
        header={<TopNavigationBar />}
        sidebar={<SideNavigationBar handleTabChange={handleTabChange} activeTab={activeTab} />}
        body={
          activeTab === "List" ? (
            <EnhancedTable
              headCells={headCells}
              rows={rows}
              defaultOrderBy="name"
              defaultOrder="asc"
              rowsPerPage={5}
              handleFilterButtonClick={handleFilterButtonClick}
            />
          ) : (
            <div> Add Form </div>
          )
        }
      />
    </div>
  );
}
