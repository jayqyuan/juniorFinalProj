import React, { useEffect, useState } from 'react'
import axios from 'axios'

function AllCampuses() {
    const [campuses, ssetAllCampuses] = useState([])
    const [loading, setloading] = useState(true)
    console.log(campuses)

    useEffect(()=>{
        const getCampusData = async()=>{
            try{
                const campuses = await axios.get('/api/campus');
                const campusData = campuses.data;
                ssetAllCampuses(campusData);
                setloading(false)
                return campuses
            } catch(e){
                console.log(e.message)
                setloading(true)
            }
        };
        getCampusData()
    },[])

    if(loading){
        <div>loading</div>
    } else {
  return (
    <>
    <div>All Campuses
    {campuses.map(campus=>{
        return (
            <div key={campus.id}>
                {campus.name} {campus.address}
            </div>
        )
    })}
    </div>
    </>
  )}
}

export default AllCampuses