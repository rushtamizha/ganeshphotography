import { ArrowRight } from "lucide-react";
import { Facebook, Instagram, Twitter, Youtube, Linkedin } from "lucide-react";
import logo from "../assets/logo.png";
const socialLinks = [
  {
    id: "instagram",
    url: "https://instagram.com/saiganesh02",
    icon: Instagram,
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#03141d] text-white">
      {/* MAIN FOOTER */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 py-16 md:grid-cols-4">
        {/* BRAND */}
        <div>
          <div className="flex items-center gap-2">
            <img src={logo} alt="Amelia" className="h-10" />
            <span className="text-lg font-semibold">Dsphotography.</span>
          </div>

          <p className="mt-4 text-sm text-white/70">
            I founded DS Photography to merge my professional background with my
            passion for visual storytelling. Based in Neyveli and serving Trichy
            and beyond, I bring a unique 'IT-driven' approach to photography.
            Whether it’s using AI-powered live sharing or creating intricate
            resin art, I ensure that your memories are captured with the same
            dedication and detail I’ve applied throughout my professional career
          </p>

          {/* SOCIAL ICONS */}
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

        {/* GOOGLE MAP */}
        <div className="mt-6 overflow-hidden rounded-xl border border-white/10">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d501654.0940683147!2d78.19318176562501!3d10.798088400000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf3e579cfa4a7%3A0x2499d543149d421c!2sDS%20Photography%20-%20Newborn%20%26%20Maternity%20Photography!5e0!3m2!1sen!2sin!4v1770121989267!5m2!1sen!2sin"  className="h-full w-full border-0"
      loading="lazy"referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        {/* COMPANY */}
        <div>
          <h4 className="mb-4 font-semibold">Company</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li>FAQs</li>
            <li>Services</li>
            <li>Testimonial</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="mb-4 font-semibold">Contact</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li>+919942619744</li>
            <li>GaneshKarthiy@gmail.com</li>
            <li>
              No: 1, M.S.A. Complex, Second Main Road Win Nagar, Kattur (PO)
              Trichy- 620 019
            </li>
          </ul>
        </div>

        {/* NEWSLETTER */}
      </div>

      {/* BOTTOM BAR */}
      <div className="bg-[#43bfd0] py-4 text-sm text-[#03141d]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 md:flex-row">
          <p>Copyright © 2026 Ds Photography. All Rights Reserved.</p>
          <p className="hidden">User Terms & Conditions | Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
}
