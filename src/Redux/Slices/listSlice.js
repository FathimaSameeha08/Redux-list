import { createSlice } from "@reduxjs/toolkit";
export const listSlice= createSlice({
    name:'list',
    initialState:[],
    reducers:{
        addToList:((state,action)=>{
            state.push(action.payload)
        }),
        deleteFromList:((state,action)=>{
            return (state.filter((item)=>item.addId!==action.payload))
        }),
        editList:((state,action)=>{
            const {addId,addName,addCourse,addPhone,addCity}=action.payload
            const list= state.find(item=>item.addId===addId)
            if(list){
                list.addName=addName;
                list.addCourse=addCourse;
                list.addPhone=addPhone;
                list.addCity=addCity
            }
        })
    }

})
export const {addToList,deleteFromList,editList}=listSlice.actions
export default listSlice.reducer 

