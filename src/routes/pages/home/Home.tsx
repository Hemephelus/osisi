import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="flex flex-col justify-center items-center text-center min-h-screen px-[20%] gap-12 font-sora">
      <section className="flex flex-col justify-center items-center">
      <h3 className="text-6xl font-overlock-sc">Welcome to Osisi</h3>
      <h5 className="text-3xl">Remembering our roots</h5>
      </section>
      <Link to={'/family'} className="text-lg  bg-sec text-pri p-4 hover:scale-95 duration-300 ">
        View Our Family
      </Link>
    </main>
  );
}

export default Home;
