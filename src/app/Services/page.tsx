import React from 'react'
import Image from 'next/image'

const Services = () => {
  return (
    <>
      <section className="py-10 bg-[#111827] overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="py-16 px-8 bg-[#111827] rounded-3xl">
            <div className="max-w-7xl mx-auto">
              <div className="mb-12 md:max-w-4xl mx-auto text-center">
                <h2 className="font-heading mb-6 text-4xl md:text-5xl lg:text-6xl text-white font-black font-mono tracking-tight">Our Services</h2>
              </div>
              <div className="max-w-5xl mx-auto">
                <div className="flex flex-wrap -m-5 mb-10">
                  <div className="w-full p-5">
                    <div className="flex flex-wrap h-full bg-[#111827] overflow-hidden rounded-3xl">
                      <div className="w-full md:w-1/2">
                      <Image width={448} height={336} className="w-full h-full object-cover" src="/childcare2.png" alt=""/>
                      </div>
                      <div className="flex-1">
                        <div className="md:max-w-lg p-10 h-full">
                          <div className="flex flex-col justify-between h-full">
                            <div className="flex-initial mb-8">
                              <a className="group inline-block mb-4" href="#">
                                <h3 className="font-heading text-3xl text-gray-100 hover:text-gray-300 group-hover:underline font-black font-mono text-center">CHILD CARE</h3>
                              </a>
                              <p className="text-gray-300 font-mono text-lg">Whether you need a nanny, a babysitter, or a tutor, we have qualified and experienced staff who can take care of your children’s needs and well-being.</p>
                            </div>
                            <div className="flex-initial"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full p-5">
                    <div className="flex flex-wrap h-full bg-[#111827] overflow-hidden rounded-3xl">
                      <div className="w-full md:w-1/2">
                      <Image width={448} height={336} className="w-full h-full object-cover" src="/elderlycare2.png" alt=""/>
                      </div>
                      <div className="flex-1">
                        <div className="md:max-w-lg p-10 h-full">
                          <div className="flex flex-col justify-between h-full">
                            <div className="flex-initial mb-8">
                              <a className="group inline-block mb-4" href="#">
                                <h3 className="font-heading text-3xl text-gray-100 hover:text-gray-300 group-hover:underline font-black font-mono text-center">ELDERLY CARE</h3>
                              </a>
                              <p className="text-gray-300 font-mono text-lg">Whether you need assistance with daily activities, companionship, or medical care, we have trained and certified staff who can support your elders’ health and dignity.</p>
                            </div>
                            <div className="flex-initial"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full p-5">
                    <div className="flex flex-wrap h-full bg-[#111827] overflow-hidden rounded-3xl">
                      <div className="w-full md:w-1/2">
                      <Image width={448} height={336} className="w-full h-full object-cover" src="/doctoroncall2.png" alt=""/>
                      </div>
                      <div className="flex-1">
                        <div className="md:max-w-lg p-10 h-full">
                          <div className="flex flex-col justify-between h-full">
                            <div className="flex-initial mb-8">
                              <a className="group inline-block mb-4" href="#">
                                <h3 className="font-heading text-3xl text-gray-100 hover:text-gray-300 group-hover:underline font-black font-mono text-center">DOCTOR ON CALL</h3>
                              </a>
                              <p className="text-gray-300 font-mono text-lg">Whether you need a consultation, a prescription, or a treatment, we have licensed and skilled doctors who can provide you with quality care at home.</p>
                            </div>
                            <div className="flex-initial"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full p-5">
                    <div className="flex flex-wrap h-full bg-[#111827] overflow-hidden rounded-3xl">
                      <div className="w-full md:w-1/2">
                      <Image width={448} height={336} className="w-full h-full object-cover" src="/nurseoncall2.png" alt=""/>
                      </div>
                      <div className="flex-1">
                        <div className="md:max-w-lg p-10 h-full">
                          <div className="flex flex-col justify-between h-full">
                            <div className="flex-initial mb-8">
                              <a className="group inline-block mb-4" href="#">
                                <h3 className="font-heading text-3xl text-gray-100 hover:text-gray-300 group-hover:underline font-black font-mono text-center">NURSE ON CALL</h3>
                              </a>
                              <p className="text-gray-300 font-mono text-lg">Whether you need wound care, injections, or monitoring, we have registered and experienced nurses who can provide you with professional care at home.</p>
                            </div>
                            <div className="flex-initial"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full p-5">
                    <div className="flex flex-wrap h-full bg-[#111827] overflow-hidden rounded-3xl">
                      <div className="w-full md:w-1/2">
                      <Image width={448} height={336} className="w-full h-full object-cover" src="/labathome.png" alt=""/>
                      </div>
                      <div className="flex-1">
                        <div className="md:max-w-lg p-10 h-full">
                          <div className="flex flex-col justify-between h-full">
                            <div className="flex-initial mb-8">
                              <a className="group inline-block mb-4" href="#">
                                <h3 className="font-heading text-3xl text-gray-100 hover:text-gray-300 group-hover:underline font-black font-mono text-center">LABORATORY AT HOME</h3>
                              </a>
                              <p className="text-gray-300 font-mono text-lg">Whether you need blood tests, urine tests, or other tests, we have modern and portable equipment  and technicians who can perform them at home and send you the results online.</p>
                            </div>
                            <div className="flex-initial"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services