import React from 'react';
import {TextareaAutosize} from '@material-ui/core';

export default function TextArea(props) {
  return <TextareaAutosize rowsMin={props.rowsMin}/>;
}
