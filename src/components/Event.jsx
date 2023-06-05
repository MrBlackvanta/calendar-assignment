import copy from "../assets/copy.svg";
import trash from "../assets/trash.svg";
import pen from "../assets/pen.svg";
import close from "../assets/close.svg";
import leftArrow from "../assets/arrow-left.svg";
import city from "../assets/city.svg";
import guests from "../assets/guests.svg";
import person05 from "../assets/person05.png";
import person06 from "../assets/person06.png";
import "./event.css";

const Event = () => {
  return (
    <div className="event-modal">
      <div className="modal-buttons">
        <img src={copy} alt="copy" />
        <img src={trash} alt="trash" />
        <img src={pen} alt="pen" />
        <img src={close} alt="close" className="event-modal_close" />
      </div>
      <h2 className="modal-title">Client Consultation</h2>
      <p className="modal-date">Today, 9 Dec</p>
      <p className="event-modal_details">
        <span className="bold">12:00</span>PM{" "}
        <img src={leftArrow} alt="arrow" /> <span className="bold">01:00</span>
        PM <span className="modal-duration">3h - 30min</span>
      </p>
      <p className="even-repeat">6,4 Dec</p>
      <div className="modal-address">
        <img src={city} alt="city" /> <span>Al Multaqa 301</span>
      </div>
      <div className="modal-guests">
        <img src={guests} alt="guests" />
        <h3>
          Guests <span>(2)</span>
        </h3>
      </div>
      <div className="guests-container">
        <div className="modal-guest">
          <img src={person05} alt="person" />
          <div className="guest-info">
            <h3>Ahmed Emad</h3>
            <p>Product owner</p>
          </div>
        </div>
        <div className="modal-guest">
          <img src={person06} alt="person" />
          <div className="guest-info">
            <h3>Ahmed Emad</h3>
            <p>Product owner</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
