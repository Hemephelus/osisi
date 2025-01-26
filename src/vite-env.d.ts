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
  first_name: string;
  last_name: string;
  middle_name: string;
  sex: string;
  status: string;
  date_of_birth: string;
}

type Relationship = {
  from_person_id: string;
  to_person_id: string;
  relationship: string;
};
