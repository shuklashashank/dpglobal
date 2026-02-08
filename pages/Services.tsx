import React, { useState } from 'react';
import { SERVICES } from '../constants';
import { ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const scaleIn = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

// Types
interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  image?: string;
  icon: React.ComponentType<{ className?: string }>;
  details?: string[];
}

// Animation Component
const FlippingIcon: React.FC<{
  Icon: React.ComponentType<{ className?: string }>;
  className?: string;
  bgColor?: string;
}> = ({ Icon, className = '', bgColor = 'bg-blue-600' }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={`${bgColor} w-12 h-12 rounded-full flex items-center justify-center transition-transform duration-500 ${isFlipped ? 'rotate-y-180' : ''
        } ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <Icon className={`h-6 w-6 text-white transition-opacity duration-300 ${isFlipped ? 'opacity-0' : 'opacity-100'
        }`} />
      <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isFlipped ? 'opacity-100' : 'opacity-0'
        }`}>
        <ArrowRight className="h-6 w-6 text-white" />
      </div>
    </div>
  );
};

// Card Component - UPDATED: Added proper image handling
const ServiceCard: React.FC<{ service: Service; index: number; isWide?: boolean }> = ({
  service,
  index,
  isWide = false
}) => (
  <motion.div
    variants={fadeInUp}
    whileHover={{ y: -8 }}
    className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border border-slate-100 gpu-accelerated"
    style={{ animationDelay: `${index * 100}ms` }}
  >
    {/* Image with overlay - UPDATED: Uses service.image directly */}
    <div className="relative h-56 overflow-hidden">
      <motion.img
        src={service.image || './Test/assets/seafright.png'} // Falls back to default if no image
        alt={service.title}
        className="w-full h-full object-cover"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.6 }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>

    {/* Content */}
    <div className="p-6 pt-12 relative">
      {/* Flipping Icon */}
      <div className="absolute -top-6 left-6">
        <FlippingIcon Icon={service.icon} bgColor="bg-blue-600" />
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-blue-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">
        <Link to={`/services/${service.id}`} className="hover:underline">
          {service.title}
        </Link>
      </h3>

      {/* Description */}
      <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
        {service.description}
      </p>

      {/* Tags for wide cards */}
      {isWide && service.details && (
        <div className="flex flex-wrap gap-2 mb-6">
          {service.details.slice(0, 3).map((detail, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full border border-blue-100"
            >
              {detail}
            </span>
          ))}
        </div>
      )}

      {/* CTA Button */}
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 hover:gap-3"
        >
          Contact Us
          <ArrowRight className="h-4 w-4" />
        </Link>
      </motion.div>
    </div>
  </motion.div>
);

// Section Header Component
const SectionHeader: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
  <motion.div
    className="text-center mb-12"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false }}
    variants={fadeInUp}
  >
    <motion.span
      className="text-blue-600 text-sm font-semibold tracking-wider uppercase block mb-2"
      variants={scaleIn}
    >
      {subtitle}
    </motion.span>
    <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
      {title}
    </h2>
    <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
  </motion.div>
);

// Consulting Card
const ConsultingCard: React.FC<{ service: Service }> = ({ service }) => (
  <div className="bg-white rounded-2xl shadow-xl border border-blue-100 p-8 flex flex-col lg:flex-row items-center gap-8">
    <div className="relative">
      <FlippingIcon Icon={service.icon} bgColor="bg-blue-600" className="w-16 h-16" />
    </div>
    <div className="flex-1">
      <h3 className="text-2xl font-bold text-blue-900 mb-3">{service.title}</h3>
      <p className="text-slate-600 text-lg mb-6 leading-relaxed">{service.description}</p>
      <div className="flex flex-wrap gap-3">
        {service.details?.map((d, i) => (
          <span
            key={i}
            className="px-4 py-2 bg-blue-50 text-blue-700 text-sm font-medium rounded-lg border border-blue-100"
          >
            {d}
          </span>
        ))}
      </div>
    </div>
    <div className="mt-6 lg:mt-0">
      <Link
        to="/contact"
        className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 hover:gap-4 shadow-lg hover:shadow-xl"
      >
        <Phone className="h-5 w-5" />
        Consult Experts
      </Link>
    </div>
  </div>
);

// Hero Header with Background - UPDATED: Changed padding to match Home page spacing
const HeroHeader: React.FC = () => (
  <header
    className="relative pt-32 md:pt-36 pb-24 md:pb-28 overflow-hidden" // Added pt-32 md:pt-36 for navbar spacing
    style={{
      backgroundImage: `url('./Test/assets/seafright.png')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-corporate-900/70" />

    {/* Content */}
    <motion.div
      className="relative max-w-7xl mx-auto px-4 text-center"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <motion.h1
        className="text-5xl md:text-6xl font-bold text-white mb-6"
        variants={fadeInUp}
      >
        Our Services
      </motion.h1>
      <motion.p
        className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed"
        variants={fadeInUp}
      >
        End-to-end supply chain solutions engineered for efficiency, reliability, and speed.
      </motion.p>
    </motion.div>
  </header>
);

// Main Component - UPDATED: Changed background to white
const Services: React.FC = () => {
  const freightServices = SERVICES.filter(s => s.category === 'Freight');
  const specializedServices = SERVICES.filter(s => s.category === 'Specialized');
  const consultingServices = SERVICES.filter(s => s.category === 'Consulting');

  return (
    <div className="min-h-screen bg-white">
      {/* Global Styles */}
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .fade-in-up {
            animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
            opacity: 0;
          }
          
          .line-clamp-3 {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          
          @keyframes flip {
            0% { transform: rotateY(0); }
            100% { transform: rotateY(180deg); }
          }
          
          .rotate-y-180 {
            animation: flip 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          }
        `}
      </style>

      {/* Hero with Background - Now has proper spacing for navbar */}
      <HeroHeader />

      {/* Main Content - Everything else remains exactly the same */}
      <main className="max-w-7xl mx-auto px-4 py-20">
        {/* Core Freight */}
        <section className="mb-20">
          <SectionHeader title="Core Freight Services" subtitle="What We Do" />
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-50px" }}
            variants={staggerContainer}
          >
            {freightServices.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </motion.div>
        </section>

        {/* Specialized Logistics */}
        <section className="mb-20">
          <SectionHeader title="Specialized Logistics" subtitle="Advanced Solutions" />
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-50px" }}
            variants={staggerContainer}
          >
            {specializedServices.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} isWide />
            ))}
          </motion.div>
        </section>

        {/* Consulting */}
        <section>
          <SectionHeader title="Expert Consulting" subtitle="Strategic Guidance" />
          <div className="space-y-8">
            {consultingServices.map(service => (
              <ConsultingCard key={service.id} service={service} />
            ))}
          </div>
        </section>
      </main>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Logistics?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Our experts are ready to design a custom logistics solution for your business.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-10 py-4 bg-white text-blue-900 font-bold text-lg rounded-xl hover:bg-blue-50 transition-all duration-300 hover:gap-5 shadow-2xl hover:shadow-3xl"
          >
            Request Free Consultation
            <ArrowRight className="h-6 w-6" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;