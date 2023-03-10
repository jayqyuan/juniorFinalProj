import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { editSingleCampusAsync, getSingleCampusAsync, showSingleCampus } from '../reducers/singleCampusReducer'
import EditCampus from './EditCampus'
import Unregister from './Unregister'

function SingleCampus() {
    const { id } = useParams()
    const dispatch = useDispatch()
    const singleCampus = useSelector(showSingleCampus)
    const {name, imageURL, address, description, students} = singleCampus
   

    useEffect(()=>{
        dispatch(getSingleCampusAsync(id))
        dispatch(editSingleCampusAsync(id))
    },[dispatch])


if(singleCampus){
  return (
    <>
    <h2>Campus: {name}</h2>
    <h3>{address}</h3>
    <img src={imageURL}/>
    <p>{description}</p>
    <ul>
        {students?students.map(student=>{
            return (
                <li key={student.id}>
                    <Link to={`/students/${student.id}`}>{student.firstName} {student.lastName} </Link>
                    <Unregister studentId = {student.id} campusId = {id}/>
                    </li>
            )
        }):'please add more students'}
    </ul>
    <EditCampus id = {id}/>
    </>
  )}
}

export default SingleCampus