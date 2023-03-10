import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import {
	editSingleStudentAsync,
	getSingleStudentAsync,
} from "../reducers/singleStudentReducer";

function EditStudent(props) {
    const dispatch = useDispatch();
	const navigate = useNavigate()
	const {id} = props
    const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    imageUrl: "",
    gpa: "",
    });
    const changeValue = (prop) => (event)=>{
        setForm({
            ...form,
            [prop]: event.target.value
        })
    }

	const handClick = ()=>{
		dispatch(editSingleStudentAsync({form, id}))
		dispatch(getSingleStudentAsync(id))
		navigate(`/students/${id}`)
		
	}


    return (
			<div className="editStudent">
				<div>Edit Current Student Here</div>
				<input
					placeholder="Edit First Name"
					type="text"
					value={form.firstName}
					onChange={changeValue("firstName")}
				/>
				<input
					placeholder="Edit Last Name"
					type="text"
					value={form.lastName}
					onChange={changeValue("lastName")}
				/>
				<input
					placeholder="Edit Email"
					type="text"
					value={form.email}
					onChange={changeValue("email")}
				/>
				<input
					placeholder="Edit student image URL"
					type="text"
					value={form.imageUrl}
					onChange={changeValue("imageUrl")}
				/>
				<input
					placeholder="gpa"
					type="number"
					step="0.1"
					min="0"
					max="4"
					value={form.gpa}
					onChange={changeValue("gpa")}
				/>
                <button onClick={()=>handClick()}>Submit Change</button>
			</div>
		);
}

export default EditStudent