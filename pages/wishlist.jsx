import React from "react";
import Layout from "@/components/frontend/Layout";

const wishlist = () => {
  return (
    <Layout>
      <div className="w-full md:px-16 px-8 py-10">
        <div className="flex w-full justify-center text-4xl font-semibold py-6">
          <h2>WishList</h2>
        </div>
        <div className=" md:block hidden">
          <table className="w-full">
            <thead className="bg-[#F1F1F1]">
              <tr className=" text-black">
                <th></th>
                <th className=" py-2">Image</th>
                <th className=" py-2">Product</th>
                <th className=" py-2">Price</th>
                <th className=" py-2">Quantity </th>
                <th className=" py-2">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center text-black border-b border-black">
                <td></td>
                <td className=" px-4 py-2">
                  <div className="flex items-center gap-3">
                    <img
                      src="/icons/frontend/red_cross.svg"
                      alt=""
                      className="cursor-pointer"
                    />
                    <img src="/icons/frontend/wishlist_img.svg" alt="" />
                  </div>
                </td>
                <td className="">Farah PetalPretties Printed Lawn</td>
                <td className="">Rs.3,999.00 PKR</td>
                <td className="text-[#2ED47A]">In Stock</td>
                <td className="">
                  <button className="bg-black text-white px-4 py-2">
                    VIEW PRODUCT
                  </button>
                </td>
              </tr>
              <tr className="text-center text-black border-b border-black">
                <td></td>
                <td className=" px-4 py-2">
                  <div className="flex items-center gap-3">
                    <img
                      src="/icons/frontend/red_cross.svg"
                      alt=""
                      className="cursor-pointer"
                    />
                    <img src="/icons/frontend/wishlist_img.svg" alt="" />
                  </div>
                </td>
                <td className="">Farah PetalPretties Printed Lawn</td>
                <td className="">Rs.3,999.00 PKR</td>
                <td className="text-[#2ED47A]">In Stock</td>
                <td className="">
                  <button className="bg-black text-white px-4 py-2">
                    VIEW PRODUCT
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="md:hidden">
          <div className="flex gap-3 items-center  py-3">
            <img
              src="/icons/frontend/wishlist_img.svg"
              alt=""
              className="w-28"
            />
            <div className="">
              <p>Farah PetalPretties Printed Lawn </p>
              <p>Rs.5,499.00 PKR </p>
              <p className="text-[#2ED47A]">In Stock</p>
              <div className="flex gap-2">
                <button className="bg-black text-white px-5 py-2">
                  View Products
                </button>
                <button className="bg-red-400 min-w-[60px] flex justify-center items-center">
                  <img src="/icons/cross.svg" alt="" />
                </button>
              </div>
            </div>
          </div>
          <hr className="text-gray-300" />
          <div className="flex gap-3 items-center  py-3">
            <img
              src="/icons/frontend/wishlist_img.svg"
              alt=""
              className="w-28"
            />
            <div className="">
              <p>Farah PetalPretties Printed Lawn </p>
              <p>Rs.5,499.00 PKR </p>
              <p className="text-[#2ED47A]">In Stock</p>
              <div className="flex gap-2">
                <button className="bg-black text-white px-5 py-2">
                  View Products
                </button>
                <button className="bg-red-400 min-w-[60px] flex justify-center items-center">
                  <img src="/icons/cross.svg" alt="" />
                </button>
              </div>
            </div>
          </div>
          <hr className="text-gray-300" />
        </div>
      </div>
    </Layout>
  );
};

export default wishlist;
