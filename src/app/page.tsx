import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex h-full w-full bg-gray-800 flex-col items-center justify-between">
      <div className="h-full w-full">
        <div className="relative h-full w-ful flex flex-col lg:flex-row">
          <div className="mx-auto min-h-screen w-full lg:max-w-[50%] bg-white flex items-center justify-around">
            <Image src="/15.png" alt="logo" width={600} height={600} />
          </div>
          <div className="bg-[url(/image.jpeg)] w-full bg-cover bg-top bg-no-repeat bg-gray-800 bg-blend-overlay">
            <div className="mx-auto min-h-screen py-12 flex flex-col justify-around">
              <div className="text-center max-w-lg mx-auto">
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-normal text-white">Website Launching Soon</h2>
                {/* <p className="mt-6 text-lg leading-8 text-gray-200">Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla.</p> */}
                {/* <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                  <a href="#contactus" className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                    Contact Us <span aria-hidden="true">→</span>
                  </a>
                </div> */}
              </div>
              <div id="contactus" className="max-w-lg py-12 mx-auto flex flex-col">
                <div>
                  <h1 className="text-xl font-semibold text-white">Get in touch.</h1>
                  {/* <p className="mt-3 text-gray-400">Find us at these locations.</p> */}
                </div>
                <div>
                  {/* <h2 className="font-medium text-white">Kanupriya Chhabra</h2> */}
                  <p className="text-gray-400">Whatsapp: +91 70147 41070</p>
                  <p className="text-gray-400">Email: info@vatsala.store</p>
                  {/* <p className="mt-2 text-gray-400">Melbourne VIC 3000 AU</p> */}
                </div>
                {/* <div>
                    <h2 className="font-medium text-white">London</h2>
                    <p className="mt-2 text-gray-400">100 Oxford Street</p>
                    {/* <p className="mt-2 text-gray-400">London W1D 1LL UK</p> 
                  </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
