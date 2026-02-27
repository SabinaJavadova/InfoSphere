"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminPage() {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const isAdmin = document.cookie.includes("isAdmin=true");

    if (!isAdmin) {
      router.push("/admin/login");
    } else {
      setAuthorized(true);
    }
  }, []);

 
  const handleLogout = () => {
    document.cookie =
      "isAdmin=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    router.push("/admin/login");
  };

  if (!authorized) return null;

  return (
    <section className="min-h-screen p-10">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-bold">
          Admin Dashboard
        </h1>

        <button
          onClick={handleLogout}
          className="px-6 py-2 bg-red-500 text-white rounded-lg"
        >
          Logout
        </button>
      </div>

      <p>Welcome to the admin panel.</p>
    </section>
  );
}