import { Paper, Typography } from "@material-ui/core";
import axios from "axios";
import React from "react";
import CreateEvent from "../../components/organisms/CreateEvent";
import SideNavigationBar from "../../components/organisms/SideNavigationBar/SideNavigationBar";
import TopNavigationBar from "../../components/organisms/TopNavigationBar/TopNavigationBar";
import TableScreenTemplate from "../../components/templates/TableScreenTemplate/TableScreenTemplate";
import { EVENT_FORM, urls } from "../../constants";
import { useHistory } from "react-router-dom";

const CreateEventPage = () => {
  const history = useHistory();
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
    try {
      axios.post(urls.eventBase, payload);
    } catch {
      // TODO: Add a modal or something to notify user regarding the issue here
    } finally {
      history.push("/");
    }
  };

  const handleTabChange = (event, value) => {
    if (value === "List") {
      history.push("/");
    }
    if (value === "Add") {
      history.push("/create/event/");
    }
  };

  return (
    <TableScreenTemplate
      header={<TopNavigationBar />}
      sidebar={<SideNavigationBar handleTabChange={handleTabChange} />}
      body={
        <Paper style={{ backgroundColor: "#edf5f6" }}>
          <div style={{ padding: 24 }}>
            <Typography variant="h5" style={{ marginBottom: 16 }}>
              Create Whiteboard Event
            </Typography>
            <CreateEvent handleOnCreate={handleOnCreate} />
          </div>
        </Paper>
      }
    />
  );
};

CreateEventPage.propTypes = {};

CreateEventPage.defaultProps = {};

export default CreateEventPage;
