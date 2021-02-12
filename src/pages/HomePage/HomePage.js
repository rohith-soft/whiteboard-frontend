import React, { useState, useEffect } from "react";
import TableScreenTemplate from "../../components/templates/TableScreenTemplate/TableScreenTemplate";
import TopNavigationBar from "../../components/organisms/TopNavigationBar/TopNavigationBar";
import SideNavigationBar from "../../components/organisms/SideNavigationBar/SideNavigationBar";
import { headCells } from "../../constants";
import EnhancedTable from "../../components/organisms/WhiteBoardTable/EnhancedTable";
import { useHistory } from "react-router-dom";
import { fetchAllEventsApi } from "../../services/Event";

export default function HomePage() {
  const history = useHistory();
  const [rows, setRows] = useState([]);
  const [data, setData] = useState({
    status: [],
    start_date: "",
    end_date: "",
  });

  function frameQueryParams() {
    var status = data.status.length > 0 ? "status=" + data.status : "";
    var dateRange =
      data.start_date === "" || data.end_date === ""
        ? ""
        : "start_date=" + data.start_date + "&end_date=" + data.end_date;

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
    async function fetchData() {
      const rows = await fetchAllEventsApi(frameQueryParams());
      setRows(rows);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const rows = await fetchAllEventsApi(frameQueryParams());
      setRows(rows);
    }
    fetchData();
  }, [data]);

  const handleTabChange = (event, value) => {
    if (value === "List") {
      history.push("/");
    }
    if (value === "Add") {
      history.push("/create/event/");
    }
    if (value === "Calendar") {
      history.push("/calendar");
    }
  };

  const handleFilterButtonClick = (event, status, startDate, endDate) => {
    setData({ status: status, start_date: startDate, end_date: endDate });
  };
  const handleFilterById = (event) => {
    var eventId = event.target.value;
    if (eventId === "") {
      async function fetchData() {
        const rows = await fetchAllEventsApi(frameQueryParams());
        setRows(rows);
      }
      fetchData();
    } else {
      setRows(rows.filter((eachEvent) => (eachEvent.id + "").includes(eventId + "")));
    }
  };
  return (
    <TableScreenTemplate
      header={<TopNavigationBar />}
      sidebar={<SideNavigationBar handleTabChange={handleTabChange} />}
      body={
        <EnhancedTable
          headCells={headCells}
          rows={rows}
          defaultOrderBy="name"
          defaultOrder="asc"
          rowsPerPage={5}
          handleFilterButtonClick={handleFilterButtonClick}
          handleFilterById={handleFilterById}
        />
      }
    />
  );
}
