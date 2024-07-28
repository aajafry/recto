import PropTypes from "prop-types";
import Button from "../atom/Button";
import Heading from "../atom/Heading";
import Paragraph from "../atom/Paragraph";
import { Dialog } from "../molecules/Dialog";

function DeleteCalendarEvent({
  openDeleteDialog,
  setOpenDeleteDialog,
  currentEvent,
  setEvents,
  setOpenEditModal,
}) {
  const handleDeleteEvent = () => {
    setEvents((prevEvents) =>
      prevEvents.filter((event) => event.id !== currentEvent.id)
    );
    setOpenDeleteDialog(false);
    setOpenEditModal(false);
  };
  return (
    <Dialog open={openDeleteDialog} onClose={() => setOpenDeleteDialog(false)}>
      <div className="relative w-[400px] p-6 primary-bg-theme primary-text-theme rounded-md outline-none">
        <Heading
          label="Delete Event"
          style="mb-3 pb-2 text-2xl font-semibold secoundary-text-theme border-b-[1px] border-slate-300 dark:border-slate-700"
        />

        <Paragraph style="my-3">
          Are you sure you want to delete the event {currentEvent?.title}?
        </Paragraph>

        <div className="flex gap-4">
          <Button
            onClick={() => setOpenDeleteDialog(false)}
            style="my-2 py-2 px-4 w-1/2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline hover:drop-shadow-md common-transition"
          >
            Cancel
          </Button>
          <Button
            onClick={handleDeleteEvent}
            style="my-2 py-2 px-4 w-1/2 bg-rose-500 text-white font-semibold rounded-md hover:bg-rose-600 focus:outline-none focus:shadow-outline hover:drop-shadow-md common-transition"
          >
            Delete
          </Button>
        </div>
      </div>
    </Dialog>
  );
}


DeleteCalendarEvent.propTypes = {
  openDeleteDialog: PropTypes.bool,
  setOpenDeleteDialog: PropTypes.func,
  setEvents: PropTypes.func,
  setOpenEditModal: PropTypes.bool,
  currentEvent: PropTypes.object,
};

export default DeleteCalendarEvent;
