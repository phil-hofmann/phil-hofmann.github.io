import { ListingSection } from "@/components/ListingSection";
import preprints from "@/data/preprints";

export default function PreprintsPage() {
  return (
    <main className="block w-full bg-gray-100">
      <ListingSection id="preprints" title="Preprints" entities={preprints} />
    </main>
  );
}
