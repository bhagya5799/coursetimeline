// Write your code here
import {Component} from 'react'
import {Chrono} from 'react-chrono'
import './index.css'
import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'

const renderDisplayView = data => {
  if (data.categoryId === 'PROJECT') {
    return <ProjectTimelineCard ProjectCarddetails={data} />
  }
  return <CourseTimelineCard details={data} />
}
class TimelineView extends Component {
  render() {
    const {timelineItemsList} = this.props
    console.log(timelineItemsList)

    return (
      <div className="chrono-container">
        <h1 className="Journey">
          MY JOURNEY OF <br /> CCBP 4.0
        </h1>
        <Chrono
          mode="VERTICAL_ALTERNATING"
          theme={{secondary: 'white'}}
          items={timelineItemsList}
        >
          {timelineItemsList.map(eachData => renderDisplayView(eachData))}
        </Chrono>
      </div>
    )
  }
}
export default TimelineView
