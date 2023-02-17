import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getSingleCampusAsync } from '../reducers/singleCampusReducer'
import { editSingleStudentAsync } from '../reducers/singleStudentReducer'

function Unregister(props) {
    const {studentId, campusId} = props
    console.log(studentId, Number(campusId))
    const dispatch = useDispatch()
    const [register, setRegister] = useState({
        campusId: ''
    })
    console.log(register)
    const handleUnregister = ()=>{
        setRegister({

            ...register,
            campusId: null
        })
        dispatch(editSingleStudentAsync({register, studentId}))
        dispatch(getSingleCampusAsync(Number(campusId)))
        
    }
  return (<>
    <button onClick={()=>handleUnregister()}>Unregister</button>
    </>
  )
}

export default Unregister