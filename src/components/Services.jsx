const services = [
  {
    id: "01",
    title: "Event photography",
    tags: [
      "Event photography",
      "House warming",
      "Engagement",
      "Puberty",
    ],
    description:
      "We capture the true essence of your special occasions with a perfect blend of candid and traditional photography. From weddings and engagements to housewarming and puberty ceremonies, every ritual, emotion, and celebration is documented with clarity and creativity—enhanced with Insta360 coverage and instant AI-powered photo sharing, so your guests relive the moments instantly and your memories stay timeless.",
    image: "/service-portrait.jpg",
  },
  {
    id: "02",
    title: "Maternity & Newborn",
    tags: [
      "Creative Newborn Posing (with imported props)",
      "Outdoor & Indoor Maternity Shoots",
      "Baby Shower Coverage",
      "Celebrate the journey of motherhood. We provide a comfortable, private studio environment to capture the strength and beauty of your pregnancy.",
      "The Beginning Those tiny fingers and toes change so fast. We specialize in safe, creative, and patient newborn photography. From sleeping womb-like poses to the first smiles of a toddler, we handle your little ones with the utmost care.`,
    ],
  },
  {
    id: "03",
    title: "Corporate photography",
    tags: [
      "Parties",
      "Conference",
      "Get together",
      "In today’s digital world, your professional image is your first handshake. DS Photography provides high-end corporate photography services designed to make your business stand out. Whether you are a startup in Trichy or an established firm, we bring technical precision to every frame."
    ],
  },
  {
    id: "04",
    title: "Designing",
    tags: [
      "Album Designing",
      "Invitation",
      "Retouch",
      "In today’s digital world, your professional image is your first handshake. DS Photography provides high-end corporate photography services designed to make your business stand out. Whether you are a startup in Trichy or an established firm, we bring technical precision to every frame."
    ],
  },{
    id:"05",
    title:"Specialized Keepsakes",
    tags:[
      "Resin Art",
      "Premium Albums",
      "AI Live Sharing",
      "Photo frames",
    ]
  }
];

export default function Services() {
  return (
    <section className="bg-white py-20" id="services">
      <div className="mx-auto max-w-6xl px-4">

        {/* HEADER */}
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="mt-2 text-3xl font-bold text-gray-900">
              Services I Provide
            </h2>
          </div>
          <p className="max-w-md text-sm text-gray-500">
            At DS Photography, we don't just take pictures; we preserve your legacy. Combining years of technical expertise with a passion for storytelling, we offer a full suite of photography and videography services tailored to your family's most important milestones.
          </p>
        </div>

        {/* SERVICES LIST */}
        <div className="space-y-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-2xl bg-gray-50 p-6 md:p-8"
            >
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">

                {/* LEFT */}
                <div className="flex gap-6">
                  <span className="text-lg font-semibold text-gray-400">
                    {service.id}.
                  </span>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {service.title}
                    </h3>

                    {/* TAGS */}
                    <div className="mt-3 flex flex-wrap gap-2">
                      {service.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="rounded-full border border-gray-200 px-3 py-1 text-xs text-gray-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* DESCRIPTION */}
                    {service.description && (
                      <p className="mt-4 max-w-xl text-sm text-gray-500">
                        {service.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
    
      </div>
    </section>
  );
}
