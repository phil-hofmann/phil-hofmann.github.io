import { Bio } from "@/components/Bio";
import { Container } from "@/components/Container";
import { Section } from "@/components/ui/section";

export default function BioPage() {
  return (
    <main className="block w-full bg-gray-100">
      <Section id="bio" variant="gray" aria-labelledby="profile-name">
        <Container>
          <Bio />
        </Container>
      </Section>
    </main>
  );
}
