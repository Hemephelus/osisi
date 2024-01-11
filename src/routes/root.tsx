import { Link, Outlet } from "react-router-dom";
import { osisiContext } from "../context/useOsisiContext";

export default function Root() {
  const OSISI_URL =
    "https://script.google.com/macros/s/AKfycbxSMJyGCMKWLaAqB7gXyjt4_k-SiZrmR3dzADzJe5dKktT0xIV265UA_ZD7FHMsnAXl/exec";
    return (
      <div className="bg-[#691540] min-h-screen text-[#FFFDD0] pri-font">
        <nav className="p-3 flex justify-between shadow-xl items-center">
        <h1 className="text-4xl font-bold">osisi</h1>
        <div>
        <Link to={'/create'}>
          Create Family
        </Link>
        </div>
        </nav>
        <osisiContext.Provider value={{OSISI_URL}} >
          <Outlet />
        </osisiContext.Provider>
      </div>
    );
  }