import "./Navbar.css";
import logo from "../../src/logo1.png";

const Navbar = ({ signout, user }) => {
  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  let current_datetime = new Date();
  let formatted_date =
    current_datetime.getDate() +
    " " +
    months[current_datetime.getMonth()] +
    " " +
    current_datetime.getFullYear();

  return (
    <div className="Navbar">
      <nav className="navbar navbar-light  ">
        <span className="navbar-brand mb-0 h1 ms-3 fs-2">
          <img src={logo} alt="logo" style={{ width: "30px" }} />
        </span>
        {user && (
          <div className="navbar-main">
            <p className="date ">{formatted_date}</p>
            <div className="user me-3">
              <h2 className="username">{user.displayName}</h2>
              <img src={user.photoURL} alt={user.name} />
            </div>
            <span className="signout h1 fs-2 me-3" onClick={signout}>
              {" "}
              <ion-icon
                name="log-out-outline"
                style={{ color: " white" }}
              ></ion-icon>
            </span>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
