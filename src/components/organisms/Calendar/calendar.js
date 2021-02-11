import React, { useState, useEffect } from "react";
import axios from "axios";
import Paper from '@material-ui/core/Paper';
import { ViewState ,EditingState,IntegratedEditing} from '@devexpress/dx-react-scheduler';

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
} from '@devexpress/dx-react-scheduler-material-ui';

import { urls } from "../../../constants/index";
import { useHistory } from "react-router-dom";

import {
  pink, purple, teal, amber, deepOrange,red,green
} from '@material-ui/core/colors';
const resources = [
  {
    id:1,
    fieldName:'status',
    title:'Status',
    instances:[
      {
        id: "IN_PROGRESS",
        color: green,
      }, {
        id: "COMPLETE",
        color: teal,
      }, {
        id: "ACTIVE",
        color: purple,
      }, {
        id: "STAGED",
        color: deepOrange,
      }, {
        id: "FAILED",
        color: red,
      },{
        id: "CANCELLED",
        color: amber,
      },
    ]
  }
  
];

export default function CalendarDemo() {
    const [data,setData]=useState([])
    const history = useHistory();
    const fetchAllEvents = () => {
        const url = urls.getAllEvents;
        axios
          .get(url)
          .then((resp) => {
            if (resp.status == 200) {
              setData(resp.data)
            }
          })
          .catch((err) => {
            console.log(err);
          });
      };
    
      useEffect(() => {
        fetchAllEvents();
        console.log(data)
      }, []);
      {data && data.map(option=>(
        console.log(option), 
        option.title="Id:"+option.id +" ("+option.status+")",
        option.stDate=new Date(option.scheduled),
        option.startDate=new Date(option.stDate.getFullYear(),option.stDate.getMonth(),option.stDate.getDate(),option.stDate.getUTCHours(),option.stDate.getUTCMinutes()),
        option.endDate=new Date(option.stDate.getFullYear(),option.stDate.getMonth(),option.stDate.getDate(),option.stDate.getUTCHours(),option.stDate.getUTCMinutes()+option.duration_minutes)

      ))}
      const handleCommitChanges=({ added, changed, deleted }) =>{
          if (added) {
            const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
            data = [...data, { id: startingAddedId, ...added }];
          }
          if (changed) {
            data = data.map(appointment => (
                history.push("/event/" + appointment.id)));
          }
          if (deleted !== undefined) {
            data = data.filter(appointment => appointment.id !== deleted);
          }
          return data;
      }
      
    return (
      <Paper>
        <Scheduler
          data={data}
          height={960}
        >
          <ViewState
            defaultCurrentDate={"2021-02-11"}
            defaultCurrentViewName="Week"
          />
          <EditingState
            onCommitChanges={handleCommitChanges}
          />
          <IntegratedEditing />

          <DayView
            startDayHour={8}
            endDayHour={24}
          />
          <WeekView
            startDayHour={8}
            endDayHour={24}
          />
          <MonthView />
          <Toolbar />
          <DateNavigator /> 
          <TodayButton  />
          <ViewSwitcher />
          <ConfirmationDialog />
          <Appointments />
          <AppointmentTooltip
            showOpenButton
            showCloseButton
          />
          {/* <AppointmentForm /> */}
          <Resources
            data={resources}
          />
        </Scheduler>
    </Paper>
    );
}
