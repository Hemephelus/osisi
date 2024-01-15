import { Link, Outlet } from "react-router-dom";
import { osisiContext } from "../context/useOsisiContext";

export default function Root() {
  const OSISI_URL =
  "https://script.google.com/macros/s/AKfycbzkrai3A1kd47XQnIpSrZNHsNtPHIcexVD1jnYb5uyWU4H7DY6FPXqEr9TAccxCqUcJ/exec"
  // "https://script.google.com/macros/s/AKfycbzOqoyZ-KbG4-lK3HvjmLYXrsteT39AXdeYmV3N323tg-nxALDkOWEMIQ0_bv1TRy5G/exec"
    return (
      <div className="bg-[#691540] min-h-screen text-[#FFFDD0] pri-font">
        <nav className="p-3 flex justify-between shadow-xl items-center">
        <h1 className="text-4xl font-bold">osisi</h1>
        <div>
        <Link to={'/family-tree/add?referer_id=null&relationship=self'}>
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