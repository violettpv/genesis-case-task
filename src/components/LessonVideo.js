import React from 'react';

function LessonVideo() {
  return (
    <div className='lesson-video-box'>
        <video width="600" height="auto" controls>
            <source src="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4" type="video/mp4"/>
        </video>
    </div>
  );
}

export default LessonVideo;