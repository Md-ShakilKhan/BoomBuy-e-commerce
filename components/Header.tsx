"use client";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { ShoppingBagOutlined as OrdersIcon } from "@mui/icons-material";
import { ClerkLoaded, SignInButton, UserButton } from "@clerk/clerk-react";

import { useUser } from "@clerk/nextjs";
import Link from "next/link";

import Form from "next/form";

function Header() {
  const { user } = useUser();

  return (
    <header className="flex flex-wrap justify-between items-center px-4 py-2">
      {/* top row */}
      <div>
        <Link
          href="/"
          className="
        text-2xl
        font-bold
        text-blue-500
        hover:opacity-50
        cursor-pointer
        mx-auto
        sm:mx-0"
        >
          BoomBuy
        </Link>

        <Form
          action="/search"
          className="w-full sm:w-auto sm:flex-1 sm:mx-4  sm:mt-0"
        >
          <input
            type="text"
            name="query"
            placeholder="Search Here"
            className="
          bg-gray-100
          text-gray-800
          px-4
          py-2
          rounded
          focus:outline-none
          focus:ring-2
          focus:ring-opacity-50
          border
          w-full
          max-w-4xl
          "
          />
        </Form>

        <div>
          <Link
            href="/carts"
            className="flex-1 relative flex justify-center items-center space-x-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            <ShoppingCartOutlinedIcon className="w-6 h-6" />
            <span className="font-medium text-center">My Cart</span>
          </Link>
          <ClerkLoaded>
            {user && (
              <Link
                href="/orders"
                className="flex-1 relative flex justify-center items-center space-x-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                <OrdersIcon className="w-6 h-6" />
                <span className="font-medium text-center">My Orders</span>
              </Link>
            )}

            {user ? (
              <div className="flex items-center space-x-2">
                <UserButton />

                <div className="hidden sm:block text-xs">
                  <p className="text-gray-400">Welcome Back</p>
                  <p className="font-bold">{user.fullName}!</p>
                </div>
              </div>
            ) : (
              <SignInButton mode="modal" />
            )}
          </ClerkLoaded>
        </div>
      </div>
    </header>
  );
}

export default Header;
