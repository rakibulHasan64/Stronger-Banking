/* eslint-disable react/prop-types */

function ScrederCard({ item }) {
   return (
      <>
         <div className="border border-gray-100 [rgba(15, 15, 18, 0.5)] flex flex-col items-center text-center p-7 rounded-lg shadow-md">


            <div className="w-[102px] h-[102px] rounded-full border border-amber-50 flex items-center justify-center mb-6">
               <img src={item.img} className="w-[60px] h-[60px]" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-white">{item.name}</h3>
            <p className="text-white text-sm">
               {item.title} <span className="text-[#FFA13E] cursor-pointer">Read More</span>
            </p>
         </div>
         
         
      </>
   );
}

export default ScrederCard;