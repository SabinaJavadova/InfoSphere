import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white px-6 text-center overflow-hidden">

      {/* Glow effects */}
      <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-primary/20 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] bg-secondary/20 blur-3xl rounded-full"></div>

      <div className="relative z-10">
        <h1 className="text-[120px] font-extrabold text-primary mb-6">
          404
        </h1>

        <h2 className="text-3xl font-bold mb-4">
          Lost in Space?
        </h2>

        <p className="text-gray-400 max-w-md mx-auto mb-10">
          The page you are trying to access does not exist.
          Let’s get you back on track.
        </p>

        <Link
          href="/"
          className="px-8 py-4 bg-primary rounded-full font-semibold hover:scale-105 transition duration-300 shadow-lg"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}