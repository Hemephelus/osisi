import React, { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import useGetRequest from "@/hooks/useGetRequest";
import { useOsisiContext } from "@/context/useOsisiContext";
import { formatDate } from "@/utils/formatDate";
import ProfileSkeleton from "./components/ProfileSkeleton";
import { PencilSquareIcon } from "@heroicons/react/24/solid";

interface Profile {
  first_name: "";
  middle_name: "";
  last_name: "";
  sex: "";
  status: "";
  date_of_birth: "";
  id: "";
}

function ProfileDetail() {
  let [searchParams] = useSearchParams();
  const { OSISI_URL } = useOsisiContext();
  const [profile, setProfile] = React.useState<Profile>();
  let id = searchParams.get("id");

  let [data, isLoading, error] = useGetRequest(`${OSISI_URL}?id=${id}&request_type=get_profile`);

  useEffect(() => {
    if (data) {
      setProfile(data.data[0])      
    }
  }, [data]);
 
  if(isLoading){
    return(
      <ProfileSkeleton/>
      )
    }


    if (error) {
      return (
        <div className="flex justify-center items-center text-2xl">
          Error: {error.message}
        </div>
      );
    }


  return (
    <section className="px-[5%] py-[5%] flex gap-8 flex-col sec-font  bg-[#00000010] shadow-2xl border justify-center items-center text-center m-[5%]">
      <section className=" flex justify-center items-center flex-col gap-4 capitalize w-full">
        <figure className="h-[100px] w-[100px] rounded-full bg-[#FFFDD0] text-[#691540] flex items-center justify-center text-5xl pri-font ">
        {profile?.first_name[0]}
        </figure>
        <Link to={"/"} title="edit">
          <PencilSquareIcon className="size-6" />
        </Link>
        <p className="text-center text-2xl">{profile?.first_name} {profile?.middle_name} {profile?.last_name}</p>
        <p>
          <span>{formatDate(profile?.date_of_birth)}</span>
        </p>
        <p>
          <span>{profile?.status}</span> {"<|>"} <span>{profile?.sex}</span>
        </p>
      </section>

      <section className="flex gap-4 flex-wrap justify-between">
        <Link
          to={`/family-tree/add?referer_id=${id}&relationship=Parent`}
          title="edit"
        >
          <p className="p-2 bg-[#FFFDD0] text-[#691540] hover:text-[#FFFDD0] hover:bg-[#691540] border duration-300">
            Add Parent
          </p>
        </Link>
        <Link
          to={`/family-tree/add?referer_id=${id}&relationship=Child`}
          title="edit"
        >
          <p className="p-2 bg-[#FFFDD0] text-[#691540] hover:text-[#FFFDD0] hover:bg-[#691540] border duration-300">
            Add Child
          </p>
        </Link>
        <Link
          to={`/family-tree/add?referer_id=${id}&relationship=Spouse`}
          title="edit"
        >
          <p className="p-2 bg-[#FFFDD0] text-[#691540] hover:text-[#FFFDD0] hover:bg-[#691540] border duration-300">
            Add Spouse
          </p>
        </Link>

        {/* add parent  */}
        {/* add child  */}
        {/* add spouse  */}
      </section>
    </section>
  );

  return (
    <section className="px-[5%] py-[5%] flex gap-8 flex-col sec-font  bg-[#00000010] shadow-2xl border">
      <section className=" flex justify-center items-center flex-col gap-4 capitalize w-full">
        <figure className="h-[100px] w-[100px] rounded-full bg-[#FFFDD0] text-[#691540] flex items-center justify-center text-5xl pri-font ">
          N
        </figure>
        <Link to={"/"} title="edit">
          {/* <CiEdit size={24} /> */}
        </Link>
        <p className="text-center text-2xl">nwachukwu samuel ujubuonu</p>
        <p>
          <span>1999-10-24</span>
        </p>
        <p>
          <span>Living</span> {"<|>"} <span>Male</span>
        </p>
      </section>

      <section className="flex gap-4 flex-wrap justify-between">
        <Link
          to={`/family-tree/add?referer_id=${id}&relationship=Parent`}
          title="edit"
        >
          <p className="p-2 bg-[#FFFDD0] text-[#691540] hover:text-[#FFFDD0] hover:bg-[#691540] border duration-300">
            Add Parent
          </p>
        </Link>
        <Link
          to={`/family-tree/add?referer_id=${id}&relationship=Child`}
          title="edit"
        >
          <p className="p-2 bg-[#FFFDD0] text-[#691540] hover:text-[#FFFDD0] hover:bg-[#691540] border duration-300">
            Add Child
          </p>
        </Link>
        <Link
          to={`/family-tree/add?referer_id=${id}&relationship=Spouse`}
          title="edit"
        >
          <p className="p-2 bg-[#FFFDD0] text-[#691540] hover:text-[#FFFDD0] hover:bg-[#691540] border duration-300">
            Add Spouse
          </p>
        </Link>

        {/* add parent  */}
        {/* add child  */}
        {/* add spouse  */}
      </section>
    </section>
  );
}

export default ProfileDetail;
