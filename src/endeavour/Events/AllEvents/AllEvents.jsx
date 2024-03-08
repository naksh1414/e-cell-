import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AllEvents() {
  const [events, setEvents] = useState([]);
  async function submit() {
    try {
      await axios
        .post(`http://localhost:3000/allevents`, {})
        .then((res) => {
          if (res.data) {
            setEvents(res.data);
          } else {
            alert("Wrong Username or Password");
          }
        })
        .catch((e) => {
          alert("wrong details");
          console.log(e);
        });
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    submit();
  }, []);
  return (
    <div className="pt-[12vh] text-white">
      <h1>Events</h1>

      {events.map((event, index) => (
        <div key={index}>
          <h1>{event.eventName}</h1>
          <Link to={`/endeavour/events/${event.eventId}`}>click</Link>
        </div>
      ))}
    </div>
  );
}

export default AllEvents;
