export default function Features({ dict }) {
  const items = dict.features.items;

  return (
    <section className="py-28 bg-light">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-16 text-dark">
          {dict.features.title}
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {items.map((item, index) => (
            <div
              key={index}
              className="p-8 bg-white rounded-3xl shadow-lg hover:shadow-glowSoft transition"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-primary text-white rounded-2xl flex items-center justify-center text-xl font-bold">
                {index + 1}
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>

              <p className="text-dark/70">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}