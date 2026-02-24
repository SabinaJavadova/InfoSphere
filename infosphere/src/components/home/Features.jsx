export default function Features() {
  const items = [
    { id: 1, title: "Multi-language", desc: "Global ready structure" },
    { id: 2, title: "API Driven", desc: "External backend integration" },
    { id: 3, title: "Scalable", desc: "Clean architecture & modular design" },
  ];

  return (
    <section className="py-28 bg-light">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-16 text-dark">
          Why Choose InfoSphere
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {items.map((item) => (
            <div
              key={item.id}
              className="p-8 bg-white rounded-3xl shadow-lg hover:shadow-glowSoft transition"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-primary text-white rounded-2xl flex items-center justify-center text-xl font-bold">
                {item.id}
              </div>

              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-dark/70">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}