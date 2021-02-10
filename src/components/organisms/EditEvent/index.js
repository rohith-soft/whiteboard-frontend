import React, { useState } from "react";
import { EVENT_FORM, TASK_LIST } from "../../../constants";
import EventForm from "../../molecules/EventForm";
import Button from "../../atoms/Button";
import { Typography } from "@material-ui/core";

const EditEvent = ({ eventDetails, handleOnEdit }) => {
  const { LABELS } = EVENT_FORM;
  const {
    DESCRIPTION,
    DURATION,
    CLLI,
    ADDRESS,
    CITY,
    LATITUDE,
    LONGITUDE,
    STATE,
    CONTACT_NAME,
    CONTACT_PHONE,
    NOTE,
    EDIT_BUTTON,
    WHITEBOARD_ID,
    STATUS: STATUS_LABEL,
    EXISTING_NOTES,
  } = LABELS;

  const [formValues, setFormValues] = useState({
    [WHITEBOARD_ID]: eventDetails?.id,
    [DESCRIPTION]: eventDetails?.description,
    [DURATION]: eventDetails?.durationMinutes,
    [CLLI]: eventDetails?.clli,
    [ADDRESS]: eventDetails?.locationAddress,
    [CITY]: eventDetails?.city,
    [STATE]: eventDetails?.state,
    [CONTACT_NAME]: eventDetails?.contactName,
    [CONTACT_PHONE]: eventDetails?.contactNumber,
    [NOTE]: "",
    [LATITUDE]: eventDetails?.locationLatitude,
    [LONGITUDE]: eventDetails?.locationLongitude,
    [STATUS_LABEL]: eventDetails?.status,
    [EXISTING_NOTES]: eventDetails?.notes,
  });
  const [task, setTask] = useState(eventDetails?.taskId);
  const [date, setDate] = useState(new Date(eventDetails?.scheduled));

  const handleFieldChange = (fieldName, value) => {
    setFormValues((prevState) => ({
      ...prevState,
      [fieldName]: value,
    }));
  };

  let updatedTaskList = [];
  // TODO: Update this to data fetched from backend
  TASK_LIST.forEach((taskItem) => {
    const task = {};
    task.name = taskItem.name;
    task.value = taskItem.Id;
    updatedTaskList.push(task);
  });

  const handleDateChange = (date) => {
    setDate(date);
  };

  const handleTaskChange = (value) => {
    setTask(value);
  };

  const handleStatusChange = (value) => {
    setFormValues((prevState) => ({
      ...prevState,
      [STATUS_LABEL]: value,
    }));
  };

  return (
    <>
      <Typography variant="subtitle2" style={{ marginBottom: 16 }}>
        {WHITEBOARD_ID}
        {formValues[WHITEBOARD_ID]}
      </Typography>
      <EventForm
        description={formValues[DESCRIPTION]}
        duration={formValues[DURATION]}
        clli={formValues[CLLI]}
        city={formValues[CITY]}
        address={formValues[ADDRESS]}
        editEvent
        state={formValues[STATE]}
        contactName={formValues[CONTACT_NAME]}
        contactPhone={formValues[CONTACT_PHONE]}
        note={formValues[NOTE]}
        task={task}
        latitude={formValues[LATITUDE]}
        longitude={formValues[LONGITUDE]}
        status={formValues[STATUS_LABEL]}
        existingNote={formValues[EXISTING_NOTES]}
        date={date}
        options={updatedTaskList}
        handleFieldChange={handleFieldChange}
        handleDateChange={handleDateChange}
        handleTaskChange={handleTaskChange}
        handleStatusChange={handleStatusChange}
      />
      <div style={{ marginTop: "24px" }}>
        <Button
          label={EDIT_BUTTON}
          color="primary"
          variant="contained"
          size="medium"
          onClick={() => handleOnEdit(formValues, date, task)}
        />
      </div>
    </>
  );
};

EditEvent.propTypes = {};

EditEvent.defaultProps = {};

export default EditEvent;
