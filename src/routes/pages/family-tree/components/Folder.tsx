import { getProfile } from "@/utils/generateNodes";
import {
  ChevronRightIcon,
  // DocumentIcon,s
  FolderIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";
import ProfilePopUp from "./ProfilePopUp";

export default function Folder({
  node,
  fam,
  profiles,
  relationships,
}: {
  node: FamilyNode;
  fam?: FamilyNode;
  profiles: Profile[];
  relationships: Relationship[];
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [newNode, setNewNode] = useState<FamilyNode | undefined>(undefined);

  function onOpenFolder() {
    if (!isOpen) {
      const [profile] = profiles.filter((profile) => profile.id === node.id);
      let family: FamilyNode;

      if (node.type === "relationship") {
        family = {
          name: profile.first_name,
          id: profile.id,
          nodes: [
            {
              name: "Profile",
              content: profiles?.filter((p) => p.id === profile.id)[0],
            },
            {
              name: "Parents",
              id: profile.id,
              type: "person",
              nodes: getProfile("parent", profiles, relationships, profile.id),
            },
            {
              name: "Children",
              id: profile.id,
              type: "person",
              nodes: getProfile("child", profiles, relationships, profile.id),
            },
            {
              name: "Spouses",
              id: profile.id,
              type: "person",
              nodes: getProfile("spouse", profiles, relationships, profile.id),
            },
          ],
        };
        setNewNode(family);
      } else if (node.type === "person") {
        setNewNode(node);
      }
    }
    setIsOpen(!isOpen);
  }

  return (
    <li className="my-1.5" key={node.name}>
      <span className="flex items-center gap-1.5">
        {node?.nodes ? (
          <button className="flex items-center gap-1.5"  onClick={onOpenFolder}>
            <ChevronRightIcon
              className={`size-4 text-sec/50 ${
                isOpen ? "rotate-90" : "rotate-0"
              } duration-300`}
            />
            <FolderIcon className="size-6 text-sec" />
            {node?.name}
          </button>
        ) : (
      
           <ProfilePopUp profile={node.content!} />
    
        )}
        {/* {node?.name} */}
      </span>

      {isOpen && (
        <ul className="pl-6">
          {newNode?.nodes?.map((folder, index) => (
            <Folder
              node={folder}
              key={folder.id}
              fam={fam?.nodes?.[index]}
              profiles={profiles}
              relationships={relationships}
            />
          ))}
        </ul>
      )}
    </li>
  );
}
