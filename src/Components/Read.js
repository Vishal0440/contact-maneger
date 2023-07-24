import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Read = () => {
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState("");
  function getData() {
    axios
      .get("https://64b4eab7f3dbab5a95c64d9c.mockapi.io/crud")
      .then((res) => setData(res.data))
      .catch((error) => setIsError(error.message));
  }
  useEffect(() => {
    getData();
  }, []);

  function handleDelete(id) {
    axios
      .delete(`https://64b4eab7f3dbab5a95c64d9c.mockapi.io/crud/${id}`)
      .then(() => {
        getData();
      });
  }
  return (
    <>
      <div className="d-flex justify-content-between m-2">
        <h2 className="fw-bold">Read Operation</h2>
        <Link to="/">
          <button className="btn btn-secondary">Create</button>
        </Link>
      </div>
      {isError === "" && <h2>{isError}</h2>}
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">NAME</th>
            <th scope="col">NUMBER</th>
            <th scope="col">EMAIL</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        {data.map((eachData) => {
          const { id, name, number, email } = eachData;
          return (
            <tbody key={id}>
              <tr>
                <th scope="row">{id}</th>
                <td>{name.toUpperCase()}</td>
                <td>{number}</td>
                <td>{email}</td>
                <td>
                  <Link to={`/update/${id}`}>
                    <button className="btn btn-success">Edit</button>
                  </Link>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(eachData.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </>
  );
};

export default Read;
