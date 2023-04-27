import { useState } from "react";
import "./create.css";
import axios from "axios";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const history = useNavigate();

  const header = { "Access-Control-Allow-Origin": "*" };

  const handleSubmit = async (e) => {
    console.log("clicked");
    e.preventDefault();
    try {
      await axios.post(
        "https://6449d05ea8370fb3213e9d37.mockapi.io/crud-practice",
        {
          name: name,
          email: email,
          header,
        }
      );
      history("/read");
      // console.log(response);
    } catch (error) {
      console.log(error);
    }

    // history("/read");
  };

  return (
    <>
      <form>
        <div className="link-container">
          <NavLink to="/" activeClassName="active">
            <h2>Create</h2>
          </NavLink>
          <NavLink to="/read" activeClassName="active">
            <h2>Data</h2>
          </NavLink>
        </div>
        <div className="form">
          <div className="name-container">
            <label htmlFor="name" className="name-label">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="name-input"
              placeholder="Enter your name here..."
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="email-container">
            <label htmlFor="email" className="email-label">
              Email address
            </label>
            <input
              type="email"
              name="email"
              className="email-input"
              placeholder="Enter your email here..."
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="btn-container">
            <button className="btn-submit" type="submit" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Create;
