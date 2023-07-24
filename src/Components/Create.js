import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");

  const history = useNavigate();

  const header = { "Access-Control-Allow-Origin": "*" };

  const handleSubmit = (e) => {
    if ((name, number, email === "")) {
      alert("please enter the value");
    } else {
      e.preventDefault();
      axios
        .post("https://64b4eab7f3dbab5a95c64d9c.mockapi.io/crud", {
          name: name,
          number: number,
          email: email,
          header,
        })
        .then(() => {
          history("/read");
        });
    }
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-between m-2">
        <h2 className="fw-bold">Contact Manager</h2>
        <Link to="/read">
          <button className="btn btn-primary">Show Data</button>
        </Link>
      </div>
      <form>
        <div className="mt-4">
          <label className="form-label fw-bold" htmlFor="name">
            Name
          </label>
          <input
            className="form-control"
            type="text"
            id="name"
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label className="form-label fw-bold" htmlFor="number">
            Number
          </label>
          <input
            className="form-control"
            type="number"
            id="number"
            required
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
        <div>
          <label className="form-label fw-bold" htmlFor="number">
            E-mail
          </label>
          <input
            className="form-control"
            type="email"
            id="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className="btn btn-success mt-3" onClick={handleSubmit}>
          Add
        </button>
      </form>
    </div>
  );
};

export default Create;
