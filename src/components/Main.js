import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import AllCampuses from './AllCampuses';
import AllStudents from './AllStudents';
import SingleCampus from './SingleCampus';
import SingleStudent from './singleStudent';
import addStudents from './AddStudents';
import AddStudents from './AddStudents';

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
        </nav>
        <Routes>
          <Route element={<AllCampuses />} path={"/campuses"} />
          <Route element={<AllStudents />} path={"/students"} />
          <Route path={"/students/:id"} element={<SingleStudent />} />
          <Route path={"/campus/:id"} element={<SingleCampus />} />
        </Routes>
        <div> Add Student
        <AddStudents/>
        </div>
      </div>
    );
};

export default Main;