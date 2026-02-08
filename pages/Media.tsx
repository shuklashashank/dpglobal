import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const Media = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const videoRef = useRef(null);

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
        staggerChildren: 0.2,
        delayChildren: 0.1
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

  const thankYouMessage = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.4,
        ease: "easeIn"
      }
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
    setShowThankYou(true);

    // Hide thank you message after 2 seconds and reset everything
    setTimeout(() => {
      setShowThankYou(false);
      // Reset video to starting position
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.pause();
      }
      // Card will automatically reset to min-h-[300px] because isPlaying is false
    }, 2000);
  };

  const handleVideoPlay = () => {
    setIsPlaying(true);
    setShowThankYou(false);
  };

  const handleVideoPause = () => {
    setIsPlaying(false);
  };

  const handleVideoReset = () => {
    setShowThankYou(false);
    setIsPlaying(false);

    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.pause();
    }
  };

  const handleVideoClick = () => {
    if (videoRef.current && !isPlaying) {
      videoRef.current.play();
    }
  };

  return (
    <motion.section
      className="pt-32 md:pt-40 pb-24"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <div className="container mx-auto px-4 space-y-24">

        {/* Project Cargo */}
        <motion.div variants={fadeInUp}>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-10"
            variants={scaleIn}
          >
            Project Cargo Handling
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-2 gap-10 bg-white rounded-3xl shadow-xl overflow-hidden"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <motion.img
              src="./Test/assets/project-cargo.png"
              alt="Project Cargo"
              className="w-full h-full object-cover min-h-[320px]"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
            />

            <div className="p-8 space-y-5">
              <p className="text-gray-600">
                D P GLOBAL has gained a stellar reputation within the industry for handling complex,
                oversized, and time‑critical project cargo with precision and safety.
              </p>

              <motion.ul
                className="space-y-2 font-medium"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
              >
                {[
                  '• Open Top containers (In‑gauge & Out‑gauge)',
                  '• Flat Rack shipments (Over‑width & Over‑weight)',
                  '• Direct delivery from container for urgent cargo',
                  '• Door‑to‑Door project shipments'
                ].map((item, i) => (
                  <motion.li key={i} variants={fadeInUp}>
                    {item}
                  </motion.li>
                ))}
              </motion.ul>

              <motion.button
                className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700"
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Project Team →
              </motion.button>
            </div>
          </motion.div>
        </motion.div>


        {/* Educational Event */}
        <motion.div variants={fadeInUp}>
          <motion.h3
            className="text-3xl font-bold mb-8"
            variants={scaleIn}
          >
            Educational & Outreach Event
          </motion.h3>

          <motion.div
            className="grid md:grid-cols-2 gap-10 bg-white rounded-3xl shadow-lg overflow-hidden"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <motion.img
              src="./Test/assets/nasa-rover-event.png"
              alt="NASA Rover Event"
              className="w-full h-full object-cover min-h-[300px]"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
            />

            <div className="p-8 space-y-4">
              <div className="text-sm font-semibold text-blue-600">July 2023</div>

              <h4 className="text-2xl font-bold">
                Delhi NCR College – NASA Rover Making Event
              </h4>

              <p className="text-gray-600">
                D P GLOBAL participated in an educational and innovation‑driven event in the Delhi NCR
                region, where students collaborated on designing and building NASA‑style rover
                prototypes. The event promoted hands‑on learning, engineering excellence, and real‑world
                problem‑solving inspired by space exploration.
              </p>
            </div>
          </motion.div>
        </motion.div>


        {/* Company Showcase Video */}
        <motion.div variants={fadeInUp}>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-10 text-center"
            variants={scaleIn}
          >
            See Us In Action
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-2 gap-0 bg-white rounded-3xl shadow-2xl overflow-hidden"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            {/* Video Container */}
            <div className={`relative h-full transition-all duration-500 ${isPlaying && !showThankYou
                ? 'bg-black md:min-h-[300px] min-h-[400px]'
                : 'min-h-[300px]'
              }`}>

              {/* Running NASA Video as Background (Always playing) */}
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-100 z-0"
              >
                <source src="./Test/assets/nasa-running-video.mp4" type="video/mp4" />
                <source src="./Test/assets/nasa-running-video.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>

              {/* Dark overlay for better text visibility */}
              <div className="absolute inset-0 bg-black/40 z-0"></div>

              {/* Company Logo/Image overlay on top of NASA video */}
              <motion.img
                src="./Test/assets/dp-nasa.jpeg" // Your company logo/image
                alt="DP Global Logistics"
                className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${isPlaying && !showThankYou ? 'opacity-0' : 'opacity-100'
                  } z-10`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              />

              {/* Main Content Video Element - Shows when playing */}
              <video
                ref={videoRef}
                className={`absolute inset-0 w-full h-full transition-all duration-500 ${isPlaying && !showThankYou
                    ? 'object-contain opacity-100 z-30'
                    : 'object-cover opacity-0 z-20'
                  }`}
                controls={isPlaying && !showThankYou}
                onPlay={handleVideoPlay}
                onPause={handleVideoPause}
                onEnded={handleVideoEnd}
                preload="metadata"
                poster="./Test/assets/dp-nasa.png"
                onClick={handleVideoClick}
              >
                <source src="./Test/assets/DpGlobals.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Play Button Overlay - Shows when NOT playing and NOT showing thank you */}
              {!isPlaying && !showThankYou && (
                <div
                  className="absolute inset-0 flex items-center justify-center cursor-pointer group z-40"
                  onClick={handleVideoClick}
                >
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-0"></div>
                  <motion.div
                    className="bg-white/20 backdrop-blur-md rounded-full p-5 md:p-6 group-hover:bg-white/30 transition-colors z-10"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="text-white text-4xl md:text-5xl">▶</div>
                  </motion.div>
                  <motion.div
                    className="absolute bottom-6 text-white font-medium text-base md:text-lg z-10"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    Click to play our story
                  </motion.div>
                </div>
              )}

              {/* NASA Video Credit (small text) */}
              <div className="absolute bottom-2 left-2 text-white/60 text-xs z-10">
                Background: NASA footage
              </div>

              {/* Play Indicator - Shows when playing */}
              {isPlaying && !showThankYou && (
                <motion.div
                  className="absolute top-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded-full flex items-center gap-2 z-50"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                >
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  Playing
                </motion.div>
              )}

              {/* Thank You Message Overlay */}
              {showThankYou && (
                <motion.div
                  className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-900/95 to-gray-900/95 backdrop-blur-sm z-60"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={thankYouMessage}
                >
                  <div className="text-center p-6 md:p-8">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                      className="text-4xl md:text-5xl mb-4"
                    >
                      ✨
                    </motion.div>
                    <motion.h3
                      className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      Thank You for Watching!
                    </motion.h3>
                    <motion.p
                      className="text-lg md:text-xl text-blue-200 mb-4"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      We appreciate your time and interest in our story.
                    </motion.p>
                    <motion.div
                      className="flex flex-col items-center gap-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <span className="text-sm text-gray-300">
                        Resetting video...
                      </span>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Right side content */}
            <div className="p-6 md:p-8 flex flex-col justify-center space-y-4">
              <h4 className="text-xl md:text-2xl font-bold text-gray-800">
                DP Global Logistics – Your Trusted Partner
              </h4>
              <p className="text-gray-600 text-sm md:text-base">
                Discover how we deliver excellence in global logistics through innovation,
                precision, and a commitment to customer satisfaction. Watch our story unfold
                and see the dedication behind every shipment we handle.
              </p>

              {/* Video Status Indicator */}
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <div className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${isPlaying ? 'bg-green-500 animate-pulse' :
                      showThankYou ? 'bg-yellow-500' :
                        'bg-gray-400'
                    }`}></div>
                  <span className="text-xs md:text-sm">{
                    isPlaying ? 'Our story is playing' :
                      showThankYou ? 'Video ended' :
                        'Ready to play'
                  }</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400 mt-1">
                  <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-blue-500"></div>
                  <span className="text-xs md:text-sm">NASA background video (loop)</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>


        {/* News */}
        <motion.div variants={fadeInUp}>
          <motion.h3
            className="text-3xl font-bold mb-8"
            variants={scaleIn}
          >
            In The News
          </motion.h3>

          <motion.div
            className="grid md:grid-cols-2 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-50px" }}
          >
            <motion.div
              className="rounded-lg border bg-white hover:shadow-xl transition p-6 space-y-4"
              variants={fadeInUp}
              whileHover={{ y: -8 }}
            >
              <div>
                <div className="text-sm text-gray-500">Global Trade Magazine</div>
                <h3 className="text-xl font-semibold">Top Logistics Companies to Watch in 2024</h3>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm italic text-gray-500">November 2023</span>

                <motion.button
                  className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Read Article →
                </motion.button>
              </div>
            </motion.div>


            <motion.div
              className="rounded-lg border bg-white hover:shadow-xl transition p-6 space-y-4"
              variants={fadeInUp}
              whileHover={{ y: -8 }}
            >
              <div>
                <div className="text-sm text-gray-500">Supply Chain Digest</div>
                <h3 className="text-xl font-semibold">The Tech Revolution in Freight Forwarding</h3>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm italic text-gray-500">October 2023</span>

                <motion.button
                  className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Read Article →
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

      </div>
    </motion.section>
  )
}

export default Media