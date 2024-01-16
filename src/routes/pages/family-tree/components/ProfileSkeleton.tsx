function ProfileSkeleton() {
  return (
    <section className="px-[5%] py-[5%] flex gap-8 flex-col sec-font  bg-[#00000010] shadow-2xl border animate-pulse">
      <section className=" flex justify-center items-center flex-col gap-4 capitalize w-full">
        <figure className="h-[100px] w-[100px] rounded-full bg-[#FFFDD080] flex items-center justify-center text-5xl pri-font ">
         
        </figure>
        <p className="text-center text-2xl w-[300px] h-[30px] bg-[#ffffff80]"></p>
        <p className="text-center text-2xl w-[200px] h-[30px] bg-[#ffffff80]"></p>
        <p className="text-center text-2xl w-[100px] h-[30px] bg-[#ffffff80]"></p>
      
      </section>
    </section>
  );
}

export default ProfileSkeleton;
