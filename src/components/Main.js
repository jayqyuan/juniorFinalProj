import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import AllCampuses from './AllCampuses';
import AllStudents from './AllStudents';

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
        </Routes>
      </div>
    );
};

export default Main;