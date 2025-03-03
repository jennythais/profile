import { Card, CardContent } from '@/components/ui/card'
import { Github, Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'

export default function ContactPage() {
  return (
    <section id="contact" className="py-10 md:py-16 bg-muted/50 text-[#694a08]" >
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8 text-center">Contact Information</h2>
        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="card-hover hover:cursor-pointer">
              <CardContent className="flex flex-col items-center p-6">
                <Mail className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <a href="mailto:thaingoc502@gmail.com" className="text-center hover:text-primary transition-colors">
                  thaingoc502@gmail.com
                </a>
              </CardContent>
            </Card>
            <Card className="card-hover hover:cursor-pointer">
              <CardContent className="flex flex-col items-center p-6">
                <Phone className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Phone</h3>
                <a href="tel:+84359252599" className="text-center hover:text-primary transition-colors">
                  0359 252 599
                </a>
              </CardContent>
            </Card>
            <Card className="card-hover hover:cursor-pointer">
              <CardContent className="flex flex-col items-center p-6">
                <MapPin className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Location</h3>
                <p className="text-center">District 7, HCMC</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section >
  )
}
