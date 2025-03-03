import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
type Experience = {
  title: string
  company: string
  date: string
  description: {
    subtitle?: string
    content: string[]
  }[]
}
const experiences: Experience[] = [
  {
    title: "HR Operations Management",
    company: "Timo Digital Bank",
    date: 'Feb 2021 - Jul 2024',
    description: [
      {
        subtitle: 'Overseeing HR Operations',
        content: [
          'Ensure smooth HR operations by primarily overseeing the full cycle of Compensation & Benefits, including managing payroll for over 200 employees across various legal entities,resolving issues, and fostering strong employee relations.',
          'Manage the employee database; labor contract, transfers, and promotions.',
          'Performance management handling and conducting.',
          'Key member of the team implementing HR systems',
          'Participate in budgeting, projecting, and controlling costs annually',
          'Details/ Overview salary report',
          'Revise and develop C&B policies; be hands-on with title restructuring initiatives.',
          'Labor report according to Government Offices (Tax; SHUI; ...)',
          'Collaborate closely with the Finance team and HR at our partner, BVBank, to ensure timely salary payments for all employees',
          'Act as a consultant with expertise in Employee Relations, Personal Income Tax (PIT), social Insurance, and related areas',
          'Act as the risk champion for the HR team, primarily collaborating with the Risk & Compliance team on risk management and issue updates',
          'Serve as the PIC in internal and external audits. Collaborate with stakeholders to resolve issues.',
          'Ensure operations (daily activities; purchasing; policy and cost-related tasks).',
          'Act as a consultant to establish and define a Trade Union from the beginning and work well with Trade Union Department District 03 & control the Trade Union budget.',
        ]
      },
      {
        subtitle: 'Team Management',
        content: [
          "Facilitate Learning & Development within the team through quarterly sharing sessions to update on laws, market trends, etc.",
          "Maintain the team's happiness score above the baseline standard, always keeping it at a high level.",
          "Maintain the highest level of communication within the team through weekly updates and bi - monthly catch-ups for mutual feedback.",
          "Data Materials for Retrospective Meetings.",
        ]
      },
    ]
  },
  {
    title: "Enhancing Employee Experience",
    company: "Timo Digital Bank",
    date: 'Feb 2021 - Jul 2024',
    description: [
      {
        subtitle: 'Enhancing Employee Experience',
        content: [
          'Fosterting employee engagement and efficiency through experience projects.',
          "Reduce barriers for employees in meeting government requirements and provide comprehensive Compensation & Benefits information through sharing such as “Investing in Employee well - being(PIT instructions)”; “Unlocking ESOP Privilege”; “Unlimited Leave”;",
          'Project leader for the Staff Loans initiative in collaboration with Standard Chartered Bank, responsible for delivering value to employees; work closely with the Standard Chartered team to kick off the programs; ',
          'Develop a visualized Employee Handbook to guide employees in focusing on essential information throughout their journey, from onboarding to offboarding;',
          'Digitalization all aspects of C&B;',
          'Act as a Business Partner, collaborating with the Head of Department on HR issues, compliance, and benefits; advising on resolving negotiations, addressing issues, and helping their team work efficiently through policy development and ensuring adherence.',
        ]
      },
      {
        subtitle: 'Team Collaboration - Cross-Functional Roles',
        content: [
          "Build the Next Gen Profiles and give an advice to Leadership the potential employees for next level; ",
          "Participate in various Employee Experience Projects (Define Potential Issues; How we work; LifeatTimo;) ",
          "Work closely with External Service team (Talent Acquisition; Event; Communications) for enhancing employee satisfaction through organized activities such as the Year - End Party, team - building events, Monthly Sharing Sessions, Town Hall Meetings, and Fireside Chats.",
        ]
      },
    ]
  },
  {
    title: "Country C&B Specialist",
    company: "OYO Technology & Hospitality",
    date: 'Sep 2019 - Feb 2021',
    description: [
      {
        subtitle: 'HR Operations',
        content: [
          'Serve as the PIC in country Compensation & Benefit management, collaborating with the payroll vendor and internal teams: HoDs, local finance and central team to maintain accuracy and ensure smooth operations.',
          "Actively resolve employee issues and provide valuable insights.",
          'Make and analyze the salary cost report; work directly with HRD, and HRM about the benefit policies and the labor cost in the labor market.',
          'Manage documentation of HR, main in-charge of internal systems including Happay, HReasily, POSH & CoC, and Amber.',
          'Collaborated with the Talent team on the onboarding process.',
          'Oversaw HR operations and managed employee relations during the transition process from Vietnam to Thailand.',
        ]
      },
      {
        subtitle: 'HR Project Management',
        content: [
          "Participate in optimizing projects during the COVID-19 situation with the global project management team.",
          "Consult and update regularly on labor market trends and labor laws, assisting HRD and work closely with the leadership team in fostering positive relationships between the business and employees. ",
          "Manage the off-boarding process and support employees smoothly.",
          "Cost projection to define and allocate the best arrangement for the company budget.",
        ]
      },
      {
        subtitle: 'Trade Union and Supports',
        content: [
          "Mainly handle Trade Union establish processing from end to end and work well with Trade Union Department District 01 and control the Trade Union budget",
          "Support HR activities (Company trip, Health check, EB,...)",
        ]
      },
    ]
  },
  {
    title: "HR Executive (For Retails business)",
    company: "SCG Viet Nam",
    date: 'Jul 2019 - Sep 2019',
    description: [
      {
        content: [
          'Manage all HR activities of Retails Business, such as set-up company regulations,...',
          "Propose and execute recruitment strategies with support from HR Advisor in charge of HR Shared Services; ",
          'Collaborate effectively with job placement centers and local authorities during the beginning phase of the new business',
          'Recruited new employees through multiple channels, including job postings, and managed CV screening(for group companies as part of shared service support).',
          'Probation & Labor Contracts; SHUI management.',
          'Create new activities for employee relation and a happy workplace.',
          'Take care employees by visiting to Nha Trang, Da Nang, Can Tho, and Ha Noi and support from Ho Chi Minh.',
        ]
      },
    ]
  },
  {
    title: "C&B Officer",
    company: "Aeon Delight (Viet Nam) ",
    date: 'Sep 2016 - Jul 2019',
    description: [
      {
        subtitle: 'Compensation & Benefits Management',
        content: [
          'Work closely with the Site Manager and Supervisor regarding the roster and working hours, Overtime, ....',
          "Mainly handle SHUI and related issues: Manage SHUI for over 500 headcounts, including blue-collar staff, with rapidly changing turnover.",
          'Collaborate with the C&B Manager on PIT finalization and expat tax-related matters.',
          'Serve as the PIC in internal and external audits. Collaborate with stakeholders to resolve issues.',
          'Mainly handle Insurances (compulsory & health).',
        ]
      },
      {
        subtitle: 'Labor Contract & Employee Database',
        content: [
          'Manage labor contracts, including probationary agreements, renewals, promotions, and changes.',
          'Manage employee database by HR system (VN resouce)',
        ]
      },
      {
        subtitle: 'HR System Project',
        content: ['Participated in HR projects and collaborated directly with the System Team (VN Resource).']
      },
      {
        subtitle: 'Trade Union',
        content: ['Support the Trade Union and related reporting.']
      },
    ]
  },
]

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="py-10 md:py-16">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center text-[#694a08]">
            Work Experience
          </h1>

          <div className="max-w-4xl mx-auto">
            {
              experiences?.map((experience, index) => (
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle>{experience?.title}</CardTitle>
                    <CardDescription className="text-[16px]">{experience?.company} | {experience?.date}</CardDescription>
                  </CardHeader>
                  {
                    experience?.description?.map((desc, index) => (
                      desc?.subtitle ? (
                        <CardContent>
                          <p className="font-bold underline underline-offset-4 mb-4">{desc?.subtitle}</p>
                          {
                            desc?.content?.map((content, index) => (
                              <ul className="list-disc pl-5 space-y-2">
                                <li>{content}</li>
                              </ul>
                            ))
                          }
                        </CardContent>
                      ) : (
                        <CardContent>
                          {
                            desc?.content?.map((content, index) => (
                              <ul className="list-disc pl-5 space-y-2">
                                <li>{content}</li>
                              </ul>
                            ))
                          }
                        </CardContent>
                      )
                    ))
                  }
                </Card>
              ))
            }
          </div>
        </div>
      </section>
    </div>
  )
}

