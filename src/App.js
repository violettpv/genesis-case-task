import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import { getToken } from "./services/authService";
import { getCourses } from "./services/courseService";
import CourseCard from "./components/CourseCard";

function App() {
    const nowDate = new Date();
    const [page, setPage] = useState(1);
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        getToken()
        .then((token) => getCourses(token))
        .then((data) => setCourses(data.courses));
    }, []);

    function incrementPage() {
        setPage(page + 1);
    }
    function decrementPage() {
        setPage(page - 1);
    }

    return (
        <div className="App">
            <div className="main-info">
                <h2>Courses. Self-development. Improve yourself.</h2>
            </div>
            <p id="available-crs">Available courses for  
                {" " + nowDate.getDate() + '/' + (nowDate.getMonth() + 1) + '/' + nowDate.getFullYear()} 
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

export default App;
