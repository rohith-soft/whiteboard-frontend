import React from "react";
import Dropdown from "../../atoms/DropDown";
import TextField from "../../atoms/TextField";
import "date-fns";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { EVENT_FORM, STATUS } from "../../../constants";

const EventForm = ({
  editEvent,
  options,
  status,
  task,
  description,
  date,
  duration,
  clli,
  address,
  state,
  city,
  latitude,
  longitude,
  contactName,
  contactPhone,
  note,
  existingNote,
  handleFieldChange,
  handleDateChange,
  handleTaskChange,
  handleStatusChange,
}) => {
  const { LABELS } = EVENT_FORM;
  const {
    TASK,
    DESCRIPTION,
    DATE,
    TIME,
    DURATION,
    CLLI,
    ADDRESS,
    LATITUDE,
    LONGITUDE,
    CITY,
    STATE,
    CONTACT_NAME,
    STATUS: STATUS_LABEL,
    CONTACT_PHONE,
    NOTE,
    EXISTING_NOTES,
  } = LABELS;

  return (
    <>
      <Grid container direction="column" justify="space-evenly" spacing={6}>
        {editEvent && (
          <Grid item xs={12}>
            <Dropdown
              label={STATUS_LABEL}
              value={status}
              handleSelectChange={handleStatusChange}
              options={STATUS}
              variant="outlined"
            />
          </Grid>
        )}
        <Grid item xs={12}>
          <Dropdown
            label={TASK}
            variant="outlined"
            value={task}
            options={options}
            handleSelectChange={handleTaskChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            label={DESCRIPTION}
            name={DESCRIPTION}
            value={description}
            shrink
            handleTextChange={handleFieldChange}
            multiline
            rows={7}
            rowsMax={7}
          />
        </Grid>
        <Grid item>
          <Grid container direction="row" justify="flex-start" spacing={8}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid item>
                <KeyboardDatePicker
                  inputVariant="outlined"
                  margin="normal"
                  id="date-picker-dialog"
                  label={DATE}
                  format="MM/dd/yyyy"
                  value={date}
                  minDate={new Date()}
                  style={{ width: "360px" }}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />
              </Grid>
              <Grid item>
                <KeyboardTimePicker
                  inputVariant="outlined"
                  margin="normal"
                  id="time-picker"
                  style={{ width: "360px" }}
                  label={TIME}
                  value={date}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change time",
                  }}
                />
              </Grid>
            </MuiPickersUtilsProvider>
          </Grid>
        </Grid>
        <Grid item>
          <TextField
            variant="outlined"
            label={DURATION}
            type="number"
            shrink
            name={DURATION}
            value={duration}
            handleTextChange={handleFieldChange}
          />
        </Grid>
        <Grid item>
          {/* <Grid item>
            <TextField
            variant="outlined"
              label={CLLI}
              name={CLLI}
              shrink
              value={clli}
              handleTextChange={handleFieldChange}
            />
          </Grid> */}
          <Grid item>
            <Grid container direction="row" justify="flex-start" spacing={8}>
              <Grid item>
                <TextField
                  variant="outlined"
                  label={ADDRESS}
                  name={ADDRESS}
                  shrink
                  value={address}
                  handleTextChange={handleFieldChange}
                />
              </Grid>
              <Grid item>
                <TextField
                  variant="outlined"
                  label={LATITUDE}
                  name={LATITUDE}
                  shrink
                  type="number"
                  value={latitude}
                  handleTextChange={handleFieldChange}
                />
              </Grid>
              <Grid item>
                <TextField
                  variant="outlined"
                  label={LONGITUDE}
                  name={LONGITUDE}
                  shrink
                  type="number"
                  value={longitude}
                  handleTextChange={handleFieldChange}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction="row" justify="flex-start" spacing={8}>
              <Grid item>
                <TextField
                  variant="outlined"
                  label={CITY}
                  name={CITY}
                  shrink
                  value={city}
                  handleTextChange={handleFieldChange}
                />
              </Grid>
              <Grid item>
                <TextField
                  variant="outlined"
                  label={STATE}
                  name={STATE}
                  shrink
                  value={state}
                  handleTextChange={handleFieldChange}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="row" justify="flex-start" spacing={8}>
            <Grid item>
              <TextField
                variant="outlined"
                label={CONTACT_NAME}
                name={CONTACT_NAME}
                shrink
                value={contactName}
                handleTextChange={handleFieldChange}
              />
            </Grid>
            <Grid item>
              <TextField
                variant="outlined"
                label={CONTACT_PHONE}
                name={CONTACT_PHONE}
                value={contactPhone}
                shrink
                handleTextChange={handleFieldChange}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <TextField
            variant="outlined"
            label={NOTE}
            name={NOTE}
            value={note}
            shrink
            multiline
            rows={7}
            rowsMax={7}
            handleTextChange={handleFieldChange}
          />
        </Grid>
        {editEvent && (
          <Grid item>
            <TextField
              variant="outlined"
              label={EXISTING_NOTES}
              name={EXISTING_NOTES}
              value={existingNote}
              multiline
              rows={7}
              rowsMax={7}
              shrink
              handleTextChange={handleFieldChange}
              disabled
            />
          </Grid>
        )}
      </Grid>
    </>
  );
};

EventForm.propTypes = {};

EventForm.defaultProps = {};

export default EventForm;
