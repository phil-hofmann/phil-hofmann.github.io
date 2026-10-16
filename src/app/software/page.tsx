import { ListingSection } from "@/components/ListingSection";
import software from "@/data/software";

export default function SoftwarePage() {
  return (
    <main className="block w-full bg-gray-100">
      <ListingSection
        id="software"
        title="Software"
        entities={software}
        className="py-8 sm:py-10"
      />
    </main>
  );
}
