import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getSingleCampusAsync, showSingleCampus } from '../reducers/singleCampusReducer'

function SingleCampus() {
    const { id } = useParams()
    const dispatch = useDispatch()
    const singleCampus = useSelector(showSingleCampus)
    const {name, imageURL, address, description, students} = singleCampus
   

    useEffect(()=>{
        dispatch(getSingleCampusAsync(id))
    },[dispatch])

if(singleCampus && students){
    const checkStudents = students ===null
  return (
    <>
    <h2>Campus: {name}</h2>
    <h3>{address}</h3>
    <img src={imageURL}/>
    <p>{description}</p>
    <ul>
        {checkStudents?'please add more students':students.map(student=>{
            return (
                <li key={student.id}>
                    <Link to={`/students/${student.id}`}>{student.firstName} {student.lastName}</Link></li>
            )
        })}
    </ul>
    </>
  )}
}

export default SingleCampus