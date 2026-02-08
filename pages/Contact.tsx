import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
  // State management
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  // Initialize EmailJS (replace with your actual Service ID and Public Key)
  React.useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

    // Warn if credentials are missing (dev environment)
    if (!publicKey || !serviceId || !templateId) {
      console.warn("⚠️ EmailJS credentials not configured. Contact form will not work until GitHub Secrets are added.");
    }

    if (publicKey) {
      emailjs.init(publicKey);
    }
  }, []);

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

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validation check
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.message.trim()) {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 3000);
      return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 3000);
      return;
    }

    // Prevent double submission
    if (loading) return;

    setLoading(true);
    setSubmitStatus("idle");

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      // Check if credentials are configured
      if (!serviceId || !templateId || !publicKey) {
        console.error("❌ EmailJS credentials not configured. Add GitHub Secrets: VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY");
        setSubmitStatus("error");
        setLoading(false);
        setTimeout(() => setSubmitStatus("idle"), 3000);
        return;
      }

      // Send email using EmailJS
      const templateParams = {
        to_email: "vijay.shukla@dpglobal.co.in",
        from_name: formData.name.trim(),
        from_email: formData.email.trim(),
        phone: formData.phone.trim(),
        message: formData.message.trim(),
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
      
      // Reset success message after 3 seconds
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } catch (error) {
      console.error("Email send error:", error instanceof Error ? error.message : String(error));
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } finally {
      setLoading(false);
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

            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full rounded-xl border border-input bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full rounded-xl border border-input bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Contact Number"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full rounded-xl border border-input bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                required
                className="min-h-[140px] w-full resize-none rounded-xl border border-input bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
              />

              {/* Status Messages */}
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-lg bg-green-50 p-4 text-green-800 border border-green-200"
                >
                  ✓ Message sent successfully! We'll get back to you soon.
                </motion.div>
              )}
              
              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-lg bg-red-50 p-4 text-red-800 border border-red-200"
                >
                  ✗ Unable to send message. Please check your email and try again, or contact us directly.
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={loading}
                className="h-12 w-full rounded-md bg-blue-600 font-semibold text-white transition hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {loading ? "Sending..." : "Submit"}
              </motion.button>
            </form>
          </div>
        </div>
      </motion.section>
    </>
  );
}; export default Contact;
