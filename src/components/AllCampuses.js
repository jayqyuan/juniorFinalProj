import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { deleteSingleCampus, getCampussAsync, showCampus } from '../reducers/campusReducers';
import { Link, useNavigate, } from 'react-router-dom';
import { deleteSingleCampusAsync, getSingleCampus } from '../reducers/singleCampusReducer';

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
    const Navigate = useNavigate()
    const campusData = useSelector(showCampus)
    console.log(campusData)
    useEffect(()=>{
        dispatch(getCampussAsync());
        setloading(false)
    }, [dispatch])

    const handleClick = (campusId)=>{
      dispatch(deleteSingleCampusAsync(campusId))
      dispatch(getCampussAsync())
    }

    if(loading){
        <div>loading</div>
    } else {
  return (
    <>
    <div>All Campuses
    {campusData.map(campus=>{
        return (
          <div key={campus.id} className='allCampusView'>
            <Link to={`/campus/${campus.id}`}>
              {campus.name} 
            </Link>
            <button onClick={()=>handleClick(campus.id)}> Delete </button>
          </div>
        );
    })}
    </div>
    </>
  )}
}

export default AllCampuses