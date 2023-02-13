/* Here is where you will configure the store 

*/ 

import { configureStore } from "@reduxjs/toolkit";


const store = configureStore({
  reducer: {
    student: 'dss'
  }
});

export default store;