import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import {
  ViewState,
  EditingState,
  IntegratedEditing,
} from "@devexpress/dx-react-scheduler";

import {
  Scheduler,
  DayView,
  WeekView,
  MonthView,
  Appointments,
  DateNavigator,
  TodayButton,
  Toolbar,
  Resources,
  ViewSwitcher,
  AppointmentForm,
  AppointmentTooltip,
  ConfirmationDialog,
} from "@devexpress/dx-react-scheduler-material-ui";

import { useHistory } from "react-router-dom";
import SideNavigationBar from "../SideNavigationBar/SideNavigationBar";
import TopNavigationBar from "../TopNavigationBar/TopNavigationBar";
import TableScreenTemplate from "../../templates/TableScreenTemplate/TableScreenTemplate";
import {
  pink,
  purple,
  teal,
  amber,
  deepOrange,
  red,
  green,
} from "@material-ui/core/colors";
import { fetchAllEventsApi } from "../../../services/Event";

const resources = [
  {
    id: 1,
    fieldName: "status",
    title: "Status",
    instances: [
      {
        id: "In Progress",
        color: green,
      },
      {
        id: "Complete",
        color: teal,
      },
      {
        id: "Active",
        color: purple,
      },
      {
        id: "Staged",
        color: deepOrange,
      },
      {
        id: "Failed",
        color: red,
      },
      {
        id: "Cancelled",
        color: amber,
      },
    ],
  },
];

export default function CalendarDemo() {
  const [data, setData] = useState([]);
  const history = useHistory();
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

  useEffect(() => {
    async function fetchData() {
      const responseData = await fetchAllEventsApi("");
      setData(responseData);
    }
    fetchData();
  }, []);
  {
    data &&
      data.map(
        (option) => (
          (option.title = "Id:" + option.id + " (" + option.status + ")"),
          (option.stDate = new Date(option.scheduled)),
          (option.startDate = new Date(
            option.stDate.getFullYear(),
            option.stDate.getMonth(),
            option.stDate.getDate(),
            option.stDate.getHours(),
            option.stDate.getMinutes()
          )),
          (option.endDate = new Date(
            option.stDate.getFullYear(),
            option.stDate.getMonth(),
            option.stDate.getDate(),
            option.stDate.getHours(),
            option.stDate.getMinutes() + option.duration_minutes
          ))
        )
      );
  }
  const handleCommitChanges = ({ added, changed, deleted }) => {
    if (added) {
      const startingAddedId =
        data.length > 0 ? data[data.length - 1].id + 1 : 0;
      data = [...data, { id: startingAddedId, ...added }];
    }
    if (changed) {
      history.push("/event/id");
    }
    if (deleted !== undefined) {
      data = data.filter((appointment) => appointment.id !== deleted);
    }
    return data;
  };

  return (
    <TableScreenTemplate
      header={<TopNavigationBar />}
      sidebar={<SideNavigationBar handleTabChange={handleTabChange} />}
      body={
        <Paper>
          <Scheduler data={data}>
            <ViewState defaultCurrentViewName="Week" />
            <EditingState onCommitChanges={handleCommitChanges} />
            <IntegratedEditing />

            <DayView startDayHour={0} endDayHour={24} />
            <WeekView startDayHour={0} endDayHour={24} />
            <MonthView />
            <Toolbar />
            <DateNavigator />
            <TodayButton />
            <ViewSwitcher />
            <ConfirmationDialog />
            <Appointments />
            <AppointmentTooltip showOpenButton showCloseButton />
            {/* <AppointmentForm /> */}
            <Resources data={resources} />
          </Scheduler>
        </Paper>
      }
    />
  );
}
