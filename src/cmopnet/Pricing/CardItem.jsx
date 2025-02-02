

function CardItem() {
   return (
      <>
         <div className="rounded-[16px]  bg-white shadow-2xl p-3">
            <img className="overflow-hidden w-full" src="/public/imagecard.png" alt="" />
            <div className="p-7 space-y-4">
               <p className="text-[15px] text-[#FFA13E] ">Published on 25 January, 2022</p>
               <h3 className="text-[20px] font-bold text-[#330771]  ">How to increase your business
                  skill while pandemic</h3>
               <p className="text-[15px] ">Lorem ipsum dolor sit amet, consectetur adi    pis cing elit, sed do emod tempor...</p>
            </div>
         </div>
         
      </>
   );
}

export default CardItem;