// import { COUPON_CODES } from "@/sanity/lib/sales/couponCodes";
// import { getActiveSaleByCouponCode } from "@/sanity/lib/sales/getActiveSaleByCouponCode";

// async function SuperSaleBanner() {
//   const sale = await getActiveSaleByCouponCode(COUPON_CODES.SUPERSALE);

//   if (!sale?.isActive) {
//     return null;
//   }
//   return (
//     <div
//       className="bg-gradient-to-r from-red-600 to-black text-whi
//     px-6 py-10 mx-4 mt-2 rounded-lg shadow-lg"
//     >
//       <div className="container mx-auto flex items-center justify-between text-white">
//         <div className="flex-1">
//           <h2 className="text-3xl sm:text-5xl font-extrabold text-left mb-4">
//             {sale.title}
//           </h2>
//           <p className="text-left text-xl sm:text-3xl font-semibold mb-6">
//             {sale.description}
//           </p>
//           <div className="flex">
//             <div className="bg-white text-black py-4 px-6 rounded-full shadow-md transform hover:scale-105 transition duration-300">
//               <span className="font-bold text-base sm:text-xl">Use code: </span>
//               <span className="text-red-600 font-bold">{sale.couponCode}</span>
//               <span className="ml-2 font-bold text-base sm:text-xl">
//                 for {sale.discountAmount}% OFF!
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SuperSaleBanner;

import { COUPON_CODES } from "@/sanity/lib/sales/couponCodes";
import { getActiveSaleByCouponCode } from "@/sanity/lib/sales/getActiveSaleByCouponCode";

async function SuperSaleBanner() {
  const sale = await getActiveSaleByCouponCode(COUPON_CODES.SUPERSALE);

  if (!sale?.isActive) {
    return null;
  }

  return (
    <div className="relative flex items-center justify-center h-[80vh] bg-black overflow-hidden">
      {/* Glowing Border */}
      <div className="absolute inset-0 animate-glow border-[5px] border-transparent rounded-lg">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 blur-xl opacity-20"></div>
      </div>

      {/* Glassmorphism Card */}
      <div className="relative bg-black/40 backdrop-blur-xl rounded-xl shadow-2xl border border-gray-800 px-10 py-16 text-center max-w-[600px] transform transition-all hover:scale-105 hover:shadow-yellow-500/50 duration-500">
        <h2 className="text-6xl font-extrabold text-white mb-4 animate-bounce">
          {sale.title}
        </h2>
        <p className="text-lg text-gray-300 mb-6">{sale.description}</p>

        {/* Coupon Code Section */}
        <div className="bg-black border border-yellow-400 text-white py-3 px-8 rounded-full shadow-xl mb-6 transition-all hover:scale-110 hover:shadow-yellow-500/50">
          <span className="text-lg font-semibold">Use Promo Code:</span>
          <span className="text-yellow-400 font-extrabold text-2xl mx-2">
            {sale.couponCode}
          </span>
          <span className="text-lg font-semibold">
            for {sale.discountAmount}% OFF
          </span>
        </div>

        {/* Grab The Deal Button */}
        <a
          href="/shop"
          className="bg-gradient-to-r from-pink-500 to-yellow-500 text-black font-bold text-lg py-3 px-10 rounded-full shadow-xl transition-transform transform hover:scale-110 hover:shadow-yellow-500/50 animate-pulse"
        >
          🛒 Grab The Deal Now
        </a>

        {/* Bottom Glow */}
        <div className="absolute bottom-[-15px] left-0 right-0 mx-auto h-[10px] w-[150px] bg-yellow-500 blur-[50px] rounded-full"></div>
      </div>
    </div>
  );
}

export default SuperSaleBanner;
