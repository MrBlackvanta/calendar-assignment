import profileImage from "../assets/profile01.png";
import calendar from "../assets/calendar.svg";
import "./navbar.css";

const Navbar = () => {
  // Get today's date
  const today = new Date();

  // Define options for formatting the date
  const options = { month: "long", day: "numeric", year: "numeric" };

  // Format the date
  const formattedDate = today.toLocaleDateString(undefined, options);

  return (
    <nav className="nav">
      <div className="navigation-container"></div>

      <div className="profile-container">
        <div className="profile-name">
          <img src={profileImage} alt="profile" />
          <h2>AL Multaqa 301</h2>
        </div>

        <div className="profile-date">
          <img src={calendar} alt="calendar" />
          <span>{formattedDate}</span>
        </div>
      </div>

      <div className="filter-container">
        <input type="text" placeholder="Search by host name" />
        <select>
          <option value="workdays">Workdays</option>
          <option value="weekends">Weekends</option>
          <option value="all">All days</option>
        </select>
      </div>
    </nav>
  );
};

export default Navbar;
