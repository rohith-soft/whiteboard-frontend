import React, { useState } from "react";
import { ERROR_MESSAGES, EVENT_FORM, TASK_LIST } from "../../../constants";
import EventForm from "../../molecules/EventForm";
import Button from "../../atoms/Button";
import {
  isEmpty,
  isPhoneNumberValid,
  isStateValid,
} from "../../../utils/helper";

const CreateEvent = ({ handleOnCreate }) => {
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
    CREATE_BUTTON,
    TASK,
    DATE,
  } = LABELS;

  const [formValues, setFormValues] = useState({
    [DESCRIPTION]: "",
    [DURATION]: "",
    [CLLI]: "",
    [ADDRESS]: "",
    [CITY]: "",
    [STATE]: "",
    [CONTACT_NAME]: "",
    [CONTACT_PHONE]: "",
    [NOTE]: "",
    [LATITUDE]: "",
    [LONGITUDE]: "",
  });
  const [task, setTask] = useState("");
  const [date, setDate] = useState(new Date());
  const [fieldErrors, setFieldErrors] = useState({
    [DESCRIPTION]: "",
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

  // TODO: Update this to data fetched from backend
  let updatedTaskList = [];
  TASK_LIST.forEach((taskItem) => {
    const task = {};
    task.name = taskItem.name;
    task.value = taskItem.Id;
    updatedTaskList.push(task);
  });

  const handleDateChange = (date) => {
    setDate(date);
  };

  const handleSelectChange = (value) => {
    setTask(value);
  };

  const validateAndCreate = () => {
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
      DESCRIPTION,
      DURATION,
      ADDRESS,
      CITY,
      LATITUDE,
      LONGITUDE,
      STATE,
      CONTACT_NAME,
      CONTACT_PHONE,
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
      handleOnCreate(formValues, date, task);
    }
  };

  return (
    <>
      <EventForm
        description={formValues[DESCRIPTION]}
        duration={formValues[DURATION]}
        clli={formValues[CLLI]}
        city={formValues[CITY]}
        address={formValues[ADDRESS]}
        state={formValues[STATE]}
        contactName={formValues[CONTACT_NAME]}
        contactPhone={formValues[CONTACT_PHONE]}
        note={formValues[NOTE]}
        task={task}
        latitude={formValues[LATITUDE]}
        longitude={formValues[LONGITUDE]}
        fieldErrors={fieldErrors}
        date={date}
        options={updatedTaskList}
        handleFieldChange={handleFieldChange}
        handleDateChange={handleDateChange}
        handleTaskChange={handleSelectChange}
      />
      <div style={{ marginTop: "24px" }}>
        <Button
          label={CREATE_BUTTON}
          color="primary"
          variant="contained"
          size="medium"
          onClick={validateAndCreate}
        />
      </div>
    </>
  );
};

CreateEvent.propTypes = {};

CreateEvent.defaultProps = {};

export default CreateEvent;
