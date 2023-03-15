import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getToken } from "../services/authService";
import { getCourses } from "../services/courseService";
import Header from './Header';

function CoursePage() {
    const {id} = useParams();
    const [courseData, setCourseData] = useState(0);

    useEffect(() => {
        getToken()
        .then((token) => getCourses(token, id))
        .then((data) => setCourseData(data));
    }, []);

    if(courseData === 0) return <div><Header/>Loading...</div>;

  return (
    <div>
        <Header />
        CoursePage
        {courseData.id}

    </div>
  );
}

export default CoursePage;