import Toolbar from "@material-ui/core/Toolbar";
import { lighten, makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { green } from "@material-ui/core/colors";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Grid, TextField, Button } from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns"; // choose your lib
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { KeyboardDateTimePicker } from "@material-ui/pickers";

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === "light"
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: "1 1 100%",
  },
  dateFilter: {
    display: "flex",
    "flex-direction": "column",
  },
}));

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} size="small" />);

export default function EnhancedTableToolbar(props) {
  const classes = useToolbarStyles();
  const [state, setState] = React.useState({
    STAGED: true,
    ACTIVE: true,
    IN_PROGRESS: true,
    COMPLETE: true,
    FAILED: true,
    CANCELLED: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const handleClickFilter = (event) => {
    var array = [];
    Object.keys(state).forEach(function (key) {
      if (state[key]) array.push(key);
    });
    props.handleFilterButtonClick(event, array, new Date(startDate).toISOString(), new Date(endDate).toISOString());
  };

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <Toolbar>
      <Grid container spacing={3} style={{ marginBottom: 2 }}>
        <Grid item xs={12}>
          <FormGroup row>
            <FormControlLabel
              control={<GreenCheckbox checked={state.STAGED} onChange={handleChange} name="STAGED" />}
              label="Staged"
            />
            <FormControlLabel
              control={<GreenCheckbox checked={state.ACTIVE} onChange={handleChange} name="ACTIVE" />}
              label="Active"
            />
            <FormControlLabel
              control={<GreenCheckbox checked={state.IN_PROGRESS} onChange={handleChange} name="IN_PROGRESS" />}
              label="In Progress"
            />
            <FormControlLabel
              control={<GreenCheckbox checked={state.COMPLETE} onChange={handleChange} name="COMPLETE" />}
              label="Complete"
            />
            <FormControlLabel
              control={<GreenCheckbox checked={state.FAILED} onChange={handleChange} name="FAILED" />}
              label="Failed"
            />
            <FormControlLabel
              control={<GreenCheckbox checked={state.CANCELLED} onChange={handleChange} name="CANCELLED" />}
              label="Cancelled"
            />
          </FormGroup>
        </Grid>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid item xs={3} classes={classes.dateFilter}>
            <KeyboardDateTimePicker
              variant="inline"
              ampm={true}
              label="Start Date/Time"
              value={startDate}
              onChange={setStartDate}
              onError={console.log}
              format="MM-dd-yyyy hh:mm a"
            />
          </Grid>
          <Grid item xs={3} classes={classes.dateFilter}>
            <KeyboardDateTimePicker
              variant="inline"
              ampm={true}
              label="End Date/Time"
              value={endDate}
              onChange={setEndDate}
              onError={console.log}
              format="MM-dd-yyyy hh:mm a"
            />
          </Grid>
        </MuiPickersUtilsProvider>
        <Grid item xs={3} style={{ marginTop: 15 }}>
          <Button variant="contained" color="primary" onClick={handleClickFilter}>
            Filter
          </Button>
        </Grid>
      </Grid>
    </Toolbar>
  );
}
EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};
