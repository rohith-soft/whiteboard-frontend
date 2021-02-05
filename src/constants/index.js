//Service URLs
const baseUrl = "http://localhost:9010";
export const urls = {
  getAllEvents: baseUrl + "/api/events",
  getAllTasks: baseUrl + "/api/tasks",
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
export const statusContants = {
  STAGED: "Staged",
  ACTIVE: "Active",
  IN_PROGRESS: "In Progress",
  COMPLETE: "Complete",
  FAILED: "Failed",
  CANCELLED: "Cancelled",
};
