import React from 'react'
import Image from 'next/image'

const Contactus = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
        <Image className="absolute top-0 left-0 md:mt-24" src="/dots-side-1.svg" alt="Dots side" width={124} height={290} />
        <Image className="absolute bottom-0 right-0 mb-8 lg:mb-24" src="/dots-side-2.svg" alt="Dots side" width={164} height={292} />
      <div className="relative container px-4 mx-auto">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl text-center mx-auto mb-20">
            <span className="inline-block py-1 px-3 mb-4 text-xs font-semibold text-orange-900 bg-orange-50 rounded-full">READY TO SUPPORT US</span>
            <h1 className="font-heading text-5xl xs:text-6xl font-bold text-pink-200 mb-4">
              <span>Let’s stay</span>
              <span className="font-serif italic">connected</span>
            </h1>
            <p className="text-xl text-white font-semibold">Relax, we are ready to support 24/7 for you</p>
          </div>
          <div className="max-w-md lg:max-w-5xl mx-auto">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full lg:w-1/2 px-4 order-last lg:order-first">
                <Image className="h-full w-full max-w-md" src="/red-image.png" alt="Red image" width={482} height={400} />
              </div>
              <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
                <div className="max-w-md py-6 lg:ml-auto">
                  <div className="flex mb-12 items-center">
                    <div className="flex flex-shrink-0 mr-5 sm:mr-8 items-center justify-center p-1 w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-blue-200">
                      <Image src="/icon-phone.svg" alt="Phone icon" width={32} height={32} />
                    </div>
                    <div>
                      <span className="text-lg text-white">Phone</span>
                      <span className="block text-lg font-semibold text-pink-200">+971-555811796</span>
                    </div>
                  </div>
                  <div className="flex mb-12 items-center">
                    <div className="flex flex-shrink-0 mr-5 sm:mr-8 items-center justify-center p-1 w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-yellow-200">
                      <Image src="/icon-email.svg" alt="Email icon" width={32} height={32} />
                    </div>
                    <div>
                      <span className="text-lg text-white">Email</span>
                      <span className="block text-lg font-semibold text-pink-200">info@carezonehomecare.com</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="flex flex-shrink-0 mr-5 sm:mr-8 items-center justify-center p-1 w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-green-200">
                      <Image className="h-8" src="/icon-location.svg" alt="Location icon" width={24} height={24} />
                    </div>
                    <div>
                      <span className="text-lg text-white">Office</span>
                      <span className="block text-lg font-semibold text-pink-200">Silicon Oasis, IT plaza 14th floor,off 1411</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contactus