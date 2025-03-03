import { TimelineV1 } from "@/components/ui/time-line";
import Image from "next/image";
import React from "react";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Badge } from "@/components/ui/badge";
export default function ExperiencePage() {
  const data = [
    {
      title: "2025 - Present",
      content: (
        <div className="flex gap-4 items-center">
          <Image
            src="/yes4all.png"
            alt="yes4all-company"
            width={100}
            height={100}
            style={{ objectFit: 'contain' }}
          />
          <div className="">
            <p className="text-neutral-800 text-base md:text-xl font-bold mb-2">
              People Partner | Technology & Innovation
            </p>
            <p className="text-muted-foreground  text-sm md:text-lg font-normal ">
              Yes4All · Full-time
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Feb 2021 - Jul 2024",
      content: (
        <div>
          <div className="flex gap-4 items-center">
            <Image
              src="/timo.jpeg"
              alt="timo-company"
              width={100}
              height={100}
              style={{ objectFit: 'contain' }}
            />
            <div className="">
              <p className="text-neutral-800 text-base md:text-xl font-bold mb-2">
                Timo Vietnam
              </p>
              <p className="text-muted-foreground  text-sm md:text-lg font-normal ">
                Full-time · 3 yrs 6 mos
              </p>
            </div>
          </div>
          <div>
            <Timeline>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <div>
                    <p className="font-bold text-[18px]">Assistant Manager - HR Operations and Employee Experience</p>
                    <p className="text-muted-foreground">Jul 2022 - Jul 2024</p>
                  </div>
                  <ul className="leading-7">
                    <ul>
                      <p className="font-bold">- Overseeing HR Operations and Employee Engagement:</p>
                      <li>+ Strategic HR Operations Management: Ensure smooth HR operations by managing the complete Compensation & Benefits (C&B) cycle, addressing issues proactively, and fostering strong employee relations. This includes aligning HR practices with business goals to support overall organizational success.</li>
                      <li>+ Enhancing Employee Engagement: Drive initiatives that enhance employee engagement and efficiency through experience projects. Regularly assess employee feedback to identify areas for improvement and implement strategies that align with business objectives.</li>
                      <li>+ Facilitating Compliance and Accessibility: Reduce barriers for employees in meeting government requirements by organizing sharing sessions that provide essential information and resources, ensuring that employees feel supported in navigating compliance.</li>
                    </ul>
                    <ul>
                      <p className="font-bold">- Supporting Team Performance:</p>
                      <li>+ Collaborate closely with team leaders to promote effective engagement strategies that support team performance. This involves acting as a consultant to managers, helping them understand how to leverage HR practices to meet their specific needs.</li>
                    </ul>
                    <li className="font-bold">- Act as a consultant to establish and define a Trade Union from the beginning.</li>
                    <ul>
                      <p className="font-bold">- Experience in Collaborating for Talent Development:</p>
                      <li>+ Peer Learning Initiatives: Designed and facilitated peer-to-peer knowledge-sharing sessions and mentoring programs, enhancing skills and fostering teamwork across departments.</li>
                      <li>+ Strengthened Workplace Relationships: Developed networking events and team-building activities that improved workplace culture and collaboration, boosting employee morale.</li>
                      <li>+ Cross-Team Projects: Initiated interdepartmental projects focused on skill enhancement, promoting knowledge exchange and broader understanding of organizational goals.</li>
                      <li>+ Feedback Culture: Integrated regular feedback mechanisms to enhance employee engagement and performance, training managers on effective feedback delivery.</li>
                    </ul>
                  </ul>
                  <div className="flex gap-2 flex-wrap">
                    <p className="font-bold">Skills:</p>
                    {['HR Business Partnering', 'Human Resource Development', 'Employee Relations', 'Employee Engagement', 'Labor Market', 'Cost Reporting', 'Labor and Employment Law', 'Human Resources Information Technology (HRIT)', 'Employee Benefits Design'].map((skill, index) => (
                      <Badge variant="secondary" className="font-normal text-[13px]">{skill}</Badge>
                    ))}
                  </div>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <div>
                    <p className="font-bold text-[18px]">Senior Human Resources Specialist</p>
                    <p className="text-muted-foreground">Feb 2021 - Jul 2022</p>
                  </div>
                  <ul className="leading-7">
                    <li>- Mainly handle the C&B section, including but not limited to managing the entire C&B cycle from probation to exit.</li>
                    <li>- Primarily handle PIT finalization and provide consultation on PIT, contracts, and any C&B-related issues</li>
                    <li>- Serve as the PIC in both internal and external audits, collaborating with various stakeholders to resolve issues.</li>
                  </ul>
                  <div className="flex gap-2 flex-wrap">
                    <p className="font-bold">Skills:</p>
                    {['HR Consulting', 'Payroll', 'Employee Relations', 'Labor and Employment Law'].map((skill, index) => (
                      <Badge variant="secondary" className="font-normal text-[13px]">{skill}</Badge>
                    ))}
                  </div>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </div>
        </div>
      ),
    },
    {
      title: "Sep 2019 - Nov 2020",
      content: (
        <div>
          <div className="flex gap-4 items-center">
            <Image
              src="/oyo.png"
              alt="oyo-company"
              width={100}
              height={100}
              style={{ objectFit: 'contain' }}
            />
            <div className="">
              <p className="text-neutral-800 text-base md:text-xl font-bold mb-2">
                Country C&B Specialist
              </p>
              <p className="text-muted-foreground  text-sm md:text-lg font-normal ">
                OYO Vietnam · Full-time
              </p>
            </div>
          </div>
          <div>
            <ul className="leading-7 mb-4">
              <li>- Serve as the PIC in country Compensation & Benefit management, collaborating with the payroll vendor to maintain accuracy and ensure smooth operations.</li>
              <li>- Actively resolve employee issues and provide valuable insights.</li>
              <li>- Consult and update regularly on labor market trends and labor laws, assisting HRD in fostering positive relationships between the business and employees.</li>
              <li>- Participate in optimizing projects during the COVID-19 situation with the global project management team.</li>
            </ul>
            <div className="flex gap-2 flex-wrap">
              <p className="font-bold">Skills:</p>
              {['Labor and Employment Law', 'Project Management', 'Crisis Management', 'Cost Projections', 'HR Operations', 'Human Resources Information Technology (HRIT)'].map((skill, index) => (
                <Badge variant="secondary" className="font-normal text-[13px]">{skill}</Badge>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Jul 2019 - Sep 2019",
      content: (
        <div>
          <div className="flex gap-4 items-center">
            <Image
              src="/scg.png"
              alt="scg-company"
              width={100}
              height={100}
              style={{ objectFit: 'contain' }}
            />
            <div className="">
              <p className="text-neutral-800 text-base md:text-xl font-bold mb-2">
                HR Executive - Retail Business
              </p>
              <p className="text-muted-foreground  text-sm md:text-lg font-normal ">
                SCG · Full-time
              </p>
            </div>
          </div>
          <div>
            <ul className="leading-7 mb-4">
              <li>- Help establish HR facilities for the new business. </li>
              <li>- Propose and execute recruitment strategies with support from HR Advisor in charge of HR Shared Services.</li>
              <li>- Collaborate effectively with job placement centers and local authorities during the beginning phase of the new business.</li>
              <li>- Actively participate in interviews of entities within the shared service group (including packing, logistics, cement, building materials, etc.).</li>
              <li>- Act as the PIC for university relationships to enhance networking and strengthen employer branding.</li>
            </ul>
            <div className="flex gap-2 flex-wrap">
              <p className="font-bold">Skills:</p>
              {['Recruiting', 'University Relations', 'Labor and Employment Law', 'Labor Market'].map((skill, index) => (
                <Badge variant="secondary" className="font-normal text-[13px]">{skill}</Badge>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Aug 2016 - Jul 2019",
      content: (
        <div>
          <div className="flex gap-4 items-center">
            <Image
              src="/aeon.png"
              alt="aeon-company"
              width={100}
              height={100}
              style={{ objectFit: 'contain' }}
            />
            <div className="">
              <p className="text-neutral-800 text-base md:text-xl font-bold mb-2">
                AEON Delight Vietnam
              </p>
              <p className="text-muted-foreground  text-sm md:text-lg font-normal ">
                Full-time · 3 yrs
              </p>
            </div>
          </div>
          <div>
            <Timeline>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <div>
                    <p className="font-bold text-[18px]">HR Officer</p>
                    <p className="text-muted-foreground">Aug 2017 - Jul 2019</p>
                  </div>
                  <ul className="leading-7">
                    <li>- Work closely with the Site Manager and Supervisor regarding the roster and working hours, Overtime,....</li>
                    <li>- Mainly handle SHUI and related issues: Manage SHUI for over 500 headcounts, including blue-collar staff, with rapidly changing turnover.</li>
                    <li>- Manage labor contracts, including probationary agreements, renewals, promotions, and changes.</li>
                    <li>- Collaborate with the C&B Manager on PIT finalization and expat tax-related matters</li>
                    <li>- Serve as the PIC in internal and external audits. Collaborate with stakeholders to resolve issues.</li>
                    <li>- Support the Trade Union and related reporting.</li>
                  </ul>
                  <div className="flex gap-2 flex-wrap">
                    <p className="font-bold">Skills:</p>
                    {['Labor and Employment Law', 'Employee Relations', 'Government Relations', 'Payroll Management', 'HR System', 'Human Resources Information Technology (HRIT)'].map((skill, index) => (
                      <Badge variant="secondary" className="font-normal text-[13px]">{skill}</Badge>
                    ))}
                  </div>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <div>
                    <p className="font-bold text-[18px]">HR Assistant</p>
                    <p className="text-muted-foreground">Aug 2016 - Aug 2017</p>
                  </div>
                  <ul className="leading-7">
                    <li>- Manage time attendance and roster: Actively monitor and collaborate with site management in the Operations Department across all sites</li>
                    <li>- Mainly handle SHUI and related issues: Manage SHUI for over 400 headcounts, including blue-collar staff, with rapidly changing turnover.</li>
                    <li>- Assist the C&B Manager with PIT finalization and expat tax-related matters.</li>
                    <li>- Support the Trade Union and related reporting.</li>
                  </ul>
                  <div className="flex gap-2 flex-wrap">
                    <p className="font-bold">Skills:</p>
                    {['Labor Law', 'SHUI', 'Employee Relations', 'Time Attendant'].map((skill, index) => (
                      <Badge variant="secondary" className="font-normal text-[13px]">{skill}</Badge>
                    ))}
                  </div>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </div>
        </div>
      ),
    },
    {
      title: "Feb 2016 - Jun 2016",
      content: (
        <div className="flex gap-4 items-center">
          <Image
            src="/bigc.png"
            alt="bigc-company"
            width={100}
            height={100}
            style={{ objectFit: 'contain' }}
          />
          <div className="">
            <p className="text-neutral-800 text-base md:text-xl font-bold mb-2">
              Human Resources Trainee - Head Office
            </p>
            <p className="text-muted-foreground  text-sm md:text-lg font-normal ">
              Big C Vietnam · Internship
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Apr 2015 - Sep 2015",
      content: (
        <div className="flex gap-4 items-center">
          <Image
            src="/pnj.png"
            alt="pnj-company"
            width={100}
            height={100}
            style={{ objectFit: 'contain' }}
          />
          <div className="">
            <p className="text-neutral-800 text-base md:text-xl font-bold mb-2">
              Human Resources Intern
            </p>
            <p className="text-muted-foreground  text-sm md:text-lg font-normal ">
              PNJ · Internship
            </p>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <TimelineV1 data={data} />
    </div>
  );
}
