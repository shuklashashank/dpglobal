import React, { useState } from "react";
import {
  User,
  Mail,
  Phone,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import axios from "axios";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const validate = () => {
    const newErrors: any = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.match(/^\S+@\S+\.\S+$/))
      newErrors.email = "Valid email required";
    if (!formData.phone.match(/^[0-9]{10}$/))
      newErrors.phone = "Enter a valid 10-digit number";
    if (formData.message.length < 10)
      newErrors.message = "Message must be at least 10 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      await axios.post("http://localhost:5000/api/contact", formData);
      setSuccess("Your message has been sent successfully!");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-8">
      <div className="text-center mb-8">
        <span className="inline-flex items-center gap-2 px-4 py-1 border rounded-full text-sm">
          <Sparkles size={16} />
          Quick Contact
        </span>
        <h2 className="text-3xl font-bold mt-4">Submit Your Query</h2>
        <p className="text-sm text-slate-500 mt-2">
          Our team will respond shortly
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name */}
        <div>
          <div className="flex items-center border rounded-lg px-3">
            <User className="text-slate-400" size={18} />
            <input
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 outline-none"
            />
          </div>
          {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
        </div>

        {/* Email */}
        <div>
          <div className="flex items-center border rounded-lg px-3">
            <Mail className="text-slate-400" size={18} />
            <input
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 outline-none"
            />
          </div>
          {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
        </div>

        {/* Phone */}
        <div>
          <div className="flex items-center border rounded-lg px-3">
            <Phone className="text-slate-400" size={18} />
            <input
              name="phone"
              placeholder="Contact Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 outline-none"
            />
          </div>
          {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
        </div>

        {/* Message */}
        <div>
          <textarea
            name="message"
            placeholder="Your Message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 outline-none"
          />
          {errors.message && (
            <p className="text-red-500 text-xs">{errors.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          {loading ? "Sending..." : "Submit"}
        </button>

        {success && <p className="text-green-600 text-sm">{success}</p>}
      </form>
    </div>
  );
};

export default ContactForm;
