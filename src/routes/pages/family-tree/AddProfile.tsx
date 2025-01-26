import { useEffect, useState } from "react";
import usePostRequest from "@/hooks/usePostRequest";
import { generateId } from "@/utils/generate";
import { useNavigate, useSearchParams } from "react-router-dom";
import { OSISI_URL } from "@/constants";
import { Dialog } from "@headlessui/react";

function AddProfile() {
  const initialProfile = {
    full_name: "",
    sex: "",
    status: "",
    year_of_birth: "",
    title: "",
    id: generateId(),
  };

  const navigate = useNavigate();
  let [searchParams] = useSearchParams();
  let [referer_id, relationship] = [
    searchParams.get("id"),
    searchParams.get("relationship"),
  ];
  const [profile, setProfile] = useState(initialProfile);
  let [isOpen, setIsOpen] = useState(true);
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
      navigate("/family?id=" + profile.id);
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
    <>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <Dialog.Panel className="px-[5%] py-[5%]  font-sora  bg-sec shadow-2xl border  text-center m-[5%] text-pri max-h-[500px] overflow-y-auto">
     
              <form
                action=""
                className=" flex gap-12 flex-col "
                onSubmit={(e) => {
                  e.preventDefault();
                  uploadProfile();
                }}
              >
                <p className="text-left text-sm md:text-lg">
                  Please fill out the form below to add a new family member to your family tree. Ensure all required fields are completed accurately.
                </p>
                <section className=" flex flex-wrap gap-4">
                  <div className="flex flex-col items-start">
                    <label htmlFor="title" className="text-sm">
                      Title
                    </label>
                    <input
                      type="text"
                      id="title"
                      placeholder="E.g Lolo"
                      value={profile.title}
                      className="bg-transparent border-b  border-acc outline-none"
                      onChange={(e) => {
                        updateProfile(e.target.value, "title");
                      }}
                    />
                  </div>
                  <div className="flex flex-col items-start">
                    <label htmlFor="first_name" className="text-sm text-left">
                      Full Name*
                    </label>
                    <input
                      type="text"
                      id="full_name"
                      value={profile.full_name}
                      placeholder="E.g Chinelo"
                      className="bg-transparent border-b border-acc outline-none"
                      onChange={(e) => {
                        updateProfile(e.target.value, "full_name");
                      }}
                      
                    />
                  </div>
                </section>
                <section >
                  <p className="text-sm text-left pb-2">Sex*</p>
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
                  <p className="text-sm text-left pb-2">Status*</p>
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
                <section className="flex items-start flex-col ">
                  <label htmlFor="date_of_birth" className="text-sm text-left pb-2">
                    Year of Birth
                  </label>
                  <input
                    type="text"
                    id="date_of_birth"
                    placeholder="E.g 1999"
                    value={profile.year_of_birth}
                    className="bg-transparent border-b outline-none"
                    onChange={(e) => {
                      updateProfile(e.target.value, "year_of_birth");
                    }}
                  />
                </section>
               <section className="flex justify-between">
                <div>
                <button className="p-2 hover:text-pri text-sec bg-acc hover:bg-sec border border-acc/60 duration-300">
                  Submit
                </button>
                {isLoading ? (
                  <p className="">uploading profile...</p>
                ) : error ? (
                  <p className="">An error occurred</p>
                ) : (
                  <></>
                )}
                </div>
                <button onClick={() => setIsOpen(false)} className='text-acc'>Close</button>

               </section>
              </form>
      
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}

export default AddProfile;
