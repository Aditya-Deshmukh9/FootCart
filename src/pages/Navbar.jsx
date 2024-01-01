import React from "react";
import { SlBasket } from "react-icons/sl";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const { carts } = useSelector((state) => state.allCart);

  return (
    <>
      <div className="bg-indigo-950 flex flex-row justify-between items-center px-4 py-2">
        {/* Logo */}
        <Link to="/" className="text-white text-xl font-bold sm:text-2xl ">
          FoodCart
        </Link>

        {/* Search Bar */}
        <form>
          <div className="border-b-blue-600 focus-within:border-none focus-within:ring focus-within:ring-offset-2 flex h-10 sm:h-10 items-center justify-start rounded-xl border-b-2 bg-gray-100 leading-4 ring-blue-600  sm:w-96">
            <input
              placeholder="Search here..."
              // value={searchTerm}
              // onChange={(e) => setsearchTerm(e.target.value)}
              className="peer ml-2 flex-grow bg-transparent text-gray-500 outline-none rounded"
            />
            <button
              type="button"
              className="peer-focus:mr-2 z-20 cursor-pointer text-blue-600 outline-none duration-150 hover:scale-125"
            >
              <svg className="h-6 w-6 stroke-2" viewBox="0 0 32 32" fill="none">
                <circle
                  cx="15"
                  cy="14"
                  r="8"
                  stroke="currentColor"
                  fill="transparent"
                ></circle>
                <line
                  x1="21.1514"
                  y1="19.7929"
                  x2="26.707"
                  y2="25.3484"
                  stroke="currentColor"
                  fill="transparent"
                ></line>
              </svg>
            </button>
          </div>
        </form>

        {/* E-commerce Basket */}
        <div className="flex items-center gap-5 m-1 px-2">
          <Link to={"/cart"} className=" text-white relative">
            <SlBasket size={28} className=" cursor-pointer" />
            <div className=" absolute top-[-8px] right-[-12px] bg-red-600 w-[22px] h-[22px] rounded-full text-white text-sm font-bold grid place-items-center">
              {carts.length}
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
