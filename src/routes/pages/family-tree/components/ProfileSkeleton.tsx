function ProfileSkeleton() {
  return (
    <section className="px-[5%] py-[5%] flex gap-8 flex-col sec-font  bg-[#00000010] shadow-2xl border animate-pulse">
      <section className=" flex justify-center items-center flex-col gap-4 capitalize w-full">
        <figure className="h-[100px] w-[100px] rounded-full bg-[#FFFDD0] text-[#691540] flex items-center justify-center text-5xl pri-font ">
          N
        </figure>
        <p className="text-center text-2xl">nwachukwu samuel ujubuonu</p>
        <p>
          <span>1999-10-24</span>
        </p>
        <p>
          <span>Living</span> {"<|>"} <span>Male</span>
        </p>
      </section>

      <section className="flex gap-4 flex-wrap justify-between">
        <p className="p-2 bg-[#FFFDD0] text-[#691540] hover:text-[#FFFDD0] hover:bg-[#691540] border duration-300">
          Add Parent
        </p>

        <p className="p-2 bg-[#FFFDD0] text-[#691540] hover:text-[#FFFDD0] hover:bg-[#691540] border duration-300">
          Add Child
        </p>

        <p className="p-2 bg-[#FFFDD0] text-[#691540] hover:text-[#FFFDD0] hover:bg-[#691540] border duration-300">
          Add Spouse
        </p>
      </section>
    </section>
  );
}

export default ProfileSkeleton;
