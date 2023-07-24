import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Update = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`https://64b4eab7f3dbab5a95c64d9c.mockapi.io/crud/${id}`)
      .then((res) => {
        setData({
          name: res.data.name,
          number: res.data.number,
          email: res.data.email,
        });
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`https://64b4eab7f3dbab5a95c64d9c.mockapi.io/crud/${id}`, {
        name: data.name,
        number: data.number,
        email: data.email,
      })
      .then(() => {
        navigate("/read");
      });
  };

  const handleChange = (e) => {
    const { name, number, email, value } = e.target;
    setData((pre) => ({
      ...pre,
      [name]: value,
      [number]: value,
      [email]: value,
    }));
  };
  return (
    <>
      <h2 className="fw-bold text-center">Contact Manager</h2>
      <form>
        <div className="mt-4">
          <label className="form-label fw-bold" htmlFor="name">
            Name
          </label>
          <input
            className="form-control mb-2"
            type="text"
            id="name"
            name="name"
            value={data.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="form-label fw-bold" htmlFor="number">
            Number
          </label>
          <input
            className="form-control mb-2"
            type="number"
            id="number"
            name="number"
            value={data.number}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="form-label fw-bold" htmlFor="number">
            E-mail
          </label>
          <input
            className="form-control mb-2"
            type="email"
            id="email"
            name="email"
            value={data.email}
            onChange={handleChange}
          />
        </div>
        <div className="mt-4">
          <button className="btn btn-success" onClick={handleUpdate}>
            Update
          </button>
          <Link to="/read">
            <button className="btn btn-primary mx-3">Back</button>
          </Link>
        </div>
      </form>
    </>
  );
};

export default Update;
