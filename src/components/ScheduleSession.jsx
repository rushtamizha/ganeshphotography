import { useState } from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Aperture,
  Linkedin,MessageCircleMore
} from "lucide-react";

const socialLinks = [
  
  {
    id: "instagram",
    url: "https://instagram.com/dsphotography_02",
    icon: Instagram,
  },{
    id: "Aperture",
    url: "https://www.behance.net/dsphotography02",
    icon: Aperture,
  },
];
export default function ScheduleSession() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    location: "",
    date: "",
    time: "",
    message: "",
  });

  const WHATSAPP_NUMBER = "919942619744"; // change to your WhatsApp number

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = `
📸 *New Photography Session Request*

👤 Name: ${form.name}
📞 Phone: ${form.phone}
📍 Location: ${form.location}
📅 Date: ${form.date}
⏰ Time: ${form.time}
🎯 Service: ${form.service}


📝 Message:
${form.message}
    `;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      text
    )}`;

    window.open(url, "_blank");
  };

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mt-3 text-3xl font-extrabold text-gray-900">
            Schedule Your <br /> Session Right Here
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[60%_40%]">

          {/* ================= FORM ================= */}
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-6 md:grid-cols-2"
          >
            <div>
              <label className="text-sm">Your Name *</label>
              <input
                name="name"
                required
                onChange={handleChange}
                placeholder="Ex. John Doe"
                className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3"
              />
            </div>

            <div>
              <label className="text-sm">Phone *</label>
              <input
                name="phone"
                required
                onChange={handleChange}
                placeholder="Enter Phone Number"
                className="mt-2 w-full rounded-lg border-gray-300 border px-4 py-3"
              />
            </div>

            <div>
              <label className="text-sm">Preferred Services *</label>
              <select
                name="service"
                required
                onChange={handleChange}
                className="mt-2 w-full rounded-lg border-gray-300 border px-4 py-3"
              >
                <option value="">Select Type</option>
                <option>Wedding Photography</option>
                <option>House warming Photography</option>
                <option>Engagement Photography</option>
                <option>Puberty Photography</option>
                <option>Maternity & Newborn Photography</option>
                <option>Corporate Photography</option>
                <option>Album Designing</option>
                <option>Invitation</option>
                <option>Retouch</option>
                <option>Resin Art</option>
              </select>
            </div>

            <div>
              <label className="text-sm">Location *</label>
              <input
                name="location"
                required
                onChange={handleChange}
                placeholder="Enter Location"
                className="mt-2 w-full rounded-lg border-gray-300 border px-4 py-3"
              />
            </div>

            <div>
              <label className="text-sm">Preferred Session Date *</label>
              <input
                type="date"
                name="date"
                required
                onChange={handleChange}
                className="mt-2 w-full rounded-lg border-gray-300 border px-4 py-3"
              />
            </div>

            <div>
              <label className="text-sm">Preferred Session Time *</label>
              <input
                type="time"
                name="time"
                required
                onChange={handleChange}
                className="mt-2 w-full rounded-lg border-gray-300 border px-4 py-3"
              />
            </div>

            <div className="md:col-span-2">
              <label className="text-sm">Your Message *</label>
              <textarea
                name="message"
                required
                onChange={handleChange}
                placeholder="Enter here..."
                rows={4}
                className="mt-2 w-full rounded-lg border-gray-300 border px-4 py-3"
              />
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                className="flex items-center gap-3 rounded-full bg-[#43bfd0] px-6 py-3 font-semibold text-[#03141d]"
              >
                Submit
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#03141d] text-white">
                  →
                </span>
              </button>
            </div>
          </form>

          {/* ================= INFO PANEL ================= */}
          <div className="rounded-2xl bg-[#03141d] p-8 text-white">
            <h3 className="text-lg font-semibold text-[#43bfd0]">Address</h3>
            <p className="mt-2 text-sm">
              No: 1, M.S.A. Complex, Second Main Road Win Nagar, Kattur (PO) Trichy- 620 019
            </p>

            <h3 className="mt-6 text-lg font-semibold text-[#43bfd0]">
              Contact
            </h3>
            <p className="text-sm">Phone: +919942619744</p>
            <p className="text-sm">Email: GaneshKarthiy@gmail.com</p>

            <h3 className="mt-6 text-lg font-semibold text-[#43bfd0]">Time</h3>
            <p className="text-sm">Mon – Fri: 10:00 – 20:00</p>
            <p className="text-sm">Sat – Sun: 11:00 – 18:00</p>

            <div className="mt-8 rounded-xl bg-[#43bfd0] p-4 text-[#03141d]">
              <p className="font-semibold">Stay Connected</p>
              <div className="mt-4 flex gap-3">
            {socialLinks.map(({ id, url, icon: Icon }) => (
              <a
                key={id}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#03141d] text-white transition hover:scale-110 hover:bg-[#083a54]"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
