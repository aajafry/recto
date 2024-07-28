  /* eslint-disable no-unused-vars */
import { useState } from "react";
import Heading from "../atom/Heading";
import { useTheme } from "../contexts/ThemeContext";
import { events as eventsData } from "../data/data.jsx";
import EventList from "../organisms/EventList";
import { Calendar as FullCalendar } from "../template/Calendar.jsx";

  function Calendar() {
    const [events, setEvents] = useState(eventsData);

    const { isDark } = useTheme();

    const dynamicStyle = {
      "--calender-btn-bg-theme": isDark ? "#334155" : "#cbd5e1",
      "--calender-btn-text-theme": isDark ? "#cbd5e1" : "#334155",
      "--calender-btn-hover-bg-theme": isDark ? "#1e293b" : "#94a3b8",
      "--calender-listView-hover-bg-theme": isDark ? "#334155" : "#cbd5e1",
    };

    return (
      <div className="flex flex-col h-auto">
        <Heading label="Calender Application" style="common-page-heading" />
        <div className="flex-1 flex flex-col-reverse md:flex-row gap-4 justify-between my-2 w-full md:h-[calc(100%-48px)] h-auto">
          <div className="flex-initial w-full md:w-[25dvw] primary-bg-theme shadow-md">
            <Heading
              label="Events"
              style="px-3 py-2 font-bold text-lg thirdary-bg-theme primary-text-theme shadow-md border-b-[1px] border-slate-300 dark:border-slate-700"
            />
            <EventList events={events} />
          </div>

          <div className="flex-1 w-auto" style={dynamicStyle}>
            <FullCalendar events={events} setEvents={setEvents} />
          </div>
        </div>
      </div>
    );
  }

  export default Calendar;