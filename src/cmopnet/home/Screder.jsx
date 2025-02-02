import ScrederCard from "./ScrederCard";

function Screder() {

   const data = [
      {
         id: '1',
         img: "/public/icon.png",
         name: "Multi Currency",
         title: "We realize ideas from simple toomplex."
      },
      {
         id: '2',
         img: "/public/icon2.png",
         name: "Swift Transfer",
         title: "We realize ideas from simple toomplex."
      },
      {
         id: '3',
         img: "/public/icon3.png",
         name: "Physic & Virtual card",
         title: "We realize ideas from simple toomplex."
      },
      {
         id: '4',
         img: "/public/icon5.png",
         name: "Instant SEPA transfer",
         title: "We realize ideas from simple toomplex."
      },
      {
         id: '5',
         img: "/public/icon.png",
         name: "Exchange low tax",
         title: "We realize ideas from simple toomplex."
      },
      {
         id: '6',
         img: "/public/Vector6.png",
         name: "Send & Receive",
         title: "We realize ideas from simple toomplex."
      },
      
   ]
   return (
      <>
         <div className="bg-[#330771]">
            <div className="container mx-auto py-20">
               <h2 className="text-[35px] md:text-[45px] text-center font-bold text-white">Screder Features</h2>
               <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 py-16 px-4">
                  

               {
                  data.map(item => <ScrederCard key={item.id} item={item} />)
                     
               }   
                  

                  

               </div>


            </div>

         


         </div>

         
         
      </>
   );
}

export default Screder;

