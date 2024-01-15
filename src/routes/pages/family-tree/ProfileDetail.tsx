import React, { useEffect } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { CiEdit } from "react-icons/ci";
import useGetRequest from "@hooks/useGetRequest";
import { useOsisiContext } from "@context/useOsisiContext";

type YourDataType = {
  // Define the structure of your data here
  // For example:
  id: number;
  name: string;
  // ... other properties
} | null;

function ProfileDetail() {
  let [searchParams] = useSearchParams();
  const { OSISI_URL } = useOsisiContext();
  let id = searchParams.get("id");

  let [data, isLoading, error] = useGetRequest(`${OSISI_URL}?id=${id}`);
  
  useEffect(() => {
    if (data) {
      console.log(data.name);
    }
  }, [data]);
  // const { OSISI_URL } = useOsisiContext();
  // const initialProfile = {
  //   first_name: "",
  //   middle_name: "",
  //   last_name: "",
  //   sex: "",
  //   status: "",
  //   date_of_birth: "",
  //   id: generateId()
  // };

  // const navigate = useNavigate();
  // let { referer_id, relationship } = useParams();
  // const [profile, setProfile] = useState(initialProfile);
  // const [response, isLoading, error, postRequest] = usePostRequest(OSISI_URL, {
  //   api_function: "profile",
  //   payload: {
  //     profile,
  //     referer_id:`${referer_id}`||'null',
  //     relationship:`${relationship}`||'self',
  //   }
  // });

  // useEffect(() => {
  //   if (response) {
  //     //  Navigate to different page.
  //     navigate("/family-tree/detail?id="+profile.id);
  //   }
  // }, [response]);

  // function updateProfile(value: string, input: keyof Profile): void {
  //   if (typeof value === "string") {
  //     let newProfile = { ...profile };
  //     newProfile[input] = value;
  //     setProfile(newProfile);
  //   } else {
  //     console.warn(
  //       `Invalid value type for profile property "${input}": ${typeof value}`
  //     );
  //   }
  // }

  // function uploadProfile() {
  //   if (typeof postRequest === "function") {
  //     postRequest();
  //   }
  // }
  return (
    <section className="px-[5%] py-[5%] flex gap-8 flex-col sec-font  bg-[#00000010] shadow-2xl border">
      <section className=" flex justify-center items-center flex-col gap-4 capitalize w-full">
        <figure className="h-[100px] w-[100px] rounded-full bg-[#FFFDD0] text-[#691540] flex items-center justify-center text-5xl pri-font ">
          N
        </figure>
        <Link to={"/"} title="edit">
          <CiEdit size={24} />
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

  return (
    <section className="px-[5%] py-[5%] flex gap-8 flex-col sec-font  bg-[#00000010] shadow-2xl border">
      <section className=" flex justify-center items-center flex-col gap-4 capitalize w-full">
        <figure className="h-[100px] w-[100px] rounded-full bg-[#FFFDD0] text-[#691540] flex items-center justify-center text-5xl pri-font ">
          N
        </figure>
        <Link to={"/"} title="edit">
          <CiEdit size={24} />
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
