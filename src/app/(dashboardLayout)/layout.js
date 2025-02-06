"use client";
import Link from "next/link";
import { useState } from "react";

const DashboardLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="flex h-screen bg-gray-100">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-800 text-white flex flex-col p-4">
          <h2 className="text-2xl font-semibold mb-6">Dashboard</h2>
          <nav>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/profile"
                  className="block py-2 px-3 rounded-sm hover:bg-gray-700"
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  href="/settings"
                  className="block py-2 px-3 rounded-sm hover:bg-gray-700"
                >
                  Settings
                </Link>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <div className="flex-1 p-6">
          <header className="flex justify-between items-center bg-white p-4 shadow-md">
            <h1 className="text-xl font-semibold">Welcome to Dashboard</h1>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-gray-600 hover:bg-gray-200 rounded"
            >
              ☰
            </button>
          </header>
          <main className="mt-4 text-black">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
