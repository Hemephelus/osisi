import { P5jsSketch } from "./P5jsSketch"
import useGetRequest from "@hooks/useGetRequest";
import { useSearchParams } from "react-router-dom";
import { useOsisiContext } from "@context/useOsisiContext";
import FamilyTreeSkeleton from "../components/FamilyTreeSkeleton";

// import React from 'react'
function ViewFamilyPage() {
  let [searchParams] = useSearchParams();
  const { OSISI_URL } = useOsisiContext();
  let id = searchParams.get("id") || '18d1158c551-309';

  let [data, isLoading, error] = useGetRequest(`${OSISI_URL}?id=${id}&request_type=get_family`);
 
    if(isLoading){
    return(
      <FamilyTreeSkeleton/>
      )
    }


    if (error) {
      return (
        <div className="flex justify-center items-center text-2xl">
          Error: {error.message}
        </div>
      );
    }

  return (
    <div className="h-full w-full flex justify-end relative overflow-hidden">
      <P5jsSketch data={data}/>
  
        <aside className=" w-[300px] p-2 m-2 z-10 h-fit grid gap-2">
            <button className="bg-slate-600 p-2">Parents</button>
            <button className="bg-slate-600 p-2">Children</button>
            <button className="bg-slate-600 p-2">Spouses</button>
        </aside>    
    </div>
  )
}

export default ViewFamilyPage