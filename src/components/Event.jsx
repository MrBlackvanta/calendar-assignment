import calendarGrey from "../assets/calendarGrey.svg";
import leftArrow from "../assets/arrow-left.svg";
import clock from "../assets/clock.svg";

import "./event.css";

const Event = ({ title, start, end, duration, people, eventClasses }) => {
  return (
    <div className="event">
      <h2>{title}</h2>
      <div className="eventTime">
        <img src={calendarGrey} alt="calendar" />
        <span className="event-start">{start}</span>
        <img src={leftArrow} alt="left arrow" /> <span>{end}</span>
      </div>
      {duration && (
        <div className="eventDuration">
          <img src={clock} alt="clock" /> <span>{duration}</span>
        </div>
      )}
      {people && (
        <div>
          {people.map((person) => (
            <img src={person} alt="person" />
          ))}
        </div>
      )}
    </div>
  );
};

export default Event;
