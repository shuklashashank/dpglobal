import React from "react";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
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

  return (
    <>
      {/* CONTACT SECTION */}
      <section
        id="contact"
        className="scroll-snap-section bg-gradient-to-b from-background via-accent/5 to-background py-24 pt-32 md:pt-40 pb-24"
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

            <motion.h2 className="mb-6 text-4xl font-bold text-foreground md:text-5xl" variants={fadeInUp}>
              Contact Us
            </motion.h2>

            <motion.p className="text-lg leading-relaxed text-muted-foreground" variants={fadeInUp}>
              Reach out to our team for any inquiries or assistance
            </motion.p>
          </motion.div>

          {/* Cards */}
          <motion.div
            className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-50px" }}
            variants={staggerContainer}
          >
            {/* CARD */}
            {[
              {
                title: "General",
                email: "vijay.shukla@dpglobal.co.in",
                desc: "For general inquiries and information",
                gradient: "from-orange-500/20 to-red-500/20",
                icon: (
                  <>
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                    <circle cx="12" cy="10" r="3" />
                  </>
                ),
              },
              {
                title: "Operations",
                email: "customerservice@dpglobal.co.in",
                desc: "For operational support and customer service",
                gradient: "from-purple-500/20 to-pink-500/20",
                icon: (
                  <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
                ),
              },
              {
                title: "Sales",
                email: "accounts@dpglobal.co.in",
                desc: "For sales inquiries and account management",
                gradient: "from-blue-500/20 to-cyan-500/20",
                icon: (
                  <>
                    <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                  </>
                ),
              },
            ].map((card, idx) => (
              <motion.div
                key={card.title}
                variants={fadeInUp}
                whileHover={{ y: -12 }}
                className="group rounded-lg border-2 border-border bg-white bg-gradient-to-br from-card to-card/50 backdrop-blur-sm hover:border-primary/50 hover:shadow-depth-lg gpu-accelerated"
              >
                <div className="flex flex-col space-y-1.5 p-6">
                  <h3 className="flex items-center gap-3 text-xl font-semibold">
                    <motion.div
                      className={`gpu-accelerated shadow-glow group-hover:shadow-glow-lg flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-gradient-to-br ${card.gradient}`}
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
                        {card.icon}
                      </svg>
                    </motion.div>
                    {card.title}
                  </h3>
                </div>

                <div className="space-y-3 p-6 pt-0">
                  <motion.a
                    href={`mailto:${card.email}`}
                    className="block break-all font-medium text-primary transition-all duration-300 hover:text-secondary gpu-accelerated"
                    whileHover={{ x: 5 }}
                  >
                    {card.email}
                  </motion.a>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section >

      {/* QUERY SECTION */}
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
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full rounded-xl border border-input bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
              />

              <input
                type="email"
                placeholder="Your Email"
                required
                className="w-full rounded-xl border border-input bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
              />

              <input
                type="tel"
                placeholder="Contact Number"
                required
                className="w-full rounded-xl border border-input bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
              />

              <textarea
                placeholder="Your Message"
                required
                className="min-h-[140px] w-full resize-none rounded-xl border border-input bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
              />

              <motion.button
                type="submit"
                className="h-12 w-full rounded-md bg-blue-600 font-semibold text-white transition hover:bg-blue-700"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Submit
              </motion.button>
            </form>
          </div>
        </div>
      </motion.section>
    </>
  );
}; export default Contact;
