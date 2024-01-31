import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <section className="relative bg-[#111827] pb-12 md:pb-24">
      <div className="container px-4 mx-auto">
        <div className="relative py-16 pb-20 xs:pb-40 md:pb-72 px-2 xs:px-8 bg-gray-800 rounded-3xl overflow-hidden">
          <div className="relative max-w-lg lg:max-w-3xl mb-14 mx-auto text-center">
            <div className="max-w-lg md:max-w-2xl px-4 mx-auto">
              <h1 className="font-heading tracking-tight text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">Your Health, Our Priority at CareZone Home Care</h1>
              <p className="max-w-lg mx-auto text-xl font-mono text-gray-300 mb-10">At CareZone, we provide personalized home health services. Our dedicated team is committed to improving your well-being in a nurturing environment.</p>
              <a className="group relative flex xs:inline-flex items-center justify-center h-12 px-5 text-center text-base text-teal-800 font-bold bg-white rounded-lg transition duration-300" href="#">
                <div className="absolute top-0 left-0 w-full h-full rounded-lg ring ring-teal-700 animate-pulse group-hover:ring-0 transition duration-300"></div>
                <span>Get Started</span>
              </a>
            </div>
          </div>
        </div>
        <Image width={1096} height={680} className="relative block mx-auto px-12 lg:px-8 -mt-20 xs:-mt-40 md:-mt-64" src="/hero-image.png" alt=""/>
      </div>
    </section>
  );
}