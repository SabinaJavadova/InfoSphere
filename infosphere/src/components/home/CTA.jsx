export default function CTA() {
  return (
    <section className="relative py-32 bg-dark text-white text-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-2xl"></div>

      <div className="relative">
        <h2 className="text-5xl font-bold mb-6">
          Ready to Elevate Your Brand?
        </h2>

        <button className="px-10 py-4 bg-gradient-to-r from-primary to-secondary rounded-full font-semibold shadow-xl hover:scale-105 transition duration-300">
          Contact Us
        </button>
      </div>
    </section>
  );
}