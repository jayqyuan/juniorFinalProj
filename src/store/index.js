/* Here is where you will configure the store 

*/ 

import { configureStore } from "@reduxjs/toolkit";
import campusReducers from "../reducers/campusReducers";
import singleCampusReducer from "../reducers/singleCampusReducer";
import singleStudentReducer from "../reducers/singleStudentReducer";
import studentReducers from "../reducers/studentReducers";



const store = configureStore({
  reducer: {
    student: studentReducers,
    campus: campusReducers,
    singleStudent: singleStudentReducer,
    singleCampus: singleCampusReducer
  }
});

export default store;