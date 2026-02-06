import { useState } from "react";
import { MessageCircleMore } from "lucide-react";
const faqs = [
  {
    q: "What types of photography services do you offer?",
    a: "We offer a complete range of photography and videography services, including weddings, engagements, housewarming functions, puberty ceremonies, maternity & newborn shoots, corporate events, album designing, invitation design, resin art keepsakes, and AI live photo sharing.",
  },
  {
    q: "Where is your studio located?",
    a: "Our new studio is located at Kattur, Trichy, making it easy for families and businesses across Trichy to visit us for consultations, album discussions, and newborn shoots  No: 1, M.S.A. Complex, Second Main Road, Win Nagar, Kattur (PO), Trichy – 620 019",
  },
  {
    q: "Do you provide AI live photo sharing at events?",
    a: "Yes! We offer AI-powered live photo sharing, allowing guests to receive their event photos instantly on their mobile phones during weddings, receptions, and corporate events. It’s one of our most loved features.",
  },
  {
    q: "Is newborn photography safe for babies?",
    a: "Absolutely. Newborn safety is our top priority. We use gentle posing techniques, maintain a warm and hygienic environment, and handle babies with extreme care. We also use high-quality imported props designed specifically for newborn photography.",
  },
  {
    q: "Do you customize albums and resin art keepsakes?",
    a: "Yes. All our premium albums and resin art pieces are fully customized—from layout design and paper quality to cover finishes and resin preservation. Each product is crafted to reflect your personal story and emotions.",
  },
  {
    q: "How early should we book DS Photography?",
    a: "For weddings and major events, we recommend booking at least 1–2 months in advance to secure your date. For maternity, newborn, and studio shoots, bookings can usually be accommodated with shorter notice, depending on availability.",
  },
];

export default function Faq() {
  const [active, setActive] = useState(1); // second item open by default

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4">
        {/* HEADER */}
        <div className="mb-14 text-center">
          <h2 className="mt-3 text-3xl font-extrabold text-gray-900">
            Question? Look here.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[65%_35%]">
          {/* FAQ LIST */}
          <div className="space-y-4">
            {faqs.map((item, index) => {
              const isOpen = active === index;

              return (
                <div
                  key={index}
                  className={`rounded-xl border transition
                    ${
                      isOpen
                        ? "border-[#083a54] bg-[#083a54] text-white"
                        : "border-gray-200 bg-white"
                    }`}
                >
                  {/* QUESTION */}
                  <button
                    onClick={() => setActive(isOpen ? null : index)}
                    className="flex w-full items-center justify-between px-6 py-4 text-left"
                  >
                    <span className="font-medium">{item.q}</span>
                    <span
                      className={`text-xl font-bold ${
                        isOpen ? "text-[#43bfd0]" : "text-gray-400"
                      }`}
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {/* ANSWER */}
                  {isOpen && (
                    <div className="px-6 pb-5 text-sm text-white/80">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* SIDE CARD */}
          <div className="relative overflow-hidden rounded-2xl bg-[#03141d] p-8 text-white">
            <div className="relative z-10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#43bfd0] text-[#03141d]">
                <MessageCircleMore />
              </div>

              <h3 className="text-lg font-semibold">
                You have different questions?
                <br />
                Ask Away!
              </h3>

              <p className="mt-3 text-sm text-white/70">
                Your Questions, My Answers. Quick Responses Guaranteed.
              </p>

              <a
                href="https://wa.me/919942619744"
                target="_blank"
                rel="noopener noreferrer"
                className="  rounded-full mt-2 block bg-[#43bfd0] px-5 py-3 text-sm font-semibold text-[#03141d] items-center gap-2"
              >
                Contact Me
              </a>
            </div>

            {/* PATTERN */}
            <div className="absolute bottom-0 left-0 h-4 w-full bg-[#43bfd0]">
              <svg className="h-full w-full opacity-30">
                <defs>
                  <pattern
                    id="faqPattern"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M0 10c5-5 15-5 20 0"
                      fill="none"
                      stroke="rgba(0,0,0,0.3)"
                      strokeWidth="1"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#faqPattern)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
