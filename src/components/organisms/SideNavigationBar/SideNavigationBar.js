import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import SideBarIcons from "../../atoms/SideBarIcons/SideBarIcons";
import AddIcon from "@material-ui/icons/Add";
import ViewListIcon from "@material-ui/icons/ViewList";
import CalendarIcon from '@material-ui/icons/CalendarTodayRounded';
import IconButton from "@material-ui/core/IconButton";
import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: "76px",
    height: "44px",
    borderRadius: 0,
    maxHeight: "44px",
  },
  selected: {
    width: "76px",
    height: "44px",
    borderLeft: "2px solid #38888b",
    backgroundColor: "#f6f6f6",
    borderRadius: 0,
    maxHeight: "44px",
  },
  second: {
    width: "76px",
    height: "44px",
    borderLeft: "2px solid #38888b",
    borderRadius: 0,
    maxHeight: "44px",
  },
});

const SideNavigationBar = (props) => {
  const classes = useStyles();
  const { activeTab } = props;
  return (
    <div style={{ height: "792px", width: "76px" }}>
      <Grid container justify="space-around">
        <Grid item>
          <Grid
            container
            justify="space-between"
            style={{ marginBottom: "125px" }}
          >
            <Grid item>
              <Typography variant="h2" style={{ margin: "12px 0 10px 20px" }}>
                W
              </Typography>
            </Grid>
            <Grid item className={classes.root}>
              <IconButton
                className={activeTab == "List" ? classes.selected : classes.root}
                onClick={(e) => props.handleTabChange(e, "List")}
              >
                <SideBarIcons icon={<ViewListIcon />} />
              </IconButton>
            </Grid>
            <Grid item className={classes.root}>
              <IconButton
                className={activeTab == "Add" ? classes.selected : classes.root}
                onClick={(e) => props.handleTabChange(e, "Add")}
              >
                <SideBarIcons icon={<AddIcon />} />
              </IconButton>
            </Grid>
            <Grid item className={classes.root}>
              <IconButton
                className={ classes.root}
                onClick={(e) => props.handleTabChange(e, "Calendar")}
              >
                <SideBarIcons icon={<CalendarIcon />} />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default SideNavigationBar;
