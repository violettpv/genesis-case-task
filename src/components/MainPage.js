import React from 'react';
import { useState, useEffect } from "react";
import { getToken } from "../services/authService";
import { getCourses } from "../services/courseService";
import CourseCard from "./CourseCard";
import Header from './Header';

function MainPage() {
    const nowDate = new Date();
    const [page, setPage] = useState(1);
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        getToken()
        .then((token) => getCourses(token))
        .then((data) => setCourses(data.courses));
    }, []);

    const incrementPage = () => {
        if(page < Math.ceil(courses.length / 10)) setPage(page + 1);
    }
    const decrementPage = () => {
        if(page > 1) setPage(page - 1);
    }

  return (
    <div className="App">
            <Header />
            
            <p id="available-crs">
                <i id="far-icon" class='far'>&#xf274;</i> Available courses for 
                {" " + nowDate.getDate() + '/' + (nowDate.getMonth() + 1) + '/' + nowDate.getFullYear()}: 
            </p>

            <div className="courses">
                {courses.slice(page * 10 - 10, page * 10).map((course) => (
                    <CourseCard course={course} />
                ))}
            </div>

            <div className="page-btn">
                <button className="page-btn__prev" onClick={()=>{decrementPage()}}>Prev</button>
                <button className="page-btn__next" onClick={()=>{incrementPage()}}>Next</button>
            </div>
        </div>
  );
}

export default MainPage;