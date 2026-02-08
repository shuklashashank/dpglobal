import { motion } from "framer-motion";

/* Section animation */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

/* Stagger container */
const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

/* Individual paragraph animation */
const paragraphFade = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
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

const About = () => {
  return (
    <div className="pt-24 bg-white">
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.4 }}
        className="max-w-7xl mx-auto px-6 py-16"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <motion.div
            className="bg-white rounded-2xl shadow-xl p-6 overflow-hidden"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <motion.img
              src="./Test/assets/core-activities.jpg"
              alt="DP Global Core Activities"
              className="rounded-xl w-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
            />
          </motion.div>

          <div>
            <motion.span
              className="inline-block px-4 py-1 mb-4 rounded-full border border-primary/20 bg-primary/10 text-sm font-semibold text-primary"
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
            >
              About Us
            </motion.span>

            <h1 className="text-4xl font-extrabold leading-tight mb-6">
              Navigating Global Logistics with Precision
            </h1>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.4 }}
              className="space-y-4"
            >
              <motion.p
                variants={paragraphFade}
                className="text-slate-600 leading-relaxed"
              >
                DP Globals is a trusted logistics partner delivering reliable,
                efficient, and innovative supply chain solutions across the globe.
                Our expertise spans sea freight, air freight, customs clearance,
                and door-to-door delivery.
              </motion.p>

              <motion.p
                variants={paragraphFade}
                className="text-slate-600 leading-relaxed"
              >
                With a strong global network and a customer-first approach, we
                ensure seamless movement of goods while maintaining the highest
                standards of safety, transparency, and efficiency.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </motion.section>
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.4 }}
        className="bg-slate-50 py-20"
      >
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.span
            className="inline-block px-5 py-1 mb-4 rounded-full border border-primary/20 bg-primary/10 text-sm font-semibold text-primary"
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            Industry Expertise
          </motion.span>

          <h2 className="text-3xl md:text-4xl font-extrabold mb-10">
            Proven Excellence Across Global Logistics
          </h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.4 }}
            className="bg-white rounded-2xl shadow-xl p-10 text-left text-slate-700 space-y-6"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <motion.p variants={paragraphFade}>
              <strong>D P GLOBAL</strong> has gained a stellar reputation within
              the industry for its exceptional offerings in Sea Freight and Air
              Freight.
            </motion.p>

            <motion.p variants={paragraphFade}>
              Our experience spans across automotive components and rovers,
              electronics, agricultural machinery, and even highly sensitive
              hospital equipment — each handled with precision, compliance, and
              care.
            </motion.p>

            <motion.p variants={paragraphFade}>
              Our forward-thinking approach has driven us to create innovative
              logistics solutions, including customized consolidation services,
              route optimization strategies, meticulous dismantling of complex
              project cargo, and reliable just-in-time (JIT) delivery models.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;
