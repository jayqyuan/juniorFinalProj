const { createSlice } = require("@reduxjs/toolkit");
const axios = require("axios");

const singleStudentSlice = createSlice({
  name: "singleStudent",
  initialState: {
    data: {},
  },
  reducers: {
    getSingleStudent: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const getSingleStudentAsync = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`/api/students/${id}`);
    dispatch(getSingleStudent(response.data));
  } catch (err) {
    throw new Error(err);
  }
};

export const deleteSingleStudentAsync = (id)=>async()=>{
  try {
    const {data} = await axios.delete(`/api/students/${id}`)
    return data
  } catch (error) {
    throw new Error(err);

  }
}

export const { getSingleStudent } = singleStudentSlice.actions;
export const showSingleStudent = (state) => state.singleStudent.data;
export default singleStudentSlice.reducer;
