import { Link, Outlet } from "react-router-dom";
// import { osisiContext } from "../context/useOsisiContext";
// import { OSISI_URL } from "@/constants";

export default function Root() {
  return (
    // <div className="bg-pri min-h-screen text-sec pri-font grid grid-rows-[auto,1fr] font-sora relative">
    //   <nav className="p-3 flex justify-between shadow-xl items-center bg-[#ffffff10] w-full fixed top-0 z-[1000]">

    //   </nav>
    //   <div  className="h-full overflow-hidden">
    //   <osisiContext.Provider value={{ OSISI_URL }}>
    //     <Outlet />
    //   </osisiContext.Provider>
    //   </div>

    // </div>
    <div className=" bg-pri min-h-screen text-sec font-sora">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-pri shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link to={"/"}>
            <h1 className="text-5xl font-overlock-sc">osisi</h1>
          </Link>
       
        </div>
      </header>

      {/* Page Content */}
      <main className=" min-h-screen px-4 py-8 bg-white/5">
        <Outlet />
      </main>
    </div>
  );
}
