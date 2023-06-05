import { useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import Event from "./Event";
import person01 from "../assets/person01.png";
import person02 from "../assets/person02.png";
import person03 from "../assets/person03.png";
import person04 from "../assets/person04.png";
import calendarGrey from "../assets/calendarGrey.svg";
import leftArrow from "../assets/arrow-left.svg";
import clock from "../assets/clock.svg";

import "./calendar.css";

const Calendar = () => {
  // Get today's date
  const today = new Date();

  let event2 = new Date(today);
  let event4 = new Date(today);

  event2.setDate(event2.getDate() + 2);
  event4.setDate(event4.getDate() + 4);

  // Define options for formatting the date
  const options = { month: "long", day: "numeric", year: "numeric" };

  // Format the date
  const formattedDate = today.toLocaleDateString(undefined, options);

  const eventday = today.toLocaleDateString("en-CA");
  const eventday2 = event2.toLocaleDateString("en-CA");
  const eventday4 = event4.toLocaleDateString("en-CA");

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
            title: "Idea Generation",
            start: `${eventday} 09:00:00`,
            end: `${eventday} 11:45:00`,
            id: "1",
          },
          {
            title: "Process Improvment",
            start: `${eventday2} 09:00:00`,
            end: `${eventday2} 11:00:00`,
            id: "2",
          },
          {
            title: "Client consultation",
            start: `${eventday2} 12:00:00`,
            end: `${eventday2} 13:45:00`,
            id: "3",
          },
          {
            title: "Town Hall Meet",
            start: `${eventday4} 12:00:00`,
            end: `${eventday4} 14:35:00`,
            id: "4",
          },
        ]}
        views={{ timeGridFourDay: { type: "timeGrid", duration: { days: 5 } } }}
        allDaySlot={false}
        slotLabelFormat={{
          hour: "numeric",
          minute: "2-digit",
          meridiem: "long",
        }}
        eventContent={renderEventContent}
      />
    </div>
  );
};

export default Calendar;

function renderEventContent(eventInfo) {
  let classes;
  let hour = "9";
  let min = "11:45";
  let people = [person01];

  if (eventInfo.event.id === "2") {
    classes = "event2";
  }

  if (eventInfo.event.id === "3") {
    classes = "event3";
    hour = "1";
    min = "2";
  }

  if (eventInfo.event.id === "4") {
    classes = "event4";
    people = [person02, person03, person04];
  }

  return (
    <div className={`event ${classes}`}>
      <h2>{eventInfo.event.title}</h2>
      <div className="eventTime">
        <img src={calendarGrey} alt="calendar" />
        <span className="event-start">{hour} AM</span>
        <img src={leftArrow} alt="left arrow" /> <span>{min} AM</span>
      </div>
      <div className="eventDuration">
        <img src={clock} alt="clock" /> <span>2.5 hours</span>
      </div>
      <div className="people">
        {people.map((person, index) => (
          <img key={index} src={person} alt="person" />
        ))}
      </div>
    </div>
  );
}
