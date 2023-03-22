import {server} from '../store';
import axios from 'axios';

export const Instructorlogin = (email,password) => async (dispatch) => {
    try{
        dispatch({type:"InstructorLoginRequest"});
 
        const {data} = await axios.post(`${server}/instructor/login`,{email,password},{
            
            headers:{
                "Content-Type":"application/json",
            },withCredentials:true,
        });
        dispatch({type:"InstructorLoginSuccess",payload: data});
    }catch(error){
        dispatch({type:"InstructorLoginFail",payload:error.response.data.message});
    }
}

export const Instructorsignup = (formdata) => async (dispatch) => {
    
    try{
        dispatch({type:"InssignupRequest"});
 
        const {data} = await axios.post(`${server}/instructor/register`,
            formdata,{
                headers:{
                    "Content-Type":"multipart/form-data",
                },withCredentials:true,
            }
        );
        dispatch({type:"Inssignupsuccess",payload: data});
    }catch(error){
        dispatch({type:"InssignupFail",payload: error.response.data.message});
    }
}
export const Instructorlogout = () => async (dispatch) => {
    try{
        dispatch({type:"InstructorlogoutRequest"});
 
        const {data} = await axios.post(
            `${server}/Instructor/logout`,{},{
                withCredentials:true,
        }).catch((err)=>console.log(err));
        
        dispatch({type:"InstructorlogoutSuccess",payload:data});
    }catch(error){
        dispatch({type:"InstructorlogoutFail",payload:"logout failed"});
    }
}
export const loadInstructor = () => async (dispatch) => {
    try{
        dispatch({type:"loadInstructorRequest"});
 
        const {data} = await axios.post(
            `${server}/instructor/me`,{},{
                withCredentials:true,
        });

        dispatch({type:"loadInstructorSuccess",payload: data.user});
    }catch(error){
        dispatch({type:"loadInstructorFail"});
    }
}