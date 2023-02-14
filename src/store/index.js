/* Here is where you will configure the store 

*/ 

import { configureStore } from "@reduxjs/toolkit";
import campusReducers from "../reducers/campusReducers";
import studentReducers from "../reducers/studentReducers";



const store = configureStore({
  reducer: {
    student: studentReducers,
    campus: campusReducers
  }
});

export default store;