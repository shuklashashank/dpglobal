import React, { useState } from "react";
import { User, Mail, Phone, Sparkles } from "lucide-react";

const QuickContactForm: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<any>({});

  const validate = () => {
    const e: any = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Valid email required";
    if (!/^[0-9]{10}$/.test(form.phone)) e.phone = "10-digit number required";
    if (form.message.length < 10) e.message = "Minimum 10 characters required";

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // API call will go here
    console.log(form);
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl p-10 max-w-lg mx-auto">
      <div className="text-center mb-8">
        <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full border text-sm font-semibold">
          <Sparkles size={14} />
          Quick Contact
        </span>

        <h3 className="text-3xl font-bold mt-4">Submit Your Query</h3>
        <p className="text-slate-500 mt-2 text-sm">
          Our team will respond shortly
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5 text-sm">
        {/* Name */}
        <div>
          <div className="flex items-center gap-3 border rounded-xl px-4 py-3">
            <User size={16} className="text-slate-400" />
            <input
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full outline-none"
            />
          </div>
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>

        {/* Email */}
        <div>
          <div className="flex items-center gap-3 border rounded-xl px-4 py-3">
            <Mail size={16} className="text-slate-400" />
            <input
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full outline-none"
            />
          </div>
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>

        {/* Phone */}
        <div>
          <div className="flex items-center gap-3 border rounded-xl px-4 py-3">
            <Phone size={16} className="text-slate-400" />
            <input
              name="phone"
              placeholder="Contact Number"
              value={form.phone}
              onChange={handleChange}
              className="w-full outline-none"
            />
          </div>
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>

        {/* Message */}
        <div>
          <textarea
            name="message"
            placeholder="Your Message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-3 outline-none"
          />
          {errors.message && (
            <p className="text-red-500 text-xs mt-1">{errors.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default QuickContactForm;
