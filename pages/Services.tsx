import React from 'react';
import { SERVICES } from '../constants';
import ServiceCard from '../components/ServiceCard';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const freightServices = SERVICES.filter(s => s.category === 'Freight');
  const specializedServices = SERVICES.filter(s => s.category === 'Specialized');
  const consultingServices = SERVICES.filter(s => s.category === 'Consulting');

  return (
    <div className="pt-16 min-h-screen bg-slate-50">
      
      {/* Header */}
      <div className="bg-corporate-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-white mb-4">Our Services</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            End-to-end supply chain solutions engineered for efficiency, reliability, and speed.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-20">
        
        {/* Category: Core Freight */}
        <section>
          <div className="flex items-center mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mr-4">Core Freight</h2>
            <div className="h-px bg-slate-200 flex-grow"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {freightServices.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </section>

        {/* Category: Specialized Logistics */}
        <section>
          <div className="flex items-center mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mr-4">Specialized Logistics</h2>
            <div className="h-px bg-slate-200 flex-grow"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {specializedServices.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </section>

        {/* Category: Consulting */}
        <section>
          <div className="flex items-center mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mr-4">Consulting</h2>
            <div className="h-px bg-slate-200 flex-grow"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
            {consultingServices.map(service => (
              <div key={service.id} className="bg-white rounded-xl shadow-sm border border-slate-100 p-8 flex flex-col md:flex-row items-center">
                 <div className="p-4 bg-blue-50 rounded-full mb-6 md:mb-0 md:mr-8">
                    <service.icon className="h-10 w-10 text-corporate-blue" />
                 </div>
                 <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{service.title}</h3>
                    <p className="text-slate-600 text-lg mb-4">{service.description}</p>
                    <div className="flex flex-wrap gap-3">
                       {service.details?.map((d, i) => (
                          <span key={i} className="px-3 py-1 bg-slate-100 text-slate-700 text-sm font-medium rounded-full">
                             {d}
                          </span>
                       ))}
                    </div>
                 </div>
                 <div className="mt-6 md:mt-0 md:ml-8">
                    <Link to="/contact" className="px-6 py-3 bg-corporate-blue text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                       Consult Experts
                    </Link>
                 </div>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* CTA Section */}
      <section className="bg-white py-16 border-t border-slate-100">
         <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Ready to optimize your supply chain?</h2>
            <p className="text-lg text-slate-600 mb-8">
               Contact our team today for a personalized quote tailored to your shipping needs.
            </p>
            <Link 
               to="/contact" 
               className="inline-flex items-center justify-center px-8 py-4 bg-corporate-gold text-white font-bold rounded-lg text-lg hover:bg-amber-700 transition-colors"
            >
               Request a Quote <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
         </div>
      </section>

    </div>
  );
};

export default Services;