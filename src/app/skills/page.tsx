import { Column, Heading, Meta, Schema } from "@once-ui-system/core";
import { baseURL, person, skills } from "@/resources";
import { SkillsTabs } from "@/components/skills/SkillsTabs";

export async function generateMetadata() {
  return Meta.generate({
    title: skills.title,
    description: skills.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(skills.title)}`,
    path: skills.path,
  });
}

export default function SkillsPage() {  // eslint-disable-line @typescript-eslint/no-unused-vars1
  return (
    <Column maxWidth="m" gap="l">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={skills.title}
        description={skills.description}
        path={skills.path}
        image={`/api/og/generate?title=${encodeURIComponent(skills.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${skills.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      <Heading as="h1" variant="display-strong-s" marginBottom="m">{skills.title}</Heading>
      <SkillsTabs />
    </Column>
  );
}


