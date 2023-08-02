import React from "react";
import { Link } from "react-router-dom";

const DUMMY_EVENTS = [
  {
    id: "e1",
    title: "event 1",
  },
  {
    id: "e2",
    title: "event 2",
  },
];

const EventsPage = () => {
  return (
    <>
      <h1>EventsPage</h1>
      <ul>
        {DUMMY_EVENTS.map((e) => (
          <li key={e.id}>
            <Link to={e.id}>{e.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default EventsPage;
