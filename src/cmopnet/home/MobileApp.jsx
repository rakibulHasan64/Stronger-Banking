function MobileApp() {
   return (
      <>
         <div className="container mx-auto py-11">
            <div className="md:flex justify-between items-start gap-7 p-3">
               <div>
                  <h5 className="text-[33px] mb-4 text-center md:text-start md:text-[45px] text-[#330771] font-bold">
                     Download<br /> the Mobile App
                  </h5>
                  <p className="text-[18px] text-start p-3">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis lobortis. Duis sed libero sit amet consectetur adipiscing elit.
                  </p>

                  {/* Parent div for buttons with responsive alignment */}
                  <div className="mt-10 sm:text-center md:text-start">
                     <button className="flex items-center justify-between gap-4 border rounded-[20px] px-4 py-2 mb-4 mx-auto md:mx-0">
                        <img src="/Group 44.png" alt="App Store" className="w-[50px] h-[50px]" />
                        <span className="text-[20px] font-bold">App Store</span>
                     </button>

                     <button className="flex items-center justify-between gap-4 border rounded-[20px] px-4 py-2 mb-4 mx-auto md:mx-0">
                        <img className="w-[50px] h-[50px]" src="/Group 44.png" alt="Play Store" />
                        <span className="text-[20px] font-bold">Play Store</span>
                     </button>
                  </div>

               </div>

               <div>
                  <img src="/Group 1000001417.png" alt="Mobile App Preview" />
               </div>
            </div>
         </div>
      </>
   );
}

export default MobileApp;
