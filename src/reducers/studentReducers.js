const { createSlice } = require("@reduxjs/toolkit");
const axios  = require("axios");


const studentSlice = createSlice({
    name: "students",
    initialState:{
        data: []
    },
    reducers:{
        getStudents:(state, action)=>{
            state.data = [action.payload]
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

export const { getStudents } = studentSlice.actions; 
export const showStudents = (state)=>state.student.data
export default studentSlice.reducer