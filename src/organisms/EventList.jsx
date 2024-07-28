import PropTypes from "prop-types";
import { useRef } from "react";
import { useDraggable } from "../hooks/useDraggable";
import EventItem from "../molecules/EventItem";

function EventList({ events }) {
  const draggableRef = useRef(null);
  useDraggable({ draggableRef });

  return (
    <ul
      id="draggable-el"
      ref={draggableRef}
      className="mt-2 flex flex-col gap-2"
    >
      {events.map((event) => (
        <EventItem key={event.id} event={event} />
      ))}
    </ul>
  );
}

EventList.propTypes = {
  events: PropTypes.array,
};

export default EventList;
