import React from 'react';

function LessonCard({lesson}) {
  return (
    <div className='lesson-page'>
        <h4 className='lesson-info__title'>{lesson.title}</h4>
        <div className="lesson-img-box">
            <img className='lesson-img-box__img' src={`${'test'}`} alt="lesson" />
        </div>
        <div className="lesson-info-box">
            <p className='lesson-description'>{lesson.description}</p>
            <p className='lesson-description'>Duration: {} minutes</p>
            <p className='lesson-description'>Order: {}</p>
            <p className='lesson-description'>Status: {}</p>
        </div>

        <div className='course-page-box__video'>
            <video width="600" height="auto" controls>
                <source src={`${courseData.meta.courseVideoPreview.link}`} type="video/mp4"/>
            </video>
            <p><i>Course preview</i></p>
        </div>
    </div>
  );
}

export default LessonCard;