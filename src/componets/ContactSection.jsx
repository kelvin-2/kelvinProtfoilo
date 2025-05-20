import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, Send, ExternalLink, Check, AlertCircle } from 'lucide-react';

export default function ContactSection() {
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
  
  // Input change handler
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  // Form submission handler
  const handleSubmit = () => {
    setIsSubmitting(true);
    
    // Simulating form submission
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        error: false,
        message: 'Thank you! I will get back to you soon.',
      });
      
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      setIsSubmitting(false);
    }, 1500);
    
    return false; // Prevent default form submission
  };
  
  // Contact information
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: 'tkmudzingwa21@gmail.com',
      link: 'mailto:tkmudzingwa21@gmail.com'
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Phone',
      value: '+27 63 960 4148',
      link: 'tel:+27639604148'
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: 'Location',
      value: 'Port Elizabeth, South Africa',
      link: 'https://www.google.com/maps/place/Gqeberha'
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
      link: 'https://www.linkedin.com/in/tichaona-kelvin-mudzingwa-a9122226a'
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      label: 'Instagram',
      link: 'https://www.instagram.com/itskelvin2.0/'
    }
  ];

  return (
    <div id="contact-section" className="relative min-h-screen flex flex-col items-center justify-center bg-black px-4 py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/5 w-64 h-64 rounded-full bg-blue-500/5 blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 rounded-full bg-indigo-500/5 blur-3xl"></div>
        <div className="absolute top-1/6 left-1/6 w-80 h-80 rounded-full bg-purple-500/5 blur-3xl"></div>
        
        {/* Grid lines for background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>
      
      {/* Main content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-4 text-center">
            Get in <span className="text-blue-400">Touch</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full mb-6"></div>
          <p className="text-gray-300 text-center max-w-2xl">
            Have a project in mind or just want to say hello? I'd love to hear from you.
            Fill out the form below, and I'll get back to you as soon as possible.
          </p>
        </div>
        
        {/* Contact content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left side - Contact info and socials */}
          <div className="lg:col-span-2">
            {/* Contact information */}
            <div className="mb-10">
              <h3 className="text-blue-300 text-xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start p-4 bg-blue-900/10 hover:bg-blue-900/20 border border-blue-500/20 rounded-lg transition-all duration-300"
                  >
                    <div className="bg-blue-500/20 p-2 rounded-md text-blue-300 mr-4">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{item.label}</p>
                      <p className="text-white font-medium">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            
            {/* Social media links */}
            <div>
              <h3 className="text-blue-300 text-xl font-semibold mb-6">Connect With Me</h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-blue-900/10 hover:bg-blue-900/20 border border-blue-500/20 px-4 py-3 rounded-lg transition-all duration-300"
                  >
                    <span className="text-blue-300">{social.icon}</span>
                    <span className="text-white">{social.label}</span>
                    <ExternalLink className="w-3 h-3 text-blue-400 ml-1" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right side - Contact form */}
          <div className="lg:col-span-3">
            <div className="bg-gradient-to-br from-blue-900/20 to-blue-900/5 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6 md:p-8">
              <h3 className="text-blue-300 text-xl font-semibold mb-6">Send Me a Message</h3>
              
              {/* Form status message */}
              {formStatus.message && (
                <div 
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
                </div>
              )}
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="relative">
                    <label 
                      htmlFor="name"
                      className={`absolute left-3 transition-all duration-200 text-sm ${
                        focused === 'name' || formState.name 
                          ? '-top-2.5 text-blue-400 text-xs bg-black px-2' 
                          : 'top-3 text-gray-400'
                      }`}
                    >
                      Name *
                    </label>
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
                    <label 
                      htmlFor="email"
                      className={`absolute left-3 transition-all duration-200 text-sm ${
                        focused === 'email' || formState.email 
                          ? '-top-2.5 text-blue-400 text-xs bg-black px-2' 
                          : 'top-3 text-gray-400'
                      }`}
                    >
                      Email *
                    </label>
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
                  <label 
                    htmlFor="subject"
                    className={`absolute left-3 transition-all duration-200 text-sm ${
                      focused === 'subject' || formState.subject 
                        ? '-top-2.5 text-blue-400 text-xs bg-black px-2' 
                        : 'top-3 text-gray-400'
                    }`}
                  >
                    Subject
                  </label>
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
                  <label 
                    htmlFor="message"
                    className={`absolute left-3 transition-all duration-200 text-sm ${
                      focused === 'message' || formState.message 
                        ? '-top-2.5 text-blue-400 text-xs bg-black px-2' 
                        : 'top-3 text-gray-400'
                    }`}
                  >
                    Message *
                  </label>
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
                <button
                  onClick={handleSubmit}
                  className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-6 py-3 rounded-lg flex items-center justify-center transition-all duration-300 w-full md:w-auto"
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
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}