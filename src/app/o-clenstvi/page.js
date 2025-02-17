import React from 'react';
import Link from 'next/link';
import Navbar from "../../components/navbar";

export default function Oclenstvi() {
  return (
    <div className="min-h-screen p-8 sm:p-20 flex flex-col items-center">
      <Navbar />
      <div className="mt-20 w-full text-center">
        <h1 className="text-4xl font-bold mb-8">O členství</h1>
      </div>
      <div className="flex flex-col lg:flex-row w-full items-center">
        <div className="lg:w-1/2 flex flex-col items-center justify-center lg:pr-4">
          <p className="text-lg text-center mb-4 lg:mb-0">
            Zaujali jsme tě? To jsme rádi! Pokud chceš vědět více, <br></br>můžeš se k nám každý týden v pondělí a čtvrtek od 17:00 do 18:30 dostavit na aulu Grafické Školy v Jihlavě. Těšíme se na tebe!
          </p>
          <div className="mt-5 w-full text-center">
          <h2 className="text-2xl font-bold mb-8">Co se sebou?</h2>
          <ul >
            <p>Lahev s pitím</p>
            <p>Chlapci - jednobarevné triko, černé kalhoty</p>
            <p>Dívky - triko, legíny popřípadně sukni a gumičku do vlasů</p>
            <p>Boty - sportovní, popřípadně taneční, jestli je vlastníte</p>
            <p>A hlavně donrou náladu!</p>
          </ul>

          <p className="mb-5">Pokud jsme tě přesvědčili, vezmi se sebou i přihlášku a podepsaný řád klubu, ten i s dalšími instrukcemi najdeš tady:</p>
          <Link legacyBehavior href="/prihlaska">
          <a className="mt-4 text-black bg-gray-200 rounded-full px-4 py-2 hover:bg-gray-300 hover:shadow-lg hover:shadow-[#cb3298]/50 transition duration-300">Přihláška</a>
          </Link>
          </div>
        </div>
        <div className="lg:w-1/2 flex items-center justify-center">
          <iframe
            width="500"
            height="500S"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://www.openstreetmap.org/export/embed.html?bbox=15.590898%2C49.397804%2C15.592898%2C49.398804&amp;layer=mapnik&amp;marker=49.398304%2C15.591898"
            style={{ border: 0 }}
            allowFullScreen
          ></iframe>
        </div>
      </div>

      
    </div>
  );
}