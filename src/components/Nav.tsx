// components/Nav.tsx

"use client";

import { useState } from "react";

// Components
import { Menu } from "@/components/Menu";
import { NavButton } from "@/components/ui/navButton";

// Media
import { Menu as MenuIcon } from "lucide-react";

function Nav() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible((visible) => !visible);
  };

  const closeMenu = () => {
    setMenuVisible(false);
  };

  return (
    <nav aria-label="Primary navigation" className="min-w-0">
      <NavButton
        type="button"
        onClick={toggleMenu}
        className="inline-flex items-center justify-center md:hidden"
        aria-label={menuVisible ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuVisible}
        aria-controls="primary-navigation"
      >
        <MenuIcon className="h-9 w-9" aria-hidden="true" />
      </NavButton>
      <Menu isVisible={menuVisible} closeMenu={closeMenu} />
    </nav>
  );
}

export { Nav };
