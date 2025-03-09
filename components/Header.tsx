// "use client";

// import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
// import { ShoppingBagOutlined as OrdersIcon } from "@mui/icons-material";
// import { ClerkLoaded, SignInButton, UserButton } from "@clerk/clerk-react";

// import { SignedIn, useUser } from "@clerk/nextjs";
// import Link from "next/link";

// import Form from "next/form";

// function Header() {
//   const { user } = useUser();

//   const createClerkPasskey = async () => {
//     try {
//       const response = await user?.createPasskey();
//       console.log(response);
//     } catch (err) {
//       console.error("Error:", JSON.stringify(err, null, 2));
//     }
//   };

//   return (
//     <header className="flex flex-wrap justify-between items-center px-4 py-2 w-full">
//       {/* top row */}
//       <div className="flex flex-wrap justify-between items-center w-full">
//         <Link
//           href="/"
//           className="text-2xl font-bold text-blue-500 hover:opacity-50 cursor-pointer mx-auto sm:mx-0"
//         >
//           BoomBuy
//         </Link>

//         <Form
//           action="/search"
//           className="w-full sm:w-[500px] sm:flex-1 sm:mx-4 sm:mt-0"
//         >
//           <input
//             type="text"
//             name="query"
//             placeholder="Search Here"
//             className="
//               bg-gray-100 text-gray-800 px-4 py-2 rounded focus:outline-none focus:ring-2
//               focus:ring-opacity-50 border w-full max-w-4xl
//             "
//           />
//         </Form>

//         <div className="flex items-center justify-end space-x-4 mt-4 sm:mt-0">
//           <Link
//             href="/carts"
//             className="relative flex justify-center items-center space-x-2 bg-blue-500
//               hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg shadow-lg
//               hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105"
//           >
//             <ShoppingCartOutlinedIcon className="w-6 h-6" />
//             <span className="font-medium text-center">My Cart</span>
//           </Link>

//           <ClerkLoaded>
//             <SignedIn>
//               <Link
//                 href="/orders"
//                 className="relative flex justify-center items-center gap-x-2 bg-blue-500
//                   hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg shadow-lg
//                   hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105 whitespace-nowrap"
//               >
//                 <OrdersIcon className="w-6 h-6" />
//                 <span className="font-medium text-center">My Orders</span>
//               </Link>
//             </SignedIn>

//             {user ? (
//               <div className="flex items-center space-x-2">
//                 <UserButton />

//                 <div className="hidden sm:block text-xs">
//                   <p className="text-gray-400">Welcome Back</p>
//                   <p className="font-bold">{user.fullName}!</p>
//                 </div>
//               </div>
//             ) : (
//               <SignInButton mode="modal" />
//             )}

//             {user?.passkeys.length === 0 && (
//               <button
//                 onClick={createClerkPasskey}
//                 className="bg-white hover:bg-blue-700 hover:text-white animate-pulse
//                   text-blue-500 font-bold py-2 px-4 rounded border-blue-300 border"
//               >
//                 Create passkey
//               </button>
//             )}
//           </ClerkLoaded>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Header;

"use client";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { ShoppingBagOutlined as OrdersIcon } from "@mui/icons-material";
import { ClerkLoaded, SignInButton, UserButton } from "@clerk/clerk-react";

import { SignedIn, useUser } from "@clerk/nextjs";
import Link from "next/link";
import Form from "next/form";

function Header() {
  const { user } = useUser();

  const createClerkPasskey = async () => {
    try {
      const response = await user?.createPasskey();
      console.log(response);
    } catch (err) {
      console.error("Error:", JSON.stringify(err, null, 2));
    }
  };

  return (
    <header className="relative w-full bg-black shadow-lg">
      {/* Glowing Gradient Border */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 h-[4px]"></div>

      {/* Navigation Bar */}
      <div className="flex flex-wrap justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-yellow-400 hover:text-yellow-300 transition-all duration-300"
        >
          BoomBuy
        </Link>

        {/* Search Box */}
        <Form
          action="/search"
          className="hidden sm:flex bg-white/10 rounded-full border border-gray-700 w-[400px] px-4 py-2 text-white"
        >
          <input
            type="text"
            name="query"
            placeholder="Search Here..."
            className="bg-transparent w-full outline-none text-white placeholder:text-gray-400"
          />
        </Form>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          {/* Cart Button */}
          <Link
            href="/carts"
            className="flex items-center bg-yellow-500 text-black font-bold px-5 py-2 rounded-lg shadow-lg 
              hover:scale-105 transition-transform duration-300"
          >
            <ShoppingCartOutlinedIcon className="w-5 h-5" />
            <span className="ml-2">My Cart</span>
          </Link>

          {/* Orders Button */}
          <SignedIn>
            <Link
              href="/orders"
              className="flex items-center bg-yellow-500 text-black font-bold px-5 py-2 rounded-lg shadow-lg 
                hover:scale-105 transition-transform duration-300"
            >
              <OrdersIcon className="w-5 h-5" />
              <span className="ml-2">My Orders</span>
            </Link>
          </SignedIn>

          {/* User Section */}
          <ClerkLoaded>
            {user ? (
              <div className="flex items-center gap-2">
                <UserButton />
                <div className="hidden sm:block text-xs text-white">
                  <p className="text-gray-400">Welcome Back</p>
                  <p className="font-bold text-yellow-400">{user.fullName}</p>
                </div>
              </div>
            ) : (
              <SignInButton
                className="bg-yellow-500 text-black font-bold px-5 py-2 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                mode="modal"
              />
            )}
          </ClerkLoaded>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <Form
        action="/search"
        className="sm:hidden flex bg-gray-800 w-full px-4 py-2 mt-2"
      >
        <input
          type="text"
          name="query"
          placeholder="Search Here..."
          className="bg-transparent w-full text-white outline-none placeholder:text-gray-400"
        />
      </Form>
    </header>
  );
}

export default Header;
