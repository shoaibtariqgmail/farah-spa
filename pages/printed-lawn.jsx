import React,{useState} from "react";
import Layout from "@/components/frontend/Layout";

const printedLawn = () => {
  const [sidebar,setSidebar]=useState(false)
  const  PrintedLawn=[
    {
      id:1,
      image:"/images/printedLawn/lawn1.svg",
      name:"Farah PetalPretties Printed Lawn",
      price:"Rs.3,999.00 PKR",
    },
    {
      id:2,
      image:"/images/printedLawn/lawn2.svg",
      name:"Farah PetalPretties Printed Lawn",
      price:"Rs.3,999.00 PKR",
    },
    {
      id:3,
      image:"/images/printedLawn/lawn3.svg",
      name:"Farah PetalPretties Printed Lawn",
      price:"Rs.3,999.00 PKR",
    },
    {
      id:4,
      image:"/images/printedLawn/lawn1.svg",
      name:"Farah PetalPretties Printed Lawn",
      price:"Rs.3,999.00 PKR",
    },
    {
      id:5,
      image:"/images/printedLawn/lawn2.svg",
      name:"Farah PetalPretties Printed Lawn",
      price:"Rs.3,999.00 PKR",
    },
    {
      id:6,
      image:"/images/printedLawn/lawn3.svg",
      name:"Farah PetalPretties Printed Lawn",
      price:"Rs.3,999.00 PKR",
    },
    {
      id:7,
      image:"/images/printedLawn/lawn1.svg",
      name:"Farah PetalPretties Printed Lawn",
      price:"Rs.3,999.00 PKR",
    },
    {
      id:8,
      image:"/images/printedLawn/lawn2.svg",
      name:"Farah PetalPretties Printed Lawn",
      price:"Rs.3,999.00 PKR",
    },
    {
      id:9,
      image:"/images/printedLawn/lawn3.svg",
      name:"Farah PetalPretties Printed Lawn",
      price:"Rs.3,999.00 PKR",
    },
    {
      id:10,
      image:"/images/printedLawn/lawn1.svg",
      name:"Farah PetalPretties Printed Lawn",
      price:"Rs.3,999.00 PKR",
    },
    {
      id:11,
      image:"/images/printedLawn/lawn2.svg",
      name:"Farah PetalPretties Printed Lawn",
      price:"Rs.3,999.00 PKR",
    },
    {
      id:12,
      image:"/images/printedLawn/lawn3.svg",
      name:"Farah PetalPretties Printed Lawn",
      price:"Rs.3,999.00 PKR",
    },
  ]
  return (
    <Layout>
      <div className="grid grid-cols-12 md:px-10 px-4 py-10">

        <div className="md:col-span-3 col-span-12 md:block hidden">
          <div>
            <img src="/images/printedLawn/user_img.svg" alt="" />
            <h3 className="pl-5 py-5  text-2xl">Printed Lawn</h3>
            <label
              htmlFor="Availability"
              className="font-semibold text-2xl py-10"
            >
              Availability
            </label>
           
            <div className="flex gap-2 py-2 pl-3">
              <input
                type="checkbox"
                name="Availability"
                id="Availability"
                className=""
              />
              <label htmlFor="Availability" className="text-xl">
              In stock (37)
              </label>
            </div>
            <div className="flex gap-2 py-2 pl-3">
              <input
                type="checkbox"
                name=""
                id=""
                className=""
              />
              <label htmlFor="Availability" className="text-xl">
              Out of stock (0)
              </label>
            </div>
            <label
              htmlFor="Fabric"
              className="font-semibold text-2xl py-10"
            >
              Fabric
            </label>
            <div className="flex gap-2 py-2 pl-3">
              <input
                type="checkbox"
                name=""
                id=""
                className=""
              />
              <label htmlFor="Lawn" className="text-xl">
              Lawn
              </label>
            </div>
            <label
              htmlFor="Fabric"
              className="font-semibold text-2xl py-10"
            >
              Price
            </label>
            <p>(The highest price is Rs.4,199.00)</p>
            <div className="flex gap-2 py-2 pl-3">
             <p>Rs</p>
              <input

                type="text"
                name=""
                id=""
                placeholder="From"
                className="border border-black w-32 bg-transparent"
              />
            </div>
            <div className="flex gap-2 py-2 pl-3">
             <p>Rs</p>
              <input

                type="text"
                name=""
                id=""
                placeholder="To"
                className="border border-black w-32  bg-transparent" 
              />
            </div>
            <div className="pl-3 py-2">
              <button className="border-b-1 border-black ">
                Clear all
              </button>
            </div>
          </div>
        </div>
        <div className="md:col-span-9 col-span-12">
          <div className="flex justify-between items-center md:hidden mb-4">
            <div>
              <button className="bg-black px-6 py-1 text-white " onClick={()=>setSidebar(!sidebar)}>
                FILTER
              </button>
            </div>
            <div>
                <select name="" id="" className="focus:outline-none w-20">
                  <option value="">Sort by</option>
                  <option value="">Featured</option>
                  <option value="">Best Selling</option>
                  <option value="">A-Z</option>
                  <option value="">Z-A</option>
                  <option value="">Lowest Price</option>
                  <option value="">Highest Price</option>
                  <option value="">New to Old</option>
                  <option value="">Old to New</option>

                </select>
                </div>
          </div>
          <div
        className={`bg-black w-48 h-auto text-white  pt-4 absolute   transition-all duration-500 ease-in-out ${
          sidebar === true ? 'left-0' : '-left-56'
        }`}
      >
          <div className="">
            <div className="flex justify-end border-b-1 border-white pb-2 pr-3">
              <img
                src="/icons/cross.svg"
                alt=""
                className="cursor-pointer h-6 w-6 border border-white rounded-full "
                onClick={()=>setSidebar(!sidebar)}
              />
            </div>
          
          <div className="pt-4">
            <label
              htmlFor="Availability"
              className="font-semibold "
            >
              Availability
            </label>
           
            <div className="flex gap-2 py-2 pl-3">
              <input
                type="checkbox"
                name="Availability"
                id="Availability"
                className=""
              />
              <label htmlFor="Availability" className="">
              In stock (37)
              </label>
            </div>
            <div className="flex gap-2 py-2 pl-3 border-b-1 border-white">
              <input
                type="checkbox"
                name=""
                id=""
                className=""
              />
              <label htmlFor="Availability" className="">
              Out of stock (0)
              </label>
            </div>
            <label
              htmlFor="Fabric"
              className="font-semibold  py-10"
            >
              Fabric
            </label>
            <div className="flex gap-2 py-2 pl-3">
              <input
                type="checkbox"
                name=""
                id=""
                className=""
              />
              <label htmlFor="Lawn" className="">
              Lawn
              </label>
            </div>
            <label
              htmlFor="Fabric"
              className="font-semibold  py-10"
            >
              Price
            </label>
            <p className="text-xs pt-2">(The highest price is Rs.4,199.00)</p>
            <div className="flex gap-2 py-2 pl-3">
             <p>Rs</p>
              <input

                type="text"
                name=""
                id=""
                placeholder="From"
                className="border border-gray-300 w-32  bg-transparent"
              />
            </div>
            <div className="flex gap-2 py-2 pl-3">
             <p>Rs</p>
              <input

                type="text"
                name=""
                id=""
                placeholder="To"
                className="border border-gray-300 w-32  bg-transparent"
              />
            </div>
            <div className="pl-3 py-2">
              <button className="border-b-1 border-white ">
                Clear all
              </button>
            </div>
          </div>
        </div>
            </div>





          <div className="flex items-center gap-10">
            <div className="bg-[#192A3E] rounded-full items-center flex justify-between pr-2 px-2 w-24 text-white py-2">
              <p className="text-xs md:text-base">Lawn</p>
              <p className="cursor-pointer">
                <img src="/images/printedLawn/x.svg" alt=""/>
              </p>
            </div>
            <div className="bg-[#192A3E] rounded-full items-center flex gap-10 px-4  text-white py-2">
              <p  className="text-xs md:text-base">From Rs.2,199.00  To Rs.3,999.00</p>
              <p className="cursor-pointer">
                <img src="/images/printedLawn/x.svg" alt=""/>
              </p>
            </div>
          </div>
          <div className=" md:shadow-lg rounded-lg p-6">
            <div className="flex justify-between items-center pb-8">
              <div></div>
              <div className="text-[#90A087]">Showing: 37 Results</div>
              <div>
                <select name="" id="" className="focus:outline-none text-[#192A3E]">
                  <option value="">Sort by</option>
                  <option value="">Featured</option>
                  <option value="">Best Selling</option>
                  <option value="">A-Z</option>
                  <option value="">Z-A</option>
                  <option value="">Lowest Price</option>
                  <option value="">Highest Price</option>
                  <option value="">New to Old</option>
                  <option value="">Old to New</option>

                </select>
                </div>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-2 gap-4">
            {
                PrintedLawn.map((item,index)=>{
                  return(
                    <div key={index} className="p-2">
                      <img src={item.image} alt="" />
                      <p className="md:text-xl  text-xs pt-2 text-center">{item.name}</p>
                      <p className="md:text-xl  text-xs pt-2 text-center">{item.price}</p>
                    </div>
                  )
                }
                )
              }
            </div>
            <div className="flex w-full justify-center gap-6 py-6">
              <p className="cursor-pointer border-b-1 border-black" >1</p>
              <p className="cursor-pointer">2</p>
              <p className="cursor-pointer">3</p>
              <img src="/icons/paginate-errow.svg" alt="" className="cursor-pointer"/>
            </div>

          </div>
        </div>
      </div>
    </Layout>
  );
};

export default printedLawn;
