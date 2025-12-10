import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    type: [] as string[],
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const inquiryTypes = ['Quote', 'Partnership', 'Careers', 'General Inquiry'];

  const handleCheckboxChange = (type: string) => {
    setFormData(prev => {
      const newTypes = prev.type.includes(type)
        ? prev.type.filter(t => t !== type)
        : [...prev.type, type];
      return { ...prev, type: newTypes };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    setSubmitted(true);
    // Here you would integrate with an email service or backend
  };

  return (
    <div className="pt-16 min-h-screen bg-slate-50">
      
      {/* Header */}
      <div className="bg-corporate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-white mb-4">Contact Us</h1>
          <p className="text-lg text-slate-400">
            Get in touch with our expert team for quotes, support, or general inquiries.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Headquarters</h2>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <MapPin className="h-6 w-6 text-corporate-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Corporate Office</h3>
                    <p className="text-slate-600 mt-1">{COMPANY_INFO.address}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <Phone className="h-6 w-6 text-corporate-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Phone</h3>
                    <p className="text-slate-600 mt-1">{COMPANY_INFO.phone}</p>
                    <p className="text-xs text-slate-400 mt-1">Mon-Fri, 9am - 6pm IST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                   <div className="p-3 bg-blue-50 rounded-lg">
                      <Mail className="h-6 w-6 text-corporate-blue" />
                   </div>
                   <div>
                      <h3 className="font-semibold text-slate-900">Departments</h3>
                      <div className="mt-2 space-y-2 text-sm text-slate-600">
                         <p><span className="font-medium text-slate-800">Sales:</span> {COMPANY_INFO.emails.sales}</p>
                         <p><span className="font-medium text-slate-800">Careers:</span> {COMPANY_INFO.emails.careers}</p>
                         <p><span className="font-medium text-slate-800">General:</span> {COMPANY_INFO.emails.general}</p>
                      </div>
                   </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="h-64 bg-slate-200 rounded-xl overflow-hidden shadow-inner flex items-center justify-center relative group">
               <img 
                  src="https://picsum.photos/seed/map_mumbai/800/400" 
                  alt="Location Map" 
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
               />
               <div className="relative z-10 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg font-medium text-slate-700">
                  Map View Integration
               </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h2>
            
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Send className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                <p className="text-slate-600">Thank you for contacting SPGlobal. Our team will get back to you shortly.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-corporate-blue font-medium hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-corporate-blue focus:border-transparent outline-none transition-all"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Company</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-corporate-blue focus:border-transparent outline-none transition-all"
                      placeholder="Company Ltd."
                      value={formData.company}
                      onChange={e => setFormData({...formData, company: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                    <input 
                      type="email" 
                      required
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-corporate-blue focus:border-transparent outline-none transition-all"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-corporate-blue focus:border-transparent outline-none transition-all"
                      placeholder="+91 ..."
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-3">How can we help?</label>
                  <div className="grid grid-cols-2 gap-3">
                    {inquiryTypes.map(type => (
                      <label key={type} className="flex items-center space-x-3 cursor-pointer p-3 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
                        <input 
                          type="checkbox" 
                          className="w-4 h-4 text-corporate-blue border-gray-300 rounded focus:ring-corporate-blue"
                          checked={formData.type.includes(type)}
                          onChange={() => handleCheckboxChange(type)}
                        />
                        <span className="text-sm text-slate-700">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-corporate-blue focus:border-transparent outline-none transition-all"
                    placeholder="Tell us more about your requirements..."
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full py-3 bg-corporate-blue text-white font-bold rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
                >
                  Submit Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;