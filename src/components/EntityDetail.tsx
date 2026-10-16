import type Entity from "@/models/entity";
import { Card } from "@/components/Card/Card";
import { Container } from "@/components/Container";
import { Link } from "@/components/ui/link";
import { Section } from "@/components/ui/section";

interface EntityDetailProps {
  entity: Entity;
  page: "/publication" | "/preprint";
  backLinkText: string;
}

export function EntityDetail({ entity, page, backLinkText }: EntityDetailProps) {
  return (
    <main className="block w-full bg-gray-100">
      <Section id={page.slice(1)} variant="gray">
        <Container>
          <div>
            <Link href={page}>{backLinkText}</Link>
            <Card entity={entity} mode="detail" />
          </div>
        </Container>
      </Section>
    </main>
  );
}
