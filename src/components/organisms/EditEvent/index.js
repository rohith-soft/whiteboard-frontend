import React, { useState } from "react";
import { ERROR_MESSAGES, EVENT_FORM, TASK_LIST } from "../../../constants";
import EventForm from "../../molecules/EventForm";
import Button from "../../atoms/Button";
import { Typography } from "@material-ui/core";
import {
  isEmpty,
  isPhoneNumberValid,
  isStateValid,
} from "../../../utils/helper";

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
    TASK,
    DATE,
  } = LABELS;

  const [formValues, setFormValues] = useState({
    [WHITEBOARD_ID]: eventDetails?.id,
    [DESCRIPTION]: eventDetails?.description,
    [DURATION]: eventDetails?.duration_minutes,
    // [CLLI]: eventDetails?.clli,
    [ADDRESS]: eventDetails?.location_address,
    [CITY]: eventDetails?.city,
    [STATE]: eventDetails?.state,
    [CONTACT_NAME]: eventDetails?.contact_name,
    [CONTACT_PHONE]: eventDetails?.contact_number,
    [NOTE]: "",
    [LATITUDE]: eventDetails?.location_latitude,
    [LONGITUDE]: eventDetails?.location_longitude,
    [STATUS_LABEL]: eventDetails?.status,
    [EXISTING_NOTES]: eventDetails?.notes,
  });
  const [task, setTask] = useState(eventDetails?.task_id);
  const [date, setDate] = useState(new Date(eventDetails?.scheduled));
  const [fieldErrors, setFieldErrors] = useState({
    [DURATION]: "",
    [ADDRESS]: "",
    [CITY]: "",
    [STATE]: "",
    [CONTACT_NAME]: "",
    [CONTACT_PHONE]: "",
    [LATITUDE]: "",
    [LONGITUDE]: "",
    [TASK]: "",
    [DATE]: "",
    [STATUS_LABEL]: "",
  });

  const handleFieldChange = (fieldName, value) => {
    setFormValues((prevState) => ({
      ...prevState,
      [fieldName]: value,
    }));
    setFieldErrors((prevState) => ({
      ...prevState,
      [fieldName]: "",
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
    setFieldErrors((prevState) => ({
      ...prevState,
      [TASK]: "",
    }));
  };

  const handleStatusChange = (value) => {
    setFormValues((prevState) => ({
      ...prevState,
      [STATUS_LABEL]: value,
    }));
  };

  const validateAndEdit = () => {
    let isValid = true;
    if (isEmpty(task)) {
      isValid = false;
      setFieldErrors((prevState) => ({
        ...prevState,
        [TASK]: ERROR_MESSAGES.EMPTY_FIELD,
      }));
    }
    if (isEmpty(date)) {
      isValid = false;
      setFieldErrors((prevState) => ({
        ...prevState,
        [DATE]: ERROR_MESSAGES.EMPTY_FIELD,
      }));
    }
    const fields = [
      DURATION,
      ADDRESS,
      CITY,
      LATITUDE,
      LONGITUDE,
      STATE,
      CONTACT_NAME,
      CONTACT_PHONE,
      STATUS_LABEL,
    ];
    fields.forEach((field) => {
      if (isEmpty(formValues[field])) {
        isValid = false;
        setFieldErrors((prevState) => ({
          ...prevState,
          [field]: ERROR_MESSAGES.EMPTY_FIELD,
        }));
      } else {
        setFieldErrors((prevState) => ({
          ...prevState,
          [field]: "",
        }));
      }
    });
    if (!isPhoneNumberValid(formValues[CONTACT_PHONE])) {
      isValid = false;
      setFieldErrors((prevState) => ({
        ...prevState,
        [CONTACT_PHONE]: ERROR_MESSAGES.PHONE_DIGITS,
      }));
    }
    if (!isStateValid(formValues[STATE])) {
      isValid = false;
      setFieldErrors((prevState) => ({
        ...prevState,
        [STATE]: ERROR_MESSAGES.STATE_DIGITS,
      }));
    }
    if (isValid) {
      handleOnEdit(formValues, date, task);
    }
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
        fieldErrors={fieldErrors}
        task={task}
        disabled={
          eventDetails?.status === "COMPLETE" ||
          eventDetails?.status === "FAILED" ||
          eventDetails?.status === "CANCELLED"
        }
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
          disabled={
            eventDetails?.status === "COMPLETE" ||
            eventDetails?.status === "FAILED" ||
            eventDetails?.status === "CANCELLED"
          }
          variant="contained"
          size="medium"
          onClick={validateAndEdit}
        />
      </div>
    </>
  );
};

EditEvent.propTypes = {};

EditEvent.defaultProps = {};

export default EditEvent;
