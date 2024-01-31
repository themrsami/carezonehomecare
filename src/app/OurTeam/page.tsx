import React from 'react'
import Image from 'next/image'

const Ourteam = () => {
  return (
    <section className="py-20 2xl:py-40 bg-[#111827]">
      <div className="container px-4 mx-auto">
        <h2 className="mb-20 text-5xl font-bold font-heading text-white">Our Team</h2>
        <div className="flex flex-wrap -mx-4 mb-20">
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-10">
            <div className="flex items-center">
              <Image width={300} height={420} className="h-48 2xl:h-64" src="https://images.pexels.com/photos/5325840/pexels-photo-5325840.jpeg?q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=450" alt=""/>
              <div className="pl-10">
                <h3 className="mb-4 text-3xl font-bold font-heading text-white">Lea Herrera</h3>
                <p className="mb-10 text-lg text-white font-bold">UX Designer</p>
                <a className="inline-block w-12 h-12" href="#">
                <Image width={50} height={50} className="h-12" src="/twitter1.svg" alt=""/>
                </a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-10">
            <div className="flex items-center">
            <Image width={300} height={420} className="h-48 2xl:h-64" src="https://images.pexels.com/photos/5325885/pexels-photo-5325885.jpeg?q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=450" alt=""/>
              <div className="pl-10">
                <h3 className="mb-4 text-3xl font-bold font-heading text-white">Maxi Svennson</h3>
                <p className="mb-10 text-lg text-white font-bold">Social Media</p>
                <a className="inline-block w-12 h-12 mr-2" href="#">
                <Image width={50} height={50} className="h-12" src="/instagram1.svg" alt=""/>
                </a>
                <a className="inline-block w-12 h-12" href="#">
                <Image width={50} height={50} className="h-12" src="/twitter1.svg" alt=""/>
                </a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-10">
            <div className="flex items-center">
            <Image width={300} height={420} className="h-48 2xl:h-64" src="https://images.unsplash.com/photo-1615803795804-06a0c2a0030e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" alt=""/>
              <div className="pl-10">
                <h3 className="mb-4 text-3xl font-bold font-heading text-white">Oliver Haller</h3>
                <p className="mb-10 text-lg text-white font-bold">Co-Founder</p>
                <a className="inline-block w-12 h-12" href="#">
                <Image width={50} height={50} className="h-12" src="/instagram1.svg" alt=""/>
                </a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-10 lg:mb-0">
            <div className="flex items-center">
            <Image width={300} height={420} className="h-48 2xl:h-64" src="https://images.pexels.com/photos/5325925/pexels-photo-5325925.jpeg?q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=450" alt=""/>
              <div className="pl-10">
                <h3 className="mb-4 text-3xl font-bold font-heading text-white">Ade Baldock</h3>
                <p className="mb-10 text-lg text-white font-bold">UX Designer</p>
                <a className="inline-block w-12 h-12" href="#">
                <Image width={50} height={50} className="h-12" src="/facebook1.svg" alt=""/>
                </a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-10 md:mb-0">
            <div className="flex items-center">
            <Image width={300} height={420} className="h-48 2xl:h-64" src="https://images.pexels.com/photos/4316722/pexels-photo-4316722.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
              <div className="pl-10">
                <h3 className="mb-4 text-3xl font-bold font-heading text-white">Elena Norwood</h3>
                <p className="mb-10 text-lg text-white font-bold">Social Media</p>
                <a className="inline-block w-12 h-12" href="#">
                <Image width={50} height={50} className="h-12" src="/twitter1.svg" alt=""/>
                </a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4">
            <div className="flex items-center">
            <Image width={300} height={420} className="h-48 2xl:h-64" src="https://images.pexels.com/photos/5325894/pexels-photo-5325894.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
              <div className="pl-10">
                <h3 className="mb-4 text-3xl font-bold font-heading text-white">Jesse Warne</h3>
                <p className="mb-10 text-lg text-white font-bold">Co-Founder</p>
                <a className="inline-block w-12 h-12" href="#">
                  <Image className="h-12" src="/instagram1.svg" alt="Instagram logo" width={50} height={50} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center"><a className="inline-block py-4 px-12 border border-gray-200 hover:border-gray-50 rounded-full font-bold text-white" href="#">More</a></div>
      </div>
    </section>
  )
}

export default Ourteam