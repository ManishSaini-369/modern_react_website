import React from 'react'

const ContactForm = () => {
  return (
    <div className=" bg-blue-500 sm:pt-[14%] pt-[20%] pb-[4%]">
      <div className=' max-w-[1380px]  mx-auto  px-1.5   lg:w-10/12  relative   -mt-[4rem] md:-mt-[6rem] lg:-mt-[8rem] xl:-mt-[10rem] 2xl:-mt-[12rem]'>
        <div className=' bg-blueDark  grid grid-cols-12 px-4  md:px-0 rounded-[10px] 2xl:grid-cols-11 py-8 md:py-10 lg:py-[3rem] xl:py-[3.5rem] 2xl:py-[5rem]'>
          <div className='grid grid-cols-1 gap-y-10 col-start-1 md:grid-cols-2 md:col-start-2 col-end-13 md:col-end-12 2xl:col-end-11 text-white mb-3'>
            {/* Left Side - Contact Info */}
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-3xl font-semibold mb-2">Get in touch</h2>
              <div className="h-0.5 w-10 bg-white mb-4"></div>
              <p className="mb-6">For general enquiries</p>
              
              <div className="mb-4">
                <p className="font-semibold">Address :</p>
                <p>110, 16th Road, Chembur, Mumbai - 400071</p>
              </div>
              
              <div className="mb-4">
                <p className="font-semibold">Phone :</p>
                <p>+91 22 25208222</p>
              </div>

              <div className="mb-4">
                <p className="font-semibold">Email :</p>
                <p>info@supremegroup.co.in</p>
              </div>
            </div>
            {/* Right Side - Form */}
            <div className="hidden md:block">
              <form className="flex flex-col space-y-6">
                <input
                  type="text"
                  placeholder="Full name"
                  className="bg-transparent border-b border-white outline-none py-2 text-white placeholder-white"
                />
                <input
                  type="email"
                  placeholder="E-mail"
                  className="bg-transparent border-b border-white outline-none py-2 text-white placeholder-white"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="bg-transparent border-b border-white outline-none py-2 text-white placeholder-white"
                />
                <textarea
                  placeholder="Message"
                  className="bg-transparent border-b border-white outline-none py-2 text-white placeholder-white resize-none"
                  rows="3"
                ></textarea>
                <button
                  type="submit"
                  className="bg-white text-blue-700 px-6 py-2 rounded-full w-fit self-start"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
