import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { Link, Routes, Route } from 'react-router-dom'
import SingleStudent from './singleStudent'
import { getStudentsAsync, showStudents } from '../reducers/studentReducers'
import {useSelector, useDispatch} from 'react-redux'
import { deleteSingleStudentAsync } from '../reducers/singleStudentReducer'

function AllStudents() {
    const [loading, setloading] = useState(true)


const dispatch = useDispatch();
const studentData = useSelector(showStudents);
useEffect(()=>{
  dispatch(getStudentsAsync())
  setloading(false)
},[dispatch]);
  // console.log(studentData)

const handleClick = (studentId)=>{
  dispatch(deleteSingleStudentAsync(studentId))
  dispatch(getStudentsAsync())
}
if(loading){
    <div>loading</div>
} else {
  return (
    <>
      <div>
        All Students
        {studentData.map((student) => {
          return (
            <div key={student.id} className='allStudentView'>
              <Link to={`/students/${student.id}`}>
                {student.firstName} {student.lastName}
              </Link>
              <button onClick={()=>handleClick(student.id)}> Delete </button>
            </div>
          )
        })}
        
      </div>
    </>
  );}
      }


export default AllStudents