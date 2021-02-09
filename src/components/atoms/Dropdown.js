import React from 'react';
import { MenuItem, Select } from '@material-ui/core';


const Options = [
  {value:1,renderValue:"One"},
  {value:2,renderValue:"Two"},
  {value:3,renderValue:"Three"},
  {value:4,renderValue:"Four"},
]
export default function Dropdown(props){
  return(
  <Select>
    {Options && Options.map(option=>(
      <MenuItem value={option.value}>{option.renderValue}</MenuItem>
    ))}
  </Select>
  )
}
