import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
function EndeavourRegister() {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [username, setUsername] = useState("");
  axios.defaults.withCredentials = true;
  async function submit(e) {
    e.preventDefault();
    try {
      await axios
        .post(`http://localhost:3000/register`, {
          email,
          password,
          phoneNumber,
          username,
        })
        .then((res) => {
          if (res.data == "User saved") {
            alert("User saved");
            history("/endeavour/login");
          } else if (res.data == "User Already Exists") {
            alert("User Already Exists");
          } else if (res.data == "Error saving user:") {
            alert("Wrong Username or Password");
          }
        })
        .catch((e) => {
          alert("wrong details");
          console.log(e);
        });
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="pt-[12vh] text-white">
      <form action="/register" method="post">
        <label htmlFor="username">username</label>
        <input
          type="text"
          name="username"
          id="username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          required="required"
        />
        <label htmlFor="email">email</label>
        <input
          type="text"
          name="email"
          id="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required="required"
        />
        <label htmlFor="password">password</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          required="required"
        />
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          type="number"
          name="phoneNumber"
          id="phoneNumber"
          onChange={(e) => {
            setPhoneNumber(e.target.value);
          }}
          required="required"
        />
        <input type="submit" onClick={submit} value={"Register"} />
      </form>
      <div>
        <Link to="/endeavour/login">
          <button>Login</button>
        </Link>
      </div>
      {/* <h1>{username + email + phoneNumber + password}</h1> */}
    </div>
  );
}

export default EndeavourRegister;
