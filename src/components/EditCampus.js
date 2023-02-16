import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { editSingleCampusAsync, getSingleCampusAsync } from '../reducers/singleCampusReducer';

function EditCampus(props) {
    const dispatch = useDispatch()
    const { id } = props;
    const [form, setForm] = useState({
    name: "",
    imageURL: "",
    address: "",
    description: "",
    });
    useEffect(() => {
        dispatch(getSingleCampusAsync(id))
    }, [dispatch]);
    const changeValue = (prop)=>event=>{
        setForm({
            ...form,
            [prop]: event.target.value
        })
    }
  return (
    <div className='editCampus'>
    <div>Edit Current Campus</div>
    <input placeholder='New Campus Name' type='text' value={form.name} onChange={changeValue('name')}/>
    <input placeholder='New Campus Address' type='text' value={form.address} onChange={changeValue('address')}/>
    <input placeholder='New Campus Image Url' type='text' value={form.imageURL} onChange={changeValue('imageURL')}/>
    <textarea placeholder='New Campus Description' value={form.description} onChange={changeValue('description')}/>
    <button onClick={()=>dispatch(editSingleCampusAsync({form, id}))}>
        Submit
    </button>
    </div>
  )
}

export default EditCampus