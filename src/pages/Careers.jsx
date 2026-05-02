import React from 'react'
import StikcyBanner from '../components/StikcyBanner'
import GlobalSmallHeader from '../components/GlobalSmallHeader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faBriefcase, faBuilding, faClock, faArrowRight} from '@fortawesome/free-solid-svg-icons'

const Careers = () => {
  const whyJoinCards = [
      {
        "id": 1,
        "title": "Innovation",
        "description": "Work on cutting-edge technologies and innovative projects that challenge and inspire you.",
        "icon": "zap"
      },
      {
        "id": 2,
        "title": "Growth",
        "description": "Continuous learning opportunities, mentorship, and a clear career progression path.",
        "icon": "bar-chart-2"
      },
      {
        "id": 3,
        "title": "Culture",
        "description": "A diverse, inclusive, and supportive work environment where everyone's voice is valued.",
        "icon": "users"
      },
      {
        "id": 4,
        "title": "Benefits",
        "description": "Competitive compensation, healthcare benefits, and other perks that value your contribution.",
        "icon": "dollar-sign"
      }
    ];

    const currentOpeningCards = [
      {
        "id": 1,
        "title": "Frontend Developer",
        "description": "We're looking for an experienced Frontend Developer who is passionate about creating beautiful, responsive, and user-friendly interfaces.",
        "location": "Kolkata, India",
        "type": "Full-time",
        "mode": "Onsite",
        "posted": "2 weeks ago",
        "applyLink": "#"
      },
      {
        "id": 2,
        "title": "Backend Developer",
        "description": "Join our backend team to build robust, scalable APIs and services that power our applications. Experience with Node.js required.",
        "location": "Kolkata, India",
        "type": "Full-time",
        "mode": "Onsite",
        "posted": "1 week ago",
        "applyLink": "#"
      },
      {
        "id": 3,
        "title": "UI/UX Designer",
        "description": "Design beautiful user interfaces and experiences for our web and mobile applications. Figma expertise required.",
        "location": "Kolkata, India",
        "type": "Full-time",
        "mode": "Onsite",
        "posted": "3 days ago",
        "applyLink": "#"
      },
      {
        "id": 4,
        "title": "QA Engineer",
        "description": "Ensure the quality of our applications by implementing automated test processes. Experience with testing frameworks required.",
        "location": "Kolkata, India",
        "type": "Full-time",
        "mode": "Onsite",
        "posted": "5 days ago",
        "applyLink": "#"
      },
      {
        "id": 5,
        "title": "DevOps Engineer",
        "description": "Optimize our CI/CD pipelines and infrastructure. Experience with Docker, Kubernetes, and AWS required.",
        "location": "Kolkata, India",
        "type": "Full-time",
        "mode": "Onsite",
        "posted": "1 month ago",
        "applyLink": "#"
      }
    ]



  return (
    <> 
        <StikcyBanner classProperty="max-w-[700px] text-center" stickyBannerBg="bg-[#e6ebe6]" titleSize="text-[48px] font-bold" peraClr="text-[grey]" stickyTitle="Join Our Team" stickyPera="We're always looking for talented individuals to join our team. Check out our current openings and apply today!"/>

        <section className='py-[80px]'>
          <div className="custom-container">
            <GlobalSmallHeader className="items-center mb-[50px]" smallTitleBgClr="inline-flex item-center justify-center bg-[#dcfce7] text-[#1d4d16]" mainPeraClr="text-[#6b7280]" smallTitle="Why DotLinker?" mainHeading="Why Join Our Team?" mainPera="At DotLinker, we believe in fostering a collaborative, innovative, and growth-oriented environment for all our team members."/>
            <div className='flex gap-x-[16px]'>
                {whyJoinCards.map((JoinCard, index)=>{
                  return <div key={index} className='max-w-[calc(25%-20px)] w-full border-1 border-[#f3f4f6] rounded-2xl p-[20px] hover:shadow'>
                      <span>{JoinCard.id}</span>
                      <h5 className='font-bold mt-[10px] mb-[5px]'>{JoinCard.title}</h5>
                      <p className='text-[grey] text-[14px]'>{JoinCard.description}</p>
                    </div>
                })}
            </div>
          </div>
        </section>
        <section className='py-[80px]'>
          <div className="custom-container">
            <GlobalSmallHeader className="items-center mb-[50px]" smallTitleBgClr="inline-flex item-center justify-center bg-[#dcfce7] text-[#1d4d16]" mainPeraClr="text-[#6b7280]" smallTitle="Opportunities" mainHeading="Current Openings" mainPera="Browse our current job openings and find your perfect role at DotLinker Technologies."/>
            <div className='flex flex-wrap gap-x-[16px] gap-y-[16px]'>
                {currentOpeningCards.map((currentOpenItem, index)=>{
                  return <div key={index} className='max-w-[calc(50%-20px)] w-full border-1 border-[#f3f4f6] rounded-2xl p-[20px] hover:shadow'>
                      <h5 className='font-bold mt-[10px] mb-[5px]'>{currentOpenItem.title}</h5>
                      <p className='text-[grey] text-[14px]'>{currentOpenItem.description}</p>
                      <ul className='flex flex-wrap gap-x-[20px] gap-y-[8px] my-[15px] text-[13px] text-[grey]'>
                        <li className='max-w-[calc(50%-20px)] w-full'><FontAwesomeIcon icon={faLocationDot} className='mr-[6px] text-[#1d4d16]' /><span>{currentOpenItem.location}</span></li>
                        <li className='max-w-[calc(50%-20px)] w-full'><FontAwesomeIcon icon={faBriefcase} className='mr-[6px] text-[#1d4d16]' /><span>{currentOpenItem.type}</span></li>
                        <li className='max-w-[calc(50%-20px)] w-full'><FontAwesomeIcon icon={faBuilding} className='mr-[6px] text-[#1d4d16]' /><span>{currentOpenItem.mode}</span></li>
                        <li className='max-w-[calc(50%-20px)] w-full'><FontAwesomeIcon icon={faClock} className='mr-[6px] text-[#1d4d16]' /><span>Posted: {currentOpenItem.posted}</span></li>
                      </ul>
                      <button className='text-[13px]'>Apply Now <FontAwesomeIcon icon={faArrowRight} /></button>
                    </div>
                })}
            </div>
          </div>
        </section>
    </>
  )
}

export default Careers