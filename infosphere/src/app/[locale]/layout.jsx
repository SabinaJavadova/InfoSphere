import Navbar from "@/components/layout/Navbar";
import "../globals.css";

export default function LocaleLayout({ children }) {
  return (
      <html lang="az">
      <body className="bg-white text-gray-900">

        <Navbar/>

        <main className="pt-24">
          {children}
        </main>

      </body>
    </html>
  );
}