import { ClipboardList, User, Camera, Layers } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Discovery and Planning",
    desc: "Understanding your vision, goals, and expectations to plan the perfect shoot.",
    icon: ClipboardList,
  },
  {
    id: "02",
    title: "Creative Preparation",
    desc: "Preparing concepts, locations, lighting, and styling for the session.",
    icon: User,
  },
  {
    id: "03",
    title: "Photography Session",
    desc: "Capturing natural, high-quality moments with attention to detail.",
    icon: Camera,
  },
  {
    id: "04",
    title: "Editing and Delivery",
    desc: "Carefully editing images and delivering polished final results.",
    icon: Layers,
  },
];

export default function WorkingProcess() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 text-center">

        {/* HEADER */}
        <span className="text-sm text-[#0c628f]">( My Working Process )</span>
        <h2 className="mt-3 text-3xl font-extrabold text-gray-900">
          The Way I Capture Moments
        </h2>

        {/* STEPS */}
        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div key={step.id} className="relative flex flex-col items-center">

                {/* ICON CIRCLE */}
                <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-[#03141d]">
                  <Icon className="h-8 w-8 text-white" />

                  {/* STEP NUMBER */}
                  <span className="absolute -right-1 -top-1 flex h-8 w-8 items-center justify-center rounded-full bg-[#43bfd0] text-xs font-bold text-[#03141d]">
                    {step.id}
                  </span>
                </div>

                {/* ARROW (DESKTOP ONLY) */}
                {index !== steps.length - 1 && (
                  <span className="absolute right-[-40px] top-5 hidden text-[#083a54] md:block">
                    <img className="h-10" src="https://static.vecteezy.com/system/resources/thumbnails/038/969/203/small/black-arrow-line-sketch-arrow-line-element-free-png.png" alt="" />
                  </span>
                )}

                {/* TEXT */}
                <h3 className="mt-6 text-lg font-semibold text-gray-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500 max-w-xs">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
