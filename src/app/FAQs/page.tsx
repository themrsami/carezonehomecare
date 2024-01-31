'use client'
import React from 'react'
import { useState } from 'react';

const FAQs = () => {
  const [isExpanded, setIsExpanded] = useState([false, false, false, false, false]);
  return (
    <section className="relative pb-20 2xl:py-20 bg-[#111827] overflow-hidden">
      <div className="relative w-full p-20">
        <div className="mb-20">
          <h5 className="text-lg font-bold text-blue-400 text-center">Hey! Have any questions?</h5>
          <h2 className="mt-8 text-7xl text-white font-bold font-heading text-center">FAQ's</h2>
        </div>
        <div className="max-w-4xl mx-auto">
          <ul>
            <li className="mb-4 px-4 lg:px-12 py-8 bg-gray-700 rounded-2xl">
              <button onClick={() => {
                const newIsExpanded = [...isExpanded];
                newIsExpanded[0] = !newIsExpanded[0];
                setIsExpanded(newIsExpanded);
              }} className="flex w-full text-left">
                <div className="w-auto mr-8">
                  <span className="flex items-center justify-center w-12 h-12 text-lg font-bold bg-white rounded-full">1</span>
                </div>
                <div className="w-full mt-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white">Are your caregivers and nurses qualified and experienced??</h3>
                    <span className="ml-4">
                      <svg className="w-4 h-4" width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.18267 9.00018C0.910673 9.26818 0.473672 9.26818 0.203672 9.00018C-0.0663284 8.73218 -0.0673279 8.29918 0.203672 8.03118L8.11167 0.201183C8.38167 -0.0668173 8.81867 -0.0668173 9.09067 0.201183L16.9987 8.03118C17.2687 8.29918 17.2687 8.73218 16.9987 9.00018C16.7277 9.26818 16.2897 9.26818 16.0197 9.00018L8.60067 1.85918L1.18267 9.00018Z" fill="#1F40FF"></path>
                      </svg>
                    </span>
                  </div>
                  <div className={isExpanded[0] ? "mt-6 border-l-2 border-gray-500 pl-10" : "hidden mt-6 border-l-2 border-gray-500 pl-10"}>
                    <p className="mb-5 text-xl text-gray-300">Yes, our caregivers and nurses are highly qualified, licensed, and experienced professionals. They undergo thorough background checks, continuous training, and possess the expertise necessary to deliver exceptional care.</p>
                  </div>
                </div>
              </button>
            </li>
            <li className="mb-4 px-4 lg:px-12 py-8 bg-gray-700 rounded-2xl">
              <button onClick={() => {
                const newIsExpanded = [...isExpanded];
                newIsExpanded[1] = !newIsExpanded[1];
                setIsExpanded(newIsExpanded);
              }} className="flex w-full text-left">
                <div className="w-auto mr-8">
                  <span className="flex items-center justify-center w-12 h-12 text-lg font-bold bg-white rounded-full">2</span>
                </div>
                <div className="w-full mt-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white">What safety measures do you have in place for your caregivers and clients?</h3>
                    <span className="ml-4">
                      <svg className="w-4 h-4" width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.0185 0.999999C16.2905 0.732 16.7275 0.732 16.9975 0.999999C17.2675 1.268 17.2685 1.701 16.9975 1.969L9.0895 9.799C8.8195 10.067 8.3825 10.067 8.1105 9.799L0.2025 1.969C-0.0675004 1.701 -0.0675004 1.268 0.2025 1C0.4735 0.732 0.9115 0.732 1.1815 1L8.6005 8.141L16.0185 0.999999Z" fill="#1F40FF"></path>
                      </svg>
                    </span>
                  </div>
                  <div className={isExpanded[1] ? "mt-6 border-l-2 border-gray-500 pl-10" : "hidden mt-6 border-l-2 border-gray-500 pl-10"}>
                    <p className="text-xl text-gray-300">We place a strong emphasis on safety through the implementation of rigorous hygiene practices, the provision of personal protective equipment (PPE), regular health screenings for our staff, and adherence to all recommended safety protocols. Additionally, all our healthcare providers are certified first aiders through the American Safety and Health Institute.</p>
                  </div>
                </div>
              </button>
            </li>
            <li className="mb-4 px-4 lg:px-12 py-8 bg-gray-700 rounded-2xl">
              <button onClick={() => {
                const newIsExpanded = [...isExpanded];
                newIsExpanded[2] = !newIsExpanded[2];
                setIsExpanded(newIsExpanded);
              }} className="flex w-full text-left">
                <div className="w-auto mr-8">
                  <span className="flex items-center justify-center w-12 h-12 text-lg font-bold bg-white rounded-full">3</span>
                </div>
                <div className="w-full mt-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white">Can I request additional services or modify my care plan as needed?</h3>
                    <span className="ml-4">
                      <svg className="w-4 h-4" width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.0185 0.999999C16.2905 0.732 16.7275 0.732 16.9975 0.999999C17.2675 1.268 17.2685 1.701 16.9975 1.969L9.0895 9.799C8.8195 10.067 8.3825 10.067 8.1105 9.799L0.2025 1.969C-0.0675004 1.701 -0.0675004 1.268 0.2025 1C0.4735 0.732 0.9115 0.732 1.1815 1L8.6005 8.141L16.0185 0.999999Z" fill="#1F40FF"></path>
                      </svg>
                    </span>
                  </div>
                  <div className={isExpanded[2] ? "mt-6 border-l-2 border-gray-500 pl-10" : "hidden mt-6 border-l-2 border-gray-500 pl-10"}>
                    <p className="text-xl text-gray-300">Absolutely! Our care plans are adaptable. If your needs change or you require additional services, we are flexible and can adjust the plan accordingly.</p>
                  </div>
                </div>
              </button>
            </li>
            <li className="mb-4 px-4 lg:px-12 py-8 bg-gray-700 rounded-2xl">
              <button onClick={() => {
                const newIsExpanded = [...isExpanded];
                newIsExpanded[3] = !newIsExpanded[3];
                setIsExpanded(newIsExpanded);
              }} className="flex w-full text-left">
                <div className="w-auto mr-8">
                  <span className="flex items-center justify-center w-12 h-12 text-lg font-bold bg-white rounded-full">4</span>
                </div>
                <div className="w-full mt-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white">How soon can I expect to begin receiving services after contacting Carezone Home Health Care?</h3>
                    <span className="ml-4">
                      <svg className="w-4 h-4" width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.0185 0.999999C16.2905 0.732 16.7275 0.732 16.9975 0.999999C17.2675 1.268 17.2685 1.701 16.9975 1.969L9.0895 9.799C8.8195 10.067 8.3825 10.067 8.1105 9.799L0.2025 1.969C-0.0675004 1.701 -0.0675004 1.268 0.2025 1C0.4735 0.732 0.9115 0.732 1.1815 1L8.6005 8.141L16.0185 0.999999Z" fill="#1F40FF"></path>
                      </svg>
                    </span>
                  </div>
                  <div className={isExpanded[3] ? "mt-6 border-l-2 border-gray-500 pl-10" : "hidden mt-6 border-l-2 border-gray-500 pl-10"}>
                    <p className="text-xl text-gray-300">Once contacted, we aim to initiate services promptly based on your needs and our availability. Our team strives to establish a suitable start date that meets your requirements.</p>
                  </div>
                </div>
              </button>
            </li>
            <li className="mb-4 px-4 lg:px-12 py-8 bg-gray-700 rounded-2xl">
              <button onClick={() => {
                const newIsExpanded = [...isExpanded];
                newIsExpanded[4] = !newIsExpanded[4];
                setIsExpanded(newIsExpanded);
              }} className="flex w-full text-left">
                <div className="w-auto mr-8">
                  <span className="flex items-center justify-center w-12 h-12 text-lg font-bold bg-white rounded-full">4</span>
                </div>
                <div className="w-full mt-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white">Are your home health care services available 24/7 or on specific schedules?</h3>
                    <span className="ml-4">
                      <svg className="w-4 h-4" width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.0185 0.999999C16.2905 0.732 16.7275 0.732 16.9975 0.999999C17.2675 1.268 17.2685 1.701 16.9975 1.969L9.0895 9.799C8.8195 10.067 8.3825 10.067 8.1105 9.799L0.2025 1.969C-0.0675004 1.701 -0.0675004 1.268 0.2025 1C0.4735 0.732 0.9115 0.732 1.1815 1L8.6005 8.141L16.0185 0.999999Z" fill="#1F40FF"></path>
                      </svg>
                    </span>
                  </div>
                  <div className={isExpanded[4] ? "mt-6 border-l-2 border-gray-500 pl-10" : "hidden mt-6 border-l-2 border-gray-500 pl-10"}>
                    <p className="text-xl text-gray-300">Our services can be arranged on flexible schedules, including around-the-clock care if required. We tailor care plans to accommodate your specific needs and preferred timing.</p>
                  </div>
                </div>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default FAQs