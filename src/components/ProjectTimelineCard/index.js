// Write your code here
import React from 'react'
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {ProjectCarddetails} = props
  const {
    projectTitle,
    imageUrl,
    description,
    duration,
    name,
    projectUrl,
  } = ProjectCarddetails
  return (
    <div className="projectContainer">
      <img className="img-url" src={imageUrl} alt="project" />
      <div className="course-title">
        <h1>{projectTitle}</h1>
        <div className="duration">
          <AiFillCalendar />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p>{description}</p>
      <a href={projectUrl}> Visit </a>
    </div>
  )
}
export default ProjectTimelineCard
