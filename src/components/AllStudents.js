import React, { useEffect, useState } from 'react'
import Axios from 'axios'

function AllStudents() {
    const [allStudents, setAllStudents] = useState([])
    const [loading, setloading] = useState(true)
    console.log(allStudents)

    useEffect(()=>{
        const getStudentData = async()=>{
            try{
                const student = await Axios.get('/api/students');
                const studentData = student.data;
                setAllStudents(studentData);
                setloading(false)
                return student
            } catch(e){
                console.log(e.message)
                setloading(true)
            }
        };
        getStudentData()
    },[])

    if(loading){
        <div>loading</div>
    } else {
  return (
    <>
    <div>All Students
    {allStudents.map(student=>{
        return (
            <div key={student.id}>
                {student.firstName} {student.lastName}
            </div>
        )
    })}
    </div>
    </>
  )}
}

export default AllStudents