import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin,Instagram, Send, ExternalLink, Check, AlertCircle } from 'lucide-react';

function ContactSection() {
  const contactRef = useRef(null);
  const formRef = useRef(null);
  const isInView = useInView(contactRef, { once: false, margin: "-10% 0px -10% 0px" });
  
  // Form state
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focused, setFocused] = useState(null);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  // Input change handler
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Simple validation
    if (!formState.name || !formState.email || !formState.message) {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Please fill out all required fields'
      });
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formState.email)) {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Please enter a valid email address'
      });
      return;
    }
    
    // Set submitting state
    setIsSubmitting(true);
    
    try {
      // Option 1: Submit to an email service like EmailJS
      // For EmailJS, you'd need to create an account and import their SDK
      // (This is a simulated implementation)
      
      /* 
      // Uncomment and use this if you're using EmailJS
      const response = await emailjs.send(
        'YOUR_SERVICE_ID',  // Create this in EmailJS dashboard
        'YOUR_TEMPLATE_ID', // Create this in EmailJS dashboard
        {
          from_name: formState.name,
          from_email: formState.email,
          subject: formState.subject || 'New contact from portfolio',
          message: formState.message
        },
        'YOUR_USER_ID' // Get this from EmailJS dashboard
      );
      */
      
      // Option 2: Using a custom API endpoint
      // This assumes you have a server endpoint set up to handle form submissions
      const response = await fetch('/api/send-contact-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState)
      });
      
      if (!response.ok) {
        throw new Error('Failed to send message');
      }
      
      // Success!
      setFormStatus({
        submitted: true,
        error: false,
        message: 'Thank you for your message! I will get back to you soon.'
      });
      
      // Reset form after successful submission
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Failed to send message. Please try again later or email me directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Contact information
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: 'hello@yourportfolio.com',
      link: 'mailto:hello@yourportfolio.com'
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Phone',
      value: '+27 63 960 4148',
      link: 'tel:+27 63 960 4148'
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: 'Location',
      value: 'Port Elizabeth, South Africa',
      link: 'https://maps.google.com/?q=San+Francisco,+CA'
    }
  ];
  
  // Social media links
  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      label: 'GitHub',
      link: 'https://github.com/kelvin-2'
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: 'LinkedIn',
      link: 'https://linkedin.com/in/yourusername'
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      label: 'Instagram',
      link: 'https://www.instagram.com/itskelvin2.0/'
    }
  ];

  return (
    <div id="contact-section" ref={contactRef} className="relative min-h-screen flex flex-col items-center justify-center bg-black px-4 py-24 overflow-hidden">
      {/* Background elements */}
      <motion.div 
        className="absolute inset-0 pointer-events-none" 
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute top-1/4 right-1/5 w-64 h-64 rounded-full bg-blue-500/5 blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 rounded-full bg-indigo-500/5 blur-3xl"></div>
        <div className="absolute top-1/6 left-1/6 w-80 h-80 rounded-full bg-purple-500/5 blur-3xl"></div>
        
        {/* Grid lines for background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </motion.div>
      
      {/* Main content */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-6xl mx-auto"
      >
        {/* Section header */}
        <motion.div
          className="flex flex-col items-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-4 text-center">
            Get in <span className="text-blue-400">Touch</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full mb-6"></div>
          <p className="text-gray-300 text-center max-w-2xl">
            Have a project in mind or just want to say hello? I'd love to hear from you.
            Fill out the form below, and I'll get back to you as soon as possible.
          </p>
        </motion.div>
        
        {/* Contact content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left side - Contact info and socials */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-2"
          >
            {/* Contact information */}
            <motion.div variants={itemVariants} className="mb-10">
              <h3 className="text-blue-300 text-xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start p-4 bg-blue-900/10 hover:bg-blue-900/20 border border-blue-500/20 rounded-lg transition-all duration-300"
                    whileHover={{ x: 5, backgroundColor: "rgba(30, 64, 175, 0.15)" }}
                  >
                    <div className="bg-blue-500/20 p-2 rounded-md text-blue-300 mr-4">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{item.label}</p>
                      <p className="text-white font-medium">{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
            
            {/* Social media links */}
            <motion.div variants={itemVariants}>
              <h3 className="text-blue-300 text-xl font-semibold mb-6">Connect With Me</h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-blue-900/10 hover:bg-blue-900/20 border border-blue-500/20 px-4 py-3 rounded-lg transition-all duration-300"
                    whileHover={{ y: -5, backgroundColor: "rgba(30, 64, 175, 0.15)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-blue-300">{social.icon}</span>
                    <span className="text-white">{social.label}</span>
                    <ExternalLink className="w-3 h-3 text-blue-400 ml-1" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
            
            {/* Availability indicator */}
            <motion.div 
              variants={itemVariants}
              className="mt-10 p-6 bg-gradient-to-br from-blue-900/20 to-blue-900/5 backdrop-blur-sm border border-blue-500/20 rounded-xl"
            >
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                <h3 className="text-white font-semibold">Currently Available</h3>
              </div>
              <p className="text-gray-300 text-sm">
                I'm currently available for freelance work and open to discussing new opportunities.
                Feel free to reach out if you have a project in mind.
              </p>
            </motion.div>
          </motion.div>
          
          {/* Right side - Contact form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-3"
          >
            <motion.div 
              variants={itemVariants}
              className="bg-gradient-to-br from-blue-900/20 to-blue-900/5 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6 md:p-8"
            >
              <h3 className="text-blue-300 text-xl font-semibold mb-6">Send Me a Message</h3>
              
              {/* Form status message */}
              {formStatus.message && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 mb-6 rounded-lg flex items-start ${
                    formStatus.error 
                      ? 'bg-red-500/20 border border-red-500/30 text-red-200' 
                      : 'bg-green-500/20 border border-green-500/30 text-green-200'
                  }`}
                >
                  {formStatus.error ? (
                    <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                  ) : (
                    <Check className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                  )}
                  <p className="text-sm">{formStatus.message}</p>
                </motion.div>
              )}
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="relative">
                    <motion.label 
                      htmlFor="name"
                      className={`absolute left-3 transition-all duration-200 text-sm ${
                        focused === 'name' || formState.name 
                          ? '-top-2.5 text-blue-400 text-xs bg-black px-2' 
                          : 'top-3 text-gray-400'
                      }`}
                      animate={
                        focused === 'name' || formState.name 
                          ? { 
                              top: '-0.625rem', 
                              fontSize: '0.75rem', 
                              color: 'rgb(96, 165, 250)',
                              backgroundColor: 'rgb(0, 0, 0)' 
                            } 
                          : { 
                              top: '0.75rem', 
                              fontSize: '0.875rem', 
                              color: 'rgb(156, 163, 175)' 
                            }
                      }
                    >
                      Name *
                    </motion.label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleInputChange}
                      onFocus={() => setFocused('name')}
                      onBlur={() => setFocused(null)}
                      className="w-full bg-transparent border border-blue-500/30 rounded-lg p-3 text-white focus:outline-none focus:border-blue-400 transition-all duration-300"
                      required
                    />
                  </div>
                  
                  {/* Email field */}
                  <div className="relative">
                    <motion.label 
                      htmlFor="email"
                      className={`absolute left-3 transition-all duration-200 text-sm ${
                        focused === 'email' || formState.email 
                          ? '-top-2.5 text-blue-400 text-xs bg-black px-2' 
                          : 'top-3 text-gray-400'
                      }`}
                      animate={
                        focused === 'email' || formState.email 
                          ? { 
                              top: '-0.625rem', 
                              fontSize: '0.75rem', 
                              color: 'rgb(96, 165, 250)',
                              backgroundColor: 'rgb(0, 0, 0)'  
                            } 
                          : { 
                              top: '0.75rem', 
                              fontSize: '0.875rem', 
                              color: 'rgb(156, 163, 175)' 
                            }
                      }
                    >
                      Email *
                    </motion.label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleInputChange}
                      onFocus={() => setFocused('email')}
                      onBlur={() => setFocused(null)}
                      className="w-full bg-transparent border border-blue-500/30 rounded-lg p-3 text-white focus:outline-none focus:border-blue-400 transition-all duration-300"
                      required
                    />
                  </div>
                </div>
                
                {/* Subject field */}
                <div className="relative">
                  <motion.label 
                    htmlFor="subject"
                    className={`absolute left-3 transition-all duration-200 text-sm ${
                      focused === 'subject' || formState.subject 
                        ? '-top-2.5 text-blue-400 text-xs bg-black px-2' 
                        : 'top-3 text-gray-400'
                    }`}
                    animate={
                      focused === 'subject' || formState.subject 
                        ? { 
                            top: '-0.625rem', 
                            fontSize: '0.75rem', 
                            color: 'rgb(96, 165, 250)',
                            backgroundColor: 'rgb(0, 0, 0)'  
                          } 
                        : { 
                            top: '0.75rem', 
                            fontSize: '0.875rem', 
                            color: 'rgb(156, 163, 175)' 
                          }
                    }
                  >
                    Subject
                  </motion.label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleInputChange}
                    onFocus={() => setFocused('subject')}
                    onBlur={() => setFocused(null)}
                    className="w-full bg-transparent border border-blue-500/30 rounded-lg p-3 text-white focus:outline-none focus:border-blue-400 transition-all duration-300"
                  />
                </div>
                
                {/* Message field */}
                <div className="relative">
                  <motion.label 
                    htmlFor="message"
                    className={`absolute left-3 transition-all duration-200 text-sm ${
                      focused === 'message' || formState.message 
                        ? '-top-2.5 text-blue-400 text-xs bg-black px-2' 
                        : 'top-3 text-gray-400'
                    }`}
                    animate={
                      focused === 'message' || formState.message 
                        ? { 
                            top: '-0.625rem', 
                            fontSize: '0.75rem', 
                            color: 'rgb(96, 165, 250)',
                            backgroundColor: 'rgb(0, 0, 0)'  
                          } 
                        : { 
                            top: '0.75rem', 
                            fontSize: '0.875rem', 
                            color: 'rgb(156, 163, 175)' 
                          }
                    }
                  >
                    Message *
                  </motion.label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleInputChange}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused(null)}
                    rows={5}
                    className="w-full bg-transparent border border-blue-500/30 rounded-lg p-3 text-white focus:outline-none focus:border-blue-400 transition-all duration-300 resize-none"
                    required
                  ></textarea>
                </div>
                
                {/* Submit button */}
                <motion.button
                  type="submit"
                  className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-6 py-3 rounded-lg flex items-center justify-center transition-all duration-300 w-full md:w-auto"
                  whileHover={{ scale: 1.02, boxShadow: "0 10px 15px -3px rgba(59, 130, 246, 0.3), 0 4px 6px -4px rgba(59, 130, 246, 0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 mr-2 border-2 border-t-transparent border-white rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : formStatus.submitted ? (
                    <>
                      <Check className="w-5 h-5 mr-2" />
                      Sent Successfully
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Map or image */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-16"
        >
          <div className="relative h-64 md:h-80 rounded-xl overflow-hidden border border-blue-500/20">
            {/* Placeholder for map - in a real implementation, you'd use Google Maps or another mapping API */}
            <div className="absolute inset-0 bg-blue-900/20 flex items-center justify-center">
              <img 
                src="/api/placeholder/1200/400" 
                alt="Location Map" 
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-blue-400 mr-2" />
                  <h3 className="text-white text-lg font-semibold">San Francisco, California</h3>
                </div>
                <p className="text-gray-300 mt-1">Available for remote work worldwide</p>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* FAQ section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-16"
        >
          <h3 className="text-blue-300 text-xl font-semibold mb-6 text-center">Frequently Asked Questions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                question: "What services do you offer?",
                answer: "I specialize in front-end development, UI/UX design, and full-stack web applications. My services include custom website development, web app creation, e-commerce solutions, and responsive design implementation."
              },
              {
                question: "What is your typical project timeline?",
                answer: "Project timelines vary depending on complexity and scope. A simple website might take 2-4 weeks, while complex web applications can take 2-3 months. I'll provide a detailed timeline during our initial consultation."
              },
              {
                question: "Do you offer ongoing maintenance?",
                answer: "Yes, I offer website maintenance and support packages to keep your site running smoothly. These include regular updates, security checks, performance optimization, and content updates as needed."
              },
              {
                question: "How do we start working together?",
                answer: "The process begins with a consultation to discuss your project requirements. After that, I'll provide a proposal with timeline and pricing. Once approved, we'll start with design concepts before moving to development."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-blue-900/10 border border-blue-500/20 rounded-lg p-6"
              >
                <h4 className="text-white font-semibold mb-2">{item.question}</h4>
                <p className="text-gray-300 text-sm">{item.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default ContactSection;