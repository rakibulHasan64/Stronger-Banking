

function PlanBanner() {
   return (
      <>
   
         <div className="bg-[#FFFBF8] p-4">
               <div className="container mx-auto py-20">
                  <div className="sm:flex items-center gap-11 justify-around">
                     <div className="py-20">
                     <h1 className="text-[35px]  md:text-[55px] font-bold flex items-end ">Pricing Plan</h1>
                     <div className="flex justify-items-start gap-2 mt-4">
                           <span className="underline font-bold text-[16px] text-[#FFA13E]">Home</span>
                        <span className="text-[#6B5F7C]  font-bold text-[16px]"> Pricing</span>
                        </div>
                     </div>
                     <div className="">
                        <img src="/public/plan.png" alt="" />
                     </div>
                  </div>

               </div>

            </div>
      
         
      </>
   );
}

export default PlanBanner;