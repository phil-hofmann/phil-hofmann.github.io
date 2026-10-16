import type Entity from "@/models/entity";
import { CardList } from "@/components/CardList";
import { CenterHeading } from "@/components/CenterHeading";
import { Container } from "@/components/Container";
import { Section } from "@/components/ui/section";

interface ListingSectionProps {
  id: string;
  title: string;
  entities: Entity[];
  className?: string;
}

export function ListingSection({ id, title, entities, className }: ListingSectionProps) {
  return (
    <Section id={id} variant="gray">
      <Container className={className}>
        <CenterHeading>{title}</CenterHeading>
        <CardList entities={entities} />
      </Container>
    </Section>
  );
}
