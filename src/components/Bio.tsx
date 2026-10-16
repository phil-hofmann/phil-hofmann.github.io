// components/Bio.tsx

import { assetPath } from "@/lib/paths";

import Image from "next/image";

function Bio() {
  const interests = [
    "Numerical Analysis",
    "Approximation Theory and Algorithms",
    "Algorithmic Complexity and Performance",
    "Scientific Computing",
    "Inverse Problems",
    "Optimization",
  ];

  const infoItems = [
    {
      icon: "/icons/pin.png",
      alt: "Residence",
      text: "Berlin, Germany",
    },
    {
      icon: "/icons/work.png",
      alt: "Work",
      text: "PhD Candidate Mathematics",
    },
    {
      icon: "/icons/edu.png",
      alt: "Education",
      text: (
        <>
          M. Sc. Business Mathematics (Diploma) <br />
          B. Sc. Computer Science
        </>
      ),
    },
  ];

  const socialLinks = [
    {
      href: "https://github.com/phil-hofmann",
      icon: "/icons/github.png",
      alt: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/phil-alexander-hofmann-475285290/",
      icon: "/icons/linkedin.png",
      alt: "LinkedIn",
    },
    {
      href: "https://orcid.org/0009-0003-3036-8180",
      icon: "/icons/orcid.svg",
      alt: "ORCID",
    },
  ];

  return (
    <article
      aria-labelledby="profile-name"
      className="bio grid items-start gap-9 px-3 py-8 sm:px-5 sm:py-10 md:grid-cols-[224px_minmax(0,1fr)] md:gap-12"
    >
      <Image
        className="mx-auto mt-1 h-52 w-52 rounded-full border-3 border-solid border-gray-300 object-cover"
        src={assetPath("/bio.jpeg")}
        height={256}
        width={256}
        alt="Portrait of Phil-Alexander Hofmann"
        priority
      />
      <div className="min-w-0">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h1 id="profile-name" className="m-0 text-2xl normal-case tracking-normal">
            Phil-Alexander Hofmann
          </h1>
        </div>
        <ul className="mt-8 space-y-5">
          {infoItems.map(({ icon, alt, text }) => (
            <li key={alt} className="flex items-start gap-3 text-base leading-7">
              <Image
                className="mt-1 shrink-0"
                width={20}
                height={20}
                src={assetPath(icon)}
                alt={alt}
              />
              <span>{text}</span>
            </li>
          ))}
        </ul>
        <section aria-labelledby="interests-heading" className="mt-9">
          <h2 id="interests-heading" className="mb-4 mt-0 text-lg tracking-normal">
            Interests
          </h2>
          <ul className="grid list-disc gap-x-8 gap-y-2 pl-5 text-base leading-7 sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-3">
            {interests.map((interest) => (
              <li key={interest}>{interest}</li>
            ))}
          </ul>
        </section>
        <nav aria-label="Social profiles" className="mt-9 flex gap-6">
          {socialLinks.map(({ href, icon, alt }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={alt}
              className="inline-flex border-0 no-underline hover:no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
            >
              <Image width={24} height={24} src={assetPath(icon)} alt="" />
            </a>
          ))}
        </nav>
      </div>
    </article>
  );
}

export { Bio };
