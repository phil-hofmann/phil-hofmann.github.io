// components/Menu.tsx

"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

// Components
import NextLink from "next/link";
import { NavButton } from "@/components/ui/navButton";

const menuItems = [
  {
    href: "/",
    sectionPath: "/bio",
    text: "Bio",
  },
  {
    href: "/publication",
    sectionPath: "/publication",
    text: "Publications",
  },
  {
    href: "/preprint",
    sectionPath: "/preprint",
    text: "Preprints",
  },
  {
    href: "/software",
    sectionPath: "/software",
    text: "Software",
  },
];

export interface MenuProps {
  isVisible: boolean;
  closeMenu: () => void;
}

function Menu({ isVisible, closeMenu }: MenuProps) {
  const rawPathname = usePathname() || "/";
  const basePath = (process.env.NEXT_PUBLIC_BASE_PATH || "").replace(/\/+$/, "");
  const pathnameWithoutBasePath =
    basePath &&
    (rawPathname === basePath || rawPathname.startsWith(`${basePath}/`))
      ? rawPathname.slice(basePath.length)
      : rawPathname;
  const pathname = pathnameWithoutBasePath.replace(/\/+$/, "") || "/";

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    if (isVisible) {
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isVisible, closeMenu]);

  return (
    <div
      id="primary-navigation"
      className={cn(
        "fixed inset-0 z-40 overflow-y-auto bg-foreground md:static md:block md:overflow-visible",
        isVisible ? "block" : "hidden"
      )}
    >
      <button
        type="button"
        onClick={closeMenu}
        className="md:hidden absolute top-5 right-3
          px-4 py-1 bg-primary text-foreground rounded"
      >
        Close
      </button>
      <ul className="flex min-h-full flex-col items-center justify-center gap-8 px-6 py-20 md:min-h-0 md:flex-row md:justify-start md:gap-0 md:p-0">
        {menuItems.map((item) => {
          const isActive =
            pathname === item.href ||
            pathname === item.sectionPath ||
            (item.sectionPath !== "/" &&
              pathname.startsWith(`${item.sectionPath}/`));

          return (
            <li key={item.text}>
              <NavButton
                className={cn("text-center lowercase px-3", isActive && "text-primary")}
                asChild
              >
                <NextLink
                  href={item.href}
                  onClick={closeMenu}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.text}
                </NextLink>
              </NavButton>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export { Menu };
