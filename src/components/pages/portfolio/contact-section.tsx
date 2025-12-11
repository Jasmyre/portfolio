import { Github, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

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
              <h3 className="mb-6 font-sans font-semibold text-2xl text-foreground">
                Let&apos;s work together
              </h3>
              <p className="mb-8 text-lg text-muted-foreground leading-relaxed">
                Whether you have a project in mind, want to collaborate, or just
                want to say hello, I&apos;m always excited to connect with
                fellow creators and innovators.
              </p>
            </div>

            <div className="space-y-6">
              <div className="group flex items-center space-x-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <p className="text-muted-foreground">
                    lanuzajasmyreandrei@gmail.com
                  </p>
                </div>
              </div>

              <div className="group flex items-center space-x-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Location</p>
                  <p className="text-muted-foreground">
                    Philippines, Rizal, Antipolo City
                  </p>
                </div>
              </div>

              <div className="group flex items-center space-x-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Phone</p>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="hidden pt-8 lg:block">
              <h4 className="mb-4 font-medium text-lg text-muted-foreground">
                Links
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <div key={social.label}>
                    <Link
                      className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-card transition-all duration-200 hover:scale-105 hover:bg-primary hover:text-primary-foreground"
                      href={social.href}
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
                <h3 className="mb-6 font-sans font-semibold text-2xl text-foreground">
                  Send a Message
                </h3>
                <form className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        className="mb-2 block font-medium text-foreground text-sm"
                        htmlFor="firstName"
                      >
                        First Name
                      </label>
                      <Input
                        className="border-border bg-background focus:border-primary focus:ring-primary/20"
                        id="firstName"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label
                        className="mb-2 block font-medium text-foreground text-sm"
                        htmlFor="lastName"
                      >
                        Last Name
                      </label>
                      <Input
                        className="border-border bg-background focus:border-primary focus:ring-primary/20"
                        id="lastName"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      className="mb-2 block font-medium text-foreground text-sm"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <Input
                      className="border-border bg-background focus:border-primary focus:ring-primary/20"
                      id="email"
                      placeholder="john@example.com"
                      type="email"
                    />
                  </div>

                  <div>
                    <label
                      className="mb-2 block font-medium text-foreground text-sm"
                      htmlFor="subject"
                    >
                      Subject
                    </label>
                    <Input
                      className="border-border bg-background focus:border-primary focus:ring-primary/20"
                      id="subject"
                      placeholder="Let's discuss your project"
                    />
                  </div>

                  <div>
                    <label
                      className="mb-2 block font-medium text-foreground text-sm"
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <Textarea
                      className="resize-none border-border bg-background focus:border-primary focus:ring-primary/20"
                      id="message"
                      placeholder="Tell me about your project, timeline, and any specific requirements..."
                      rows={5}
                    />
                  </div>

                  <Button
                    className="w-full cursor-pointer bg-primary py-3 font-medium text-base text-primary-foreground hover:bg-primary/90"
                    type="submit"
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
