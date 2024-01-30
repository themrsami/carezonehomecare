import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <section className="pt-20 md:pt-40 bg-gray-900 overflow-hidden">
      <div className="container px-4 mx-auto mb-20 xs:mb-32">
        <div className="text-center mb-24 md:mb-32">
          <div className="inline-flex items-center mb-8">
            <span className="block w-2 h-2 mr-2 rounded-full bg-blue-500"></span>
            <span className="uppercase text-sm text-gray-200 font-medium">ABOUT US</span>
          </div>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-heading font-semibold text-white">Why we are different</h1>
        </div>
        <div className="flex flex-wrap items-center xl:items-start -mx-4">
          <div className="w-full lg:w-1/3 xl:w-1/4 px-4 mb-20 lg:mb-0">
            <div className="max-w-sm mx-auto">
              <div className="flex mb-24">
                <span className="flex-shrink-0 inline-block mt-4 mr-8 w-3 h-3 bg-yellow-500 rounded-full"></span>
                <div>
                  <h4 className="font-heading text-3xl xs:text-4xl text-white font-semibold mb-8">Experience the CareZone Difference</h4>
                  <p className="text-gray-300">Personalized Home Health Services</p>
                </div>
              </div>
              <div className="flex">
                <span className="flex-shrink-0 inline-block mt-4 mr-8 w-3 h-3 bg-yellow-500 rounded-full"></span>
                <div>
                  <h4 className="font-heading text-3xl xs:text-4xl text-white font-semibold mb-8">Why Choose CareZone?</h4>
                  <p className="text-gray-300">Our Unique Approach to Home Health Care</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/3 xl:w-2/4 px-4 mb-20 lg:mb-0">
            <div>
              <Image className="w-full max-w-md xl:max-w-lg mx-auto" src="/about.png" alt="About" width={690} height={730} />
            </div>
          </div>
          <div className="w-full lg:w-1/3 xl:w-1/4 px-4">
            <div className="max-w-sm mx-auto">
              <div className="flex mb-24">
                <span className="flex-shrink-0 inline-block mt-4 mr-8 w-3 h-3 bg-yellow-500 rounded-full"></span>
                <div>
                  <h4 className="font-heading text-3xl xs:text-4xl text-white font-semibold mb-8">Redefining Home Health Care</h4>
                  <p className="text-gray-300">The CareZone Advantage</p>
                </div>
              </div>
              <div className="flex">
                <span className="flex-shrink-0 inline-block mt-4 mr-8 w-3 h-3 bg-yellow-500 rounded-full"></span>
                <div>
                  <h4 className="font-heading text-3xl xs:text-4xl text-white font-semibold mb-8">CareZone</h4>
                  <p className="text-gray-300">Setting New Standards in Home Health Services</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative pt-16 pb-18">
        <div className="container px-4 mx-auto">
        <Image width={1600} height={163} className="absolute top-0 left-0 h-full w-full object-cover lg:object-fill" src="/circles-bottom.svg" alt=""/>
        </div>
      </div>
    </section>
  )
}

export default About