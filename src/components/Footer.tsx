// components/Footer.tsx

import { Container } from "./Container";
import { Link } from "@/components/ui/link";

function Footer() {
  return (
    <footer className="block w-full border-solid border-t-3 bg-foreground border-stone-200 text-background">
      <Container>
        <nav aria-label="Legal information" className="flex flex-wrap gap-x-6">
          <Link href="/imprint" variant="background">
            Impressum
          </Link>
          <Link href="/privacy" variant="background">
            Privacy
          </Link>
        </nav>
        <p>&copy; 2026 Phil-Alexander Hofmann</p>
      </Container>
    </footer>
  );
}

export { Footer };
