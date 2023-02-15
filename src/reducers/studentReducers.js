const { createSlice } = require("@reduxjs/toolkit");
const axios  = require("axios");


const studentSlice = createSlice({
    name: "students",
    initialState:{
        data: []
    },
    reducers:{
        getStudents:(state, action)=>{
            state.data = action.payload
        },
        addStudents:(state, action)=>{
            state.data.push(action.payload)
        }
    }
})

export const getStudentsAsync = (data) => async (dispatch)=>{
    try{
        const response = await axios.get('/api/students');
        dispatch(getStudents(response.data))
    }catch(err){
        throw new Error(err)
    }
}
export const addStudentsAsync = ({form}) => async (dispatch) => {  
  try {
    await axios.post("/api/students",
        form
    );console.log(form, 'this is form')
    // console.log(response, 'this is data')
    // dispatch(addStudents(response));
  } catch (err) {
    throw new Error(err);
  }
};

export const { getStudents, addStudents } = studentSlice.actions; 
export const showStudents = (state)=>state.student.data
export default studentSlice.reducer