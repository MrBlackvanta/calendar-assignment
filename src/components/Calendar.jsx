import { useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import Timetable from "./Timetable";

import "./calendar.css";

const Calendar = () => {
  // Get today's date
  const today = new Date();

  // Define options for formatting the date
  const options = { month: "long", day: "numeric", year: "numeric" };

  // Format the date
  const formattedDate = today.toLocaleDateString(undefined, options);

  const eventday = today.toLocaleDateString("en-CA");

  useEffect(() => {
    function swapWordsInElements() {
      // Get all elements with the class "fc-col-header-cell-cushion"
      const elements = document.querySelectorAll(".fc-col-header-cell-cushion");

      // Loop through each element
      elements.forEach((element) => {
        // Get the inner HTML of the element
        const htmlString = element.innerHTML;

        // Split the string into an array of words
        const words = htmlString.split(" ");

        // Swap the positions of the first and second words
        const swappedWords = [words[1], words[0], ...words.slice(2)];

        // Join the array of words back into a string
        const swappedString = swappedWords.join(" ");

        // Update the inner HTML of the element with the swapped string
        element.innerHTML = swappedString;
      });
    }
    swapWordsInElements();
  }, []);

  return (
    <div className="wrapper">
      {/* <Timetable /> */}
      <FullCalendar
        plugins={[timeGridPlugin]}
        initialView="timeGridFourDay"
        customButtons={{
          myTitleGreet: {
            text: `Al Multaqa 301`,
          },
          myTitleBar: {
            text: ``,
          },
          myTitleDate: {
            text: `${formattedDate}`,
          },
        }}
        headerToolbar={{
          start: "prev,next today",
          center: "myTitleGreet myTitleBar myTitleDate",
          end: "",
        }}
        titleFormat={{
          month: "long",
          day: "numeric",
          year: "numeric",
        }}
        dayHeaderFormat={{
          weekday: "long",
          day: "numeric",
        }}
        height={"auto"}
        handleWindowResize={true}
        events={[
          {
            title: "Idea Generationfff",
            start: `${eventday} 12:00:00`,
          },
        ]}
        views={{ timeGridFourDay: { type: "timeGrid", duration: { days: 5 } } }}
        allDaySlot={false}
        slotLabelFormat={{
          hour: "numeric",
          minute: "2-digit",
          meridiem: "long",
        }}
      />
    </div>
  );
};

export default Calendar;
