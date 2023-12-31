"use client"

import { useState } from 'react';
import Link from "next/link";
import styles from '@/styles/diensten.module.css';
import { LiaInfoCircleSolid } from "react-icons/lia";

const packages = [
  {
    title: 'Startpakket',
    description: 'Een website van een 1 of 2 pagina’s. Perfect voor de startende ondernemer of als persoonlijke website.',
    price: 'vanaf €25/maand',
    oneTimeFee: 'Eenmalig startbedrag van €199.99',
    features: [
      '1 of 2 pagina gevuld',
      'Inclusief gratis stockfoto\'s',
      'Ontwerp op maat',
      'Geschikt voor alle apparaten',
      '2 herzieningsronden',
      'Inclusief kwartaal onderhoud, hosting en domeinnaam',
    ]
  },
  {
    title: 'Basispakket',
    description: 'Een website van max. 4 pagina’s. Voor de ondernemer die een complete website wilt.',
    price: 'vanaf €39/maand',
    oneTimeFee: 'Eenmalig startbedrag van €249.99',
    features: [
      '4 pagina\'s gevuld',
      'Ontwerp op maat',
      'Geschikt voor alle apparaten',
      'Inclusief gratis stockfoto\'s',
      '3 herzieningsronden',
      'Inbegrepen functionaliteiten: Contactformulier, Simpele Animaties (optioneel), Videoweergave etc...',
      'Inclusief maandelijks onderhoud, hosting en domeinnaam',
    ]
  },
  {
    title: 'Premiumpakket',
    description: 'Een website van 7 of meer pagina’s. Voor een complete en uitgebreide website met alle benodigde informatie.',
    price: 'vanaf €49/maand',
    oneTimeFee: 'Eenmalig startbedrag van €349.99',
    features: [
      '7 pagina\'s gevuld (max. 10)',
      'Ontwerp op maat',
      'Geschikt voor alle apparaten',
      'Inclusief gratis stockfoto\'s',
      '3 herzieningsronden',
      'Inbegrepen functionaliteiten: Contactformulier, Simpele Animaties (optioneel), Videoweergave etc...',
      'Inclusief maandelijks onderhoud, hosting en domeinnaam'
    ]
  }
];

const DienstenSection = () => {
  const [hoveredPackage, setHoveredPackage] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-6">
      {packages.map((pkg, index) => (
        <div key={index} className="relative bg-white rounded-lg shadow-md p-6 flex flex-col">
          <h2 className="text-3xl font-bold mb-4 text-[#232323]">{pkg.title}<span className='text-[#496488]'>.</span></h2>
          <p className="text-gray-500 text-lg mb-4">{pkg.description}</p>
          <div className="relative flex items-center justify-between">
            <p className="text-[#496488] text-xl font-bold mb-1">
              {pkg.price}
            </p>
            <span
              className="relative"
              onMouseEnter={() => setHoveredPackage(index)}
              onMouseLeave={() => setHoveredPackage(null)}
            >
              {/* Your LiaInfoCircleSolid icon */}
              <LiaInfoCircleSolid className="cursor-pointer text-[#496488] text-lg" />
              {hoveredPackage === index && (
                <div className="absolute z-10 bg-gray-100 p-2 rounded-md text-sm text-[#496488] top-full left-1/2 transform -translate-x-1/2 -translate-y-2 w-40">
                  De betalingen worden per kwartaal in rekening gebracht
                </div>
              )}
            </span>
          </div>
          <p className="text-[#496488] text-sm font-normal mb-4">{pkg.oneTimeFee}</p>
          <hr className="w-full border-t border-gray-300 mb-4" />
          <ul className="flex-1 list-disc ml-6 mb-4">
            {pkg.features.map((feature, idx) => (
              <li key={idx} className="text-gray-600">{feature}</li>
            ))}
          </ul>
          {/* Button */}
          <div className="flex mb-4">
            <Link href="/contact" className="">
              <button className={`${styles.dienstenButton}`}>
                Stuur een bericht
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DienstenSection;
