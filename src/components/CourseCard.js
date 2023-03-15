import React from 'react';

function CourseCard({course}) {
  return (
    <div className='course-card'>
        <div className='course-img'>
            <img src={`${course.previewImageLink}/cover.webp`} alt="course" />
        </div>
        <div className='course-info'>
            <h4 className='course-info__title'>{course.title}</h4>
            <p><i>Lessons:</i> {course.lessonsCount}</p>
            <p><i>Skills:</i> 
                {course.meta.skills} 
            </p>
            <p><i>Ratings:</i> {course.rating}</p>
        </div>
        <div className="course-lessons">
            <button className='course-lessons__more'>Get more info</button>
        </div>
    </div>
  );
}

export default CourseCard;