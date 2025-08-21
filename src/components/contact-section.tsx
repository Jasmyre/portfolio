"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      duration: 0.6,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export function ContactSection() {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-16 text-center"
        >
          <motion.h2
            variants={itemVariants}
            className="text-foreground mb-6 font-sans text-4xl font-bold md:text-5xl"
          >
            Let&apos;s Work Together
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-muted-foreground mx-auto max-w-2xl text-xl leading-relaxed"
          >
            Ready to bring your ideas to life? I&apos;d love to hear about your
            project and discuss how we can create something amazing together.
          </motion.p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Contact Information */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <div>
              <h3 className="text-foreground mb-6 font-sans text-2xl font-semibold">
                Get In Touch
              </h3>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                Whether you have a project in mind, want to collaborate, or just
                want to say hello, I&apos;m always excited to connect with fellow
                creators and innovators.
              </p>
            </div>

            <div className="space-y-6">
              <motion.div
                variants={itemVariants}
                className="group flex items-center space-x-4"
              >
                <div className="bg-primary/10 group-hover:bg-primary/20 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg transition-colors">
                  <Mail className="text-primary h-5 w-5" />
                </div>
                <div>
                  <p className="text-foreground font-medium">Email</p>
                  <p className="text-muted-foreground">hello@developer.com</p>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="group flex items-center space-x-4"
              >
                <div className="bg-primary/10 group-hover:bg-primary/20 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg transition-colors">
                  <Phone className="text-primary h-5 w-5" />
                </div>
                <div>
                  <p className="text-foreground font-medium">Phone</p>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="group flex items-center space-x-4"
              >
                <div className="bg-primary/10 group-hover:bg-primary/20 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg transition-colors">
                  <MapPin className="text-primary h-5 w-5" />
                </div>
                <div>
                  <p className="text-foreground font-medium">Location</p>
                  <p className="text-muted-foreground">San Francisco, CA</p>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="pt-8">
              <h4 className="text-foreground mb-4 text-lg font-medium">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="bg-card border-border hover:bg-primary hover:text-primary-foreground flex h-12 w-12 items-center justify-center rounded-lg border transition-all duration-200 hover:scale-105"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                  >
                    <social.icon className="h-5 w-5" />
                    <span className="sr-only">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
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

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground w-full py-3 text-base font-medium"
                    >
                      Send Message
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
