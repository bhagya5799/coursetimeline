// Write your code here
import React from 'react'
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {details} = props
  const {courseTitle, description, duration, tagsList} = details
  return (
    <div>
      <div className="course-title">
        <h1>{courseTitle}</h1>
        <div className="duration">
          <AiFillClockCircle />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p>{description}</p>
      <div className="tag-name">
        {tagsList.map(each => (
          <p className="name">{each.name}</p>
        ))}
      </div>
    </div>
  )
}
export default CourseTimelineCard
