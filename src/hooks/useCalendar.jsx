/* eslint-disable no-unused-vars */
import { useState } from "react";

function useCalendar({events, setEvents}) {
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [currentEvent, setCurrentEvent] = useState(null);
  const [newTitle, setNewTitle] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateClick = (selected) => {
    setSelectedDate(selected);
    setOpenAddModal(true);
  };

  const handleEventClick = (selected) => {
    setCurrentEvent(selected.event);
    setNewTitle(selected.event.title);
    setOpenEditModal(true);
  };

  const handleEventDrop = (eventDropInfo) => {
    const { event: newEvent, oldEvent } = eventDropInfo;

    setEvents((prevEvents) =>
      prevEvents.map((prevEvent) => {
        if (prevEvent.id === newEvent.id) {
          return {
            ...prevEvent,
            start: newEvent.startStr,
            end: newEvent.endStr,
            allDay: newEvent.allDay,
          };
        }
        return prevEvent;
      })
    );
  };
   
  return { 
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
    currentEvent
 }
}

export { useCalendar }