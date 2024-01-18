import { P5jsSketch } from "./P5jsSketch"

// import React from 'react'
function ViewFamilyPage() {
  return (
    <div className="h-full w-full flex justify-end relative overflow-hidden">
      <P5jsSketch/>
  
        <aside className=" w-[300px] p-2 m-2 z-10 h-fit grid gap-2">
            <button className="bg-slate-600 p-2">Parents</button>
            <button className="bg-slate-600 p-2">Children</button>
            <button className="bg-slate-600 p-2">Spouses</button>
        </aside>    
    </div>
  )
}

export default ViewFamilyPage