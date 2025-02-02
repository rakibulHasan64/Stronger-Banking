

function PricingBanner() {
   return (
      <> 
         <div className="bg-[#FFFFFF] p-4">
            <div className="container mx-auto py-20">
               <div className="sm:flex items-center gap-11 justify-around">
                  <div className="py-20">
                     <h1 className="text-[35px]  md:text-[55px] font-bold flex items-end ">Screder News</h1>
                     <div className="flex justify-items-start gap-2">
                        <span className="underline font-bold text-[16px] text-[#FFA13E]">Home</span>
                        <span className="text-[#6B5F7C] font-bold text-[16px]">ABOUT US</span>
                     </div>
                  </div>
                  <div className="">
                     <img src="/public/priscingepng.png" alt="" />
                  </div>
               </div>

            </div>

         </div>
         
      </>
   );
}

export default PricingBanner;

