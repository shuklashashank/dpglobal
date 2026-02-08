import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Globe, Ship, Plane, Sparkles } from "lucide-react";
import { SERVICES } from "../constants";

const Home: React.FC = () => {
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

  const cardHover = {
    hover: {
      y: -12,
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
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

  const gradientShift = {
    animate: {
      backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  const bounce = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const pulseGlow = {
    animate: {
      opacity: [0.6, 1, 0.6],
      scale: [1, 1.1, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const floatingAnimation = {
    animate: {
      y: [0, -8, 0],
      rotate: [0, 2, -2, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* HERO SECTION */}
      <section id="hero" className="relative min-h-[95vh] overflow-hidden scroll-snap-section">
        <div className="absolute inset-0 parallax-element">
          <video
  className="absolute inset-0 w-full h-full object-cover"
  autoPlay
  muted
  loop
  playsInline
  preload="auto"
>
  <source
    src="./Test/assets/Fast_Web_Background_Video_Generation.mp4"
    type="video/mp4"
  />
</video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60" />
          <motion.div 
            className="absolute inset-0 bg-radial-gradient-overlay"
            animate={gradientShift.animate}
            style={{
              background: "radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)"
            }}
          />
          <motion.div 
            className="absolute inset-0 bg-gradient-to-tr from-primary/15 via-transparent to-secondary/15 opacity-50"
            animate={gradientShift.animate}
            style={{
              backgroundSize: "200% 200%"
            }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4 py-24 md:py-32">
            <motion.div 
              className="max-w-5xl mx-auto text-center space-y-8"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div 
                variants={fadeInUp}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm gpu-accelerated"
              >
                <motion.div
                  animate={pulseGlow.animate}
                >
                  <Sparkles className="h-4 w-4 text-white" />
                </motion.div>
                <span className="text-sm font-semibold text-white">Global Logistics Excellence</span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight gpu-accelerated"
              >
                Navigating Tomorrow&apos;s Supply Chain,{" "}
                <motion.span 
                  className="text-gradient-hero bg-gradient-to-r from-blue-300 via-purple-300 to-blue-300 bg-clip-text text-transparent"
                  animate={gradientShift.animate}
                  style={{
                    backgroundSize: "200% 200%"
                  }}
                >
                  Today.
                </motion.span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-2xl md:text-3xl font-bold text-white/95 leading-relaxed gpu-accelerated"
              >
                Reliable. Innovative. Global.
              </motion.p>

              <motion.p
                variants={fadeInUp}
                className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto gpu-accelerated"
              >
                Partner with D P GLOBAL for logistics solutions that drive your business forward.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-wrap gap-4 justify-center gpu-accelerated"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    className="inline-flex items-center justify-center rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 bg-primary text-white hover:bg-primary/90 shadow-lg hover:shadow-xl px-8 py-6 text-lg font-semibold shadow-depth hover:shadow-depth-lg gpu-accelerated group" 
                    to="/contact"
                  >
                    Get in Touch
                    <motion.svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-arrow-right ml-2 h-5 w-5"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </motion.svg>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 gpu-accelerated"
          animate={bounce.animate}
        >
          <div className="w-8 h-12 border-2 border-white/40 rounded-full flex items-start justify-center p-2">
            <motion.div 
              className="w-2 h-3 bg-white rounded-full"
              animate={pulseGlow.animate}
            />
          </div>
        </motion.div>
      </section>

      {/* SERVICES SECTION */}
      {/* STATS SECTION - MATCHING REFERENCE DESIGN */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
  <div className="max-w-7xl mx-auto px-6">
    {/* Heading */}
    <motion.div 
      className="text-center max-w-3xl mx-auto mb-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: "-100px" }}
      variants={fadeInUp}
    >
      <motion.span 
        className="mb-6 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-2"
        variants={scaleIn}
      >
        Our Services
      </motion.span>
      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        Comprehensive Logistics Solutions
      </h2>
      <p className="text-gray-600 text-lg">
        We provide end-to-end logistics services designed for reliability, speed, and global reach.
      </p>
    </motion.div>

    {/* Services Cards Grid */}
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: "-50px" }}
      variants={staggerContainer}
    >
      {/* Card 1 - Sea Freight */}
      <motion.article
        variants={fadeInUp}
        whileHover="hover"
        className="card relative overflow-hidden bg-white rounded-2xl shadow-lg transition-all duration-300 group"
        style={{ height: "500px" }}
      >
        {/* Image/Thumb Section */}
        <div 
          className="thumb absolute inset-0 h-1/2 bg-cover bg-center bg-no-repeat transition-all duration-500 group-hover:h-2/5"
          style={{ 
            backgroundImage: "url('./Test/assets/seaHome.png')",
            backgroundSize: "cover"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        </div>

        {/* Info Section */}
        <div className="infos absolute bottom-0 left-0 right-0 h-3/5 bg-white p-8 pt-12 rounded-t-2xl transition-all duration-500 group-hover:h-4/5">
          <h2 className="title text-2xl font-bold text-gray-800 mb-4">
            Sea Freight Services
          </h2>
          <p className="txt text-gray-600 leading-relaxed">
            Reliable and cost-effective ocean freight solutions for global trade.
          </p>
        </div>
      </motion.article>

      {/* Card 2 - Air Freight */}
      <motion.article
        variants={fadeInUp}
        whileHover="hover"
        className="card relative overflow-hidden bg-white rounded-2xl shadow-lg transition-all duration-300 group"
        style={{ height: "500px" }}
      >
        <div 
          className="thumb absolute inset-0 h-1/2 bg-cover bg-center bg-no-repeat transition-all duration-500 group-hover:h-2/5"
          style={{ 
            backgroundImage: "url('./Test/assets/AirHome.png')",
            backgroundSize: "cover"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        </div>

        <div className="infos absolute bottom-0 left-0 right-0 h-3/5 bg-white p-8 pt-12 rounded-t-2xl transition-all duration-500 group-hover:h-4/5">
          <h2 className="title text-2xl font-bold text-gray-800 mb-4">
            Air Freight Services
          </h2>
          <p className="txt text-gray-600 leading-relaxed">
            Fast, secure, and time-critical air cargo transportation worldwide.
          </p>
        </div>
      </motion.article>

      {/* Card 3 - Custom Clearance */}
      <motion.article
        variants={fadeInUp}
        whileHover="hover"
        className="card relative overflow-hidden bg-white rounded-2xl shadow-lg transition-all duration-300 group"
        style={{ height: "500px" }}
      >
        <div 
          className="thumb absolute inset-0 h-1/2 bg-cover bg-center bg-no-repeat transition-all duration-500 group-hover:h-2/5"
          style={{ 
            backgroundImage: "url('./Test/assets/CustomClearanceHome.png')",
            backgroundSize: "cover"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        </div>

        <div className="infos absolute bottom-0 left-0 right-0 h-3/5 bg-white p-8 pt-12 rounded-t-2xl transition-all duration-500 group-hover:h-4/5">
          <h2 className="title text-2xl font-bold text-gray-800 mb-4">
            Custom Clearance
          </h2>
          <p className="txt text-gray-600 leading-relaxed">
            Expert handling of import/export documentation and compliance.
          </p>
        </div>
      </motion.article>

      {/* Card 4 - Door-to-Door Delivery */}
      <motion.article
        variants={fadeInUp}
        whileHover="hover"
        className="card relative overflow-hidden bg-white rounded-2xl shadow-lg transition-all duration-300 group"
        style={{ height: "500px" }}
      >
        <div 
          className="thumb absolute inset-0 h-1/2 bg-cover bg-center bg-no-repeat transition-all duration-500 group-hover:h-2/5"
          style={{ 
            backgroundImage: "url('./Test/assets/DoorToDoorHome.png')",
            backgroundSize: "cover"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        </div>

        <div className="infos absolute bottom-0 left-0 right-0 h-3/5 bg-white p-8 pt-12 rounded-t-2xl transition-all duration-500 group-hover:h-4/5">
          <h2 className="title text-2xl font-bold text-gray-800 mb-4">
            Door-to-Door Delivery
          </h2>
          <p className="txt text-gray-600 leading-relaxed">
            Complete logistics management from pickup to final delivery.
          </p>
        </div>
      </motion.article>
    </motion.div>
  </div>
</section>

      {/* WHY CHOOSE US SECTION */}
      <section className="relative overflow-hidden scroll-mt-24 bg-gradient-to-b from-accent/5 via-background to-accent/5 py-24">
        {/* Background gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5"
          animate={gradientShift.animate}
          style={{
            background: "linear-gradient(45deg, rgba(59, 130, 246, 0.05) 0%, transparent 50%, rgba(139, 92, 246, 0.05) 100%)",
            backgroundSize: "200% 200%"
          }}
        />

        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-7xl">
            {/* Heading */}
            <motion.div 
              className="mb-16 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={fadeInUp}
            >
              <motion.div 
                className="mb-6 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-2"
                variants={scaleIn}
              >
                <span className="text-sm font-semibold text-primary">
                  Why Choose Us
                </span>
              </motion.div>

              <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                What Sets Us Apart
              </h2>
            </motion.div>

            {/* Cards grid */}
            <motion.div 
              className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 md:gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-50px" }}
              variants={staggerContainer}
            >
              {[
                {
                  title: "Logistics Excellence",
                  desc: "Engineering precision that moves the world with effortless perfection.",
                  img: "./Test/assets/1-1.png",
                },
                {
                  title: "Experienced Team",
                  desc: "A distinguished team delivering insight, strategy, and flawless execution.",
                  img: "./Test/assets/2-1.png",
                },
                {
                  title: "Global Network",
                  desc: "An elite global network seamlessly connecting markets without borders.",
                  img: "./Test/assets/3-1.png",
                },
                {
                  title: "Customized Solutions",
                  desc: "Bespoke logistics solutions crafted to match your ambition.",
                  img: "./Test/assets/4-1.png",
                },
                {
                  title: "Trusted Logistics Partner",
                  desc: "A partner defined by trust, security, and global reliability.",
                  img: "./Test/assets/5-1.png",
                },
                {
                  title: "Competitive Pricing",
                  desc: "Premium logistics intelligence designed to maximize value.",
                  img: "./Test/assets/6-1.png",
                },
                {
                  title: "24/7 Support",
                  desc: "White-glove support, available whenever excellence demands it.",
                  img: "./Test/assets/8-1.png",
                },
                {
                  title: "Real-Time Tracking",
                  desc: "Intelligent visibility delivering control in real time.",
                  img: "./Test/assets/9-1.png",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                  className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                    <motion.img
                      src={item.img}
                      alt={item.title}
                      loading="lazy"
                      className="h-full w-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />

                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-transparent" />

                    <div className="absolute top-0 left-0 right-0 p-4">
                      <h3 className="text-base font-bold text-white md:text-lg">
                        {item.title}
                      </h3>
                      <p className="text-xs text-white/90 md:text-sm">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  <div className="pointer-events-none absolute inset-0 rounded-2xl border-2 border-transparent transition-all group-hover:border-primary/50" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section
        id="contact"
        className="scroll-snap-section bg-gradient-to-b from-background via-accent/5 to-background py-24"
      >
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div 
            className="mx-auto mb-16 max-w-3xl text-center gpu-accelerated"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={fadeInUp}
          >
            <motion.div 
              className="mb-6 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-2"
              variants={scaleIn}
            >
              <span className="text-sm font-semibold text-primary">
                Get In Touch
              </span>
            </motion.div>

            <h2 className="mb-6 text-4xl font-bold text-foreground md:text-5xl">
              Contact Us
            </h2>

            <p className="text-lg leading-relaxed text-muted-foreground">
              Reach out to our team for any inquiries or assistance
            </p>
          </motion.div>

          {/* Cards */}
          <motion.div 
            className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-50px" }}
            variants={staggerContainer}
          >
            {/* General */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -12 }}
              className="group rounded-lg border-2 border-border bg-white bg-gradient-to-br from-card to-card/50 backdrop-blur-sm hover:border-primary/50 hover:shadow-depth-lg gpu-accelerated"
            >
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="flex items-center gap-3 text-xl font-semibold">
                  <motion.div
                    className="gpu-accelerated shadow-glow group-hover:shadow-glow-lg flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-gradient-to-br from-orange-500/20 to-red-500/20"
                    whileHover={{ scale: 1.1, rotate: 6 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-primary"
                    >
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </motion.div>
                  General
                </h3>
              </div>

              <div className="space-y-3 p-6 pt-0">
                <motion.a
                  href="mailto:vijay.shukla@dpglobal.co.in"
                  className="block break-all font-medium text-primary transition-all duration-300 hover:text-secondary gpu-accelerated"
                  whileHover={{ x: 5 }}
                >
                  vijay.shukla@dpglobal.co.in
                </motion.a>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  For general inquiries and information
                </p>
              </div>
            </motion.div>

            {/* Operations */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -12 }}
              className="group rounded-lg border-2 border-border bg-white bg-gradient-to-br from-card to-card/50 backdrop-blur-sm hover:border-primary/50 hover:shadow-depth-lg gpu-accelerated"
            >
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="flex items-center gap-3 text-xl font-semibold">
                  <motion.div
                    className="gpu-accelerated shadow-glow group-hover:shadow-glow-lg flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-gradient-to-br from-purple-500/20 to-pink-500/20"
                    whileHover={{ scale: 1.1, rotate: -6 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-primary"
                    >
                      <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
                    </svg>
                  </motion.div>
                  Operations
                </h3>
              </div>

              <div className="space-y-3 p-6 pt-0">
                <motion.a
                  href="mailto:customerservice@dpglobal.co.in"
                  className="block break-all font-medium text-primary transition-all duration-300 hover:text-secondary gpu-accelerated"
                  whileHover={{ x: 5 }}
                >
                  customerservice@dpglobal.co.in
                </motion.a>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  For operational support and customer service
                </p>
              </div>
            </motion.div>

            {/* Sales */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -12 }}
              className="group rounded-lg border-2 border-border bg-white bg-gradient-to-br from-card to-card/50 backdrop-blur-sm hover:border-primary/50 hover:shadow-depth-lg gpu-accelerated"
            >
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="flex items-center gap-3 text-xl font-semibold">
                  <motion.div
                    className="gpu-accelerated shadow-glow group-hover:shadow-glow-lg flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-gradient-to-br from-blue-500/20 to-cyan-500/20"
                    whileHover={{ scale: 1.1, rotate: 6 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-primary"
                    >
                      <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                    </svg>
                  </motion.div>
                  Sales
                </h3>
              </div>

              <div className="space-y-3 p-6 pt-0">
                <motion.a
                  href="mailto:accounts@dpglobal.co.in"
                  className="block break-all font-medium text-primary transition-all duration-300 hover:text-secondary gpu-accelerated"
                  whileHover={{ x: 5 }}
                >
                  accounts@dpglobal.co.in
                </motion.a>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  For sales inquiries and account management
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* QUERY FORM SECTION */}
      <motion.section
        id="query"
        className="py-28 bg-gradient-to-b from-background to-accent/10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto bg-card border border-border rounded-3xl shadow-xl p-8 md:p-10">
            <div className="text-center mb-8">
              <motion.div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4"
                variants={scaleIn}
              >
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm font-semibold text-primary">
                  Quick Contact
                </span>
              </motion.div>
              <h2 className="text-3xl font-bold text-foreground">
                Submit Your Query
              </h2>
              <p className="text-muted-foreground mt-2">
                Our team will respond shortly
              </p>
            </div>

            <form className="space-y-5">
              <motion.div 
                className="relative"
                whileFocus={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-user absolute left-3 top-3.5 w-5 h-5 text-muted-foreground"
                  aria-hidden="true"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary outline-none"
                />
              </motion.div>

              <motion.div 
                className="relative"
                whileFocus={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-mail absolute left-3 top-3.5 w-5 h-5 text-muted-foreground"
                  aria-hidden="true"
                >
                  <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                </svg>
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary outline-none"
                />
              </motion.div>

              <motion.div 
                className="relative"
                whileFocus={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-phone absolute left-3 top-3.5 w-5 h-5 text-muted-foreground"
                  aria-hidden="true"
                >
                  <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
                </svg>
                <input
                  type="tel"
                  placeholder="Contact Number"
                  required
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary outline-none"
                />
              </motion.div>

              <motion.textarea
                placeholder="Your Message"
                required
                className="w-full px-4 py-3 rounded-xl border border-input bg-background min-h-[140px] resize-none focus:ring-2 focus:ring-primary outline-none"
                whileFocus={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400 }}
              />

              <motion.button
                type="submit"
                className="w-full mt-4 h-12 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 transition disabled:opacity-60"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Submit
              </motion.button>
            </form>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;