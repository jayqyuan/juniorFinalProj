import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { getStudentsAsync, showStudents } from "../reducers/studentReducers";
import { useSelector, useDispatch } from "react-redux";
import { getCampussAsync, showCampus } from '../reducers/campusReducers';
import { Link } from 'react-router-dom';

function AllCampuses() {
    // const [campuses, ssetAllCampuses] = useState([])
    const [loading, setloading] = useState(true)
    // console.log(campuses)

    // useEffect(()=>{
    //     const getCampusData = async()=>{
    //         try{
    //             const campuses = await axios.get('/api/campus');
    //             const campusData = campuses.data;
    //             ssetAllCampuses(campusData);
    //             setloading(false)
    //             return campuses
    //         } catch(e){
    //             console.log(e.message)
    //             setloading(true)
    //         }
    //     };
    //     getCampusData()
    // },[])

    const dispatch = useDispatch();
    const campusData = useSelector(showCampus).flat()
    useEffect(()=>{
        dispatch(getCampussAsync());
        setloading(false)
    }, [dispatch])

    if(loading){
        <div>loading</div>
    } else {
  return (
    <>
    <div>All Campuses
    {campusData.map(campus=>{
        return (
          <div key={campus.id}>
            <Link to={`/campus/${campus.id}`}>
              {campus.name}
            </Link>
          </div>
        );
    })}
    </div>
    </>
  )}
}

export default AllCampuses