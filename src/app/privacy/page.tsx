import type { Metadata } from "next";
import { CenterHeading } from "@/components/CenterHeading";
import { Container } from "@/components/Container";
import { LegalContent } from "@/components/LegalContent";
import { OperatorAddress } from "@/components/OperatorAddress";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Privacy Policy | Phil Hofmann",
  description: "Privacy information for Phil-Alexander Hofmann's personal academic website.",
};

export default function PrivacyPage() {
  return (
    <main className="block w-full bg-gray-100">
      <Section id="privacy" variant="gray">
        <Container>
          <LegalContent>
            <CenterHeading>Privacy Policy</CenterHeading>

            <h2>Controller</h2>
            <OperatorAddress />
            <p>
              Privacy requests: use this address or the “Let&apos;s Talk” email
              link in the header.
            </p>

            <h2>Hosting and cookies</h2>
            <p>
              GitHub Pages (GitHub, Inc., USA) hosts this website. GitHub receives
              technical request data, including your IP address, requested page,
              time and browser information, and logs IP addresses for security.
              This data is necessary to serve the website. The legal basis is my
              legitimate interest in providing and protecting it (Article
              6(1)(f) GDPR).
            </p>
            <p>
              GitHub and its infrastructure providers process data, including in
              the USA. Retention depends on processing purposes and legal
              obligations. GitHub&apos;s{" "}
              <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement">
                privacy statement
              </a>{" "}
              explains transfer safeguards (EU–US Data Privacy Framework and
              standard contractual clauses). See also{" "}
              <a href="https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages#data-collection">
                GitHub Pages data collection
              </a>.
            </p>

            <p>
              The application uses no analytics, tracking cookies or browser
              storage. Fonts and other resources are served with the website.
              External websites are linked, not embedded, and have their own
              privacy policies.
            </p>

            <h2>Email</h2>
            <p>
              If you email me, I use your sender details and message to reply.
              My mailbox is hosted by STRATO GmbH, Germany. The legal basis is
              Article 6(1)(f) GDPR: my legitimate interest in handling academic
              inquiries. Messages are kept as needed for the inquiry and
              follow-up, plus applicable legal retention periods. Providing
              information by email is voluntary.
            </p>
            <p>
              Further information: STRATO&apos;s{" "}
              <a href="https://www.strato.de/datenschutz/">privacy notice</a>.
            </p>

            <h2>Your rights</h2>
            <p>
              Subject to legal conditions, you may request access, correction,
              erasure, restriction and portability (Articles 15–20 GDPR).
            </p>
            <p>
              <strong>You may object</strong> to processing based on legitimate
              interests on grounds relating to your particular situation
              (Article 21 GDPR). Contact me as above.
            </p>
            <p>
              You may complain to a supervisory authority, including the{" "}
              <a href="https://www.datenschutz-berlin.de/buergerinnen-und-buerger/beschwerde/einreichen-einer-beschwerde">
                Berlin Commissioner for Data Protection
              </a>.
              {" "}I do not use your data for automated decisions or profiling.
            </p>
          </LegalContent>
        </Container>
      </Section>
    </main>
  );
}
