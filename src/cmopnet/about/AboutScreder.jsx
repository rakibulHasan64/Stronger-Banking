/* eslint-disable react/prop-types */
function FeatureCard({ icon, title, description }) {
   return (
      <div className="sm:flex place-items-start gap-6 mt-6 border-[1px] border-gray-200 rounded-2xl p-6 md:p-10 bg-white shadow-lg ">
         <div className="flex items-center justify-center sm:mx-a mb-4 mx-auto">
            <div className="w-[82px] h-[82px] rounded-[24px] bg-[#FFE4C8] flex items-center justify-center border-[1px] border-gray-200 sm:mx-auto sm:mb-4">
               <img src={icon} alt={title} className="w-8 h-8" />
            </div>

         </div>
         <div>
            <h5 className="text-xl sm:text-2xl font-bold text-center sm:text-left">{title}</h5>
            <p className="text-sm sm:text-base mt-3 leading-loose text-center sm:text-left">{description}</p>
         </div>
      </div>
   );
}

function AboutScreder() {
   const features = [
      {
         icon: "/public/Vector.png",
         title: "Trusted Partner",
         description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid unt ut labore et dolore incidid unt ut labore et dolore.",
      },
      {
         icon: "/public/Vector.png",
         title: "Reliable Service",
         description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid unt ut labore et dolore incidid unt ut labore et dolore.",
      },
      {
         icon: "/public/Vector.png",
         title: "Customer Support",
         description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid unt ut labore et dolore incidid unt ut labore et dolore.",
      },
      {
         icon: "/public/Vector.png",
         title: "Innovative Solutions",
         description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid unt ut labore et dolore incidid unt ut labore et dolore.",
      },
   ];

   return (
      <div className="bg-[#FFFAF5]">
         <div className="container mx-auto px-6 sm:px-12 py-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">Why choose Screder?</h2>
            <p className="text-sm sm:text-base text-center mt-4">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad min.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-10">
               {features.map((feature, index) => (
                  <FeatureCard
                     key={index}
                     icon={feature.icon}
                     title={feature.title}
                     description={feature.description}
                  />
               ))}
            </div>
            <div className="flex justify-center mt-8">
               <button className="bg-[#FF914D] text-white px-6 py-3 rounded-full text-sm sm:text-base font-bold hover:bg-[#FF7A33] transition-all duration-300">
                  Learn More
               </button>
            </div>
         </div>
      </div>
   );
}

export default AboutScreder;
