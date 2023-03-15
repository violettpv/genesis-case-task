import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getToken } from "../services/authService";
import { getCourse } from "../services/courseService";
import Header from './Header';
import Loader from './Loader';
import LessonVideo from './LessonVideo';

function CoursePage() {
    const { id } = useParams();
    const [courseData, setCourseData] = useState(0);

    useEffect(() => {
        getToken()
        .then((token) => getCourse(token, id))
        .then((data) => setCourseData(data));
    }, []);

    if(courseData === 0) 
        return <div><Header/><Loader/></div>;

  return (
    <div>
        <Header />

        <div className='course-page-main'>
            <div className='course-page-box'>
                <h2 className='course-title'>{courseData.title}</h2>

                <div className="course-page-box-top">
                    <div className="course-page-box-top__left">
                        <p className='course-description'>{courseData.description}</p>
                        <p className='course-description'><i>Duration:</i>  {courseData.duration} minutes</p>
                        <p className='course-description'><i>Rating:</i>  {courseData.rating}</p>
                        <p className='course-description'><i>Tags:</i>  #{courseData.tags.join(", ")}</p>
                    </div>
                    <div className="course-page-box-right">
                        <div className="course-page-box-top__right-img-box">
                            <img className='course-page-box-top__right-img' src={`${courseData.previewImageLink}/cover.webp`} alt="course" />
                        </div>
                    </div> 
                </div>
                
                <hr id='hr-lessons'></hr>
                <div className="course-page-box-bottom">
                    <div className='course-page-box__video'>
                        <video width="600" height="auto" controls>
                            <source src={`${courseData.meta.courseVideoPreview.link}`} type="video/mp4"/>
                        </video>
                        <p><i>Course preview</i></p>
                    </div>

                    <hr id='hr-lessons'></hr>
                    <h3>Lessons:</h3>
                    <div className='course-page-box__lessons'>
                        {courseData.lessons.map((lesson) => (
                            <div className='course-page-box__lessons-card'>
                                {lesson.status === "unlocked" ? 
                                <>
                                <div className="lesson-img-box">
                                    <Link to={`/${courseData.id}/${lesson.id}`}>
                                        <img className='lesson-img-box__img' src={`${lesson.previewImageLink}/${lesson.order}.webp`} alt="lesson" />
                                    </Link>
                                </div>
                                <h4 className='course-page-box__lessons-card-title'>{lesson.title}</h4>
                                <p className='course-page-box__lessons-card-description'>{lesson.description}</p>
                                <p className='course-page-box__lessons-card-description'>Duration: {lesson.duration} minutes</p>
                                <p className='course-page-box__lessons-card-description'>Order: {lesson.order}</p>
                                <p className='course-page-box__lessons-card-description'>Status: {lesson.status}</p>
                                </>
                                : <p className='locked-course'>&#128274;</p>}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>


    </div>
  );
}

export default CoursePage;