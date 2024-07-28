import PropTypes from "prop-types";
import Button from "../atom/Button";
import Heading from "../atom/Heading";
import { Modal } from "../molecules/Modal";

function AddCalendarEvent({
  events,
  setEvents,
  selectedDate,
  openAddModal,
  setOpenAddModal,
  newTitle,
  setNewTitle,
}) {
  const handleAddEvent = () => {
    setEvents((prevEvents) => [
      ...prevEvents,
      {
        id: String(events.length + 1),
        title: newTitle,
        start: selectedDate.startStr,
        end: selectedDate.endStr,
        allDay: selectedDate.allDay,
      },
    ]);
    setOpenAddModal(false);
    setNewTitle("");
  };
  return (
    <Modal open={openAddModal} onClose={() => setOpenAddModal(false)}>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] p-6 primary-bg-theme primary-text-theme rounded-md outline-none">
        <Heading
          label="Add Event"
          style="mb-3 pb-2 text-2xl font-semibold secoundary-text-theme border-b-[1px] border-slate-300 dark:border-slate-700"
        />

        <form className="flex gap-3 flex-col">
          <label htmlFor="event-title">Event Title</label>
          <input
            type="text"
            id="event-title"
            name="event-title"
            placeholder="Event Title"
            autoComplete="off"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="py-2 px-3 w-full secoundary-bg-theme secoundary-text-theme border-[1px] border-gray-300 rounded-md hover:drop-shadow-md focus:outline-none focus:border-highlighter-theme common-transition"
          />

          <Button
            onClick={handleAddEvent}
            style="my-2 py-2 px-4 w-full bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline hover:drop-shadow-md common-transition"
          >
            save
          </Button>
        </form>
      </div>
    </Modal>
  );
}

AddCalendarEvent.propTypes = {
  events: PropTypes.array,
  setEvents: PropTypes.func,
  selectedDate: PropTypes.object,
  openAddModal: PropTypes.bool,
  setOpenAddModal: PropTypes.func,
  newTitle: PropTypes.string,
  setNewTitle: PropTypes.func,
};

export default AddCalendarEvent;
