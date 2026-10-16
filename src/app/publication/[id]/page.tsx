import { notFound } from "next/navigation";
import { EntityDetail } from "@/components/EntityDetail";

// Data
import PublicationsEntities from "@/data/publications";

export const dynamicParams = false;

export function generateStaticParams() {
  return PublicationsEntities.map(({ id }) => ({ id }));
}

interface PublicationDetailProps {
  params: Promise<{
    id: string;
  }>;
}

async function PublicationDetail({ params }: PublicationDetailProps) {
  const { id } = await params;
  const publicationEntity = PublicationsEntities.find((entity) => entity.id === id);

  if (!publicationEntity) {
    notFound();
  }

  return (
    <EntityDetail
      page="/publication"
      entity={publicationEntity}
      backLinkText="‹ Publications"
    />
  );
}

export default PublicationDetail;
