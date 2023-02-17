import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import AllCampuses from './AllCampuses';
import AllStudents from './AllStudents';
import SingleCampus from './SingleCampus';
import SingleStudent from './singleStudent';
import AddStudents from './AddStudents';
import AddCampuses from './AddCampuses';
import Home from './Home';

/* 
    This is you entry point for your routes
*/
const Main = () => {
    return (
      <div>
        <nav>
          <Link to={"/"}>Home</Link>
          <Link to={"/campuses"}>All Campuses</Link>
          <Link to={"/students"}>All Students</Link>
          <Link to={"/addstudent"}>Add New Student</Link>
          <Link to={"/addcampus"}>Add New Campus</Link>
        </nav>
        <Routes>
          <Route element={<AllCampuses />} path={"/campuses"} />
          <Route element={<AllStudents />} path={"/students"} />
          <Route path={"/students/:id"} element={<SingleStudent />} />
          <Route path={"/campus/:id"} element={<SingleCampus />} />
          <Route path={"/addstudent"} element={<AddStudents />} />
          <Route path={"/addcampus"} element={<AddCampuses />} />
          <Route path={'/'} element={<Home/>}/>
        </Routes>
      </div>
    );
};

export default Main;