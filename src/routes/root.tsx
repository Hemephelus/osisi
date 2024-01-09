import { Link, Outlet } from "react-router-dom";

export default function Root() {
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
        <Outlet/>
      </div>
    );
  }