import { Draggable } from "@fullcalendar/interaction";
import { useEffect } from "react";

function useDraggable({ draggableRef }) {
  useEffect(() => {
    let draggableEl = draggableRef.current;
    if (draggableEl) {
      new Draggable(draggableEl, {
        itemSelector: ".fc-event",
        eventData: (eventEl) => {
          let id = eventEl.getAttribute("data-id");
          let title = eventEl.getAttribute("data-title");
          let start = eventEl.getAttribute("data-start");
          return { id, title, start };
        },
      });
    }
  }, [draggableRef]);
}

export { useDraggable };

