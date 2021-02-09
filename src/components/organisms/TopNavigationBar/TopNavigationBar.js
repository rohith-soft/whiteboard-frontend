import React from "react";
import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import MenuIcon from "@material-ui/icons/Menu";
import DashboardIcon from "@material-ui/icons/Dashboard";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import ForumOutlinedIcon from "@material-ui/icons/ForumOutlined";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import Badge from "@material-ui/core/Badge";

const useStyles = makeStyles((theme) => ({
  appBar: {
    height: "64px",
    width: "100%",
  },
}));
const TopNavigationBar = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.appBar} position="static" color="default">
      <Toolbar>
        <Grid container direction="row" justify="space-between">
          <Grid item>
            <Grid container direction="row" alignItems="center">
              {/* <Grid item>
                <IconButton style={{ marginRight: "0px" }}>
                  <MenuIcon />
                </IconButton>
              </Grid> */}
              {/* <Grid item>
                <IconButton style={{ marginRight: "10px" }}>
                  <AddCircleOutlineOutlinedIcon />
                </IconButton>
              </Grid> */}
              <Grid item>
                <Typography variant="caption" style={{ flex: 1 }}>
                  Wind Stream Change Management
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction="row" alignItems="center">
              <Grid item>
                <Avatar
                  src="https://www.avinashtripathi.in/wp-content/uploads/2019/09/portrait-square-06-300x300.jpg"
                  style={{
                    height: "36px",
                    width: "36px",
                    marginLeft: "10px",
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default TopNavigationBar;
