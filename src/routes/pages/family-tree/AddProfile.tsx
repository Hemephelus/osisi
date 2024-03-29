import { useEffect, useState } from "react";
import usePostRequest from "@hooks/usePostRequest";
import { generateId } from "@utils/generate";
import { useOsisiContext } from "@context/useOsisiContext";
import { useNavigate, useSearchParams } from "react-router-dom";

interface Profile {
  first_name: "";
  middle_name: "";
  last_name: "";
  sex: "";
  status: "";
  date_of_birth: "";
  title: "";
  id: "";
}

function AddProfile() {
  const { OSISI_URL } = useOsisiContext();
  const initialProfile = {
    first_name: "",
    middle_name: "",
    last_name: "",
    sex: "",
    status: "",
    date_of_birth: "",
    title: "",
    id: generateId(),
  };

  const navigate = useNavigate();
  let [searchParams] = useSearchParams();
  let [referer_id, relationship] = [
    searchParams.get("referer_id"),
    searchParams.get("relationship"),
  ];
  const [profile, setProfile] = useState(initialProfile);
  const [response, isLoading, error, postRequest] = usePostRequest(OSISI_URL, {
    api_function: "profile",
    payload: {
      profile,
      referer_id: `${referer_id}` || "null",
      relationship: `${relationship}` || "self",
    },
  });

  useEffect(() => {
    if (response) {
      //  Navigate to different page.
      navigate("/family-tree/detail?id=" + profile.id);
    }
  }, [response]);

  function updateProfile(value: string, input: keyof Profile): void {
    if (typeof value === "string") {
      let newProfile = { ...profile };
      newProfile[input] = value;
      setProfile(newProfile);
    } else {
      console.warn(
        `Invalid value type for profile property "${input}": ${typeof value}`
      );
    }
  }

  function uploadProfile() {
    if (typeof postRequest === "function") {
      postRequest();
    }
  }

  return (
    <div className="sec-font ">
      
      <form
        action=""
        className=" md:px-[15%] py-[5%] flex gap-8 flex-col my-20 md:my-[5%]"
        onSubmit={(e) => {
          e.preventDefault();
          uploadProfile();
        }}
      >
        <p>
      The Osisi Project aims to keep an ever growing record of family members. <br /> <br /> This form makes it easy to add and connect family members, preserving your shared history for generations to come.
      </p>
        <section className=" flex flex-wrap gap-4">
        <div>
            <label htmlFor="title" className="text-sm">
              Title
            </label>
            <br />
            <input
              type="text"
              id="title"
              value={profile.title}
              className="bg-transparent border-b outline-none"
              onChange={(e) => {
                updateProfile(e.target.value, "title");
              }}
            />
          </div>
          <div>
            <label htmlFor="first_name" className="text-sm">
              First Name*
            </label>
            <br />
            <input
              type="text"
              id="first_name"
              value={profile.first_name}
              className="bg-transparent border-b outline-none"
              onChange={(e) => {
                updateProfile(e.target.value, "first_name");
              }}
              required
            />
          </div>
          
          <div>
            <label htmlFor="middle_name" className="text-sm">
              Middle Name
            </label>
            <br />
            <input
              type="text"
              id="middle_name"
              value={profile.middle_name}
              className="bg-transparent border-b outline-none"
              onChange={(e) => {
                updateProfile(e.target.value, "middle_name");
              }}
            />
          </div>
          <div>
            <label htmlFor="last_name" className="text-sm">
              Last Name
            </label>
            <br />
            <input
              type="text"
              id="last_name"
              value={profile.last_name}
              className="bg-transparent border-b outline-none"
              onChange={(e) => {
                updateProfile(e.target.value, "last_name");
              }}
              
            />
          </div>
        </section>

        <section>
          <p className="text-sm">Sex*</p>
          <div className="flex gap-4">
            <div>
              <input
                type="radio"
                id="male"
                name="sex"
                value="male"
                onChange={(e) => {
                  updateProfile(e.target.value, "sex");
                }}
                required
              />{" "}
              <label htmlFor="male">Male</label>
            </div>
            <div>
              <input
                type="radio"
                id="female"
                name="sex"
                value="female"
                onChange={(e) => {
                  updateProfile(e.target.value, "sex");
                }}
                required
              />{" "}
              <label htmlFor="female">Female</label>
            </div>
          </div>
        </section>

        <section>
          <p className="text-sm">Status*</p>
          <div className="flex gap-4">
            <div>
              <input
                type="radio"
                id="living"
                name="status"
                value="living"
                onChange={(e) => {
                  updateProfile(e.target.value, "status");
                }}
                required
              />{" "}
              <label htmlFor="living">Living</label>
            </div>
            <div>
              <input
                type="radio"
                id="deceased"
                name="status"
                value="deceased"
                onChange={(e) => {
                  updateProfile(e.target.value, "status");
                }}
                required
              />{" "}
              <label htmlFor="deceased">Deceased</label>
            </div>
          </div>
        </section>

        <section className="">
          <label htmlFor="date_of_birth" className="text-sm">
            Date of Birth
          </label>
          <br />
          <input
            type="date"
            id="date_of_birth"
            value={profile.date_of_birth}
            className="bg-transparent border-b outline-none"
            onChange={(e) => {
              updateProfile(e.target.value, "date_of_birth");
            }}
          />
        </section>
        <button className=" w-fit px-4 py-2 bg-[#FFFDD0] text-[#691540] hover:border hover:bg-[#691540] hover:text-[#FFFDD0] duration-300">
          Submit
        </button>
        {isLoading ? (
          <p className="">uploading profile...</p>
        ) : error ? (
          <p className="">An error occurred</p>
        ) : (
          <></>
        )}
      </form>
    </div>
  );
}
// osisi/family-tree/add?referer_id=null&relationship=self
// osisi/family-tree/update?id=
// osisi/family-tree/view?id=
export default AddProfile;
