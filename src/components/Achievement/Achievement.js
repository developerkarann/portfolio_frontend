import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './assets/css/style.css'
import { Link } from 'react-router-dom'

export default function Certification() {

  const Certifiaction = [
    {
      index: '1',
      title: 'Web Development',
      type: 'Certification Course',
      from: 'InternShala Trainings',
      date: '09 January 2023',
      img: "/assets/images/certificates/webdevelopment.jpg",
      url: 'https://drive.google.com/file/d/1rKKISBzyMv7G6noNQNjHyu77llc-3oeW/view?usp=sharing',
      icon: "1",
    },
    {
      title: 'Internship & Job Preparation Training',
      type: 'Certification Course',
      from: 'InternShala Trainings',
      date: '2023-03-06',
      img: "/assets/images/certificates/internship_job_certificate.jpg",
      url: 'https://drive.google.com/file/d/16sIZte9NLKZ-o7pZGFHFxLhLKUNb1IJu/view?usp=sharing',
      icon: "2",
    },
    {
      title: 'Basics Of Python',
      type: 'Certification Course',
      from: 'Infosys',
      date: 'March 2023',
      img: "/assets/images/certificates/python_certificate.jpg",
      url: 'https://drive.google.com/file/d/16PHh_nyPdpKkJ183OjblGOCSdj2E4DpA/view?usp=sharing',
      icon: "3",
    },
    {
      title: 'React.js JavaScript Library',
      type: 'Certification Course',
      from: 'Cursa Online Courses',
      date: '2023',
      img: "/assets/images/certificates/reactjs_certificate.jpg",
      url: 'https://drive.google.com/file/d/1CuDdEhwnnWwCyxAiyVEMkmngItWcYWUR/view?usp=sharing',
      icon: "4",

    },
    {
      title: 'Node.js JavaScript Framework',
      type: 'Certification Course',
      from: 'Cursa Online Courses',
      date: '2023',
      img: "/assets/images/certificates/nodejs_certificate.jpg",
      url: 'https://drive.google.com/file/d/1Cu3n2jsCxnDFNX6s6Rt7Ro9GiB1N07k5/view?usp=sharing',
      icon: "5",

    },
    {
      title: 'MongoDb Database',
      type: 'Certification Course',
      from: 'Cursa Online Courses',
      date: '2023',
      img: "/assets/images/certificates/mongodb_certificate.jpg",
      url: 'https://drive.google.com/file/d/1CocwNVc4vsELIiURp5mem4ZgA0qE0J3v/view?usp=sharing',
      icon: "6",

    },
    {
      title: 'Office Documention',
      type: 'Certification Course',
      from: 'Nehru Yuva Kendra Computer Center',
      date: 'March 2021',
      img: "/assets/images/certificates/computer_certificate.jpg",
      url: 'https://drive.google.com/file/d/1CTiZmFW4Q1xJrP4zYng3R2UUYoEfFwY7/view?usp=sharing',
      icon: "7",

    },
    {
      title: 'Financial Accounting',
      type: 'Certification Course',
      from: 'Nehru Yuva Kendra Computer Center',
      date: 'March 2021',
      img: "/assets/images/certificates/accounting_certificate.jpg",
      url: 'https://drive.google.com/file/d/1Voiywn98h7kbRYnJGMVXUbfTnEBPZ-Lz/view?usp=sharing',
      icon: "8",

    },
  ];

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
