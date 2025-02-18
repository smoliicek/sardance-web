import React from 'react';
import Navbar from "../../components/navbar";
import Footer from '../../components/footer';
import Link from 'next/link';
import "../globals.css";

export default function Galerie() {
  return (
    <div className="min-h-screen flex flex-col background-color=[#0a0a0a]">
      <Navbar />
      <div className="flex-grow p-8 sm:p-20 flex flex-col items-center justify-center">
        <div className="mt-20 text-center">
          <h1 className="text-4xl font-bold mb-8">Galerie</h1>
          <div className="flex space-x-4">
            <Link legacyBehavior href="/galerie/test">
              <a className="relative block w-64 h-64">
                <img
                  src="/skupina-1.jpg"
                  alt="Gallery Image"
                  className="w-full h-full object-cover opacity-50"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white text-xl font-bold">Test</span>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}