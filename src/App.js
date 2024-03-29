import React from "react";
import "./index.css";
import Homepage from "./Pages/Homepage";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import toast,{Toaster} from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {useSelector} from "react-redux";
import { enrollcourse, loadUser } from "./redux/actions/user";
import {ProtectedRoute} from "./Componets/ProtectedRoute/ProtectedRoute"
import AdminApp from "./Admin/AdminApp";
import InstructorApp from "./Instructor/InstructorApp";
import { Profile } from "./Pages/Profile";
import Loader from "./Componets/layout/Loader/Loader";
import Teachwithus from "./Pages/Techwithus";
import { Cart } from "./Pages/Cart";
import  {Singlecourse}  from "./Pages/Singlecourse";
import { getAllCategory, getAllCourses } from "./redux/actions/courses";
import ScrollToTop  from "./Componets/ScrollToTop";
import AllCourses from "./Pages/AllCourses";
import { Lecture } from "./Pages/Lecture";
import Forgetpwd from "./Componets/layout/Forgetpwd";
import Resetpwd from "./Componets/layout/Resetpwd";

function App() {

  const { isAuthenticated = true,message,error} = useSelector((state) => state.user);
  // const { msg } = useSelector((state) => state.payment);
  const { adminLoading } = useSelector((state) => state.admin);
  const { paymentmessage } = useSelector((state) => state.Payment);
  const { courseLoading } = useSelector((state) => state.courses);
  const dispatch = useDispatch();
// console.log("msg",message)
  // show toast when error or message is updated
  useEffect(() => {
    if(error){
      toast.error(error);
      dispatch({type:'clearError'})
    }
    if(message || paymentmessage){
      toast.success(message);
      dispatch({type:'clearMessage'})
    }
  }, [dispatch,error,message,paymentmessage]);
  
  // load user when app starts
  useEffect(() => {
    dispatch(loadUser())  
    dispatch(enrollcourse())
    dispatch(getAllCourses())  
    dispatch(getAllCategory())

  }, [dispatch]);
  
  return (
    <>
      <BrowserRouter>
      <ScrollToTop />
        {/* {loading ? <Loader/> : null} */}
        {courseLoading ? <Loader/> : null}
        {adminLoading ? <Loader/> : null}


        <Routes>
          <Route path="/" element={<Homepage />}></Route>
        
          <Route element={<ProtectedRoute isAuthenticated={!isAuthenticated} redirect={"/"} />}>  
            <Route path="/login" element={<Login />}></Route>      
            <Route path="/signup" element={<Signup />}></Route>      
          </Route>   

          <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} redirect={"/"} />}>  
            <Route path="/profile" element={<Profile />}></Route>        
          </Route>   
          
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="/forgetpwd" element={<Forgetpwd user={true} />}></Route>
          <Route path="/resetpassword/:token" element={<Resetpwd />}></Route>
          <Route path="/courses" element={<AllCourses/>}></Route>
          <Route path="/courses/:category" element={<AllCourses fillter={true} />}></Route>
          <Route path="/course/:id" element={<Singlecourse/>}></Route>
          <Route path="/profile/lecture/:id" element={<Lecture/>}></Route>
          <Route path="/teachwithus" element={<Teachwithus />}></Route>
          

           {/* Admin Routes */}
          <Route path="/admin/*" element={<AdminApp/>}></Route>
          {/* Instructor Routes */}
          <Route path="/instructor/*" element={<InstructorApp/>}></Route>
        
        
        </Routes>
        <Toaster />
      </BrowserRouter>

    </>
  );
}

export default App;
