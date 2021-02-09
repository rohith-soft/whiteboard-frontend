import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import DeleteIcon from "@material-ui/icons/Delete";
import FilterListIcon from "@material-ui/icons/FilterList";
import { lighten, makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import React from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { green } from "@material-ui/core/colors";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Grid } from "@material-ui/core";

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
    staged: true,
    active: true,
    inProgress: true,
    complete: false,
    failed: true,
    cancelled: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <Toolbar>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FormGroup row>
            <FormControlLabel
              control={<GreenCheckbox checked={state.staged} onChange={handleChange} name="staged" />}
              label="Staged"
            />
            <FormControlLabel
              control={<GreenCheckbox checked={state.active} onChange={handleChange} name="active" />}
              label="Active"
            />
            <FormControlLabel
              control={<GreenCheckbox checked={state.inProgress} onChange={handleChange} name="inProgress" />}
              label="In Progress"
            />
            <FormControlLabel
              control={<GreenCheckbox checked={state.complete} onChange={handleChange} name="complete" />}
              label="Complete"
            />
            <FormControlLabel
              control={<GreenCheckbox checked={state.failed} onChange={handleChange} name="failed" />}
              label="Failed"
            />
            <FormControlLabel
              control={<GreenCheckbox checked={state.cancelled} onChange={handleChange} name="cancelled" />}
              label="Cancelled"
            />
          </FormGroup>
        </Grid>
        <Grid item xs={12} classes={classes.dateFilter}>
           fd
        </Grid>
      </Grid>
    </Toolbar>
  );
}
EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};
