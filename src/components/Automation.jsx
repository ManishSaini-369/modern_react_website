import Automotive from '../assets/automotive.mp4'

const Automation = () => {
  return (
      <section className='relative lg:h-screen min-h-[450px] oveflow-hidden bg-blueDark '>
        <div className='absolute inset-0'>
          <video className='h-full w-full object-cover object-center' src={Automotive} autoPlay loop muted />
          
        </div>
        <div className="absolute inset-0 bg-black opacity-25"></div>
        <div className='absolute  inset-0 grid place-content-center place-items-center pt-10 md:pt-5 lg:pt-10 gap-2 text-center w-11/12 mx-auto'>
            <span className='sg-translate font-light pt-2 pb-3  text-lg  xl:text-xl 2xl:text-[1.375rem] text-white block leading-snug'>Performance in motion</span>
            <h2 className='text-[48px] font-semibold leading-[100%] tracking-[-0.5%] text-center sg-translate text-white font-light leading-tight pb-2'>
              <span className='font-semibold'>Soft Trims and 
                <span className="text-blue-500"> NVH solutions </span>
              </span>
              <br className='hidden md:block'/>
            for seamless rides
            </h2>
          </div>
      </section>
  )
}

export default Automation
