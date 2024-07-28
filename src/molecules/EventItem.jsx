import PropTypes from "prop-types";
import Paragraph from "../atom/Paragraph";

function EventItem({ event }) {
  return (
    <li
      key={event.id}
      data-id={event.id}
      data-start={event.start}
      data-title={event.title}
      className="fc-event px-3 py-2 text-sm primary-text-theme shadow-md text-gray-theme cursor-pointer"
    >
      <Paragraph style="font-medium text-lg">{event.title}</Paragraph>
      <span>{event.start}</span>
    </li>
  );
}

EventItem.propTypes = {
  event: PropTypes.object,
};

export default EventItem;
