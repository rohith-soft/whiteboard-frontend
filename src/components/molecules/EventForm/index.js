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
import { isEmpty } from "../../../utils/helper";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  inputRoot: {
    "&$disabled": {
      color: "#332828",
    },
  },
  disabled: {},
}));
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
  fieldErrors,
  existingNote,
  handleFieldChange,
  handleDateChange,
  handleTaskChange,
  disabled,
  handleStatusChange,
}) => {
  const classes = useStyles();

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
              error={!isEmpty(fieldErrors[STATUS_LABEL])}
              helperText={fieldErrors[STATUS_LABEL]}
              handleSelectChange={handleStatusChange}
              disabled={disabled}
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
            disabled={disabled}
            error={!isEmpty(fieldErrors[TASK])}
            helperText={fieldErrors[TASK]}
            options={options}
            handleSelectChange={handleTaskChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            label={DESCRIPTION}
            disabled={disabled}
            name={DESCRIPTION}
            value={description}
            // error={!isEmpty(fieldErrors[DESCRIPTION])}
            // helperText={fieldErrors[DESCRIPTION]}
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
                  error={!isEmpty(fieldErrors[DATE])}
                  helperText={fieldErrors[DATE]}
                  margin="normal"
                  disabled={disabled}
                  id="date-picker-dialog"
                  label={DATE}
                  InputProps={{
                    classes: {
                      root: classes.inputRoot,
                      disabled: classes.disabled,
                    },
                  }}
                  format="MM/dd/yyyy"
                  value={date}
                  minDate={new Date()}
                  style={{ width: "360px", backgroundColor: "white" }}
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
                  error={!isEmpty(fieldErrors[DATE])}
                  helperText={fieldErrors[DATE]}
                  disabled={disabled}
                  style={{ width: "360px", backgroundColor: "white" }}
                  label={TIME}
                  value={date}
                  InputProps={{
                    classes: {
                      root: classes.inputRoot,
                      disabled: classes.disabled,
                    },
                  }}
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
            disabled={disabled}
            error={!isEmpty(fieldErrors[DURATION])}
            helperText={fieldErrors[DURATION]}
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
                  disabled={disabled}
                  shrink
                  error={!isEmpty(fieldErrors[ADDRESS])}
                  helperText={fieldErrors[ADDRESS]}
                  value={address}
                  handleTextChange={handleFieldChange}
                />
              </Grid>
              <Grid item>
                <TextField
                  variant="outlined"
                  label={LATITUDE}
                  name={LATITUDE}
                  disabled={disabled}
                  error={!isEmpty(fieldErrors[LATITUDE])}
                  helperText={fieldErrors[LATITUDE]}
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
                  error={!isEmpty(fieldErrors[LONGITUDE])}
                  helperText={fieldErrors[LONGITUDE]}
                  shrink
                  disabled={disabled}
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
                  disabled={disabled}
                  error={!isEmpty(fieldErrors[CITY])}
                  helperText={fieldErrors[CITY]}
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
                  error={!isEmpty(fieldErrors[STATE])}
                  helperText={fieldErrors[STATE]}
                  shrink
                  disabled={disabled}
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
                error={!isEmpty(fieldErrors[CONTACT_NAME])}
                helperText={fieldErrors[CONTACT_NAME]}
                shrink
                disabled={disabled}
                value={contactName}
                handleTextChange={handleFieldChange}
              />
            </Grid>
            <Grid item>
              <TextField
                variant="outlined"
                label={CONTACT_PHONE}
                name={CONTACT_PHONE}
                error={!isEmpty(fieldErrors[CONTACT_PHONE])}
                helperText={fieldErrors[CONTACT_PHONE]}
                value={contactPhone}
                shrink
                disabled={disabled}
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
            disabled={disabled}
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
