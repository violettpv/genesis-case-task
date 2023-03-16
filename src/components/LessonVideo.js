import React from 'react';

function LessonVideo({ title, url, func }) {
  return (
    <>
    <div className='lesson-video'>
        <hr id="hr-lessons"></hr>
        <p><i>You are watching:</i> <span><strong>{title}</strong></span></p> 
        <video width="600" height="auto" controls preload="auto" data-setup="{}">
            <source src={`${url}`} type="application/x-mpegURL"/>
        </video>
    </div>
    </>
  );
}

export default LessonVideo;