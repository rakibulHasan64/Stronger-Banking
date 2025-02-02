

function AbotBanner() {
   return (
      <>
         <div className=" bg-[#FFFBF8]">
            <div className="py-11">
               <div className="container mx-auto">

                  <div className="sm:flex items-center gap-11 justify-around  p-3">
                     <div className="py-20">
                        <h1 className="text-[35px]  md:text-[55px] font-bold flex items-end ">Learn More<br />
                           About Screder <img src="/public/Screder_Logo 2.png" alt="" /></h1>
                        <div className="flex justify-items-start gap-2">
                           <span className="underline font-bold text-[16px] text-[#FFA13E]">Home</span>
                           <span className="text-[#6B5F7C] font-bold text-[16px]">ABOUT US</span>
                        </div>
                     </div>
                     <div className="">
                        <img src="/public/about.png" alt="" />
                     </div>

                  </div>

               </div>

            </div>
         </div>
         
      </>
   );
};

export default AbotBanner;