import { useEffect, useState } from "react";
import usePostRequest from "@/hooks/usePostRequest";
import { generateId } from "@/utils/generate";
import { useNavigate, useSearchParams } from "react-router-dom";
import { OSISI_URL } from "@/constants";
import { Dialog } from "@headlessui/react";

function AddProfile() {
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
    <>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <Dialog.Panel className="px-[5%] py-[5%] flex gap-8 flex-col  font-sora  bg-sec shadow-2xl border justify-center items-center text-center m-[5%] text-pri">
            <div className="">
              <form
                action=""
                className=" flex gap-12 flex-col "
                onSubmit={(e) => {
                  e.preventDefault();
                  uploadProfile();
                }}
              >
                <p className="text-left">
                  The Osisi Project preserves family history by making it easy
                  to add and connect family members, creating a growing record
                  for generations to come.
                </p>
                <section className=" flex flex-wrap gap-4">
                  {/* <div>
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
                  </div> */}
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
                    Date of Birth
                  </label>
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
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}
// osisi/family-tree/add?referer_id=null&relationship=self
// osisi/family-tree/update?id=
// osisi/family-tree/view?id=
export default AddProfile;
