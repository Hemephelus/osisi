import useGetRequest from "@/hooks/useGetRequest";
import { useSearchParams } from "react-router-dom";
import FamilyTreeSkeleton from "../components/FamilyTreeSkeleton";
import { OSISI_URL } from "@/constants";
import { useEffect, useState } from "react";
import Folder from "../components/Folder";
import AddProfile from "../AddProfile";

function ViewFamilyPage() {
  let [searchParams] = useSearchParams();
  const id = searchParams.get("id") || "18d1158c551-309";
  const mode = searchParams.get("mode") || "view";
  // const relationship = searchParams.get("relationship") || "";
  let [data, isLoading, error] = useGetRequest(
    `${OSISI_URL}?id=${id}&request_type=get_family`
  );
  const [profiles, setProfiles] = useState<Profile[] | undefined>(undefined);
  const [rootProfile, setRootProfile] = useState<Profile | undefined>(
    undefined
  );
  const [relationships, setRelationships] = useState<
    Relationship[] | undefined
  >(undefined);
  const family: FamilyNode[] = [
    {
      name: rootProfile?.full_name || "",
      id: rootProfile?.id,
      type: "relationship",
      nodes: [
        {
          name: "Profile",
          content: profiles?.filter((profile) => profile.id === id)[0],
        },
      ],
    },
  ];
  useEffect(() => {
    if (data) {
      const profiles = data?.data?.profile;
      const [rootProfile] = profiles?.filter(
        (profile: Profile) => profile?.id === id
      );

      const relationships = data?.data?.relationships;

      setRootProfile(rootProfile);
      setProfiles(profiles);
      setRelationships(relationships);
    }
  }, [data]);

  if (isLoading) {
    return <FamilyTreeSkeleton />;
  }

  if (error) {
    return (
      <div className="flex justify-center items-center text-2xl">
        Error: {error.message}
      </div>
    );
  }

  return (
    <div
      className={`h-full w-full flex  overflow-x-auto sec-font text-base`}
    >
      {mode === 'add'? (<AddProfile/>):(<></>)}
      <ul>
        {family.map((folder, index) => (
          <Folder
            node={folder}
            fam={family[index]}
            key={folder.id}
            profiles={profiles || []}
            relationships={relationships || []}
          />
        ))}
      </ul>
    </div>
  );
}

export default ViewFamilyPage;
