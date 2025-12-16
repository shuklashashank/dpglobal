import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, ShieldCheck, Clock, CheckCircle } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import { COMPANY_INFO, SERVICES } from '../constants';

const Home: React.FC = () => {
  const featuredServices = SERVICES.slice(0, 3); // Air, Ocean, Ground

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://raw.githubusercontent.com/ThakurShatrunjai/dpglobal/aec046290271be96c9e1cbd6f3cbed5339407d82/D%20P%20GLOBAL_page-0001(1).jpg/1920/1080" 
            alt="Global Logistics" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-corporate-900/70"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6">
            Navigating Tomorrow's <br className="hidden md:block"/>
            <span className="text-corporate-blue bg-white/10 px-2">Supply Chain</span>, Today.
          </h1>
          <p className="mt-4 text-xl text-slate-200 max-w-3xl mx-auto mb-10 leading-relaxed">
            Reliable. Innovative. Global. <br/>
            Partner with D P GLOBAL for logistics solutions that drive your business forward.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-corporate-blue text-white rounded-lg font-bold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30"
            >
              Request a Quote
            </Link>
            <Link 
              to="/services" 
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-bold text-lg hover:bg-white hover:text-corporate-900 transition-all"
            >
              Track Your Shipment
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="mb-10 lg:mb-0">
              <div className="inline-block px-4 py-1.5 bg-blue-50 text-corporate-blue font-semibold rounded-full text-sm mb-4">
                Visionary Leadership
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Redefining Logistics with Integrity & Innovation
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                {COMPANY_INFO.intro}
              </p>
              <div className="flex items-center space-x-4">
                <img 
                  src="https://picsum.photos/seed/ceo_portrait/100/100" 
                  alt="Vijay Shukla" 
                  className="w-16 h-16 rounded-full object-cover border-2 border-slate-200"
                />
                <div>
                  <p className="font-bold text-slate-900 text-lg">Vijay Shukla</p>
                  <p className="text-slate-500">Founder & CEO, D P GLOBAL</p>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/seed/logistics_warehouse/800/600" 
                alt="Modern Warehouse" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Services Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Our Core Services</h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              Comprehensive logistics solutions designed to meet the demands of modern global trade.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map(service => (
              <ServiceCard key={service.id} service={service} compact={true} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link 
              to="/services" 
              className="inline-flex items-center font-bold text-corporate-blue hover:text-corporate-gold transition-colors text-lg"
            >
              View All Services <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-corporate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Why Choose D P GLOBAL?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6">
                <Globe className="h-8 w-8 text-corporate-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3">Global Network</h3>
              <p className="text-slate-400">Seamless connections across 100+ countries ensuring your cargo reaches any destination.</p>
            </div>
            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6">
                <ShieldCheck className="h-8 w-8 text-corporate-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3">Customized Solutions</h3>
              <p className="text-slate-400">Tailored strategies that fit your specific business needs, not a one-size-fits-all approach.</p>
            </div>
            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6">
                <Clock className="h-8 w-8 text-corporate-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3">Tech-Driven Transparency</h3>
              <p className="text-slate-400">Real-time tracking and analytics to keep you informed every step of the way.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust/Partners Section */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-8">Trusted by Industry Leaders</p>
          <div className="flex flex-wrap justify-center gap-12 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Placeholders for logos */}
             {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center space-x-2">
                   <CheckCircle className="h-8 w-8 text-slate-400" />
                   <span className="text-xl font-bold text-slate-400">PARTNER {i}</span>
                </div>
             ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
