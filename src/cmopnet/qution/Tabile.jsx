import { useState } from "react";

function Tabile() {
   const [billingCycle, setBillingCycle] = useState('Monthly');

   const plans = [
      {
         name: 'Standard',
         price: billingCycle === 'Monthly' ? '£4.99/mo' : '£49.99/yr',
         features: {
            mobileInsurance: true,
            travelInsurance: true,
            flightInsurance: true,
            fraudProtection: true,
            concierge: false,
            helpService: true,
            roadsideHelp: true,
            premiumLounge: false,
            debitCard: true,
            taxFree: true,
         },
      },
      {
         name: 'Premium',
         price: billingCycle === 'Monthly' ? '£99.00/mo' : '£999.00/yr',
         features: {
            mobileInsurance: true,
            travelInsurance: true,
            flightInsurance: true,
            fraudProtection: true,
            concierge: true,
            helpService: true,
            roadsideHelp: true,
            premiumLounge: true,
            debitCard: true,
            taxFree: true,
         },
      },
   ];
   return (
      <>
         <div className="container mx-auto px-4 py-10 md:pt-20">
            <div className="overflow-x-auto ">
               <table className="w-full border-collapse border border-gray-300 shadow-lg rounded-lg overflow-hidden">
                  <thead>
                     <tr className="bg-gradient-to-r from-purple-500 to-purple-700 text-white">
                        <th className="text-left px-6 py-4 text-lg">Features</th>
                        {plans.map((plan, index) => (
                           <th
                              key={index}
                              className="text-center px-6 py-4 text-lg font-semibold"
                           >
                              {plan.name} <br />
                              <span className="text-gray-200 text-sm">{plan.price}</span>
                           </th>
                        ))}
                     </tr>
                  </thead>
                  <tbody>
                     {Object.keys(plans[0].features).map((feature, index) => (
                        <tr
                           key={index}
                           className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                              } hover:bg-gray-100`}
                        >
                           <td className="text-left px-6 py-4 capitalize text-gray-800 font-medium">
                              {feature.replace(/([A-Z])/g, ' $1')}
                           </td>
                           {plans.map((plan, i) => (
                              <td
                                 key={i}
                                 className="text-center px-6 py-4 text-lg font-bold"
                              >
                                 {plan.features[feature] ? (
                                    <span className="text-green-500 text-xl">✔</span>
                                 ) : (
                                    <span className="text-red-500 text-xl">✘</span>
                                 )}
                              </td>
                           ))}
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>

         </div>
         
         
      </>
   );
}

export default Tabile;