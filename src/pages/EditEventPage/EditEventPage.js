import axios from "axios";
import React, { useEffect, useState } from "react";
import { EVENT_FORM, urls } from "../../constants";
import EditEvent from "../../components/organisms/EditEvent";
import { Typography } from "@material-ui/core";

const EditEventPage = () => {
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
    STATUS: STATUS_LABEL,
    NOTE,
    LATITUDE,
    LONGITUDE,
    WHITEBOARD_ID,
  } = LABELS;

  const [event, setEvent] = useState(null);

  const fetchEventDetails = async (id) => {
    try {
      const response = await axios.get(`${urls.eventBase}/${id}`);
      setEvent(response.data);
    } catch {
      console.log("error");
    }
  };

  const handleOnEdit = (formValues, date, task) => {
    const isoDate = new Date(date).toISOString();
    const payload = {
      task_id: task,
      status: formValues[STATUS_LABEL],
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
    console.log(payload);
    try {
      axios.put(`${urls.eventBase}/${formValues[WHITEBOARD_ID]}`, payload);
    } catch (error) {
      console.warn(error);
      // TODO: Show user the error message
    } finally {
      window.location.replace("http://localhost:3000/");
    }
  };

  useEffect(() => {
    // TODO: Remove hardcoded id after routing implementation
    fetchEventDetails(12);
  }, []);

  return (
    <div style={{ padding: 24 }}>
      <Typography variant="h5" style={{ marginBottom: 16 }}>
        Edit Whiteboard Event
      </Typography>
      {event ? (
        <EditEvent eventDetails={event} handleOnEdit={handleOnEdit} />
      ) : (
        <div>Oops...Something went wrong! Please try again</div>
      )}
    </div>
  );
};

EditEventPage.propTypes = {};

EditEventPage.defaultProps = {};

export default EditEventPage;
