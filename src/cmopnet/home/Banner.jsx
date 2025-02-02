
function Banner() {
   return (
      <>
         <div className="bg-[#FFFBF8]">
            <div className="container mx-auto py-[11px]">
               <div className="md:flex justify-between items-center py-10 px-5">
                  {/* Left Content */}
                  <div className="space-y-5 py-16 md:py-24 text-center md:text-start">
                     <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl flex justify-center md:justify-start items-center">
                        Stronger Banking,<br />
                        Greater Service
                        <img className="w-8 h-8 ml-2" src="/public/Screder_Logo 2.png" alt="Logo" />
                     </h1>
                     <p className="text-[16px] sm:text-[18px] leading-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
                        Vestibulum mollis lobortis. Duis sed libero sit amet.
                     </p>
                     <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-7 mt-10">
                        <button className="flex items-center justify-between gap-4 border rounded-[20px] px-6 py-3">
                           <img src="/public/Group 44.png" alt="App Store" className="w-[50px] h-[50px]" />
                           <span className="text-[20px] font-bold">App Store</span>
                        </button>
                        <button className="flex items-center justify-between gap-4 border rounded-[20px] px-6 py-3">
                           <img className="w-[50px] h-[50px]" src="/public/Group 44.png" alt="Play Store" />
                           <span className="text-[20px] font-bold">Play Store</span>
                        </button>
                     </div>
                  </div>

                  {/* Right Content */}
                  <div className="mt-10 md:mt-0">
                     <img src="/public/Group 1000001417.png" alt="Mobile App Preview" className="w-full max-w-sm mx-auto md:max-w-md" />
                  </div>
               </div>
            </div>
         </div>

      </>
   );
}

export default Banner;