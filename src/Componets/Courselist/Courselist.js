import React from "react";
import "./Courselist.scss";
import CourseCard from "./CourseCard";
import { useSelector } from "react-redux";


function Courselist() {

  const { courses } = useSelector((state) => state.courses);

  return (
    <div className="container courselist">
      <h1>Learn in-demand professional skills</h1>
      <p>Choose from courses in English and many other languages</p>
      <div className="courses-cards">

      {courses && courses.slice(0, 8).map((course,index) => (
        
        <CourseCard key={index} id={course._id} title={course.title} price={course.price} rating={course.rating}  author={course.createBy[0].name} courseimg={course.poster[0].url}  />
        
      ))}
      </div>
    </div>
  );
}

export default Courselist;
