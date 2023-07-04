import Layout from "@/components/frontend/Layout";
import React, { useState } from "react";

const profile = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };
  return (
    <>
      <Layout>
        <div className="px-8">
          <div className="grid grid-cols-12 ">
            <div className="md:col-span-4 col-span-12 md:block hidden"></div>
            <div className="md:col-span-8 col-span-12">
              <h3 className=" py-16 font-semibold text-4xl md:text-left text-center">
                MY ACCOUNT
              </h3>
            </div>
            <div className="md:col-span-4 col-span-12 ">
              <img
                src="/icons/frontend/profile_img.svg"
                alt=""
                className="md:block hidden"
              />
              <div className="md:hidden w-full flex justify-center">
                <img
                  src="/images/user-img/profile_img1.svg"
                  alt=""
                  className="md:hidden"
                />
              </div>
              <div className="flex justify-center mt-10  w-full">
                <button className="bg-[#885AF8] px-6 text-2xl text-white rounded-md h-10 md:block hidden">
                  Submit
                </button>
              </div>
            </div>
            <div className="md:col-span-8 col-span-12">
              <h4 className="text-2xl ">Information</h4>
              <form action="#">
                <div className="flex justify-between items-center py-4">
                  <input
                    type="text"
                    placeholder="Your First Name"
                    className="w-full border-b-2 border-[#90A087] py-2 px-2 text-[#90A087] focus:outline-none focus:border-[#90A087]"
                  />
                  <img
                    src="/icons/frontend/user-img/bx_edit.svg"
                    alt=""
                    className="absolute right-8"
                  />
                </div>
                <div className="flex justify-between items-center py-4">
                  <input
                    type="text"
                    placeholder="Your Last Name"
                    className="w-full border-b-2 border-[#90A087] py-2 px-2 text-[#90A087] focus:outline-none focus:border-[#90A087]"
                  />
                  <img
                    src="/icons/frontend/user-img/bx_edit.svg"
                    alt=""
                    className="absolute right-8"
                  />
                </div>
                <div className="flex justify-between items-center py-4">
                  <input
                    type="text"
                    placeholder="Email"
                    className="w-full border-b-2 border-[#90A087] py-2 px-2 text-[#90A087] focus:outline-none focus:border-[#90A087]"
                  />
                  <img
                    src="/icons/frontend/user-img/bx_edit.svg"
                    alt=""
                    className="absolute right-8"
                  />
                </div>
                <div className="flex justify-between items-center py-4">
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="w-full border-b-2 border-[#90A087] py-2 px-2 text-[#90A087] focus:outline-none focus:border-[#90A087]"
                  />
                  <img
                    src="/icons/frontend/user-img/bx_edit.svg"
                    alt=""
                    className="absolute right-8"
                  />
                </div>
                <h4 className="text-2xl py-6">Address</h4>
                <div className="flex justify-between items-center py-4">
                  <input
                    type="text"
                    placeholder="Name Contact"
                    className="w-full border-b-2 border-[#90A087] py-2 px-2 text-[#90A087] focus:outline-none focus:border-[#90A087]"
                  />
                  <img
                    src="/icons/frontend/user-img/bx_edit.svg"
                    alt=""
                    className="absolute right-8"
                  />
                </div>
                <div className="flex justify-between items-center py-4">
                  <input
                    type="text"
                    placeholder="Address"
                    className="w-full border-b-2 border-[#90A087] py-2 px-2 text-[#90A087] focus:outline-none focus:border-[#90A087]"
                  />
                  <img
                    src="/icons/frontend/user-img/bx_edit.svg"
                    alt=""
                    className="absolute right-8"
                  />
                </div>
                <div className="flex justify-between">
                  <p className="text-[#90A087]">Set as default address</p>
                  <div className="relative inline-block w-10 mr-2 align-middle select-none">
                    <input
                      type="checkbox"
                      id="toggle"
                      className="toggle-checkbox absolute block w-6 h-6 rounded-full  appearance-none cursor-pointer"
                      checked={isChecked}
                      onChange={handleToggle}
                    />
                    <label
                      htmlFor="toggle"
                      className={`toggle-label block overflow-hidden w-12 h-6 rounded-full  cursor-pointer ${
                        isChecked ? "bg-[#2ED47A]" : "bg-[#D8FAE7]"
                      }`}
                    >
                      <span
                        className={`${
                          isChecked ? "translate-x-full" : "translate-x-0"
                        } inline-block w-6 h-6 transform bg-white rounded-full transition-transform`}
                      ></span>
                    </label>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full py-6 pb-10">
            <h4 className="text-2xl ">Order History</h4>
            <div>
                <div className="md:block hidden">
                    <table className="w-full border-collapse ">
                        <thead>
                        <tr className="text-center text-black">
                            <th className="border-2 border-black py-2">ID Order</th>
                            <th className="border-2 border-black py-2">Date</th>
                            <th className="border-2 border-black py-2">
                            Payment Status
                            </th>
                            <th className="border-2 border-black py-2">
                            Fulfillment Status
                            </th>
                            <th className="border-2 border-black py-2">Total</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="text-center text-black">
                            <td className="border-2 border-black px-4 py-2">
                            <div className="text-white bg-[#FF4848] rounded-md h-10 flex justify-center items-center ">
                                ELP - 24581
                            </div>
                            </td>
                            <td className="border-2 border-black">2023-06-28</td>
                            <td className="border-2 border-black">Paid</td>
                            <td className="border-2 border-black">Shipped</td>
                            <td className="border-2 border-black">$100.00</td>
                        </tr>
                        </tbody>
                    </table>
              </div>
              <div className="md:hidden">
                <div className="flex items-center justify-between py-3">
                  <p>ID Order</p>
                  <div className="text-white bg-[#FF4848] rounded-md  px-4 flex justify-center items-center ">
                    ELP - 24581
                  </div>
                </div>
                <div className="flex items-center justify-between py-3">
                  <p>Date</p>
                  <div className=" ">2023-06-28</div>
                </div>
                <div className="flex items-center justify-between py-3">
                  <p>Payment Status</p>
                  <div className=" ">Paid</div>
                </div>
                <div className="flex items-center justify-between py-3">
                  <p>Fulfillment Status</p>
                  <div className=" ">Shipped</div>
                </div>
                <div className="flex items-center justify-between py-3">
                  <p>Total</p>
                  <div className=" ">$100.00</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default profile;
