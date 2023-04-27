import axios from "axios";
import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Update = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    await axios.put(
      `https://6449d05ea8370fb3213e9d37.mockapi.io/crud-practice/${id}`,
      {
        name: name,
        email: email,
      }
    );
    navigate("/read");
  };

  return (
    <>
      <form>
        {/* <h2>{data.name}</h2> */}
        {/* <h2>{data.email}</h2> */}
        <div className="link-container">
          <NavLink to="/" activeClassName="active">
            <h2>Create</h2>
          </NavLink>
          <NavLink to="/read" activeClassName="active">
            <h2>Data</h2>
          </NavLink>
          <NavLink to="/update" activeClassName="active">
            <h2>Update</h2>
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
              value={name}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="btn-container">
            <button className="btn-submit" type="submit" onClick={handleUpdate}>
              Update
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Update;
