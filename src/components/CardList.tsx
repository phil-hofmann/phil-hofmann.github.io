import type Entity from "@/models/entity";
import { Card } from "@/components/Card/Card";

export function CardList({ entities }: { entities: Entity[] }) {
  return (
    <div className="listing-list">
      {entities.map((entity) => (
        <Card key={entity.id} entity={entity} mode="default" />
      ))}
    </div>
  );
}
