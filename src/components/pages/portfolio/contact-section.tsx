import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export function ContactSection() {
  return (
    <section className="py-16 md:py-32" id="contact">
      <div className="mx-auto max-w-7xl space-y-8 px-6 md:space-y-16">
        <div className="flex flex-col-reverse items-center justify-center gap-12 lg:flex-row lg:gap-16">
          {/* Contact Information */}
          <div className="flex-1/2 space-y-8">
            <div>
              <h3 className="text-foreground mb-6 font-sans text-2xl font-semibold">
                Let&apos;s work together
              </h3>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                Whether you have a project in mind, want to collaborate, or just
                want to say hello, I&apos;m always excited to connect with
                fellow creators and innovators.
              </p>
            </div>

            <div className="space-y-6">
              <div className="group flex items-center space-x-4">
                <div className="bg-primary/10 group-hover:bg-primary/20 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg transition-colors">
                  <Mail className="text-primary h-5 w-5" />
                </div>
                <div>
                  <p className="text-foreground font-medium">Email</p>
                  <p className="text-muted-foreground">
                    lanuzajasmyreandrei@gmail.com
                  </p>
                </div>
              </div>

              <div className="group flex items-center space-x-4">
                <div className="bg-primary/10 group-hover:bg-primary/20 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg transition-colors">
                  <MapPin className="text-primary h-5 w-5" />
                </div>
                <div>
                  <p className="text-foreground font-medium">Location</p>
                  <p className="text-muted-foreground">
                    Philippines, Rizal, Antipolo City
                  </p>
                </div>
              </div>

              <div className="group flex items-center space-x-4">
                <div className="bg-primary/10 group-hover:bg-primary/20 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg transition-colors">
                  <Phone className="text-primary h-5 w-5" />
                </div>
                <div>
                  <p className="text-foreground font-medium">Phone</p>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="hidden pt-8 lg:block">
              <h4 className="text-muted-foreground mb-4 text-lg font-medium">
                Links
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <div key={social.label}>
                    <Link
                      href={social.href}
                      className="bg-card border-border hover:bg-primary hover:text-primary-foreground flex h-12 w-12 items-center justify-center rounded-lg border transition-all duration-200 hover:scale-105"
                    >
                      <social.icon className="h-5 w-5" />
                      <span className="sr-only">{social.label}</span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex-1/2">
            <Card className="border-border bg-card">
              <CardContent className="p-8">
                <h3 className="text-foreground mb-6 font-sans text-2xl font-semibold">
                  Send a Message
                </h3>
                <form className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="text-foreground mb-2 block text-sm font-medium"
                      >
                        First Name
                      </label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        className="bg-background border-border focus:border-primary focus:ring-primary/20"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="text-foreground mb-2 block text-sm font-medium"
                      >
                        Last Name
                      </label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        className="bg-background border-border focus:border-primary focus:ring-primary/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="text-foreground mb-2 block text-sm font-medium"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      className="bg-background border-border focus:border-primary focus:ring-primary/20"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="text-foreground mb-2 block text-sm font-medium"
                    >
                      Subject
                    </label>
                    <Input
                      id="subject"
                      placeholder="Let's discuss your project"
                      className="bg-background border-border focus:border-primary focus:ring-primary/20"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="text-foreground mb-2 block text-sm font-medium"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      rows={5}
                      placeholder="Tell me about your project, timeline, and any specific requirements..."
                      className="bg-background border-border focus:border-primary focus:ring-primary/20 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground w-full cursor-pointer py-3 text-base font-medium"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
