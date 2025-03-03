import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, Book, BrainCircuit, Camera, Plane, ShieldCheck, Sun, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* About Me Section */}
      <section className="py-10 md:py-16 bg-white">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center text-[#694a08]">About Me</h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-muted-foreground mb-6">
              A passionate HR expert with a strong can-do attitude, proficient across the full HR spectrum, with a focus on
              Compensation & Benefits (C&B), Employee Experience, and Employee Relations. Dedicated to maintaining HR
              excellence, driving business impact, and strengthening the people-business relationship.
            </p>
            <p className="text-muted-foreground mb-6">
              I have a solid grasp of labor laws and am dedicated to enhancing employee engagement and organizational
              growth. Specialize in Compensation & Benefits, Budgeting & Planning, Cost Management, HR Policy
              Development, Labor Law, HR Data Analysis, and Payroll Management.
            </p>
          </div>
        </div>
      </section>
      {/* Skills section */}
      <section className="py-10 md:py-16">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center text-[#694a08]">Skills</h1>
          <div className="max-w-4xl mx-auto">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <ShieldCheck className="mr-2 h-5 w-5" />
                  HR & Compliance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Labor Law Updates",
                    "Risk Management",
                  ].map((skill) => (
                    <span key={skill} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-base">
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="mr-2 h-5 w-5" />
                  Data & Strategy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["Cost Planning & Analysis", "HR Dashboard & HRIS", "HR Market Trends"].map((skill) => (
                    <span key={skill} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-base">
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="mr-2 h-5 w-5" />
                  Employee & Business Relations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["Employee Relations", "Business Mindset"].map((skill) => (
                    <span key={skill} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-base">
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BrainCircuit className="mr-2 h-5 w-5" />
                  Problem-Solving & Decision-Making
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["Analytical & Problem-Solving Skills", "Strategic Thinking", "Result-Oriented Approach"].map((skill) => (
                    <span key={skill} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-base">
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* Education Section */}
      <section className="py-10 md:py-16 bg-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8 text-center text-[#694a08]">Education</h2>
          <div className="max-w-3xl mx-auto">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Business administration</CardTitle>
              </CardHeader>
              <CardContent style={{ display: 'flex', justifyContent: 'space-between' }}>
                <p className="font-medium"> HCM University of Law</p>
                <p className="text-muted-foreground">2012 - 2016</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>CHRO certificate</CardTitle>
              </CardHeader>
              <CardContent style={{ display: 'flex', justifyContent: 'space-between' }}>
                <p className="font-medium">PACE Institute of Management</p>
                <p className="text-muted-foreground">Oct 2024</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section >
      {/* Hobbies Section */}
      <section className="py-10 md:py-16 " >
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8 text-center text-[#694a08]">Hobbies & Interests</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="card-hover hover:cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Plane className="mr-2 h-5 w-5" />
                  Travel
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Exploring new destinations, experiencing different cultures, and creating unforgettable memories.</p>
              </CardContent>
            </Card>
            <Card className="card-hover hover:cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Book className="mr-2 h-5 w-5" />
                  Reading books
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Diving into new worlds, gaining knowledge, and finding inspiration through every page.</p>
              </CardContent>
            </Card>
            <Card className="card-hover hover:cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Camera className="mr-2 h-5 w-5" />
                  Photography
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Capturing moments, taking selfies, and preserving cherished memories.
                </p>
              </CardContent>
            </Card>
            <Card className="card-hover hover:cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Sun className="mr-2 h-5 w-5" />
                  Outdoor Activities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Meeting friends, sharing conversations, and enjoying nature together.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section >

    </div >
  )
}

