import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import { iconFill, currentlyReadBorder } from "../../../utils/colorPallete";
import SearchResult from "../../organisms/SearchResult/SearchResult";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    height: 38,
    border: "1px solid",
    borderColor: currentlyReadBorder,
    boxShadow: `0px 1px 1px ${theme.palette.grey[300]}`,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    color: { iconFill },
    fontWeight: "normal",
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  parent: {
    position: "relative",
  },
  child: {
    position: "absolute",
    top: "40px",
  },
}));

export default function SearchBar(props) {
  const classes = useStyles();
  return <div>{props.checked ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}</div>;
}
