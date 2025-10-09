"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Home() {

  const scrollToMain = () => {
    const scrollTo = document.getElementById("main-content");
    if (!scrollTo) return;
    const nav = document.querySelector("nav") || document.getElementById("navbar");
    const navHeight = nav ? nav.offsetHeight : 0;
    const gap = 12;
    const top = scrollTo.getBoundingClientRect().top + window.pageYOffset - navHeight - gap;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <div className="relative h-screen font-size:0">
        <Image
          src="/skupina-1.jpg"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          className="opacity-25"
          loading="lazy"
        />
        <div className="absolute inset-0 flex items-center justify-center">
            <Image src="/sar_dance.png" alt="Logo" width={600} height={600} priority="true" fetchPriority="high" />
        </div>

        <button
          aria-label="Scroll down"
          onClick={scrollToMain}
          className="absolute left-1/2 bottom-20 md:bottom-20 -translate-x-1/2 bg-white/80 dark:bg-black/60 rounded-full p-3 shadow-lg hover:scale-105 transition transform"
        >
          <i className="fa fa-arrow-down text-white" aria-hidden="true"></i>
        </button>
      </div>
      <div id="main-content" className="p-8 pb-20 sm:p-20 flex flex-col lg:flex-row">
        <div className="lg:w-1/2 flex flex-col items-center justify-center">
          <p className="text-center">
            Co znamená ŠaR Dance [čtěte dohromady, skoro jako Star Dance]? Šárka a Richard - jsme dva tanečníci a trenéři s láskou k tanci.<br></br>Společně spolu ve svém klubu trénujeme latinskoamerické (Samba, Cha-cha, Rumba, Paso-doble, Jive) a standartní (Waltz, Valčík, Tango, Slowfox, Quickstep) tance už 6 let, a to děti a mládežníky od 6 do 21 let.<br></br>Zaujiali jsme tě?
          </p>
          <Link legacyBehavior href="/nabidka">
          <a className="mt-4 mb-4 text-black bg-gray-200 rounded-full px-4 py-2 hover:bg-gray-300 hover:shadow-lg hover:shadow-[#cb3298]/50 transition duration-300">Co nabízíme?</a>
          </Link>
        </div>
        <div className="lg:w-1/2 flex flex-col items-center space-y-4">
          <Image src="/treneri.png" alt="Image 1" width={300} height={300} loading="lazy" />
        </div>
      </div>
      <Footer />
    </div>
    
  );
}
