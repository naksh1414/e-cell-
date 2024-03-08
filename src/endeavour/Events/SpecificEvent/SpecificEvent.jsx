import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
const MemberForm = () => {
  const history = useNavigate();
  const [event, setEvent] = useState([]);
  const [teamName, setTeamName] = useState("");
  const { eventId } = useParams();
  const [formData, setFormData] = useState([]);

  const [register, setRegister] = useState(0);

  async function eventData() {
    try {
      await axios
        .post(`http://localhost:3000/event/${eventId}`, {})
        .then((res) => {
          if (res.data) {
            setEvent(res.data);
          } else {
            alert("Wrong Username or Password");
          }
        })
        .catch((error) => {
          alert("wrong details");
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  }

  const handleSearch = async (memberId, index) => {
    try {
      const response = await axios.post(`http://localhost:3000/memberSearch`, {
        memberId,
      }); 
      setFormData((prevState) => {
        const updatedMembers = prevState.map((member, i) =>
          i === index ? { ...member, readonlyValue: response.data } : member
        );
        return updatedMembers;
      });
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const handleAddMember = () => {
    if (formData.length < event.maxTeamSize - 1) {
      setFormData((prevState) => [
        ...prevState,
        { userId: "", readonlyValue: "" }, // Add empty member data
      ]);
    } else {
      alert(
        `Can't Add more than ${event.maxTeamSize} Members (Leader Included)`
      );
    }
  };

  const handleChange = (event, index) => {
    const { name, value } = event.target;

    setFormData((prevState) => {
      const updatedMembers = prevState.map((member, i) =>
        i === index ? { ...member, [name]: value } : member
      );
      return updatedMembers;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let eventName = event.eventName;
    let leaderName = localStorage.getItem("userName");
    const filteredData = formData.filter((item) => item.userId !== "");
    console.log(filteredData);
    try {
      await axios
        .post(
          `http://localhost:3000/registerteam`,
          { filteredData, teamName, eventName, leaderName },
          {
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((res) => {
          if (res.data === "members added") {
            alert("members added");
          } else if (res.data == "notExists") {
            alert("user not exists");
          }
        })
        .catch((e) => {
          alert("wrong details");
          console.log(e);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handleRegister = () => {
    if (localStorage.getItem("userName")) {
      setRegister(1);
    } else {
      history("/endeavour/login");
    }
  };

  useEffect(() => {
    eventData();
  }, []);
  // useEffect(() => {
  //   handleAddMember();
  // }, []);

  return (
    <div className="pt-[12vh] text-white">
      <h1>{event.eventName}</h1>
      <h2>{event.eventPrice}</h2>

      <input
        type="button"
        className="ring-2 ring-white ml-1  p-2 cursor-pointer"
        onClick={handleRegister}
        value={"Register"}
      />

      <form onSubmit={handleSubmit} className={`mt-5 ${!register && "hidden"}`}>
        <label htmlFor="teamName">Team Name</label>
        <input
          type="text"
          name="teamName"
          id="teamName"
          onChange={(e) => {
            setTeamName(e.target.value);
          }}
          value={teamName}
          required="required"
        />

        <h1>Members</h1>
        <h2>Leader</h2>
        <label htmlFor={"leader"}>Leader Name</label>
        <input
          type="text"
          name="leader"
          id={"leader"}
          value={localStorage.getItem("userName")}
          readOnly
        />

        {formData.map((member, index) => (
          <div key={index} className="member-form mt-5">
            <h1>Member {index + 1}</h1>
            <label htmlFor={`userId-${index}`}>User ID:</label>
            <input
              type="text"
              name="userId"
              id={`userId-${index}`}
              value={member.userId}
              onChange={(e) => handleChange(e, index)}
            />
            <label htmlFor={`readonlyValue-${index}`}>Readonly Value:</label>
            <input
              type="text"
              name="readonlyValue"
              id={`readonlyValue-${index}`}
              value={member.readonlyValue}
              readOnly
            />
            <input
              type="button"
              className="border-2 p-2"
              onClick={() => handleSearch(member.userId, index)}
              value={"Search"}
            />
          </div>
        ))}
        <div>
          <p className="mt-2 cursor-pointer " onClick={handleAddMember}>
            +Add members
          </p>
        </div>
        <input
          type="submit"
          className="border-2 p-2 cursor-pointer"
          value={"Submit"}
        />
      </form>
    </div>
  );
};

export default MemberForm;
