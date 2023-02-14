import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import { getSingleStudentAsync, showSingleStudent } from '../reducers/singleStudentReducer'

function SingleStudent() {
    const { id } = useParams()
    const dispatch = useDispatch()
    const singleStudent = useSelector(showSingleStudent)
    const {campus, email, firstName, lastName, gpa, imageUrl } = singleStudent
    // console.log(imageUrl)

    useEffect(()=>{
      dispatch(getSingleStudentAsync(id))
    }, [dispatch])

  if(singleStudent && campus){
    const checkCampus = campus ===null
  return (
    <>
    <h2>Student Name: {firstName} {lastName}</h2>
    <div>Current Campus: {checkCampus?'none. please add attending campus': 
    <Link to={`/campus/${campus.id}`}>{campus.name}</Link>}</div>
    <div>Email: {email}</div>
    <div>GPA: {gpa}</div>
    <img src={imageUrl}/>
    </>
  ) }
}

export default SingleStudent