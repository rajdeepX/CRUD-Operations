import { useEffect, useState } from "react";
import "./read.css";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";

const Read = () => {
  const [userData, setUserData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://6449d05ea8370fb3213e9d37.mockapi.io/crud-practice"
      );
      const data = await response.data;
      setUserData(data);
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
    // const data =
  };

  useEffect(() => {
    getData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://6449d05ea8370fb3213e9d37.mockapi.io/crud-practice/${id}`
      );
      getData();
      // console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const setToLocalStorage = (id, name, email) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  };

  return (
    <div className="table-container">
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
      <table className="table">
        <thead className="table-head-container">
          <tr className="thead-row">
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        {userData.map((item, index) => {
          const { id, name, email } = item;
          return (
            <tbody className="table-body-container" key={id}>
              <tr className="tbody-row">
                <th>{index + 1}</th>
                <td>{name}</td>
                <td>{email}</td>
                <td>
                  <Link to="/update">
                    <button
                      className="btn-edit"
                      onClick={() => setToLocalStorage(id, name, email)}
                    >
                      Edit
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    className="btn-delete"
                    onClick={() => handleDelete(id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
        {/* <tr className="tbody-row">
            <td>Id</td>
            <td>Raj</td>
            <td>raj@gmail.com</td>
            <td>
              <button className="btn-edit">Edit</button>
            </td>
            <td>
              <button className="btn-delete">Delete</button>
            </td>
          </tr> */}
      </table>
    </div>
  );
};

export default Read;
