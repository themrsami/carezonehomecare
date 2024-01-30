import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <section className="py-10 overflow-hidden bg-[#1F2937]">
    <div className="container px-4 mx-auto">
      <div className="flex flex-wrap justify-center -m-8 mb-8">
        <div className="w-full md:w-1/2 lg:w-4/12 p-8">
          <div className="md:max-w-xs">
          <Image className="mb-7" src="/logo.webp" alt="Logo" width={320} height={132} />
            <p className="text-white">CareZone Home Care provides personalized home health services. Our dedicated team is committed to improving your well-being in a nurturing environment. </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-2/12 p-8">
          <h3 className="mb-6 text-lg text-white font-medium">About</h3>
          <ul>
            <li className="mb-2.5"><a className="inline-block text-lg font-medium text-gray-300 hover:text-white transition duration-300" href="#">Home</a></li>
            <li className="mb-2.5"><a className="inline-block text-lg font-medium text-gray-300 hover:text-white transition duration-300" href="#">About</a></li>
            <li className="mb-2.5"><a className="inline-block text-lg font-medium text-gray-300 hover:text-white transition duration-300" href="#">Special Offers</a></li>
            <li><a className="inline-block text-lg font-medium text-gray-300 hover:text-white transition duration-300" href="#">Services</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 lg:w-2/12 p-8">
          <h3 className="mb-6 text-lg text-white font-medium">Company</h3>
          <ul>
            <li className="mb-2.5"><a className="inline-block text-lg font-medium text-gray-300 hover:text-white transition duration-300" href="#">Blog</a></li>
            <li className="mb-2.5"><a className="inline-block text-lg font-medium text-gray-300 hover:text-white transition duration-300" href="#">FAQs</a></li>
            <li className="mb-2.5"><a className="inline-block text-lg font-medium text-gray-300 hover:text-white transition duration-300" href="#">Our Team</a></li>
            <li><a className="inline-block text-lg font-medium text-gray-300 hover:text-white transition duration-300" href="#">Contact Us</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 lg:flex-1 p-8">
          <div className="flex flex-wrap -m-2">
            <div className="w-full p-2">
              <a target='_blank' className="block py-5 px-8 bg-black bg-opacity-30 rounded-full" href="https://www.facebook.com/carezonehomecare/">
                <div className="flex flex-wrap items-center -m-2">
                  <div className="w-auto p-2">
                    <Image src="/facebook.svg" alt="Facebook logo" width={20} height={20} />
                  </div>
                  <div className="flex-1 p-2">
                    <p className="text-gray-300">Follow us on Facebook for updates</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="w-full p-2">
              <a target='_blank' className="block py-5 px-8 bg-black bg-opacity-30 rounded-full" href="https://www.instagram.com/carezonehomecare/">
                <div className="flex flex-wrap items-center -m-2">
                  <div className="w-auto p-2">
                    <Image src="/instagram.svg" alt="Instagram logo" width={20} height={20} />
                  </div>
                  <div className="flex-1 p-2">
                    <p className="text-gray-300">Follow us on Instagram for updates</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="w-full p-2">
              <a target='_blank' className="block py-5 px-8 bg-black bg-opacity-30 rounded-full" href="https://www.tiktok.com/@carezone.homecare?_t=8i41JKn6shV&_r=1">
                <div className="flex flex-wrap items-center -m-2">
                  <div className="w-auto p-2">
                    <Image src="/tiktok-white.svg" alt="TikTok logo" width={20} height={20} />
                  </div>
                  <div className="flex-1 p-2">
                    <p className="text-gray-300">Follow us on TikTok for updates</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-between -m-2">
        <div className="w-auto p-2">
          <p className="inline-block text-sm font-medium text-white text-opacity-60">© 2024 carezonhomecare.com</p>
        </div>
        <div className="w-auto p-2">
          <div className="flex flex-wrap items-center -m-2 sm:-m-7">
            <div className="w-auto p-2 sm:p-7"><a className="inline-block text-sm text-white text-opacity-60 hover:text-opacity-100 font-medium transition duration-300" href="#">Terms of Use</a></div>
            <div className="w-auto p-2 sm:p-7"><a className="inline-block text-sm text-white text-opacity-60 hover:text-opacity-100 font-medium transition duration-300" href="#">Privacy Policy</a></div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Footer