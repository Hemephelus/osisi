import { Link, Outlet } from "react-router-dom";
import { osisiContext } from "../context/useOsisiContext";
import { OSISI_URL } from "@/constants";

export default function Root() {
  return (
    <div className="bg-pri min-h-screen text-sec pri-font grid grid-rows-[auto,1fr] font-sora relative">
      <nav className="p-3 flex justify-between shadow-xl items-center bg-[#ffffff10] w-full sticky top-0 z-50">
        <Link to={"/"}>
          <h1 className="text-5xl font-overlock-sc">osisi</h1>
        </Link>
      </nav>
      <osisiContext.Provider value={{ OSISI_URL }}>
        <Outlet />
      </osisiContext.Provider>
    </div>
  );
}
