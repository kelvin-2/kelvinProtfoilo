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
      icon: <Mail className="w-4 h-4 sm:w-5 sm:h-5" />,
      label: 'Email',
      value: 'tkmudzingwa21@gmail.com',
      link: 'mailto:tkmudzingwa21@gmail.com'
    },
    {
      icon: <Phone className="w-4 h-4 sm:w-5 sm:h-5" />,
      label: 'Phone',
      value: '+27 63 960 4148',
      link: 'tel:+27639604148'
    },
    {
      icon: <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />,
      label: 'Location',
      value: 'Port Elizabeth, South Africa',
      link: 'https://www.google.com/maps/place/Gqeberha'
    }
  ];
  
  // Social media links
  const socialLinks = [
    {
      icon: <Github className="w-4 h-4 sm:w-5 sm:h-5" />,
      label: 'GitHub',
      link: 'https://github.com/kelvin-2'
    },
    {
      icon: <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />,
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/tichaona-kelvin-mudzingwa-a9122226a'
    },
    {
      icon: <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />,
      label: 'Instagram',
      link: 'https://www.instagram.com/itskelvin2.0/'
    }
  ];

  return (
    <div id="contact-section" className="relative min-h-screen flex flex-col items-center justify-center bg-black px-3 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/5 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 rounded-full bg-blue-500/5 blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 rounded-full bg-indigo-500/5 blur-3xl"></div>
        <div className="absolute top-1/6 left-1/6 w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 rounded-full bg-purple-500/5 blur-3xl"></div>
        
        {/* Grid lines for background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:20px_20px] sm:bg-[size:30px_30px] lg:bg-[size:40px_40px]"></div>
      </div>
      
      {/* Main content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex flex-col items-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 text-center leading-tight">
            Get in <span className="text-blue-400">Touch</span>
          </h2>
          <div className="h-0.5 sm:h-1 w-16 sm:w-20 lg:w-24 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full mb-4 sm:mb-6"></div>
          <p className="text-gray-300 text-center max-w-2xl text-sm sm:text-base lg:text-lg px-4 sm:px-0 leading-relaxed">
            Have a project in mind or just want to say hello? I'd love to hear from you.
            Fill out the form below, and I'll get back to you as soon as possible.
          </p>
        </div>
        
        {/* Contact content */}
        <div className="grid grid-cols-1 xl:grid-cols-5 gap-8 sm:gap-10 lg:gap-12">
          {/* Left side - Contact info and socials */}
          <div className="xl:col-span-2 order-2 xl:order-1">
            {/* Contact information */}
            <div className="mb-8 sm:mb-10">
              <h3 className="text-blue-300 text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Contact Information</h3>
              <div className="space-y-3 sm:space-y-4">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start p-3 sm:p-4 bg-blue-900/10 hover:bg-blue-900/20 active:bg-blue-900/30 border border-blue-500/20 hover:border-blue-400/30 rounded-lg transition-all duration-300 group cursor-pointer"
                  >
                    <div className="bg-blue-500/20 group-hover:bg-blue-500/30 p-2 rounded-md text-blue-300 mr-3 sm:mr-4 flex-shrink-0 transition-colors duration-300">
                      {item.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-gray-400 text-xs sm:text-sm mb-1">{item.label}</p>
                      <p className="text-white font-medium text-sm sm:text-base break-words">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            
            {/* Social media links */}
            <div>
              <h3 className="text-blue-300 text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Connect With Me</h3>
              <div className="flex flex-col sm:flex-row xl:flex-col 2xl:flex-row flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 sm:gap-3 bg-blue-900/10 hover:bg-blue-900/20 active:bg-blue-900/30 border border-blue-500/20 hover:border-blue-400/30 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg transition-all duration-300 group cursor-pointer"
                  >
                    <span className="text-blue-300 group-hover:text-blue-200 transition-colors duration-300">{social.icon}</span>
                    <span className="text-white text-sm sm:text-base">{social.label}</span>
                    <ExternalLink className="w-3 h-3 text-blue-400 ml-auto group-hover:text-blue-300 transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right side - Contact form */}
          <div className="xl:col-span-3 order-1 xl:order-2">
            <div className="bg-gradient-to-br from-blue-900/20 to-blue-900/5 backdrop-blur-sm border border-blue-500/20 rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8">
              <h3 className="text-blue-300 text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Send Me a Message</h3>
              
              {/* Form status message */}
              {formStatus.message && (
                <div 
                  className={`p-3 sm:p-4 mb-4 sm:mb-6 rounded-lg flex items-start ${
                    formStatus.error 
                      ? 'bg-red-500/20 border border-red-500/30 text-red-200' 
                      : 'bg-green-500/20 border border-green-500/30 text-green-200'
                  }`}
                >
                  {formStatus.error ? (
                    <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0 mt-0.5" />
                  ) : (
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0 mt-0.5" />
                  )}
                  <p className="text-xs sm:text-sm">{formStatus.message}</p>
                </div>
              )}
              
              <div className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {/* Name field */}
                  <div className="relative">
                    <label 
                      htmlFor="name"
                      className={`absolute left-3 transition-all duration-200 pointer-events-none ${
                        focused === 'name' || formState.name 
                          ? '-top-2.5 text-blue-400 text-xs bg-black px-2' 
                          : 'top-3 sm:top-3.5 text-gray-400 text-sm'
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
                      className="w-full bg-transparent border border-blue-500/30 hover:border-blue-500/50 focus:border-blue-400 rounded-lg p-3 sm:p-3.5 text-white text-sm sm:text-base focus:outline-none transition-all duration-300"
                      required
                    />
                  </div>
                  
                  {/* Email field */}
                  <div className="relative">
                    <label 
                      htmlFor="email"
                      className={`absolute left-3 transition-all duration-200 pointer-events-none ${
                        focused === 'email' || formState.email 
                          ? '-top-2.5 text-blue-400 text-xs bg-black px-2' 
                          : 'top-3 sm:top-3.5 text-gray-400 text-sm'
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
                      className="w-full bg-transparent border border-blue-500/30 hover:border-blue-500/50 focus:border-blue-400 rounded-lg p-3 sm:p-3.5 text-white text-sm sm:text-base focus:outline-none transition-all duration-300"
                      required
                    />
                  </div>
                </div>
                
                {/* Subject field */}
                <div className="relative">
                  <label 
                    htmlFor="subject"
                    className={`absolute left-3 transition-all duration-200 pointer-events-none ${
                      focused === 'subject' || formState.subject 
                        ? '-top-2.5 text-blue-400 text-xs bg-black px-2' 
                        : 'top-3 sm:top-3.5 text-gray-400 text-sm'
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
                    className="w-full bg-transparent border border-blue-500/30 hover:border-blue-500/50 focus:border-blue-400 rounded-lg p-3 sm:p-3.5 text-white text-sm sm:text-base focus:outline-none transition-all duration-300"
                  />
                </div>
                
                {/* Message field */}
                <div className="relative">
                  <label 
                    htmlFor="message"
                    className={`absolute left-3 transition-all duration-200 pointer-events-none ${
                      focused === 'message' || formState.message 
                        ? '-top-2.5 text-blue-400 text-xs bg-black px-2' 
                        : 'top-3 sm:top-3.5 text-gray-400 text-sm'
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
                    rows={4}
                    className="w-full bg-transparent border border-blue-500/30 hover:border-blue-500/50 focus:border-blue-400 rounded-lg p-3 sm:p-3.5 text-white text-sm sm:text-base focus:outline-none transition-all duration-300 resize-none"
                    required
                  ></textarea>
                </div>
                
                {/* Submit button */}
                <button
                  onClick={handleSubmit}
                  className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 active:from-blue-700 active:to-indigo-800 text-white px-4 sm:px-6 py-3 sm:py-3.5 rounded-lg flex items-center justify-center transition-all duration-300 w-full sm:w-auto text-sm sm:text-base font-medium shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98]"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 sm:w-5 sm:h-5 mr-2 border-2 border-t-transparent border-white rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : formStatus.submitted ? (
                    <>
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                      Sent Successfully
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
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