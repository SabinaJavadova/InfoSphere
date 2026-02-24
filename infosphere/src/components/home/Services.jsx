export default function Services() {
  const services = [
    {
      id: 1,
      title: "Web Development",
      desc: "Modern and scalable web applications built with performance in mind.",
    },
    {
      id: 2,
      title: "UI/UX Design",
      desc: "Clean, intuitive and visually engaging user experiences.",
    },
    {
      id: 3,
      title: "Digital Consulting",
      desc: "Strategic planning and scalable architecture solutions.",
    },
  ];

  return (
    <section className="py-32 bg-light">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold mt-4 mb-20 text-dark">
          What We Offer
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {services.map((service) => (
            <div
              key={service.id}
              className="p-10 bg-white rounded-3xl shadow-lg hover:shadow-glow transition"
            >
              <div className="w-16 h-16 mx-auto mb-8 bg-gradient-to-br from-primary to-secondary text-white rounded-2xl flex items-center justify-center text-xl font-bold">
                {service.id}
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                {service.title}
              </h3>

              <p className="text-dark/70 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}