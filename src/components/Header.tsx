// components/Header.tsx

import { Nav } from "@/components/Nav";
import { Container } from "@/components/Container";
import { ContactLink } from "@/components/ContactLink";

function Header() {
  return (
    <header className="block w-full border-b-3 border-solid border-primary bg-foreground">
      <Container className="flex items-center justify-between gap-4">
        <Nav />
        <ContactLink />
      </Container>
    </header>
  );
}

export { Header };
