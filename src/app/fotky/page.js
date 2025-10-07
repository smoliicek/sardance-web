import React from 'react';
import Navbar from "../../components/navbar";
import Footer from '../../components/footer';
import Link from 'next/link';

export default function Fotky() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow p-8 sm:p-20 flex flex-col items-center justify-center">
        <div className="mt-20 w-full text-center">
          <h1 className="text-4xl font-bold mb-8">Fotogalerie</h1>
        </div>
        <div className="flex flex-col lg:flex-row w-full items-center">
          <div className="flex flex-col items-center justify-center lg:pr-4">
            <p className="text-lg text-center mb-4 lg:mb-0">
              Zajímá tě, jak to u nás vypadá? Jaké máme úspěchy z posledních dní? Fotky na nový web už nedáváme, ale na fotky z našich vystoupení, závodů a soustředění se můžeš se podívat na Instagramu nebo Facebooku.<br / >Stačí kliknout na jedno z tlačítek níže - nezapomeň nás sledovat!
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center mt-8">
            {/* <Link legacyBehavior href="https://www.instagram.com/sar.dance.jihlava/">
              <a className="relative block w-32 h-32 m-4 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img
                  src="/skupina-1.jpg"
                  alt="Gallery Image"
                  className="w-full h-full object-cover opacity-50"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white text-xl font-bold">Instagram</span>
                </div>
              </a>
            </Link>
            <Link legacyBehavior href="https://www.facebook.com/sardancejihlava">
              <a className="relative block w-32 h-32 m-4 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img
                  src="/skupina-1.jpg"
                  alt="Gallery Image"
                  className="w-full h-full object-cover opacity-50"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white text-xl font-bold">Facebook</span>
                </div>
              </a>
            </Link>  */}

              <div className="flex space-x-4 justify-center">
                <Link legacyBehavior href="https://www.instagram.com/sar.dance.jihlava/">
                  <a className="mt-2 mb-8 text-black bg-gray-200 rounded-full px-4 py-2 hover:bg-gray-300 hover:shadow-lg hover:shadow-[#cb3298]/50 transition duration-300">
                    <i className="fab fa-instagram mr-2 face-left"></i>Instagram
                  </a>
                </Link>

                <Link legacyBehavior href="https://www.facebook.com/sardancejihlava">
                  <a className="mt-2 mb-8 text-black bg-gray-200 rounded-full px-4 py-2 hover:bg-gray-300 hover:shadow-lg hover:shadow-[#cb3298]/50 transition duration-300">
                    <i className="fab fa-facebook mr-2 face-left"></i>Facebook
                  </a>
                </Link>
              </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}