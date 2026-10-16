import { notFound } from "next/navigation";
import { EntityDetail } from "@/components/EntityDetail";

// Data
import PreprintsEntities from "@/data/preprints";

export const dynamicParams = false;

export function generateStaticParams() {
  return PreprintsEntities.map(({ id }) => ({ id }));
}

interface PreprintDetailProps {
  params: Promise<{
    id: string;
  }>;
}

async function PreprintDetail({ params }: PreprintDetailProps) {
  const { id } = await params;
  const preprintEntity = PreprintsEntities.find((entity) => entity.id === id);

  if (!preprintEntity) {
    notFound();
  }

  return (
    <EntityDetail
      page="/preprint"
      entity={preprintEntity}
      backLinkText="‹ Preprints"
    />
  );
}

export default PreprintDetail;
