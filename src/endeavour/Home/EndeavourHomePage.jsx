import { Link } from "react-router-dom";
function EndeavourHomePage() {
  const handleLogout = () => {
    localStorage.removeItem("userName");
    history("/endeavour");
  };
  return (
    <div className="pt-[12vh] text-white">
      <h1>Home Page</h1>
      {!localStorage.getItem("userName") ? (
        <>
          <Link to="/endeavour/login">
            <button>Login</button>
          </Link>
          <Link to="/endeavour/register">
            <button>Register</button>
          </Link>
        </>
      ) : (
        <Link onClick={handleLogout}>
          <button>Logout</button>
        </Link>
      )}

      <Link to="/endeavour/events">
        <button>Events</button>
      </Link>
      <Link to="/endeavour/studentpass">
        <button>Student Pass</button>
      </Link>
    </div>
  );
}

export default EndeavourHomePage;
