//Service URLs
const baseUrl = "http://localhost:9010";
export const urls = {
  getAllEvents: baseUrl + "/api/events",
  eventBase: baseUrl + "/api/events",
};

//Master Data
export const headCells = [
  { id: "id", numeric: false, label: "ID" },
  { id: "status", numeric: false, label: "Status" },
  { id: "task_id", numeric: false, label: "Task" },
  { id: "location_address", numeric: false, label: "Location" },
  { id: "scheduled", numeric: false, label: "Date/Time" },
  { id: "contact_name", numeric: false, label: "Contact" },
  { id: "description", numeric: false, label: "Description" },
];

export const ERROR_MESSAGES = {
  EMPTY_FIELD: "Field cannot be empty!",
  PHONE_DIGITS: "Phone number should have 10 digits!",
  STATE_DIGITS: "State should have two letters!",
};

export const EVENT_FORM = {
  LABELS: {
    DESCRIPTION: "Description",
    TASK: "Task",
    DATE: "Date",
    TIME: "Time",
    DURATION: "Duration(minutes)",
    CLLI: "CLLI",
    ADDRESS: "Address",
    LATITUDE: "Latitude",
    LONGITUDE: "Longitude",
    CITY: "City",
    STATE: "State",
    SITE_TYPE: "Site Type",
    CONTACT_NAME: "Contact Name",
    CONTACT_PHONE: "Contact Phone",
    NOTE: "Add Note",
    STATUS: "Status",
    WHITEBOARD_ID: "Whiteboard ID: ",
    CREATE_BUTTON: "Create New Event",
    EXISTING_NOTES: "Existing Notes",
    EDIT_BUTTON: "Save Event",
  },
};

export const STATUS = [
  {
    name: "Staged",
    value: "STAGED",
  },
  {
    name: "Active",
    value: "ACTIVE",
  },
  {
    name: "In Progress",
    value: "IN_PROGRESS",
  },
  {
    name: "Completed",
    value: "COMPLETED",
  },
  {
    name: "Failed",
    value: "FAILED",
  },
  {
    name: "Cancelled",
    value: "CANCELLED",
  },
];

export const TASK_LIST = [
  {
    Id: 1,
    name: "FieldOps.Fire Safety Maintenance",
  },
  {
    Id: 2,
    name: "FieldOps.Generator Load Test",
  },
  {
    Id: 3,
    name: "FieldOps.Generator Run Unloaded",
  },
  {
    Id: 4,
    name: "FWENG.Backbone Installation",
  },
  {
    Id: 5,
    name: "FWENG.Backbone Realignment",
  },
];
