
import { BsArrowRight } from "react-icons/bs";

function Company() {
   return (
      <>
         <div className="bg-white">
            <div className="container mx-auto py-20 relative p-4">
               <div className="space-y-6">

                  
                     <div className="">
                        <img className="mx-auto" src="/public/image 7.png" alt="" />
                     </div>

                     <p className="text-[18px] sm:text-[26px] text-center">“As a marketing expert, this is really pleasing to<br /> look at! Wholeheartedly recommending the services<br /> and the team behind it!”</p>


                     <p className="text-center text-[#911DA2]">Happy User from Company</p>
               </div>
               
               <div className="p-4 hidden sm:block">
                  <button className="absolute left-0 top-50 flex items-center justify-center w-[56px] h-[56px] rounded-full bg-[#FFA13E] text-white font-bold text-2xl"><BsArrowRight /></button>


                  <button className="absolute right-0 top-50 flex items-center justify-center w-[56px] h-[56px] rounded-full bg-[#FFA13E] text-white font-bold text-2xl"><BsArrowRight /></button>

               </div>

         

            </div>

         </div>
         
      </>
   );
}

export default Company;