

function Questions() {
   return (
      <>

         <div className="container mx-auto p-3 mb-8">
            <div className="relative py-11 h-auto sm:h-[347px] rounded-2xl  overflow-hidden" style={{
               background:
                  'linear-gradient(125deg, #FFA13E 0%, #552168 72%, #330771 100%)',
            }}>
               <div className="lg:flex justify-around gap-7 px-20 " style={{
                  background:
                     'linear-gradient(125deg, #FFA13E 0%, #552168 72%, #330771 100%)',
               }}>
                  {/* Image Section */}
                  <div className="relative md:w-1/2 mx-auto sm:mx-0 flex justify-center md:justify-start">
                     <img
                        className="object-cover z-20 w-[200px] sm:w-[250px]"
                        src="/public/iPhone 11 (1).png"
                        alt="First Image"
                     />
                     <img
                        className="absolute top-16 left-20 sm:left-40 z-30 object-cover w-[180px] sm:w-[230px] hidden sm:block"
                        src="/public/iPhone 11 (1).png"
                        alt="Second Image"
                     />
                  </div>

                  {/* Text Section */}
                  <div className="mt-1 space-y-3 sm:mt-3 sm:w-1/2 text-center sm:text-left">
                     <h5 className="text-[25px] sm:text-[35px] md:text-[45px] font-bold text-white">
                        Have any Questions?
                     </h5>
                     <p className="text-sm sm:text-base text-white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis lobortis fringilla. Duis sed libero sit.
                     </p>
                     <button className="text-md  font-bold px-5 py-3 rounded-2xl text-black bg-[#FFFFFF] hover:bg-gray-200">
                        Read FAQ’s
                     </button>
                  </div>
               </div>
            </div>
         </div>





         {/* <div className="container mx-auto px-4 md:py-5">
            <div
               className="flex flex-col md:flex-row items-center gap-5 rounded-lg"
               
            >
               <div className="w-full md:w-1/2 justify-center flex flex-col h-full">
                  <img src="/public/iPhone 11 (1).png" alt="iPhone image" />
               </div>
               <div className="w-full md:w-1/2 p-6 flex flex-col h-full">
                  <h1 className="text-4xl text-white">Have any Questions?</h1>
                  <p className="text-slate-400 mt-4">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
                     mollis lobortis ringilla. Duis sed libero sit.
                  </p>
                  <div>
                     <Link href="/contact">
                        <button className="bg-white border border-white text-purple-500 py-2 px-6 rounded-lg shadow-md hover:shadow-lg flex items-center mt-4">
                           Read FAQ’s
                        </button>
                     </Link>
                  </div>
               </div>
            </div>
         </div> */}





      </>
   );
}

export default Questions;



