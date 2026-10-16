import { ListingSection } from "@/components/ListingSection";
import publications from "@/data/publications";

export default function PublicationsPage() {
  return (
    <main className="block w-full bg-gray-100">
      <ListingSection id="publications" title="Publications" entities={publications} />
    </main>
  );
}
