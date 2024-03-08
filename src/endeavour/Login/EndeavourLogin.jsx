import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function EndeavourLogin() {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  axios.defaults.withCredentials = true;

  async function submit(e) {
    e.preventDefault();
    try {
      await axios
        .post(`http://localhost:3000/login`, {
          email,
          password,
        })
        .then((res) => {
          if (res.data.exists == "exists") {
            alert("Successfully LogedIn");
            localStorage.setItem("userName", res.data.username);
            history("/endeavour");
          } else if (res.data == "notExists") {
            alert("Wrong E-mail or Password");
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
    <div className="pt-[13vh] text-white">
      <form action="" method="post">
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

        <input type="submit" onClick={submit} value={"Login"} />
      </form>
      <div>
        <Link to="/endeavour/register">
          <button>Register</button>
        </Link>
      </div>
    </div>
  );
}

export default EndeavourLogin;
