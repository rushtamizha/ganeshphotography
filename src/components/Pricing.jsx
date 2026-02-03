const pricingPlans = [
  {
    title: "Portrait Photography",
    price: "$50",
    accent: true,
  },
  {
    title: "Event Photography",
    price: "$80",
    accent: true,
  },
  {
    title: "Product Photography",
    price: "$120",
    accent: true,
  },
  {
    title: "Commercial Photography",
    price: "$150",
    accent: true,
  },
  {
    title: "Photo Editing & Retouching",
    price: "$180",
    accent: true,
  },
  {
    title: "Architectural Photography",
    price: "$300",
    accent: true,
  },
];

const features = [
  "Lorem ipsum dolor sit amet",
  "Sed ut perspiciatis",
  "At vero eos et accusamus",
  "Vitae dicta sunt explicabo",
  "Veritatis et quasi architecto",
];

export default function Pricing() {
  return (
    <section className="bg-white py-20 hidden" id="pricing">
      <div className="mx-auto max-w-7xl px-4">

        {/* HEADER */}
        <div className="mb-14 text-center">
          <span className="text-sm text-[#0c628f]">( Pricing Table )</span>
          <h2 className="mt-3 text-3xl font-extrabold text-gray-900">
            My Photography Pricing
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              {/* TOP CARD */}
              <div className="relative overflow-hidden rounded-xl bg-[#03141d] p-5 text-white">
                <h3 className="text-sm font-medium">{plan.title}</h3>

                <div className="mt-3 flex items-end gap-1">
                  <span className="text-3xl font-extrabold text-[#43bfd0]">
                    {plan.price}
                  </span>
                  <span className="text-xs text-white/70">/ Service</span>
                </div>

                {/* YELLOW PATTERN STRIP */}
                <div className="absolute right-0 top-0 h-full w-10 bg-[#43bfd0]/90">
                  <svg className="h-full w-full opacity-30">
                    <defs>
                      <pattern
                        id={`pricePattern-${index}`}
                        width="12"
                        height="12"
                        patternUnits="userSpaceOnUse"
                      >
                        <path
                          d="M0 6c3-3 9-3 12 0"
                          fill="none"
                          stroke="rgba(0,0,0,0.3)"
                          strokeWidth="1"
                        />
                      </pattern>
                    </defs>
                    <rect
                      width="100%"
                      height="100%"
                      fill={`url(#pricePattern-${index})`}
                    />
                  </svg>
                </div>
              </div>

              {/* FEATURES */}
              <ul className="mt-6 space-y-3">
                {features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-sm text-gray-600"
                  >
                    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#43bfd0] text-[10px] font-bold text-[#03141d]">
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* BUTTON */}
              <button className="mt-6 w-full rounded-full bg-[#43bfd0] py-3 text-sm font-semibold text-[#03141d] transition hover:bg-yellow-500">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
