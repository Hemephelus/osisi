function FamilyTreeSkeleton() {
  return (
    <section className="h-full w-full flex justify-end relative overflow-hidden">
      <section className=" flex justify-center items-center flex-col gap-4 w-full">
        Loading...
        <div className=" flex justify-center items-center gap-4 w-full">
        <p className="text-center text-2xl w-[15px] h-[15px] bg-[#FFD700] animate-spin"></p>
        <p className="text-center text-2xl w-[15px] h-[15px] bg-[#FFD700] animate-spin"></p>
        <p className="text-center text-2xl w-[15px] h-[15px] bg-[#FFD700] animate-spin"></p>
        </div>
      </section>
    </section>
  );
}

export default FamilyTreeSkeleton;
