export function getProfile(
  relationshipName: string,
  profiles: Profile[] = [],
  relationships: Relationship[] = [],
  nodeId: string
) {
  const currentRelationships = relationships.filter(
    (relationship) =>
      relationship.relationship === relationshipName &&
      relationship.to_person_id === nodeId
  );

  const selectedProfiles = currentRelationships.map((currentRelationship) => {
    const [profile] = profiles.filter(
        (profile) => profile.id === currentRelationship.from_person_id
      )

    return {
      name: profile.full_name,
      id: currentRelationship.from_person_id,
      type:"relationship",
      nodes: [
        {
          name: "Profiles",
          content: profile
        },
      ],
    };
  });

  return selectedProfiles;
}
