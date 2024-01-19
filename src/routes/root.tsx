import { Link, Outlet } from "react-router-dom";
import { osisiContext } from "../context/useOsisiContext";

export default function Root() {
  const OSISI_URL ="https://script.google.com/macros/s/AKfycbzltce5xhRkPzFDOMmzbmtfPUm-vFojEVjmmXCu_gwkDpRV_lIvXUXXI5oKDk0GQrre/exec"
  return (
      <div className="bg-[#040C24] min-h-screen text-[#FFFDD0] pri-font grid grid-rows-[auto,1fr]">
        <nav className="p-3 flex justify-between shadow-xl items-center sticky top-0 bg-[#ffffff10] w-full z-20">
        
        <Link to={'/'}>
        <h1 className="text-4xl font-bold">osisi</h1>
        </Link>
        <div>
        <Link to={'/family-tree/view'}>
          View Family Tree
        </Link>
        </div>
        </nav>
        <osisiContext.Provider value={{OSISI_URL}} >
          <Outlet />
        </osisiContext.Provider>
      </div>
    );
  }