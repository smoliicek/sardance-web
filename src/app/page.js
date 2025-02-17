import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/navbar";

export default function Home() {
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
            <Image src="/sar_dance.png" alt="Logo" width={500} height={500} priority="true" />
        </div>
      </div>
      <div className="p-8 pb-20 sm:p-20 flex flex-col lg:flex-row">
        <div className="lg:w-1/2 flex flex-col items-center justify-center">
          <p className="text-center">
            Co znamená ŠaR Dance [čtěte dohromady, skoro jako Star Dance]? Šárka a Richard - jsme dva tanečníci a trenéři s láskou k tanci.<br></br>Společně spolu už ve svém klubu trénujeme latinskoamerické (Samba, Cha-cha, Rumba, Paso-doble, Jive) a standartní (Waltz, Valčík, Tango, Slowfox, Quickstep) tance už 6 let, a to děti a mládežníky od 6 do 18 let.<br></br>Zaujiali jsme tě?
          </p>
          <Link legacyBehavior href="/nabidka">
          <a className="mt-4 mb-4 text-black bg-gray-200 rounded-full px-4 py-2 hover:bg-gray-300 hover:shadow-lg hover:shadow-[#cb3298]/50 transition duration-300">Co nabízíme?</a>
          </Link>
        </div>
        <div className="lg:w-1/2 flex flex-col items-center space-y-4">
          <Image src="/treneri.png" alt="Image 1" width={300} height={300} loading="lazy" />
        </div>
      </div>
    </div>
  );
}
