import { P5jsSketch } from "./P5jsSketch";
import useGetRequest from "@hooks/useGetRequest";
import { useSearchParams } from "react-router-dom";
import { useOsisiContext } from "@context/useOsisiContext";
import FamilyTreeSkeleton from "../components/FamilyTreeSkeleton";
// import { TfiHandDrag } from "react-icons/tfi";
// import { IoMdAdd } from "react-icons/io";
// import { RiSubtractFill } from "react-icons/ri";
// import { useState } from "react";
// import { useBearStore } from "@stores/test";
// import { IoMdSearch } from "react-icons/io";
// import MyCombobox from "../components/Combobox";


// import React from 'react'
function ViewFamilyPage() {
  let [searchParams] = useSearchParams();
  const { OSISI_URL } = useOsisiContext();
  const id = searchParams.get("id") || "18d1158c551-309";
  let [data, isLoading, error] = useGetRequest(
    `${OSISI_URL}?id=${id}&request_type=get_family`
  );
  // const [wow, setWow] = useState(id);
  // const [pan, setPan] = useState(false);
  // const isMax = false
  // const isMin = false
  // const [isMax, setIsMax] = useState(false);
  // const [isMin, setIsMin] = useState(false);
  // const [zoomScale, setZoomScale] = useState("100");

  // function handleZoomInput(value: string): void {
  //   if (typeof value === "string") {
  //     setZoomScale(value);
  //   }
  // }

  // const increasePopulation = useBearStore((state) => state.increase);
  // const bears = useBearStore((state) => state.bears);

  if (isLoading) {
    return <FamilyTreeSkeleton />;
  }

  if (error) {
    return (
      <div className="flex justify-center items-center text-2xl">
        Error: {error.message}
      </div>
    );
  }

  return (
    <div
      className={`h-full w-full flex justify-end relative overflow-hidden sec-font text-base ${
        false ? " active:cursor-grabbing cursor-grab " : ""
      }`}
    >
      <P5jsSketch
        data={data}
        member_id={id}
        panState={false}
        zoomScale={'100'}
      />

      {/* <aside className=" w-[250px] p-2 m-2 z-10 h-fit grid gap-2">
        <section className="grid grid-cols-4 gap-2 w-full  h-[50px]">
          <button
            className={`p-2 h-[50px] grid place-items-center hover:scale-95 active:scale-100 duration-300 ${
              pan
                ? "bg-[#ffffff] text-[#000000] opacity-80"
                : "border text-[#ffffff] "
            }`}
            onClick={() => setPan(!pan)}
          >
            <TfiHandDrag size={24} />
          </button>
          <button
            className={`p-2 h-[50px] grid place-items-center  duration-300 ${
              isMax
                ? "opacity-20 bg-[#ffffff] text-[#000000]"
                : "hover:scale-95 active:scale-100 text-[#ffffff] bg-[#ffffff40] "
            }`}
            // onClick={lol}
            disabled={isMax}
          >
            <IoMdAdd />
          </button>
          <input
            className="bg-slate-600 p-2 h-[50px] text-center"
            value={`${zoomScale}`}
            onChange={(e) => handleZoomInput(e.target.value)}
          />
          <button
            className={`p-2 h-[50px] grid place-items-center  duration-300 ${
              isMin
                ? "opacity-20 bg-[#ffffff] text-[#000000]"
                : "hover:scale-95 active:scale-100 text-[#ffffff] bg-[#ffffff40] "
            }`}
            // onClick={lol}
            disabled={isMin}
          >
            <RiSubtractFill />
          </button>
        </section>
        <section>
        <p>Point Of View (P.O.V)</p>
        <p>Nwachukwu Ujubuonu</p>
        </section>
        <div  className="flex  border-b p-2 gap-2">
        <IoMdSearch size={24}/>
          <input type="search" placeholder="Search..." className="bg-transparent w-full outline-none" />

        </div>
      
        <MyCombobox />
      </aside> */}
    </div>
  );
}

export default ViewFamilyPage;
