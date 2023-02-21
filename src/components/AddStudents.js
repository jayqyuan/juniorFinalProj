import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addStudentsAsync } from "../reducers/studentReducers";

function AddStudents() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    imageUrl: "",
    gpa: "",
  });

  // console.log(form)

  const changeeValue = (prop) => (event) => {
    setForm({
      ...form,
      [prop]: event.target.value,
    });
  };

  return (
    <div className="addStudentsPage">
      <div>Add New Student</div>
      <input
        placeholder="first name"
        type="text"
        value={form.firstName}
        onChange={changeeValue("firstName")}
      />
      <input
        placeholder="last name"
        type="text"
        value={form.lastName}
        onChange={changeeValue("lastName")}
      />
      <input
        placeholder="email"
        type="email"
        value={form.email}
        onChange={changeeValue("email")}
      />
      <input
        placeholder="image URL"
        type="url"
        value={form.imageUrl}
        onChange={changeeValue("imageUrl")}
      />
      <input
        placeholder="gpa"
        type="number"
        step="0.1"
        min="0"
        max="4"
        value={form.gpa}
        onChange={changeeValue("gpa")}
      />
      <button onClick={() => {dispatch(addStudentsAsync({ form }));navigate('/students') }}>
        Submit
      </button>
    </div>
  );
}

export default AddStudents;
