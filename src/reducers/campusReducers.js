const { createSlice } = require("@reduxjs/toolkit");
const axios = require("axios");

const campusSlice = createSlice({
  name: "campus",
  initialState: {
    data: [],
  },
  reducers: {
    getCampus: (state, action) => {
      state.data = [action.payload];
    },
  },
});

export const getCampussAsync = (data) => async (dispatch) => {
  try {
    const response = await axios.get("/api/campus");
    dispatch(getCampus(response.data));
  } catch (err) {
    throw new Error(err);
  }
};

export const { getCampus } = campusSlice.actions;
export const showCampus = (state) => state.campus.data;
export default campusSlice.reducer;
