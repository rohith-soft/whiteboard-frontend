import React, { useState } from "react";
import { EVENT_FORM, TASK_LIST } from "../../../constants";
import EventForm from "../../molecules/EventForm";
import Button from "../../atoms/Button";

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

  const handleFieldChange = (fieldName, value) => {
    setFormValues((prevState) => ({
      ...prevState,
      [fieldName]: value,
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
          onClick={() => handleOnCreate(formValues, date, task)}
        />
      </div>
    </>
  );
};

CreateEvent.propTypes = {};

CreateEvent.defaultProps = {};

export default CreateEvent;
