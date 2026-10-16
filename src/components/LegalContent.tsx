import type { ReactNode } from "react";

function LegalContent({ children }: { children: ReactNode }) {
  return (
    <article className="mx-auto max-w-3xl px-3 leading-7 sm:px-5 [&_a]:underline [&_a]:decoration-[1px] [&_a]:underline-offset-4 [&_a:focus-visible]:outline [&_a:focus-visible]:outline-2 [&_a:focus-visible]:outline-offset-4 [&_h2]:mb-3 [&_h2]:mt-8 [&_h2]:tracking-normal [&_p]:my-3">
      {children}
    </article>
  );
}

export { LegalContent };
