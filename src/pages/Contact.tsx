import React, { useState } from 'react';
import { Send, MessageSquare, Mail, Phone, MapPin, AlertCircle, CheckCircle } from 'lucide-react';

export const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  
  const validateForm = () => {
    const newErrors: { name?: string; email?: string; message?: string } = {};
    let isValid = true;
    
    if (!name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }
    
    if (!email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }
    
    if (!message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    } else if (message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
      isValid = false;
    }
    
    setErrors(newErrors);
    return isValid;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // In a real app, you would send the form data to a server
      console.log('Form submitted:', { name, email, message });
      
      // Show success message
      setSubmitted(true);
      
      // Reset form
      setName('');
      setEmail('');
      setMessage('');
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Contact Us</h1>
          <p className="text-gray-600 mt-2">Have questions or feedback? We'd love to hear from you!</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="px-6 py-5 border-b border-gray-200 flex items-center">
                <MessageSquare className="h-5 w-5 text-green-500 mr-2" />
                <h2 className="text-lg font-medium text-gray-900">Send a Message</h2>
              </div>
              
              <div className="p-6">
                {submitted && (
                  <div className="mb-6 bg-green-50 border-l-4 border-green-500 p-4 text-green-700">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-2" />
                      <p>Thank you for your message! We'll get back to you soon.</p>
                    </div>
                  </div>
                )}
                
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={`block w-full rounded-md shadow-sm sm:text-sm py-2 px-3 border ${
                        errors.name ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-green-500 focus:border-green-500'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.name}
                      </p>
                    )}
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`block w-full rounded-md shadow-sm sm:text-sm py-2 px-3 border ${
                        errors.email ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-green-500 focus:border-green-500'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className={`block w-full rounded-md shadow-sm sm:text-sm py-2 px-3 border ${
                        errors.message ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-green-500 focus:border-green-500'
                      }`}
                    ></textarea>
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.message}
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200"
                    >
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
              <div className="px-6 py-5 border-b border-gray-200">
                <h2 className="text-lg font-medium text-gray-900">Contact Information</h2>
              </div>
              
              <div className="p-6">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-green-500 mt-1 mr-3" />
                    <div>
                      <p className="text-sm font-medium text-gray-900 mb-1">Email</p>
                      <a href="mailto:contact@healthify.com" className="text-sm text-gray-600 hover:text-green-600 transition-colors duration-200">
                        contact@healthmaster.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-green-500 mt-1 mr-3" />
                    <div>
                      <p className="text-sm font-medium text-gray-900 mb-1">Phone</p>
                      <a href="tel:+918012345678" className="text-sm text-gray-600 hover:text-green-600 transition-colors duration-200">
                        +91 9302793147
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-green-500 mt-1 mr-3" />
                    <div>
                      <p className="text-sm font-medium text-gray-900 mb-1">Location</p>
                      <p className="text-sm text-gray-600">
                        Acropolis Institute of Technology,<br />
                        Indore, Madhya Pradesh <br />
                        India
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="px-6 py-5 border-b border-gray-200">
                <h2 className="text-lg font-medium text-gray-900">Helping Hours</h2>
              </div>
              
              <div className="p-6">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Monday - Friday</span>
                    <span className="text-sm font-medium text-gray-900">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Saturday-Sunday</span>
                    <span className="text-sm font-medium text-gray-900">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
