import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { Link, Routes, Route } from 'react-router-dom'
import SingleStudent from './singleStudent'
import { getStudentsAsync, showStudents } from '../reducers/studentReducers'
import {useSelector, useDispatch} from 'react-redux'

function AllStudents() {
    // const [allStudents, setAllStudents] = useState([])
    const [loading, setloading] = useState(true)
    // console.log(allStudents)

    // useEffect(()=>{
    //     const getStudentData = async()=>{
    //         try{
    //             const student = await Axios.get('/api/students');
    //             const studentData = student.data;
    //             setAllStudents(studentData);
    //             setloading(false)
    //             return student
    //         } catch(e){
    //             console.log(e.message)
    //             setloading(true)
    //         }
    //     };
    //     getStudentData()
    // },[])

const dispatch = useDispatch();
const studentData = useSelector(showStudents).flat();
useEffect(()=>{
  dispatch(getStudentsAsync())
  setloading(false)
},[dispatch]);
  // console.log(studentData)
    if(loading){
        <div>loading</div>
    } else {
  return (
    <>
      <div>
        All Students
        {studentData.map((student) => {
          return (
            <div key={student.id}>
              <Link to={`/students/${student.id}`}>
                {student.firstName} {student.lastName}
              </Link>
            </div>
          )
        })}
        
      </div>
    </>
  );}
      }


export default AllStudents