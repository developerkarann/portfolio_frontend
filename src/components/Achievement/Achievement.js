import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './assets/css/style.css'
import { Link } from 'react-router-dom'
import { Certifiaction } from '../../constant/constant'

export default function Certification() {
  return (
    <>
      <div className='achievement'>
        <div className='heading'>
          <h1 className='title'>My Achievement</h1>
        </div>

        <div className="container">
          <VerticalTimeline>
            {
              Certifiaction.map((data, index) => {
                return (

                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date={data.date}
                    contentStyle={{ background: 'red', color: '#fff' }}
                    iconStyle={{}}
                    icon={data.icon}
                    key={data.index}
                    iconClassName={'icon'}
                  >
                    <h3 className="vertical-timeline-element-title">{data.title}</h3>
                    <h4 className="vertical-timeline-element-subtitle">{data.type}</h4>
                    <p> {data.from} </p>
                    <Link target='_blank' id='image' to={data.url}> <img id='image' src={data.img} alt="" /></Link>

                  </VerticalTimelineElement>

                )
              })
            }
          </VerticalTimeline>
        </div>
      </div>
    </>
  )
}
