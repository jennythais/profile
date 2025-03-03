import { Briefcase, Contact, Mail, PhoneIcon, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="h-[100%] bg-background">
      {/* Hero Section */}
      <section className="bg-white h-fit flex items-center justify-center  text-[#694a08] overflow-hidden py-10">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8 container px-4 md:px-6 items-center">
          <div className="flex flex-col items-center space-y-5 text-center">
            <div className="md:w-[250px] md:h-[250px] w-[200px] h-[200px] rounded-full overflow-hidden animate-fade-in-up animation-delay-200">
              <Image
                src="/avt.JPG"
                alt="Thai Kim Ngoc"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl animate-fade-in-up animation-delay-200">
              Thai Kim Ngoc
            </h1>
            <p className="max-w-[700px] text-xl md:text-2xl animate-fade-in-up animation-delay-400">
              People Business Partner
            </p>
            <div className="flex space-x-4 mt-6 animate-fade-in-up animation-delay-600">
              <div className="contact__phone">
                <a href="tel:+84339759574" className="text-center transition-colors">
                  <PhoneIcon />
                </a>
              </div>
              <div className="contact__email">
                <a href="mailto:thaingoc502@gmail.com" className="text-center transition-colors">
                  <Mail />
                </a>
              </div>
            </div>
          </div>
          <div>
            <p className="max-w-[800px] mx-auto text-muted-foreground md:text-xl md:leading-10 mb-12 animate-fade-in-up animation-delay-400 leading-7 text-center md:text-left">
              Passionate HR expert specializing in C&B, Employee Experience, and Employee Relations. Skilled in labor law, payroll, budgeting, and HR policy development to drive business impact and engagement. Explore my journey and experience below!
            </p>
          </div>

        </div>
      </section>

      {/* Brief Introduction */}
      <section className="py-10 md:py-16">
        <div className="container px-4 md:px-6 text-center">
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/about" className="card-hover">
              <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-sm transition-all duration-300">
                <User className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">About Me</h3>
                <p className="text-muted-foreground text-sm">Learn more about my background and interests</p>
              </div>
            </Link>
            <Link href="/experience" className="card-hover">
              <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-sm transition-all duration-300">
                <Briefcase className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Work Experience</h3>
                <p className="text-muted-foreground text-sm">Check out my professional experience</p>
              </div>
            </Link>
            <Link href="/contact" className="card-hover">
              <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-sm transition-all duration-300">
                <Contact className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Contact</h3>
                <p className="text-muted-foreground text-sm">Get in touch for collaboration or inquiries</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

