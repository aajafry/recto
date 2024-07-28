/* eslint-disable no-unused-vars */
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import PropTypes from "prop-types";
import AddCalendarEvent from "../organisms/AddCalendarEvent";
import DeleteCalendarEvent from "../organisms/DeleteCalendarEvent";
import EditCalendarEvent from "../organisms/EditCalendarEvent";
import { useCalendar } from "../hooks/useCalendar";

function Calendar({ events, setEvents }) {
  const {
    handleDateClick,
    handleEventClick,
    handleEventDrop,
    openAddModal,
    setOpenAddModal,
    openEditModal,
    setOpenEditModal,
    openDeleteDialog,
    setOpenDeleteDialog,
    newTitle,
    setNewTitle,
    selectedDate,
    currentEvent,
  } = useCalendar({events, setEvents})

  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,listWeek",
        }}
        weekends={true}
        nowIndicator={true}
        droppable={true}
        dayMaxEvents={true}
        editable={true}
        selectable={true}
        selectMirror={true}
        select={handleDateClick}
        eventClick={handleEventClick}
        eventDrop={handleEventDrop}
        events={events}
        // height="100%"
        // initialEvents={events}
        businessHours={{
          daysOfWeek: [0, 1, 2, 3, 4, 6], // Sunday to Thursday and Saturday
          // startTime: "09:00",
          // endTime: "18:00",
        }}
      />

      {/* Add Event Modal */}
      <AddCalendarEvent 
        events={events} 
        setEvents={setEvents} 
        selectedDate={selectedDate}
        openAddModal={openAddModal}
        setOpenAddModal={setOpenAddModal}
        newTitle={newTitle}
        setNewTitle={setNewTitle}
      />

      {/* Edit Event Modal */}
      <EditCalendarEvent
        openEditModal={openEditModal}
        setOpenEditModal={setOpenEditModal}
        newTitle={newTitle}
        setNewTitle={setNewTitle}
        setOpenDeleteDialog={setOpenDeleteDialog}
        setEvents={setEvents}
        currentEvent={currentEvent}
      />

      {/* Delete Event Confirmation Dialog */}
      <DeleteCalendarEvent
        openDeleteDialog={openDeleteDialog}
        setOpenDeleteDialog={setOpenDeleteDialog}
        currentEvent={currentEvent}
        setEvents={setEvents}
        setOpenEditModal={setOpenEditModal}
      />
    </>
  );
}

Calendar.propTypes = {
  events: PropTypes.array.isRequired,
  setEvents: PropTypes.func.isRequired,
};

export { Calendar };
