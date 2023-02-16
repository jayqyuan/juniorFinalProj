import { deleteSingleCampus } from "./campusReducers";

const { createSlice } = require("@reduxjs/toolkit");
const axios = require("axios");

const singleCampusSlice = createSlice({
  name: "singleCampus",
  initialState: {
    data: {},
  },
  reducers: {
    getSingleCampus: (state, action) => {
      state.data = action.payload;
    },
   
    

  },
});

export const getSingleCampusAsync = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`/api/campus/${id}`);
    dispatch(getSingleCampus(response.data));
  } catch (err) {
    throw new Error(err);
  }
};

export const deleteSingleCampusAsync = (id)=>async()=>{
  try {
    const {data} = await axios.delete(`/api/campus/${id}`);
    return data
  } catch (error) {
     throw new Error(err);
  }
}

export const { getSingleCampus } = singleCampusSlice.actions;
export const showSingleCampus = (state) => state.singleCampus.data;
export default singleCampusSlice.reducer;
