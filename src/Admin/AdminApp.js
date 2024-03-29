import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import {useSelector} from "react-redux";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { ProtectedRoute } from './AdminProtectedRoute/ProtectedRoute';
import './App.scss';

// project imports
import Login from './AdminComponets/Login';
import Dashboard from './AdminComponets/Dashboard';
import { loadAdmin } from '../redux/actions/admin';
import  AddUser from './AdminComponets/FormPage/AddUser';
import AddAdmin from './AdminComponets/FormPage/AddAdmin';
import AddInstructor from './AdminComponets/FormPage/AddInstructor';
import AddCourse from './AdminComponets/FormPage/AddCourse';
import AddCategory from './AdminComponets/FormPage/AddCategory';
import {EditLecture} from './AdminComponets/FormPage/EditLecture';
import {PurchaseCourses} from './AdminComponets/FormPage/PurchaseCourses';
import AddLecture from './AdminComponets/FormPage/AddLecture';
import Forgetpwd from '../Componets/layout/Forgetpwd';
import Resetpwd from '../Componets/layout/Resetpwd';
import { AllReviews } from './AdminComponets/Layout/AllReviews';

function AdminApp() {

  const { isAdmin,isadduser = false,message,error,isaddcategory = false,isaddcourse = false, isaddlecture = false } = useSelector((state) => state.admin);
 
  const dispatch = useDispatch();
  useEffect(() => {
    if(error){
      toast.error(error);
      dispatch({type:'clearError'})
    } 
    if(message){
      toast.success(message);
      dispatch({type:'clearMessage'})
    }
  }, [dispatch,error,message]);
  
   // load user when app starts
   useEffect(() => {
    dispatch(loadAdmin())  
  }, [dispatch]);
  

  return (
  <>
  
    <Routes>
        {/* <Route path="/" element={
        <ProtectedRoute isAdmin={!isAdmin} redirect={"/admin/dashboard"} >
            <Login />
        </ProtectedRoute>
      }></Route> */}
      <Route element={<ProtectedRoute isAdmin={!isAdmin} redirect={"/admin/dashboard"} />}>  
          <Route path="/" element={<Login />}></Route>      
          <Route path="/forgetpassword" element={<Forgetpwd />}></Route>      
          <Route path="/resetpassword/:token" element={<Resetpwd />}></Route>      
      </Route>  
    

      
        <Route path="/dashboard" element={
          <ProtectedRoute isAdmin={isAdmin} redirect={"/admin"} >
          <Dashboard home={true} />
          </ProtectedRoute>
        }></Route>      
        
        
        <Route element={<ProtectedRoute isAdmin={!isadduser} redirect={"/admin/dashboard"} />}>  
          <Route path="/dashboard/users/adduser" element={<AddUser />}></Route>      
          <Route path="/dashboard/admins/addadmin" element={<AddAdmin />}></Route>      
          <Route path="/dashboard/instructors/addinstructor" element={<AddInstructor />}></Route>      
        </Route>      

        <Route element={<ProtectedRoute isAdmin={!isaddcourse} redirect={"/admin/dashboard/courses"} />}>  
          <Route path="/dashboard/courses/addcourse" element={<AddCourse />}></Route>           
        </Route>      

        <Route element={<ProtectedRoute isAdmin={!isaddcategory} redirect={"/admin/dashboard/category"} />}>  
          <Route path="/dashboard/category/addcategory" element={<AddCategory />}></Route>      
        </Route>      
        <Route element={<ProtectedRoute isAdmin={!isaddlecture} redirect={"/admin/dashboard/courses"} />}>  
          <Route path="/dashboard/courses/editcourse/addlecture" element={<AddLecture />}></Route>      
        </Route>      
        
        <Route element={<ProtectedRoute isAdmin={isAdmin} redirect={"/admin"} />}>  
          <Route path="/dashboard/users" element={<Dashboard userspage={true} />}></Route>      
          <Route path="/dashboard/instructor" element={<Dashboard instructorpage={true} />}></Route>      
          <Route path="/dashboard/admins" element={<Dashboard adminspage={true} />}></Route>      
          <Route path="/dashboard/courses" element={<Dashboard coursespage={true} />}></Route>      
          <Route path="/dashboard/courses/reviews" element={<AllReviews />}></Route>      
          <Route path="/dashboard/category" element={<Dashboard categorypage={true} />}></Route>   
          <Route path="/dashboard/payment" element={<Dashboard paymentpage={true} />}></Route>   
          <Route path="/dashboard/courses/editcourse" element={<EditLecture />}></Route>   
          <Route path="/dashboard/payments/courses" element={<PurchaseCourses />}></Route>   
        </Route>      
      
          
    </Routes>

  </>
  );
}

export default AdminApp;
