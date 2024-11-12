'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { Mail, Github, Linkedin, Send, Phone, MapPin } from 'lucide-react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const result = await emailjs.sendForm(
        'SERVICE_ID',
        'TEMPLATE_ID',
        formRef.current!,
        'PUBLIC_KEY'
      )

      if (result.text === 'OK') {
        setSubmitted(true)
      }
    } catch (error) {
      console.error('Error sending email:', error) 
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="min-h-screen relative bg-gradient-to-b from-gray-900 to-gray-800 py-20 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-purple-500/10 -z-10" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 h-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-2 h-full"
          >
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 h-full flex flex-col">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <motion.div 
                  className="flex items-center space-x-4"
                  whileHover={{ x: 10 }}
                >
                  <div className="bg-blue-500/10 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <a href="mailto:your.email@example.com" className="hover:text-blue-400">
                      samuelwebalem@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-center space-x-4"
                  whileHover={{ x: 10 }}
                >
                  <div className="bg-blue-500/10 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <a href="tel:+1234567890" className="hover:text-blue-400">
                      +251 910 106 422
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-center space-x-4"
                  whileHover={{ x: 10 }}
                >
                  <div className="bg-blue-500/10 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p>Addis Ababa, Ethiopia</p>
                  </div>
                </motion.div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-700">
                <h4 className="text-lg font-medium mb-4">Connect with me</h4>
                <div className="flex space-x-4">
                  <motion.a
                    href="https://github.com/EpochX-sol?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 p-3 rounded-lg hover:bg-gray-600 transition-colors"
                    whileHover={{ y: -5 }}
                  >
                    <Github className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href="https://linkedin.com/in/samuel-wubalem"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 p-3 rounded-lg hover:bg-gray-600 transition-colors"
                    whileHover={{ y: -5 }}
                  >
                    <Linkedin className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-3 h-full"
          >
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 h-full flex flex-col">
              <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
              
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-12"
                >
                  <div className="bg-blue-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-blue-500" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Thank you for your message!</h4>
                  <p className="text-gray-400">We'll get back to you as soon as possible.</p>
                </motion.div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 flex-1">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="from_name" className="text-sm text-gray-400">Your Name</label>
                      <Input 
                        id="from_name"
                        name="from_name" 
                        type="text" 
                        placeholder="..." 
                        className="bg-gray-700/50 border-gray-600 h-12 px-4 focus:border-blue-500 focus:ring-blue-500/20 transition-colors" 
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="reply_to" className="text-sm text-gray-400">Your Email</label>
                      <Input 
                        id="reply_to"
                        name="reply_to" 
                        type="email" 
                        placeholder="example@example.com" 
                        className="bg-gray-700/50 border-gray-600 h-12 px-4 focus:border-blue-500 focus:ring-blue-500/20 transition-colors" 
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm text-gray-400">Your Message</label>
                    <Textarea 
                      id="message"
                      name="message"
                      placeholder="Write your message here..." 
                      className="bg-gray-700/50 border-gray-600 min-h-[160px] px-4 py-3 focus:border-blue-500 focus:ring-blue-500/20 transition-colors" 
                      rows={6}
                      required
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full h-12 bg-blue-600 hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 text-base"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 
