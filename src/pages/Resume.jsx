import React from 'react'
import resume from "../../assets/francis-derosier-resume";

//The resume page has a link to download the resume and an image of the resume
const Resume = () => {
  return (
    <div className="row">
      <div className='w-100'>
        <a href="./assets/logos/francis-derosier-resume" attributes-list download > Download Resume PDF </a>
        <img src={resume} className="w-100 mt-4 float-end imgshadow" alt="francis derosier Resume" />

      </div>
    </div>
  )
}

export default Resume