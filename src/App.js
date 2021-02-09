import { useState, useEffect } from "react";
import HomePage from "./pages/HomePage/HomePage";
import axios from "axios";
import { urls } from "./constants";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchAllEvents = () => {
      const url = urls.getAllEvents;
      axios
        .get(url)
        .then((resp) => {
          if (resp.status == 200) {
            setData([
              {
                id: 2,
                status: "IN_PROGRESS",
                task_id: 1,
                description: "Dummy Description.",
                scheduled: "2021-02-08T08:47:52+0000",
                duration_minutes: 10,
                location_latitude: 42.298,
                location_longitude: -71.088,
                location_address: "Boston, MA",
                city: "Boston",
                state: "MA",
                contact_name: "Dummy Contact Name",
                contact_number: "1234567890",
                notes: "Dummy Notes.",
              },
            ]);
          }
        })
        .catch((err) => {
          console.log(err);
          setData([
            {
              id: 2,
              status: "IN_PROGRESS",
              task_id: 1,
              description: "Dummy Description.",
              scheduled: "2021-02-08T08:47:52+0000",
              duration_minutes: 10,
              location_latitude: 42.298,
              location_longitude: -71.088,
              location_address: "Boston, MA",
              city: "Boston",
              state: "MA",
              contact_name: "Dummy Contact Name",
              contact_number: "1234567890",
              notes: "Dummy Notes.",
            },
          ]);
        });
    };

    fetchAllEvents();
  }, []);

  return <div>{data !== undefined && data.length > 0 ? <HomePage rows={data} /> : <div></div>}</div>;
};

export default App;
