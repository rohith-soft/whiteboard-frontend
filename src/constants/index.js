//Service URLs
const baseUrl = "https://localhost:8080"
export const urls = {
  getAllEvents: baseUrl + "/api/events",
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