
function Qution() {
   return (
      <>
         <div className="w-1/2 mx-auto py-20">
            <h2 className="text-center font-bold text-[27px] sm:text-[45px] text-[#330771]">Have a question?</h2>

            <div className="mt-5">
               <form >
                  <div className="sm:flex justify-between gap-4 p-3 space-y-4 sm:space-y-0">
                     <input className="w-full p-3 py-4 border rounded-2xl border-fuchsia-500" type="text" placeholder="Enter full name" />
                     <input className="w-full p-3 py-4 border rounded-2xl border-fuchsia-500" type="text" placeholder="Enter full name" />
                  </div>
                  <div className="p-3">
                     <textarea className="w-full h-[235px] sm:h-[200px] p-3 py-4 border rounded-2xl border-fuchsia-500" placeholder="Enter your message here"></textarea>
                  </div>

                  <div className="flex items-center justify-center">
                     <input id="checkbox2" type="checkbox" className="hidden peer" checked />
                     <label htmlFor="checkbox2"
                        className="relative flex items-center justify-center p-1 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-6 h-6 cursor-pointer bg-orange-500 border rounded overflow-hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-full fill-white" viewBox="0 0 520 520">
                           <path
                              d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                              data-name="7-Check" data-original="#000000" />
                        </svg>
                     </label>
                     <p className="text-sm text-black ml-4">Accept all terms and conditions & Privacy policy</p>
                  </div>

                  <div className="text-center mt-10">
                     <button className="text-md font-bold px-5 py-3 rounded-[16px] text-white bg-[#FFA13E]">Send Message</button>

                  </div>


               </form>
            </div>

         </div>
         
      </>
   );
}

export default Qution;