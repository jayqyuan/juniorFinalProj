import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addCampusAsync } from '../reducers/campusReducers';

function AddCampuses() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
		name: "",
		imageURL: "",
		address: "",
		description: "",
	});

  console.log(form)

  const changeeValue = (prop) => (event) => {
    setForm({
      ...form,
      [prop]: event.target.value,
    });
  };

  return (
    <div className="addNewCampus">
      <div>Add New Campuses Here plz</div>
      <input
        placeholder="Campus Name?"
        type="text"
        value={form.name}
        onChange={changeeValue("name")}
      />
      <input
        placeholder="Campus Address?"
        type="text"
        value={form.address}
        onChange={changeeValue("address")}
      />
      <input placeholder="image URL"
        type="text"
        value={form.imageURL}
        onChange={changeeValue("imageURL")}
      />
      <textarea
        placeholder="Give a Brief Description of da Campus"
        value={form.description}
        onChange={changeeValue("description")}
      />
      <button onClick={()=>dispatch(addCampusAsync({form}))}>
        Submit
      </button>
    </div>
  );
}

export default AddCampuses