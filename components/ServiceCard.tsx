import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
  compact?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, compact = false }) => {
  const Icon = service.icon;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col h-full group">
      <div className="mb-4 p-3 bg-blue-50 rounded-lg w-fit group-hover:bg-corporate-blue transition-colors duration-300">
        <Icon className="h-8 w-8 text-corporate-blue group-hover:text-white transition-colors duration-300" />
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
      <p className="text-slate-600 mb-4 flex-grow leading-relaxed">
        {service.description}
      </p>
      
      {!compact && service.details && (
        <ul className="mb-6 space-y-2">
          {service.details.map((detail, idx) => (
            <li key={idx} className="flex items-center text-sm text-slate-500">
              <div className="w-1.5 h-1.5 bg-corporate-gold rounded-full mr-2"></div>
              {detail}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-auto">
        <Link 
          to="/services" 
          className="inline-flex items-center text-sm font-semibold text-corporate-blue hover:text-corporate-gold transition-colors"
        >
          Learn More <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;