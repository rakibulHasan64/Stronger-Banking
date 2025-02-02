import CardItem from "./CardItem";


function Card() {
   return (
      <>
         <div className="">
            <div className="container mx-auto py-20">
               <div className="sm:flex items-center justify-around">
                  <div className="p-3">
                    <img  className="w-[751px] " src="/public/Group 11.png" alt="" />
                  </div>
                  <div className="relative p-3 text-center">
                     <img className="w-[384px] " src="/public/placeholder.png" alt="" />


                     <div className="absolute bottom-0 p-5">
                        <p className="text-[#FFA13E]">Published on 25 January, 2022</p>
                        <h3 className="text-2xl font-bold text-white">How to increase your business
                           skill while pandemic</h3>
                        <p className="text-white sm:p-2">Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do emod tempor...</p>
                     </div>
                  </div>
               
               </div>


               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-11 p-4">
                  <CardItem />
                  <CardItem />
                  <CardItem />
                  <CardItem />
                  <CardItem />
                  <CardItem />

                  

               </div>

               <div className="text-center m-19">
                  <button className="bg-[#FF914D]  text-white px-6 py-3 rounded-lg text-sm sm:text-base font-bold hover:bg-[#FF7A33] transition-all duration-300">
                     Explore More Posts
                  </button>
               </div>

            </div>
         </div>
         
      </>
   );
}

export default Card;