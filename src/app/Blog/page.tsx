import React from 'react'

const Blog = () => {
  return (
    <section className="py-10 bg-[#1D232A] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="relative py-20 px-8 rounded-3xl" style={{backgroundImage: "url('/hands.png')",backgroundSize: 'cover',backgroundPosition: 'center',backgroundRepeat: 'no-repeat'}}>
          <div className="max-w-7xl mx-auto">
            <div className="p-10 max-w-md bg-white rounded-3xl">
              <p className="mb-3 text-xs text-gray-500 font-bold">Healthcare</p>
              <h2 className="font-heading mb-6 text-4xl md:text-5xl text-gray-900 font-black">Navigating the Journey: A Guide to Elderly Independence at Home</h2>
              <p className="mb-28 text-gray-500 font-bold">At CAREZONE, we believe in fostering independence for our seniors while ensuring their well-being. In this blog post, we'll explore practical tips and insights on promoting independence for the elderly in the comfort of their homes</p>
              <a className="flex items-center text-blue-500 hover:text-blue-600" href="#">
                <span className="mr-0.5 font-black">Read Article</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.6805 3.5465L8.82049 5.6865L10.1338 6.99317C10.6872 7.5465 10.6872 8.4465 10.1338 8.99983L6.6805 12.4532C6.22716 12.9065 5.45383 12.5798 5.45383 11.9465V8.2065V4.05317C5.45383 3.41317 6.22716 3.09317 6.6805 3.5465Z" fill="currentColor"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog