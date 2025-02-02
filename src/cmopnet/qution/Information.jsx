import { CgArrowLongRight } from "react-icons/cg";

function Information() {
   return (
      <>
         <div className="container mx-auto py-20">
            <div className="border-t-[1px] border-gray-200">
               <div className="flex flex-col md:flex-row items-center justify-between text-center">
                  <div className="mt-10">
                     <ul className="flex flex-col sm:flex-row sm:justify-center gap-6 p-3 text-center">
                        <li className="flex items-center gap-3">
                           <img src="/public/logos_facebook.png" alt="Facebook Logo" />
                           <strong className="text-[22px]">Facebook</strong>
                        </li>
                        <li className="flex items-center gap-3">
                           <img src="/public/fa-brands_twitter-square.png" alt="Twitter Logo" />
                           <strong className="text-[22px]">Twitter</strong>
                        </li>
                        <li className="flex items-center gap-3">
                           <img src="/public/logos_linkedin-icon.png" alt="LinkedIn Logo" />
                           <strong className="text-[22px]">LinkedIn</strong>
                        </li>
                     </ul>
                  </div>
                  <div className="pt-5 mt-5">
                     <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
                        <div className="w-[68px] h-[64px] flex items-center justify-center bg-white rounded-full shadow-2xl">
                           <img
                              className="rounded-full"
                              src="/public/men-s-blue-short-sleeves-tee-psd-mockup_53876-143240 1.png"
                              alt="Profile Image"
                           />
                        </div>
                        <div>
                           <div>
                              <h2 className="text-[22px]">Livechat</h2>
                              <div className="flex items-center gap-3 justify-center">
                                 <p className="text-[16px]">Text us now</p>
                                 <CgArrowLongRight />
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>


      </>
   );
}

export default Information;