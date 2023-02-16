import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import { getSingleStudentAsync, showSingleStudent } from '../reducers/singleStudentReducer'

function SingleStudent() {
    const [loading, setloading] = useState(false)
    const { id } = useParams()
    const dispatch = useDispatch()
    const singleStudent = useSelector(showSingleStudent)
    const {campus, email, firstName, lastName, gpa, imageUrl } = singleStudent
    console.log(singleStudent)

    useEffect(()=>{
      dispatch(getSingleStudentAsync(id))
      setloading(true)
    }, [dispatch])

  if(singleStudent && loading){
  return (
    <>
    <h2>Student Name: {firstName} {lastName}</h2>
    <div>Current Campus: {campus?<Link to={`/campus/${campus.id}`}>{campus.name}</Link>:'none. please add attending campus'}</div>
    <div>Email: {email}</div>
    <div>GPA: {gpa}</div>
    <img src={imageUrl} alt={`very beautiful pic of ${firstName}`}/>
    </>
  ) }
}

export default SingleStudent