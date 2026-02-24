export default function Hero() {
  return (
    <section className="relative bg-dark text-white overflow-hidden">

      {/* Glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-primary/30 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-secondary/30 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-40 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-8">
          The Future of Digital Presence
        </h1>

        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12">
          InfoSphere is a modern multi-language platform powered by
          scalable architecture and stunning UI.
        </p>

        <div className="flex justify-center gap-6">
          <button className="px-8 py-4 bg-primary rounded-full font-semibold hover:scale-105 transition duration-300 shadow-lg">
            Get Started
          </button>

          <button className="px-8 py-4 border border-gray-500 rounded-full hover:bg-white hover:text-black transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}