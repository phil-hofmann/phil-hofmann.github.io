import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/Container";
import { CenterHeading } from "@/components/CenterHeading";
import { LegalContent } from "@/components/LegalContent";
import { OperatorAddress } from "@/components/OperatorAddress";

export const metadata: Metadata = {
  title: "Imprint | Phil Hofmann",
  description: "Legal notice for Phil-Alexander Hofmann's personal academic website.",
};

export default function ImprintPage() {
  return (
    <main className="block w-full bg-gray-100">
      <Section id="imprint" variant="gray">
        <Container>
          <LegalContent>
            <CenterHeading>Impressum</CenterHeading>
            <p>
              Information pursuant to{" "}
              <a href="https://www.gesetze-bayern.de/Content/Document/MStV-18">
                § 18(1) MStV
              </a>
              .
            </p>
            <OperatorAddress />
            <h2>Image credits</h2>
            <ul className="list-disc list-outside pl-5 space-y-2">
              <li>
                <a
                  href="https://www.iconfinder.com/icons/10219188/business_briefcase_job_work_suitcase_bag_office_icon"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  Work icon
                </a>{" "}
                by{" "}
                <a
                  href="https://www.iconfinder.com/erix-subyarko"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  erix subyarko
                </a>{" "}
                under the{" "}
                <a
                  href="https://creativecommons.org/licenses/by/4.0/"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  CC BY 4.0
                </a>
              </li>
              <li>
                <a
                  href="https://www.iconfinder.com/icons/9035080/pin_icon"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  Pin icon
                </a>{" "}
                by{" "}
                <a
                  href="https://www.iconfinder.com/ionicons-icons"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  Ionicons Icons
                </a>{" "}
                under the{" "}
                <a
                  href="https://opensource.org/license/MIT"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  MIT License
                </a>
              </li>
              <li>
                <a
                  href="https://www.iconfinder.com/icons/2205242/college_course_degree_education_university_icon"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  Education icon
                </a>{" "}
                by{" "}
                <a
                  href="https://www.iconfinder.com/becris"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  Becris
                </a>{" "}
              </li>
              <li>
                <a
                  href="https://info.orcid.org/brand-guidelines/"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  ORCID iD icon
                </a>{" "}
                by ORCID, Inc. ORCID and the iD icon are trademarks of ORCID, Inc.
              </li>
              <li>
                <a
                  href="https://www.iconfinder.com/icons/367593/linkedin_business_network_social_icon"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  LinkedIn icon
                </a>{" "}
                by{" "}
                <a
                  href="https://www.iconfinder.com/milan.kohut"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  ProGlyphs
                </a>{" "}
              </li>
              <li>
                <a
                  href="https://www.iconfinder.com/icons/1378045/circle_git_github_hovytech_media_repository_social_icon"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  Circle, git, github icon
                </a>{" "}
                by{" "}
                <a
                  href="https://www.iconfinder.com/AlexHovy"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  Alex Hovy
                </a>{" "}
                under the{" "}
                <a
                  href="https://creativecommons.org/licenses/by/3.0/"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  CC BY 3.0
                </a>
              </li>
              <li>
                Software project logos:{" "}
                <a
                  href="https://phil-hofmann.github.io/lpFun/"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  lpFun
                </a>{" "}
                and{" "}
                <a
                  href="https://phil-hofmann.github.io/PyLIT/"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  PyLIT
                </a>
                .
              </li>
            </ul>
          </LegalContent>
        </Container>
      </Section>
    </main>
  );
}
