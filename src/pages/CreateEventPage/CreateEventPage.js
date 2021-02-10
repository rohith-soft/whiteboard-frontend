import { Typography } from "@material-ui/core";
import axios from "axios";
import React from "react";
import CreateEvent from "../../components/organisms/CreateEvent";
import { EVENT_FORM, urls } from "../../constants";

const CreateEventPage = () => {
  const { LABELS } = EVENT_FORM;
  const {
    DESCRIPTION,
    DURATION,
    CLLI,
    ADDRESS,
    CITY,
    SITE_TYPE,
    STATE,
    CONTACT_NAME,
    CONTACT_PHONE,
    NOTE,
    LATITUDE,
    LONGITUDE,
  } = LABELS;

  const handleOnCreate = (formValues, date, task) => {
    const isoDate = new Date(date).toISOString();
    const payload = {
      task_id: task,
      description: formValues[DESCRIPTION],
      scheduled: isoDate,
      duration_minutes: formValues[DURATION],
      location_latitude: formValues[LATITUDE],
      location_longitude: formValues[LONGITUDE],
      location_address: formValues[ADDRESS],
      city: formValues[CITY],
      state: formValues[STATE],
      contact_name: formValues[CONTACT_NAME],
      contact_number: formValues[CONTACT_PHONE],
      notes: formValues[NOTE],
      clli: formValues[CLLI],
      site_type: formValues[SITE_TYPE],
    };
    axios.post(urls.eventBase, payload);
    // TODO: Handle redirection after edit and create
  };

  return (
    <div style={{ padding: 24 }}>
      <Typography variant="h5" style={{ marginBottom: 16 }}>
        Create Whiteboard Event
      </Typography>
      <CreateEvent handleOnCreate={handleOnCreate} />
    </div>
  );
};

CreateEventPage.propTypes = {};

CreateEventPage.defaultProps = {};

export default CreateEventPage;
