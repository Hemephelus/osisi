/// <reference types="vite/client" />

type FamilyNode = {
  name: string;
  nodes?: FamilyNode[];
  id?: string;
  content?: Profile;
  type?: string;
};

interface Profile {
  id: string;
  full_name: string;
  sex: string;
  status: string;
  year_of_birth: string;
  title?: string;
}

type Relationship = {
  from_person_id: string;
  to_person_id: string;
  relationship: string;
};
